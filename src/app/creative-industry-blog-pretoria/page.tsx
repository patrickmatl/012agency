import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Industry Blog Pretoria | Design Tips & Insights | 012 Agency',
  description: 'Explore the 012 Agency blog for expert insights on graphic design, branding, digital marketing, and creative industry trends in Pretoria and South Africa.',
  alternates: {
    canonical: 'https://012agency.co.za/creative-industry-blog-pretoria',
  },
}


interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const posts = await getAllPosts()
  const resolvedParams = await searchParams;
  const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;

  let filteredPosts = posts;
  if (search) {
    const searchQuery = search.toLowerCase();
    filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
    );
  }

  // Sort by date desc (if not already)
  filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-syne font-bold text-white mb-6">
            {search ? `Results for "${search}"` : 'Our Blog'}
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {search
              ? `Found ${filteredPosts.length} articles matching your criteria.`
              : 'Insights, tutorials, and updates from the world of design'}
          </p>

          {/* Breadcrumb / Back Link if searching */}
          {search && (
            <div className="mt-8">
              <Link href="/creative-industry-blog-pretoria" className="text-gold-500 hover:text-white transition-colors">
                &larr; View All Posts
              </Link>
            </div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/creative-industry-blog-pretoria/${post.slug}`}
              className="group"
            >
              <article className="bg-neutral-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gold-500 bg-gold-500/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-syne font-bold text-white mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-neutral-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-neutral-500 text-xl">No posts found matching "{search}".</p>
            <Link href="/creative-industry-blog-pretoria" className="text-gold-500 mt-4 inline-block hover:underline">
              Clear Search
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
