'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        publishedAt,
        "img": mainImage.asset->url,
        "desc": body[0].children[0].text
      }`
      const data = await client.fetch(query)
      setBlogs(data)
    }

    fetchBlogs()
  }, [])

  return (
    <section className="px-6 sm:px-12 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
        Explore Our Blog
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug.current}`} key={blog._id}>
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
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {blog.desc || 'Click to read more...'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}


