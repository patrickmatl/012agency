import { NextResponse } from 'next/server';
import { getAllPostsMeta, getRandomPosts } from '@/lib/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const random = searchParams.get('random');
  const count = parseInt(searchParams.get('count') || '3');

  if (random === 'true') {
    const posts = await getRandomPosts(count);
    return NextResponse.json(posts);
  }

  const posts = await getAllPostsMeta();
  return NextResponse.json(posts);
}
