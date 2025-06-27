'use client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function CitiesPage() {
  const cities = [
    { name: 'Delhi', img: '/delhiimg.webp' },
    { name: 'Gurgaon', img: '/gurgaonimg.webp' },
    { name: 'Haryana', img: '/haryanaimg.webp' },
    { name: 'Chandigarh', img: '/chandigarhimg.webp' },
    { name: 'Narayangarh, Nepal', img: '/nepalimg.webp' },
    { name: 'Kashmir', img: '/kashmir.webp' },
  ]

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
    <main className="bg-[#fdfbf7] text-gray-800">
      {/* Header */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cities We’ve Worked In</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          From north to south, our team has reimagined spaces across India’s most vibrant cities. Discover where we’ve worked and what we’ve built.
        </p>
      </section>

      {/* City Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 pb-20 max-w-7xl mx-auto">
        {cities.map(({ name, img }, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 group bg-white">
            <div className="h-60 w-full relative">
              <Image
                src={img}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-10 sm:mx-40 my-10"></div>

      {/* Contact CTA */}
      <section className="text-center py-12 px-6 bg-white rounded-xl max-w-5xl mx-auto shadow-md">
        <h2 className="text-3xl font-bold mb-3">Planning a Project in Your City?</h2>
        <p className="text-gray-600 mb-6">
          Whether you’re in a metro or a small town, we bring creativity and quality to every corner. Reach out to bring your vision to life!
        </p>
        <Link href="/contact">
          <button className="bg-red-400 cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-6"> 
        © {new Date().getFullYear()} Miggla Interiors. All rights reserved.
      </footer>
    </main>
    </>
  )
}
