'use client'
import Head from 'next/head'

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Miggla Interior Design</title>
        <meta name="description" content="Explore answers to common queries about Miggla’s interior design services, vastu planning, turnkey projects, modular kitchens, pricing, and locations." />
      </Head>

      <main className="bg-[#fdfbf7] text-gray-800 px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions (FAQ)</h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Your one-stop resource for answers to the most commonly asked questions about our residential and commercial interior design services across Delhi NCR, Gurugram, Haryana, Chandigarh, Nepal, and more.
        </p>

        {/* FAQ Sections */}
        <div className="space-y-12">

          {/* Residential Interior Design */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🏠 Residential Interior Design</h2>
            <FAQItem q="What type of residential interior design services do you offer in Delhi NCR?" a="We specialize in full home interiors including living rooms, bedrooms, modular kitchens, bathrooms, balconies, and vastu-based layout planning. Our services cover apartments, villas, builder floors, and independent houses across Delhi, Gurugram, Noida, Faridabad, and beyond." />
            <FAQItem q="Can you design a 2BHK or 3BHK on a budget?" a="Absolutely! At Miggla, we create customized 2BHK and 3BHK interiors that suit your lifestyle and budget. Whether you want a minimalist setup or a luxury finish, we optimize space, materials, and aesthetics without compromising quality." />
            <FAQItem q="Do you follow Vastu Shastra in your home interior designs?" a="Yes, vastu principles are integrated into our design approach. We offer vastu-compliant furniture placement, color schemes, room orientation, and energy-balancing solutions to ensure harmony and well-being." />
          </section>

          {/* Commercial Interior Design */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🏢 Commercial Interior Design</h2>
            <FAQItem q="What kind of commercial spaces do you design?" a="We design offices, boutiques, retail stores, clinics, showrooms, and cafés. From brand-centric interiors to smart space planning, we deliver functional and inspiring environments tailored to your business goals." />
            <FAQItem q="Can you renovate an existing shop into a boutique or studio on a tight budget?" a="Yes! We've transformed tailoring shops, salons, and small showrooms into stunning, low-cost boutique spaces — especially in local markets like NSP, Rajouri Garden, and Rewari. Miggla excels at budget-friendly commercial interior makeovers without cutting corners." />
          </section>

          {/* Turnkey */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🛠️ Turnkey Interior Solutions</h2>
            <FAQItem q="What is a turnkey interior project?" a="A turnkey project means we handle everything from design, civil work, electricals, plumbing, false ceiling, carpentry, painting, furnishings, and final setup — so you receive a move-in ready space without any coordination hassle." />
            <FAQItem q="Do you offer turnkey solutions in areas like Gurgaon, Rohtak, and Bhiwani?" a="Yes! We provide end-to-end turnkey interior solutions across Delhi NCR, Haryana (Rohtak, Bhiwani, Faridabad, Rewari), Gurugram, Chandigarh, and even Nepal." />
          </section>

          {/* Modular */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🍽️ Modular Kitchen & Wardrobes</h2>
            <FAQItem q="Do you make custom modular kitchens in Noida and Gurugram?" a="Yes. We specialize in custom-built modular kitchens with acrylic, PU, laminate, and matte finishes. We design L-shape, U-shape, parallel, and open kitchen layouts with soft-close fittings and branded accessories." />
            <FAQItem q="What makes your modular wardrobes better?" a="Our wardrobes are fully customizable, space-efficient, and vastu-compatible. We offer sliding, hinged, and walk-in wardrobes with in-built lighting, accessories, and a factory-finish look." />
          </section>

          {/* Bathroom */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🚽 Bathroom Remodeling & Space Planning</h2>
            <FAQItem q="Can you redesign an old bathroom into a luxury space?" a="Absolutely. We handle complete bathroom remodeling — from plumbing changes and tiling to modern fittings, vanity counters, and LED-lit mirrors. Our luxury bathrooms focus on space, style, and sustainability." />
            <FAQItem q="How long does it take to remodel a bathroom in Delhi NCR?" a="Depending on size and scope, most bathroom makeovers take 7–14 working days. We ensure quick delivery with waterproofing, exhaust, false ceiling, and premium fittings included." />
          </section>

          {/* Design */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🛋️ Design Consultation & Process</h2>
            <FAQItem q="Can I book only a design consultation with you?" a="Yes! We offer online and in-person interior design consultations where we share layouts, mood boards, material suggestions, and vastu insights — perfect if you have your own execution team." />
            <FAQItem q="What is your design process at Miggla?" a="We begin with a free site visit and consultation, followed by 3D designs, material selection, budgeting, and final execution. You’ll have a dedicated project manager from start to finish." />
          </section>

          {/* Locations */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📍 Service Locations</h2>
            <FAQItem q="Do you offer services outside Delhi NCR?" a="Yes. In addition to Delhi NCR, we serve clients in Rohtak, Bhiwani, Rewari, Faridabad, Narnaul, Chandigarh, Panchkula, Butwal, Kathmandu, Narayangarh (Nepal), and Anantnag (Kashmir)." />
            <FAQItem q="Can I hire Miggla for projects in small towns like Najafgarh or Anantnag?" a="Of course! We love taking on projects in Tier 2 and 3 towns — bringing our premium design quality to spaces across Najafgarh, Anantnag, Narnaul, and rural Haryana or UP." />
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">💬 Pricing, Timelines & Support</h2>
            <FAQItem q="How much does a complete home interior cost with Miggla?" a="Budgets typically start from ₹4.5 – ₹8 lakh for 2BHK, and ₹6.5 – ₹12 lakh for 3BHK, depending on materials, size, and scope. We also offer flexible EMI and phased execution options." />
            <FAQItem q="What if I only want a single room done?" a="That’s absolutely fine! We take on single room projects too — be it a modular kitchen, a vastu bedroom redesign, or a stylish living room refresh." />
            <FAQItem q="How do I get started with Miggla?" a="Just call us, fill out the contact form, or visit our nearest site. We’ll schedule a free consultation and help you take the first step toward your dream space." />
          </section>

          {/* Branding */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🌐 Branding & Trust</h2>
            <FAQItem q="Why should I choose Miggla over other interior design firms?" a="With over 100+ projects across India and Nepal, in-house production, vastu expertise, and personalized design — Miggla stands for design excellence, reliability, and value-driven interiors." />
            <FAQItem q="Are you registered or verified on Google and Houzz?" a="Yes, we have verified listings on Google Business, Houzz, Justdial, and other platforms to ensure credibility, reviews, and easy discovery." />
          </section>
        </div>
      </main>
    </>
  )
}

// FAQItem component for consistent display
function FAQItem({ q, a }) {
  return (
    <div className="mb-6">
      <p className="font-semibold text-lg mb-1">Q. {q}</p>
      <p className="text-gray-700 text-base">A. {a}</p>
    </div>
  )
}
