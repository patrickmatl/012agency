import { NextResponse } from 'next/server';
import { getAllPostsMetaFromIndex, getRandomPostsFromIndex } from '@/lib/blog-index';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const random = searchParams.get('random');
  const count = parseInt(searchParams.get('count') || '3');

  const indexedPosts = await getAllPostsMetaFromIndex();
  
  if (indexedPosts) {
    if (random === 'true') {
      const posts = await getRandomPostsFromIndex(count);
      return NextResponse.json(posts);
    }
    return NextResponse.json(indexedPosts);
  }

  // If index is missing, return error or empty array
  // We cannot fallback to scanning files because it bloats the function bundle size > 50MB
  console.error('Blog index missing. Run `node scripts/generate-blog-index.js` to generate it.');
  return NextResponse.json({ error: 'Blog index not found' }, { status: 500 });
}
