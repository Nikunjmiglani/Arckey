import React from 'react';

// Sample data for the video cards
const videos = [
  {
    id: 1,
    title: 'Client Testimonial 1: Premium Duplex Interior',
    embedId: 'dQw4w9WgXcQ', // Placeholder: Rick Astley - Never Gonna Give You Up (use real IDs)
  },
  {
    id: 2,
    title: 'Client Testimonial 2: Cozy 3BHK Renovation',
    embedId: 'lZ3b_0n31_Y', // Placeholder: Lo-fi music (use real IDs)
  },
  {
    id: 3,
    title: 'Client Testimonial 3: Modern Apartment Design',
    embedId: 'hTWqgV8_y7g', // Placeholder: Nature video (use real IDs)
  },
];

/**
 * Renders a single, responsive video card with a YouTube embed.
 * @param {object} props - Component props.
 * @param {string} props.title - The title of the video.
 * @param {string} props.embedId - The YouTube video ID.
 */
const VideoCard = ({ title, embedId }) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl">
    <div className="p-4 border-b border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
    </div>
    {/*
      16:9 Aspect Ratio Container: 
      The padding-bottom: 56.25% (9/16 * 100) trick ensures the embed maintains a perfect 16:9 aspect ratio 
      without internal scrolling, making it fully responsive.
    */}
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  </div>
);

/**
 * Main Video Section component.
 * This component renders a grid of 3 video cards.
 */
export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-100 font-sans" aria-labelledby="video-testimonials-heading">
      {/* Outer container: Sets max width and centers content. Horizontal padding removed here */}
      <div className="max-w-7xl mx-auto">
        
        {/* Heading: Re-applies horizontal padding */}
        <h2 id="video-testimonials-heading" className="text-3xl font-extrabold text-gray-900 text-center mb-10 md:mb-12 px-4 sm:px-6 lg:px-8">
          Hear From Our Happy Clients
        </h2>

        {/* Video Container: 
          - Horizontal scrolling on small screens (overflow-x-scroll).
          - Static, three-equal-width layout on large screens (lg:overflow-x-hidden lg:flex-row).
          - Space-x-6 provides gap between cards, and px-4 provides padding to the viewport edges.
        */}
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-row snap-x snap-mandatory space-x-6 px-4 sm:px-6 lg:px-8 pb-1">
          {videos.map((video) => (
            // Card Wrapper:
            // - Mobile: Uses min-w-[80vw] to show only one card plus hint of the next, forcing the scroll.
            // - Desktop: lg:min-w-0 and lg:flex-1 ensures equal width and static display.
            <div 
              key={video.id} 
              className="flex-shrink-0 min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 lg:flex-1 snap-start"
            >
              <VideoCard title={video.title} embedId={video.embedId} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}