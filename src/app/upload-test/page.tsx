import { FileUploader } from '@/components/FileUploader';

export default function UploadTestPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Chunked Upload Demo</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        This page demonstrates uploading large files in chunks to bypass server limits.
        The file is split into 1MB pieces, uploaded sequentially, and reassembled on the server.
      </p>
      <FileUploader />
    </div>
  );
}
