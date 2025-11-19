export const dynamic = 'force-dynamic';

import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/imageUrlBuilder';
import BlogSchema from '@/components/BlogSchema';
import AuthorBox from '@/components/AuthorBox'; // add this file (code below)
import PortableTextRendered from '@/components/PortableTextRendered'; // add this file (code below)

// Optional SSG support
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map(({ slug }) => ({ slug }));
}

function calcReadingTime(text = '') {
  const words = text.trim().split(/\s+/).length || 0;
  const wordsPerMin = 200;
  return Math.max(1, Math.ceil(words / wordsPerMin));
}

// Helper: convert block content to plain text (small, safe)
function blocksToPlainText(blocks = []) {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map(block => {
      if (block._type === 'block' && Array.isArray(block.children)) {
        return block.children.map(child => child.text).join('');
      }
      if (block._type === 'image' && block.caption) {
        return block.caption;
      }
      return '';
    })
    .join('\n\n');
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    mainImage{ asset->{ url }, alt },
    excerpt,
    body,
    "author": author-> { name, slug, image, bio }
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

  const plain = blocksToPlainText(blog.body);
  const readingTime = calcReadingTime(plain);
  const excerpt = blog.excerpt || (plain.slice(0, 160) + '...');

  return (
    <>
      <BlogSchema
        title={blog.title}
        description={excerpt}
        url={`https://miggla.com/blog/${slug}`}
        image={blog.mainImage?.asset?.url}
        datePublished={blog.publishedAt}
      />

      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        {blog.mainImage?.asset?.url && (
          <div className="mb-8 overflow-hidden rounded-xl shadow-xl">
            <img
              src={urlFor(blog.mainImage).width(1400).url()}
              alt={blog.mainImage?.alt || blog.title}
              className="w-full object-cover max-h-[500px]"
              loading="eager"
            />
          </div>
        )}

        <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-3">{blog.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div>{new Date(blog.publishedAt).toLocaleDateString()}</div>
          <div aria-hidden>•</div>
          <div>{readingTime} min read</div>
        </div>

        <p className="text-gray-700 mb-6">{excerpt}</p>

       <article className="prose prose-lg prose-headings:font-semibold prose-headings:leading-tight prose-img:rounded-xl prose-img:shadow-lg prose-a:text-blue-600 max-w-none dark:prose-invert">

          {/* use a custom PortableText renderer to control spacing and image captions */}
          <PortableTextRendered value={blog.body} />
        </article>

        <AuthorBox author={blog.author} className="mt-12" />
      </section>
    </>
  );
}
