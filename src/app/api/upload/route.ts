import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const chunk = formData.get('chunk') as Blob | null;
    const fileName = formData.get('fileName') as string | null;
    const chunkIndexStr = formData.get('chunkIndex') as string | null;
    const totalChunksStr = formData.get('totalChunks') as string | null;

    if (!chunk || !fileName || !chunkIndexStr || !totalChunksStr) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const chunkIndex = parseInt(chunkIndexStr);
    const totalChunks = parseInt(totalChunksStr);

    const buffer = Buffer.from(await chunk.arrayBuffer());
    
    // Use OS temp directory for temporary storage
    const tempDir = os.tmpdir();
    const uploadDir = path.join(tempDir, 'uploads');
    
    // Ensure upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    const chunkPath = path.join(uploadDir, `${fileName}.part${chunkIndex}`);
    await fs.writeFile(chunkPath, buffer);

    // If this is the last chunk, merge all parts
    if (chunkIndex === totalChunks - 1) {
      const finalFilePath = path.join(uploadDir, fileName);
      
      // Merge chunks sequentially
      for (let i = 0; i < totalChunks; i++) {
        const partPath = path.join(uploadDir, `${fileName}.part${i}`);
        // Check if part exists (handling potential race conditions or missing parts)
        try {
          const partBuffer = await fs.readFile(partPath);
          await fs.appendFile(finalFilePath, partBuffer);
          await fs.unlink(partPath); // Clean up part
        } catch (error) {
          console.error(`Error processing part ${i}:`, error);
          return NextResponse.json({ error: `Missing part ${i}` }, { status: 500 });
        }
      }

      // Here you would typically upload the final file to permanent storage (S3, Blob, etc.)
      
      return NextResponse.json({ 
        message: 'Upload complete', 
        path: finalFilePath,
        fileName: fileName
      });
    }

    return NextResponse.json({ message: 'Chunk received', chunkIndex });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
