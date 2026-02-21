import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')
const blogIndexPath = path.join(process.cwd(), 'src/data/blog-index.json')

export type BlogPost = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  coverImage: string
  tags: string[]
  content: string
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Ensure date exists and is properly formatted
    if (!data.date) {
      console.error(`Date is missing in ${fullPath}`)
      return null
    }

    // Parse the date string, removing any quotes and ensuring proper format
    const dateStr = data.date.toString().replace(/['"]/g, '').trim()
    const parsedDate = new Date(dateStr)

    if (isNaN(parsedDate.getTime())) {
      console.error(`Invalid date format in ${fullPath}: ${dateStr}`)
      return null
    }

    return {
      slug: realSlug,
      title: data.title || '',
      date: format(parsedDate, 'MMMM dd, yyyy'),
      author: data.author || '012 Agency Team',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/blog/default.jpg',
      tags: data.tags || [],
      content: content || '',
    }
  } catch (error) {
    console.error(`Error processing ${slug}:`, error)
    return null
  }
}

export async function getPostMetaBySlug(slug: string): Promise<BlogPostMeta | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    // Use gray-matter's read method or options to avoid parsing full content if possible,
    // but here we just read file and discard content to keep it simple.
    // For 7000 files, reading full content is slow, but passing it around is the memory killer.
    // We can optimize by reading only the first N bytes if we knew header size, but gray-matter handles full file.
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const { data } = matter(fileContents)

    if (!data.date) return null

    const dateStr = data.date.toString().replace(/['"]/g, '').trim()
    const parsedDate = new Date(dateStr)

    if (isNaN(parsedDate.getTime())) return null

    return {
      slug: realSlug,
      title: data.title || '',
      date: format(parsedDate, 'MMMM dd, yyyy'),
      author: data.author || '012 Agency Team',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/blog/default.jpg',
      tags: data.tags || [],
    }
  } catch (error) {
    console.error(`Error processing meta for ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug.replace(/\.mdx$/, '')))
  )
  return posts.filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export async function getAllPostsMeta(): Promise<BlogPostMeta[]> {
  // Optimization: Use pre-generated JSON index if available
  // This avoids reading 7000+ files at runtime, which bloats the serverless function bundle
  try {
    if (fs.existsSync(blogIndexPath)) {
      const fileContents = await fs.promises.readFile(blogIndexPath, 'utf8')
      const posts = JSON.parse(fileContents) as BlogPostMeta[]
      return posts
    }
  } catch (error) {
    console.warn('Failed to read blog index, falling back to file scan:', error)
  }

  // Fallback to original method if index missing
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostMetaBySlug(slug.replace(/\.mdx$/, '')))
  )
  return posts.filter((post): post is BlogPostMeta => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export async function getRandomPosts(count: number = 3): Promise<BlogPostMeta[]> {
  const posts = await getAllPostsMeta()
  return [...posts].sort(() => 0.5 - Math.random()).slice(0, count)
}
