import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Miggla",
  description: "",
};
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://miggla.com/#organization",
      "name": "Miggla",
      "legalName": "Miggla Industries Private Limited",
      "url": "https://miggla.com",
      "logo": "https://miggla.com/logofooter.png",
      "image": "https://miggla.com/logofooter.png",
      "description": "Miggla is one of the best interior designers in Delhi NCR, offering residential and commercial turnkey design services.",
      "telephone": "+919899890157",
      "email": "info@miggla.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-02, Ground floor, Best Sky Tower, Netaji Subhash Place, Pitampura",
        "addressLocality": "Delhi",
        "postalCode": "110034",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/migglaofficial",
        "https://www.instagram.com/miggla_official/",
        "https://www.youtube.com/@miggla_official",
        "https://x.com/miggla_official"
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        {/* ✅ JSON-LD Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

