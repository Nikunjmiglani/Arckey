// lib/structuredData.js

export function getLocalBusinessJsonLd({
  name,
  url,
  logo,
  description,
  telephone,
  address,
  geo,
  openingHours,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    logo,
    description,
    telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address?.streetAddress,
      addressLocality: address?.addressLocality,
      addressRegion: address?.addressRegion,
      postalCode: address?.postalCode,
      addressCountry: address?.addressCountry,
    },
    geo: geo && {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHours?.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function getServiceJsonLd({
  name,
  url,
  description,
  providerName,
  areaServed,
  priceRange,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    url,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: providerName,
    },
    areaServed: areaServed?.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    offers: priceRange && {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      price: priceRange,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function getArticleJsonLd({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: image ? [image] : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
  };
}

export function getFaqJsonLd(faqs = []) {
  if (!faqs.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
