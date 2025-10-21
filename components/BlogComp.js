"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { client } from "@/lib/sanity";

export default function BlogComp() {
  const [blogs, setBlogs] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Adjust visible blog count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch latest blogs directly from Sanity
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
          _id,
          title,
          slug,
          publishedAt,
          "img": mainImage.asset->url
        }`;
        const data = await client.fetch(query);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const nextBlog = () => {
    if (blogIndex + visibleCount < blogs.length) {
      setBlogIndex(blogIndex + 1);
    }
  };

  const prevBlog = () => {
    if (blogIndex > 0) {
      setBlogIndex(blogIndex - 1);
    }
  };

  return (
    <section className="px-6 sm:px-12 mb-20 relative" id="blogs">
      <h1 className="text-left text-xl sm:text-2xl mb-6 mt-10 font-bold text-gray-800">
        READ BLOG POSTS
      </h1>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${blogIndex * (100 / visibleCount)}%)`,
          }}
        >
          {blogs.map((post) => (
            <div
              key={post._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]"
            >
              <Link href={`/blog/${post.slug?.current}`}>
                <Image
                  src={post.img}
                  alt={post.title}
                  width={300}
                  height={220}
                  className="object-cover w-full h-[220px] rounded-xl hover:scale-105 transition-transform duration-500 shadow-md cursor-pointer"
                />
                <h2 className="text-gray-500 mt-3 text-sm sm:text-base">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </h2>
                <h1 className="mt-2 text-lg sm:text-xl font-semibold hover:underline transition text-gray-800">
                  {post.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={prevBlog}
          disabled={blogIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow hover:bg-gray-800 transition disabled:opacity-30"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextBlog}
          disabled={blogIndex + visibleCount >= blogs.length}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow hover:bg-gray-800 transition disabled:opacity-30"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
