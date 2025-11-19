// components/AuthorBox.jsx
import Image from 'next/image';
import { urlFor } from '@/lib/imageUrlBuilder';
import { PortableText } from '@portabletext/react';

// Optional: small portable text components for inline author bio formatting
const portableComponents = {
  block: {
    normal: ({ children }) => <p className="text-sm text-gray-600 mb-0">{children}</p>,
  },
};

export default function AuthorBox({ author = {}, className = '' }) {
  if (!author?.name) return null;

  return (
    <div className={`flex items-start gap-4 border-t pt-6 ${className}`}>
      {author.image && (
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={urlFor(author.image).width(200).url()}
            alt={author.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div>
        <div className="font-semibold text-lg">{author.name}</div>

        {/* Render bio safely:
            - If bio is an array (Portable Text), render via PortableText
            - If bio is a string, render directly
        */}
        {Array.isArray(author.bio) ? (
          <div className="mt-1 max-w-prose">
            <PortableText value={author.bio} components={portableComponents} />
          </div>
        ) : (
          author.bio && <div className="text-sm text-gray-600 mt-1">{author.bio}</div>
        )}
      </div>
    </div>
  );
}
