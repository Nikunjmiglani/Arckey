import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { client } from "@/lib/sanity";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export const dynamic = "force-dynamic";

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
        <title>Discover Miggla – Luxury Interior Designers in Delhi NCR</title>
        <meta
          name="description"
          content="Explore blogs from Miggla – your destination for luxury, vastu-aligned, and custom-made interiors for homes, offices, and commercial spaces."
        />
        <meta
          name="keywords"
          content="Miggla, interior designers, Delhi NCR, luxury interiors, vastu design, home interiors, commercial interiors"
        />
      </Head>

      <section className="px-6 sm:px-12 py-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
          Explore Our Blog
        </h1>

        {blogs.length > 0 ? <BlogSlider blogs={blogs} /> : (
          <p className="text-center text-gray-600">No blogs available yet.</p>
        )}
      </section>
    </>
  );
}

// Slider Component
function BlogSlider({ blogs }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 15 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {blogs.map((blog) => (
          <div key={blog._id} className="keen-slider__slide">
            <Link href={`/blog/${blog.slug?.current}`}>
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
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-900"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-900"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
