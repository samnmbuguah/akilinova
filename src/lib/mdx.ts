import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontMatter: {
      ...data,
      slug: realSlug,
    },
  };
}

export function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH);
  const posts = files
    .map((filename) => {
      const filePath = path.join(POSTS_PATH, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        ...data,
        slug: filename.replace(/\.mdx$/, ''),
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
} 