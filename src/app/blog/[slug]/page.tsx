import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  coverImage: string;
}

async function getBlogPost(slug: string): Promise<BlogPost> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/blog/${encodeURIComponent(slug)}`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog post: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw new Error('Failed to load blog post. Please try again later.');
  }
}

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPost({ 
  params 
}: Props) {
  const post = await getBlogPost(params.slug);

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        {/* Back to Blog Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm text-red-600 hover:text-red-700 mb-8 group hover:shadow-md transition-all duration-200 fixed top-32 z-10"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to All Posts</span>
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-lg mt-16">
          <div className="mb-8">
            <span className="text-red-600 font-medium">{post.category}</span>
            <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">{post.title}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {post.coverImage && (
            <div className="mb-8 relative h-[400px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
          
          <div className="prose max-w-none text-gray-800">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>,
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">{children}</h3>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-6 text-gray-700">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 text-gray-700">{children}</ol>,
                li: ({ children }) => <li className="mb-2 text-gray-700">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                em: ({ children }) => <em className="text-gray-800 italic">{children}</em>,
                blockquote: ({ children }) => (
                  <blockquote className="pl-4 border-l-4 border-red-500 italic text-gray-700 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
} 