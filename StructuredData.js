// app/StructuredData.js
// ❌ Do NOT put "use client" here
import Head from 'next/head';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Miggla",
    "url": "https://miggla.com",
    "description": "High-end interior design services in Delhi NCR",
    "telephone": "+919899890157",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G-02, Ground floor, Best Sky Tower",
      "addressLocality": "Delhi",
      "postalCode": "110034",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    }]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
