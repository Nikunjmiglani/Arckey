import Image from "next/image";

const cards = [
  {
    src: "/corporate-office-interior-with-glass-partitions.webp",
    title: "Corporate Office Interior",
  },
  {
    src: "/modern-office-interior-design-delhi-ncr.webp",
    title: "Modern Office Interior",
  },
  {
    src: "/reception-area-interior-design-delhi.webp",
    title: "Reception Area Design",
  },
  {
    src: "/south-delhi-office-interior-design.webp",
    title: "South Delhi Office",
  },
  {
    src: "/top 5 office-cabin-interior-design-ideas 2025.webp",
    title: "Office Cabin Ideas 2025",
  },
  {
    src: "/interior-design-modern-workspaces.webp",
    title: "Modern Workspace Design",
  },
  {
    src: "/custom-commercial-furniture-design-delhi.webp",
    title: "Custom Furniture Design",
  },
  {
    src: "/Corporate office interior design by Miggla Interiors.webp",
    title: "Corporate Interior by Miggla",
  },
  {
    src: "/servicesimg (1).jpeg",
    title: "Top Designers in Delhi",
  },
  {
    src: "/top 5 office-cabin-interior-design-ideas 2025.webp",
    title: "Office Cabin Interiors",
  },
  {
    src: "/luxury-fine-dining-restaurant-interior-delhi.webp",
    title: "Fine Dine Restaurant",
  },
  {
    src: "/open-plan-corporate-office-interior-gurgaon.webp",
    title: "Open Plan Corporate Office",
  },
  {
    src: "/modern-restaurant-seating-lighting-design-india.webp",
    title: "Modern Restaurant",
  },
  {
    src: "/south-indian-themed-restaurant-interior-design.webp",
    title: "South Indian Restaurant",
  },
   {
    src: "/small-restaurant-interior-vastu-compliant-design.webp",
    title: "Small Restaurant Interior",
  },
];

export default function CommercialInteriorPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto text-gray-800">
      <h1 className="font-bold text-3xl mt-5 text-center">
        Transform your workspace into a powerful brand experience.
      </h1>

      <p className="text-center mt-10">
        At <strong>Miggla</strong>, we specialize in{" "}
        <strong>commercial interior design</strong> that combines functionality,
        aesthetics, and efficiency. Whether you're upgrading your office,
        launching a retail store, or revamping a boutique, our team delivers{" "}
        <strong>
          smart space planning, custom furniture, and vastu-compliant layouts
        </strong>{" "}
        that reflect your business identity.
        <br />
        <br />
        Serving clients across <strong>Delhi NCR, Pune, Mumbai, and Bangalore</strong>, we
        design <strong>cost-effective, high-impact interiors</strong> that inspire
        productivity and leave lasting impressions.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-center">
        Why Businesses Choose Miggla for Commercial Interiors
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>✅ Workspace That Works:</strong> Optimize employee well-being
          and performance with ergonomic office layouts and modern finishes.
        </li>
        <li>
          <strong>✅ Retail That Sells:</strong> From store layout to
          product-focused lighting, we design spaces that drive footfall and
          boost sales.
        </li>
        <li>
          <strong>✅ Hospitality That Impresses:</strong> Create unforgettable
          first impressions with unique, welcoming and Instagram-worthy
          interiors.
        </li>
        <li>
          <strong>✅ Smart, Scalable Designs:</strong> Our designs evolve with
          your brand — ideal for startups, franchises, or corporate expansions.
        </li>
        <li>
          <strong>✅ Vastu-Compliant & Energy-Tuned:</strong> Align your space
          with positive energies for long-term growth and harmony.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        Our Commercial Interior Design Services Include:
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Office design and execution (IT, startups, co-working)</li>
        <li>Retail and showroom interiors</li>
        <li>Hospitality interiors (cafes, salons, spas, hotels)</li>
        <li>Design + Build turnkey solutions</li>
        <li>Custom furniture and spatial branding</li>
      </ul>

      <p className="mt-6 text-center">
        From South Delhi to Gurugram, Noida to Faridabad — we’ve delivered
        stunning commercial projects across the NCR. Let us turn your blank
        space into a brand-powered experience.
      </p>

      <p className="mt-4 text-center font-semibold text-lg">
        📞 Book a free consultation today and let’s create something remarkable
        together.
      </p>

      {/* Image cards with captions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md text-center"
          >
            <Image
              src={card.src}
              alt={card.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 font-semibold text-lg text-gray-800">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


