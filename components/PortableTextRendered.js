// components/PortableTextRendered.jsx
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/imageUrlBuilder';

const components = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-semibold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-medium mt-6 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="pl-4 border-l-4 border-gray-200 bg-gray-50 p-4 my-6 rounded">{children}</blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = value?.asset ? urlFor(value).width(1200).url() : undefined;
      return src ? (
        <figure className="my-6">
          <img src={src} alt={value.alt || 'Blog image'} className="w-full rounded-lg object-contain" />
          {value.caption && <figcaption className="text-sm text-gray-600 mt-2">{value.caption}</figcaption>}
        </figure>
      ) : null;
    }
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = !href.startsWith('/');
      return (
        <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>
  }
};

export default function PortableTextRendered({ value }) {
  return <PortableText value={value} components={components} />;
}
