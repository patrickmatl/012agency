const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'src/content/blog');
const outputFile = path.join(process.cwd(), 'src/data/blog-index.json');

function formatDate(date) {
  if (!date) return '';
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return '';
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

async function generateBlogIndex() {
  console.log('Generating blog index...');
  
  if (!fs.existsSync(postsDirectory)) {
    console.log('Blog directory not found, skipping index generation.');
    return;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: formatDate(data.date),
        author: data.author || '012 Agency Team',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '/images/blog/default.jpg',
        tags: data.tags || [],
      };
    })
    .filter(post => post.date) // Filter out posts with invalid dates
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(allPostsData, null, 2));
  console.log(`Blog index generated with ${allPostsData.length} posts at ${outputFile}`);
}

generateBlogIndex();
