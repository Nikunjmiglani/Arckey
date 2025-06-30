'use client'
import Head from 'next/head'

export default function DelhiPage() {
  return (
    <>
      <Head>
        <title>Interior Designers in Delhi | Miggla</title>
        <meta name="description" content="Miggla delivers vastu-compliant, affordable, and elegant residential and commercial interiors across Delhi." />
      </Head>

      <main className="bg-[#fdfbf7] text-gray-800 px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Interior Design Projects in Delhi</h1>
        
        <p className="text-lg leading-relaxed mb-6">
          Miggla has proudly delivered a wide range of residential and commercial interior design projects across Delhi,
          earning the trust of clients through quality craftsmanship, vastu-compliant layouts, and innovative solutions
          tailored to urban lifestyles. Our design expertise spans premium flats, independent homes, boutique stores,
          and office spaces in top localities like Netaji Subhash Place, Punjabi Bagh, Paschim Vihar, Rohini, Pitampura,
          Ashok Vihar, Najafgarh, and Rajouri Garden. From modular kitchens and luxury bathrooms to turnkey office
          interiors and retail renovations, our team has transformed countless spaces into elegant, functional
          environments that reflect the personality and purpose of each client.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you're a homeowner in Rohini or Pitampura planning a classic 3BHK makeover, or a boutique owner in
          Rajouri Garden or NSP looking for a low-budget yet stylish store setup, Miggla brings local understanding,
          vastu precision, and high-quality execution to every project. Our strong footprint in West and North-West
          Delhi makes us one of the most trusted interior design firms in Delhi NCR, delivering timely results and
          personalized experiences.
        </p>
      </main>
    </>
  )
}
