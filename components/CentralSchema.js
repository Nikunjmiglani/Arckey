import Head from "next/head";

const CentralSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://miggla.com/#organization",
        "name": "Miggla",
        "legalName": "Miggla Industries Private Limited",
        "url": "https://miggla.com",
        "logo": "https://miggla.com/logo.png",
        "image": "https://miggla.com/logo.png",
        "description": "Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi NCR.",
        "telephone": "+919899890157",
        "email": "info@miggla.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "G-02, Ground floor, Best Sky Tower, Netaji Subhash Place, Pitampura",
          "addressLocality": "Delhi",
          "postalCode": "110034",
          "addressCountry": "IN"
        },
        "foundingDate": "2021-09-02",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressCountry": "IN"
          }
        },
        "employee": {
          "@type": "Person",
          "name": "Sandeep Kumar"
        },
        "areaServed": [
          "Delhi NCR",
          "Gurugram",
          "Noida",
          "Faridabad",
          "Ghaziabad",
          "Greater Noida"
        ],
        "sameAs": [
          "https://www.facebook.com/migglaofficial",
          "https://www.instagram.com/miggla_official/",
          "https://www.youtube.com/@miggla_official",
          "https://x.com/miggla_official"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://miggla.com/#localbusiness",
        "name": "Miggla",
        "legalName": "Miggla Industries Private Limited",
        "url": "https://miggla.com",
        "logo": "https://miggla.com/logo.png",
        "image": "https://miggla.com/logo.png",
        "description": "Miggla offers residential and commercial turnkey interiors, modular furniture, and Vastu-compliant design solutions across Delhi NCR.",
        "telephone": "+919899890157",
        "email": "info@miggla.com",
        "priceRange": "₹₹₹",
        "openingHours": "Mo-Sa 10:00-19:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "G-02, Ground floor, Best Sky Tower, Netaji Subhash Place, Pitampura",
          "addressLocality": "Delhi",
          "postalCode": "110034",
          "addressCountry": "IN"
        },
        "areaServed": [
          "Delhi NCR",
          "Noida",
          "Gurugram",
          "Faridabad",
          "Ghaziabad",
          "Greater Noida"
        ],
        "sameAs": [
          "https://www.facebook.com/migglaofficial",
          "https://www.instagram.com/miggla_official/",
          "https://www.youtube.com/@miggla_official",
          "https://x.com/miggla_official"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://miggla.com/#sandeepkumar",
        "name": "Sandeep Kumar",
        "jobTitle": "Director",
        "worksFor": {
          "@id": "https://miggla.com/#organization"
        },
        "email": "skumar@miggla.com",
        "description": "Director at Miggla Industries & Aim of Care Youth Empowerment Foundation. Helping people design spaces that inspire. Passionate about luxury interior design, custom furniture, and empowering youth through education and innovation.",
        "birthDate": "0000-10-15",
        "birthPlace": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi"
          }
        },
        "url": "https://www.linkedin.com/in/sandeepk-m/",
        "sameAs": ["https://www.linkedin.com/in/sandeepk-m/"],
        "image": "https://miggla.com/images/sandeep-kumar.jpg",
        "knowsAbout": [
          "Interior Design",
          "Custom Furniture",
          "Vastu Planning",
          "Luxury Interiors",
          "Space Optimization"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://miggla.com/#website",
        "url": "https://miggla.com",
        "name": "miggla.com",
        "publisher": {
          "@id": "https://miggla.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://miggla.com/logo.png",
          "width": 600,
          "height": 60
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://miggla.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default CentralSchema;