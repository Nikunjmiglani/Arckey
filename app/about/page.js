'use client';
import Image from 'next/image';

export default function AboutPage() {
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
        
      </Head>
    <section className="bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-gray-900">
          About <span className="text-red-500">Miggla Interiors</span>
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Elevating Spaces. Enhancing Lifestyles.
        </p>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="/servicesimg (3).jpeg" // Replace with your actual image path
            alt="Beautiful modern interior"
            width={1200}
            height={600}
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Content */}
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            At <strong>Miggla Interiors</strong>, we don’t just design spaces – we craft experiences. Since our founding, our mission has been to blend function, form, and soul into every corner we touch. Whether it's a cozy apartment, an elegant villa, or a cutting-edge office, we believe that great design tells a story – your story.
          </p>

          <p>
            With over a decade of experience in the interior design industry, our team of passionate architects, designers, and project managers have transformed hundreds of homes and commercial spaces across India. We specialize in tailoring every detail to reflect the lifestyle, personality, and vision of each client.
          </p>

          <p>
            Our design philosophy revolves around minimalism, smart functionality, and timeless aesthetics. We draw inspiration from global trends, local craftsmanship, and the unique energy of every space. From Scandinavian calm to bold contemporary, we adapt styles to match your taste and purpose.
          </p>

          <p>
            Our end-to-end interior services cover everything from initial ideation to final execution. We collaborate closely with our clients, listening deeply, sketching ideas, refining plans, and turning them into reality. Our in-house production team ensures quality control and timely delivery for every project.
          </p>

          <p>
            Sustainability is at the heart of what we do. We aim to source eco-friendly materials, maximize natural light, and reduce waste wherever possible. Design should not only be beautiful – it should be responsible.
          </p>
        </div>

        {/* Stats or Highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-red-500">500+</h3>
            <p className="text-sm mt-2 text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-500">10+</h3>
            <p className="text-sm mt-2 text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-500">99%</h3>
            <p className="text-sm mt-2 text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            We envision a world where every space tells a story of style, comfort, and identity. Our goal is to make world-class design accessible, affordable, and emotionally engaging for every individual and business we serve.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

