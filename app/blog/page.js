import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { client } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    "img": mainImage.asset->url,
    "desc": body[0].children[0].text
  }`;

  const blogs = await client.fetch(query);

  return (
    <>
     <Head>
      Meta title -  Discover Miggla – Top interior designers in Delhi NCR offering luxury, vastu-aligned, and custom-made interiors for homes, offices, and commercial spaces.
    </Head>
    <section className="px-6 sm:px-12 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
        Explore Our Blog
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug?.current}`} key={blog._id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer flex flex-col">
              {blog.img && (
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={500}
                  height={280}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-gray-500 text-sm">
                {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              <h2 className="text-xl font-semibold text-gray-900 mt-2 hover:underline line-clamp-2">
                {blog.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}



