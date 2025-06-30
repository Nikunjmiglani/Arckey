export default function AboutPage() {
  return (
    <div className="px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Miggla – Where Inspired Design Meets Intelligent Function</h1>
          <p className="text-lg">
            Miggla is one of India’s fastest-growing interior design and custom furniture brands, committed to creating beautiful, vastu-aligned, and highly functional spaces — without compromising on affordability.
            With a vision rooted in creativity, culture, and customer trust, we’ve transformed hundreds of homes and businesses across Delhi NCR, Pune, Mumbai, and Bangalore.
          </p>
        </section>

        {/* Our Story */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📖 Our Story – How Miggla Began</h2>
          <p className="text-base leading-relaxed">
            Founded in 2017, Miggla Industries Pvt. Ltd. started as a small, passionate custom furniture workshop. Driven by the belief that good design should be accessible to everyone, the company evolved into a full-service interior design firm, catering to both residential and commercial clients across India.
            <br /><br />
            From our early days crafting bespoke wardrobes and modular kitchens, we’ve grown into a powerhouse of luxury bathroom makeovers, vastu-focused interiors, space-saving solutions, and budget-friendly boutique designs — all while maintaining our roots in handcrafted excellence.
            <br /><br />
            Today, Miggla is trusted by homeowners, entrepreneurs, newlyweds, boutique owners, and startups looking to elevate their spaces with soul, story, and smart design.
          </p>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">👥 Meet the Founders</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">🧠 Sandeep Kumar – Director & Visionary Designer</h3>
              <p>
                A dynamic entrepreneur and interior innovation expert, Sandeep Kumar brings over 15 years of experience in design strategy, architecture, and client-centric project execution.
                With a background in design and business development, he leads Miggla’s growth with a sharp eye for functional aesthetics and a passion for spatial optimization.
                <br /><br />
                He believes that design is not a luxury, but a language — one that can elevate lives, improve energy flow, and create deep emotional connections with spaces.
                <br />
                <strong>🏆 Director at Aim of Care Youth Empowerment Foundation</strong>, he’s committed to using design as a tool for empowerment and wellness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">🎨 Arti Gupta – Creative Director</h3>
              <p>
                With a natural flair for aesthetics and deep insight into color psychology, materials, and vastu energies, Arti Gupta brings warmth and harmony to every project.
                As co-founder, she leads Miggla’s creative vision — from color palettes and material choices to energy-aligned design elements that enhance well-being and prosperity.
                <br /><br />
                Her passion lies in crafting interiors that feel luxurious yet grounded, minimal yet expressive, and most importantly — aligned with the unique personality of each client.
              </p>
            </div>

            <p>
              <strong>Together, Sandeep & Arti</strong> form a powerful team that blends logic with intuition, structure with style, and budgets with beauty.
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🎯 What Miggla Offers</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Luxury Home Interior Design</strong> – Modular kitchens, bedrooms, and vastu-compliant living spaces</li>
            <li><strong>Custom Furniture Manufacturing</strong> – Made-to-measure sofas, wardrobes, dining sets, office desks</li>
            <li><strong>Bathroom & Kitchen Renovation</strong> – Space-saving, waterproof, and vastu-friendly</li>
            <li><strong>Boutique & Commercial Interior Design</strong> – Retail stores, tailoring shops, salons, and office makeovers</li>
            <li><strong>Low-Budget Interior Packages</strong> – Perfect for first-time homeowners, startups, and small shops</li>
          </ul>
        </section>

        {/* Presence */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🌍 Our Presence</h2>
          <p>
            We proudly serve clients across:
            <br />
            <strong>Delhi NCR</strong> – Delhi, Gurgaon, Noida, Faridabad<br />
            <strong>Pune</strong><br />
            <strong>Mumbai</strong><br />
            <strong>Bangalore</strong>
            <br />
            …and expanding across Tier 2 and Tier 3 cities soon.
          </p>
        </section>

        {/* Why Miggla */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🌟 Why Miggla?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>🔨 <strong>100% Custom Furniture</strong> – Designed & manufactured in-house</li>
            <li>📐 <strong>Vastu-Aligned Designs</strong> – For peace, prosperity, and positive flow</li>
            <li>💡 <strong>Creative + Cost-Effective Solutions</strong> – Luxury without excess</li>
            <li>🕒 <strong>On-Time Project Delivery</strong> – Transparent timelines & dedicated teams</li>
            <li>📈 <strong>Client-Centric Design Approach</strong> – We listen, plan, and deliver with passion</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">🤝 Let’s Build Something Beautiful Together</h2>
          <p className="text-lg mb-4">
            If you’re looking for an interior design firm in Delhi NCR, Pune, Mumbai or Bangalore that offers affordable elegance, custom solutions, and spiritual alignment, Miggla is the name you can trust.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
          >
            👉 Book Your Free Design Consultation
          </a>
        </section>
      </div>
    </div>
  );
}


