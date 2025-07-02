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
  title: "Miggla- Office & Retail Interior Designers in Delhi, Noida, Gurgaon",
  description:
    "Discover Miggla – Top interior designers in Delhi NCR offering luxury, vastu-aligned, and custom-made interiors for homes, offices, and commercial spaces.",
  icons: {
    icon: "/favicon.ico",
  },
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
      "description":
        "Miggla is one of the best interior designers in Delhi NCR, offering residential and commercial turnkey design services.",
      "telephone": "+919899890157",
      "email": "info@miggla.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "G-02, Ground floor, Best Sky Tower, Netaji Subhash Place, Pitampura",
        "addressLocality": "Delhi",
        "postalCode": "110034",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://www.facebook.com/migglaofficial",
        "https://www.instagram.com/miggla_official/",
        "https://www.youtube.com/@miggla_official",
        "https://x.com/miggla_official",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Full Favicon Support */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


