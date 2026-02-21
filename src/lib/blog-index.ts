import fs from 'fs'
import path from 'path'

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  coverImage: string
  tags: string[]
}

const blogIndexPath = path.join(process.cwd(), 'src/data/blog-index.json')

export async function getAllPostsMetaFromIndex(): Promise<BlogPostMeta[] | null> {
  try {
    if (fs.existsSync(blogIndexPath)) {
      const fileContents = await fs.promises.readFile(blogIndexPath, 'utf8')
      const posts = JSON.parse(fileContents) as BlogPostMeta[]
      return posts
    }
  } catch (error) {
    console.warn('Failed to read blog index:', error)
  }
  return null
}

export async function getRandomPostsFromIndex(count: number = 3): Promise<BlogPostMeta[] | null> {
  const posts = await getAllPostsMetaFromIndex()
  if (!posts) return null
  return [...posts].sort(() => 0.5 - Math.random()).slice(0, count)
}
