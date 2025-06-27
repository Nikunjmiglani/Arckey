import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const galleryImages = [
  '/spcimg1.webp',
  '/spcimg2.webp',
  '/spcimg3.webp',
  '/spcimg4.webp',
  '/spcimg5.webp',
  '/servicesimg (4).jpeg',
]

const page = () => {
  return (
    <>
    <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta name="description" content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi Ncr." />
        <meta name="keywords" content="interior designer in Delhi NCR, best interior designers in Noida, famous commercial Interior designer in delhi, home interior designer Delhi, luxury interior designers Gurgaon, interior decorators near me" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Miggla Interiors - Transform Your Space" />
        <meta property="og:description" content="High-quality interior design services in Delhi NCR." />
        
        <meta property="og:url" content="arckey.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="container mx-auto px-4 ">
        <div className="text-center mb-10 mt-10">
          <h2 id="gallery"  className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Interior Designs</h2>
          <p className="text-gray-600 text-lg">Explore our gallery of beautifully crafted spaces</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md group">
              <Image
                src={src}
                alt={`Interior ${index + 1}`}
                width={198}
                height={198}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      </>

  )
}

export default page
