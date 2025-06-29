export const dynamic = 'force-dynamic';

import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/imageUrlBuilder';
import BlogSchema from '@/components/BlogSchema';

// PortableText serializers
const portableComponents = {
  types: {
    image: ({ value }) =>
      value?.asset && (
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog Image'}
          loading="lazy"
          className="rounded-xl shadow-md my-6 w-full max-h-[600px] object-contain"
        />
      ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

// Optional SSG support
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map(({ slug }) => ({ slug }));
}

// Main Blog Page Component
export default async function BlogPostPage({ params }) {
  const slug = params.slug;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    mainImage{ asset->{ url } },
    body
  }`;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">404: Blog Not Found</h1>
        <a href="/blog" className="text-red-500 underline">← Go back to Blog</a>
      </div>
    );
  }

  return (
    <>
      <BlogSchema
        title={blog.title}
        description={`Blog post: ${blog.title}`}
        url={`https://miggla.com/blog/${slug}`}
        image={blog.mainImage?.asset?.url}
        datePublished={blog.publishedAt}
      />

      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {new Date(blog.publishedAt).toLocaleDateString()}
        </p>

        {blog.mainImage?.asset?.url && (
          <img
            src={blog.mainImage.asset.url}
            alt={blog.title}
            className="rounded-xl shadow-xl mb-10 w-full object-cover max-h-[500px]"
          />
        )}

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <PortableText value={blog.body} components={portableComponents} />
        </article>
      </section>
    </>
  );
}








