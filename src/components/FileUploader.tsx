'use client';

import React, { useState } from 'react';
import { useChunkUpload } from '@/hooks/useChunkUpload';

export function FileUploader() {
  const { uploadFile, isUploading, progress, error } = useChunkUpload();
  const [completedFile, setCompletedFile] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setCompletedFile(null);
    
    await uploadFile(file, {
      onComplete: (fileName) => {
        setCompletedFile(fileName);
        alert('Upload completed successfully!');
      },
      onError: (err) => {
        console.error(err);
      }
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800">Large File Upload</h2>
      <p className="text-sm text-gray-500">
        Files are uploaded in 1MB chunks to bypass server limits.
      </p>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Select File
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {isUploading && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Uploading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
          Error: {error}
        </div>
      )}

      {completedFile && (
        <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">
          Upload complete: {completedFile}
        </div>
      )}
    </div>
  );
}
