import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostData {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return {
    slug: realSlug,
    frontmatter: data,
    content: mdxSource,
  };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        ...data,
        slug: realSlug,
      } as PostData;
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
} 