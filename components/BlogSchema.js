import React from "react";
import Head from "next/head";

const BlogSchema = ({ 
  title, 
  description, 
  url, 
  image, 
  authorName = "Sandeep Kumar", 
  authorUrl = "https://www.linkedin.com/in/sandeepk-m/", 
  datePublished, 
  dateModified 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Miggla",
      "logo": {
        "@type": "ImageObject",
        "url": "https://commons.wikimedia.org/wiki/Category:Interior_designers#/media/File:Miggla_logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};

export default BlogSchema;
