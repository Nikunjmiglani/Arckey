export const dynamic = 'force-dynamic';

import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/imageUrlBuilder';
import AuthorBox from '@/components/AuthorBox';
import PortableTextRendered from '@/components/PortableTextRendered';
import { getArticleJsonLd, getFaqJsonLd } from '@/lib/structuredData';

// ---------- helpers ----------

function calcReadingTime(text = '') {
  const words = text.trim().split(/\s+/).length || 0;
  const wordsPerMin = 200;
  return Math.max(1, Math.ceil(words / wordsPerMin));
}

// convert Portable Text blocks → plain text (for description / reading time)
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

/**
 * NOTE:
 * This query NO LONGER uses `$slug`.
 * It fetches all posts and we filter by slug in JS.
 * This completely avoids the “param $slug referenced, but not provided” error.
 */
const blogQuery = `
  *[_type == "post"]{
    title,
    "slug": slug.current,
    publishedAt,
    mainImage{ asset->{ url }, alt },
    excerpt,
    body,
    metaTitle,
    metaDescription,
    schemaType,
    autoGenerateSchema,
    schemaMarkup,
    faqs,
    "author": author-> { name, slug, image, bio },
    _createdAt,
    _updatedAt
  }
`;

// ---------- SSG params (optional) ----------
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }) => ({ slug }));
}

// small helper to get a single post by slug
async function getPostBySlug(slug) {
  if (!slug) return null;
  const posts = await client.fetch(blogQuery);
  return posts.find((post) => post.slug === slug) || null;
}

// ---------- Metadata (title, description, OG, Twitter) ----------
export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const blog = await getPostBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog post not found | Miggla',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const plain = blocksToPlainText(blog.body);
  const fallbackDesc = plain
    ? `${plain.slice(0, 160)}...`
    : 'Interior design and construction insights.';
  const description = blog.metaDescription || blog.excerpt || fallbackDesc;

  const pageTitle = blog.metaTitle || blog.title || 'Miggla';
  const pageUrl = `https://miggla.com/blog/${slug}`;
  const ogImage =
    blog.mainImage?.asset?.url || 'https://miggla.com/og-image.jpg';

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title: pageTitle,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

// ---------- Page component ----------
export default async function BlogPostPage({ params }) {
  const slug = params?.slug;
  const blog = await getPostBySlug(slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">404: Blog Not Found</h1>
        <a href="/blog" className="text-red-500 underline">
          ← Go back to Blog
        </a>
      </div>
    );
  }

  const plain = blocksToPlainText(blog.body);
  const baseExcerpt = plain ? `${plain.slice(0, 160)}...` : '';
  const excerpt = blog.excerpt || blog.metaDescription || baseExcerpt;
  const readingTime = calcReadingTime(plain);

  // ---------- JSON-LD generation ----------
  const jsonLdArray = [];

  if (blog.schemaMarkup) {
    // manual override from Sanity
    try {
      const parsed = JSON.parse(blog.schemaMarkup);
      jsonLdArray.push(parsed);
    } catch (e) {
      console.warn('Invalid JSON-LD in schemaMarkup', e);
    }
  } else if (blog.autoGenerateSchema !== false) {
    const pageUrl = `https://miggla.com/blog/${slug}`;
    const imageUrl = blog.mainImage?.asset?.url;

    // Default / Article schema
    if (
      !blog.schemaType ||
      blog.schemaType === 'article' ||
      blog.schemaType === 'none'
    ) {
      jsonLdArray.push(
        getArticleJsonLd({
          headline: blog.title,
          description: excerpt,
          url: pageUrl,
          image: imageUrl,
          datePublished: blog.publishedAt || blog._createdAt,
          dateModified:
            blog._updatedAt || blog.publishedAt || blog._createdAt,
          authorName: blog.author?.name || 'Miggla Editorial',
          publisherName: 'Miggla',
          publisherLogo: 'https://miggla.com/logo.png',
        })
      );
    }

    // FAQ schema if selected + faqs exist
    if (blog.schemaType === 'faq' && blog.faqs?.length) {
      const faqJsonLd = getFaqJsonLd(blog.faqs);
      if (faqJsonLd) jsonLdArray.push(faqJsonLd);
    }
  }

  return (
    <>
      {/* JSON-LD scripts */}
      {jsonLdArray.map((jsonLd, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

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

        <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-3">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div>
            {blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString()
              : '—'}
          </div>
          <div aria-hidden>•</div>
          <div>{readingTime} min read</div>
        </div>

        <p className="text-gray-700 mb-6">{excerpt}</p>

        <article className="prose prose-lg prose-headings:font-semibold prose-headings:leading-tight prose-img:rounded-xl prose-img:shadow-lg prose-a:text-blue-600 max-w-none dark:prose-invert">
          <PortableTextRendered value={blog.body} />
        </article>

        <AuthorBox author={blog.author} className="mt-12" />
      </section>
    </>
  );
}
