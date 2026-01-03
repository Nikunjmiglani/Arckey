import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const query = `
    *[_type == "post" && defined(slug.current)]
    | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage{
        asset->{ url },
        alt
      }
    }
  `;

  const blogs = await client.fetch(query);

  return (
    <section className="px-6 sm:px-12 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
        Explore Our Blog
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer">
              {blog.coverImage?.asset?.url && (
                <Image
                  src={blog.coverImage.asset.url}
                  alt={blog.coverImage.alt || blog.title}
                  width={500}
                  height={280}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
              )}

              {blog.publishedAt && (
                <p className="text-gray-500 text-sm">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              )}

              <h2 className="text-xl font-semibold text-gray-900 mt-2 line-clamp-2">
                {blog.title}
              </h2>

              {blog.excerpt && (
                <p className="text-gray-600 mt-3 line-clamp-3 text-sm">
                  {blog.excerpt}
                </p>
              )}
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
