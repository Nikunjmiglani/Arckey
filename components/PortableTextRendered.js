import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/imageUrlBuilder';

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      const src = urlFor(value).width(1400).url();

      return (
        <figure className="my-8">
          <img
            src={src}
            alt={value.alt || 'Blog image'}
            className="w-full rounded-xl shadow-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    callout: ({ value }) => (
      <div className="my-6 p-5 border-l-4 border-red-500 bg-red-50 rounded">
        <PortableText value={value.content} />
      </div>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = !href.startsWith('/');
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-blue-600 underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default function PortableTextRendered({ value }) {
  if (!Array.isArray(value)) return null;
  return <PortableText value={value} components={components} />;
}
