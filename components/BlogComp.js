"use client"; // Swiper + animations require client-side

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { client } from "@/lib/sanity";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  if (!blogs || blogs.length === 0) {
    return (
      <section className="px-6 sm:px-12 py-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
          Explore Our Blog
        </h1>
        <p className="text-center text-gray-600">No blogs available yet.</p>
      </section>
    );
  }

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

       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20} // space between slides
  slidesPerView={3} // show 3 slides on desktop
  loop={true}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  navigation
  pagination={{ clickable: true }}
  centeredSlides={false} // don't stretch slides
  breakpoints={{
    1024: { slidesPerView: 3, spaceBetween: 20 }, // desktop
    768: { slidesPerView: 2, spaceBetween: 15 },  // tablet
    0: { slidesPerView: 1, spaceBetween: 10 },    // mobile
  }}
>
  {blogs.map((blog) => (
    <SwiperSlide key={blog._id} className="flex justify-center">
      <Link href={`/blog/${blog.slug?.current}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col w-full max-w-[320px]">
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
    </SwiperSlide>
  ))}
</Swiper>

      </section>
    </>
  );
}
