import { useState } from 'react';

interface UploadOptions {
  chunkSize?: number; // Size of each chunk in bytes (default: 1MB)
  onProgress?: (progress: number) => void;
  onComplete?: (filename: string) => void;
  onError?: (error: Error) => void;
}

export function useChunkUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File, options: UploadOptions = {}) => {
    setIsUploading(true);
    setProgress(0);
    setError(null);

    const CHUNK_SIZE = options.chunkSize || 1024 * 1024; // 1MB default
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    const fileName = `${Date.now()}-${file.name}`; // Unique filename

    try {
      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const start = chunkIndex * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, file.size);
        const chunk = file.slice(start, end);

        const formData = new FormData();
        formData.append('chunk', chunk);
        formData.append('fileName', fileName);
        formData.append('chunkIndex', chunkIndex.toString());
        formData.append('totalChunks', totalChunks.toString());

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Upload failed: ${response.statusText} - ${errorText}`);
        }

        const currentProgress = Math.round(((chunkIndex + 1) / totalChunks) * 100);
        setProgress(currentProgress);
        options.onProgress?.(currentProgress);
      }

      options.onComplete?.(fileName);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown upload error';
      setError(errorMessage);
      options.onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, progress, error };
}
