'use client';
import { useParams } from 'next/navigation';
import { blogs } from '../blogdata';
import Link from 'next/link';
import BlogSchema from '@/components/BlogSchema';

export default function BlogPostPage() {
  const { slug } = useParams();

  const blog = blogs.find((b) => decodeURIComponent(b.slug) === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">404: Blog Not Found</h1>
        <Link href="/blog" className="text-red-500 underline">← Go back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <BlogSchema
        title={blog.title}
        description={blog.excerpt}
        url={`https://miggla.com/blog/${blog.slug}`}
        image={blog.img}
        datePublished={blog.date}
        // dateModified={blog.updatedDate} // Optional
      />

      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{blog.date}</p>

        <img
          src={blog.img}
          alt={blog.title}
          className="rounded-xl shadow-xl mb-10 w-full object-cover max-h-[500px]"
        />

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>
    </>
  );
}


