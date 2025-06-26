import React from 'react'
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
  )
}

export default page
