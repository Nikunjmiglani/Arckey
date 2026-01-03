export const dynamic = 'force-dynamic';

import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/imageUrlBuilder';
import PortableTextRendered from '@/components/PortableTextRendered';

// ---------- helpers ----------

function calcReadingTime(text = '') {
  const words = text.trim().split(/\s+/).length || 0;
  const wordsPerMin = 200;
  return Math.max(1, Math.ceil(words / wordsPerMin));
}

function blocksToPlainText(blocks = []) {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map((block) => {
      if (block._type === 'block' && Array.isArray(block.children)) {
        return block.children.map((child) => child.text).join('');
      }
      if (block._type === 'image' && block.caption) {
        return block.caption;
      }
      return '';
    })
    .join('\n\n');
}

// ---------- GROQ fields (SUPPORTS OLD + NEW POSTS) ----------

const blogFields = `
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  excerpt,
  coverImage{
    asset->{ url },
    alt
  },
  content,
  body,
  seo,
  _createdAt,
  _updatedAt
`;

// ---------- data helpers ----------

async function getBlogBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      ${blogFields}
    }
  `;

  return client.fetch(query, { slug });
}

// ---------- metadata ----------

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog not found | Miggla',
      description: 'This blog post does not exist.',
    };
  }

  // 🔑 fallback: content → body → []
  const portable = blog.content || blog.body || [];
  const plain = blocksToPlainText(portable);

  const fallbackDesc = plain
    ? `${plain.slice(0, 160)}...`
    : 'Interior design and construction insights.';

  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt || fallbackDesc,
    openGraph: {
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.excerpt || fallbackDesc,
      images: blog.coverImage?.asset?.url
        ? [{ url: blog.coverImage.asset.url }]
        : [],
    },
  };
}

// ---------- Page ----------

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return (
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">404: Blog Not Found</h1>
        <a href="/blog" className="text-red-500 underline">
          ← Go back to Blog
        </a>
      </section>
    );
  }

  // 🔑 fallback: content → body → []
  const portable = blog.content || blog.body || [];
  const plain = blocksToPlainText(portable);
  const readingTime = calcReadingTime(plain);

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      {blog.coverImage?.asset?.url && (
        <div className="mb-8 overflow-hidden rounded-xl shadow-xl">
          <img
            src={urlFor(blog.coverImage).width(1400).url()}
            alt={blog.coverImage.alt || blog.title}
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      )}

      <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-3">
        {blog.title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        {blog.publishedAt && (
          <div>{new Date(blog.publishedAt).toLocaleDateString()}</div>
        )}
        <div aria-hidden>•</div>
        <div>{readingTime} min read</div>
      </div>

      {blog.excerpt && (
        <p className="text-gray-700 mb-8">{blog.excerpt}</p>
      )}

      <article className="prose prose-lg max-w-none">
        <PortableTextRendered value={portable} />
      </article>
    </section>
  );
}
