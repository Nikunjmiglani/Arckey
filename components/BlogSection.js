import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Arrow icons

export default function BlogSection({ blogs }) {
  const [blogIndex, setBlogIndex] = useState(0);

  const visibleCount = 3; // Number of visible blog posts at once

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
          style={{ transform: `translateX(-${blogIndex * (100 / visibleCount)}%)` }}
        >
          {blogs.map((post) => (
            <div
              key={post.slug}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={300}
                    height={220}
                    className="object-cover w-full h-[220px] rounded-xl hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                  <h2 className="text-gray-500 mt-3 text-sm sm:text-base">
                    {new Date(post.date).toLocaleDateString()}
                  </h2>
                  <h1 className="mt-2 text-lg sm:text-xl font-semibold hover:underline transition text-gray-800">
                    {post.title}
                  </h1>
                </div>
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
