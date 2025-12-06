import React from "react";

// Video data
const videos = [
 /* {
    id: 1,
    title: "",
    type: "local", // will use <video>
    src: "/videoplayback.mp4", // ⬅ replace with your real file in /public
  },*/
  {
    id: 2,
    title: "Our Projects Walkthrough",
    type: "youtube", // will use <iframe>
    embedId: "wy7c_hmqUQE", // ⬅ your YouTube video ID
  },
  {
    id: 3,
    title: "How we work",
    type: "local", // will use <video>
    src: "/videoplayback (1).mp4", // ⬅ replace with your real file in /public
  },
];

/**
 * Renders a single, responsive video card.
 * Supports:
 * - YouTube embeds (type: "youtube")
 * - Local videos from /public (type: "local")
 */
const VideoCard = ({ title, type, embedId, src }) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl">
    <div className="p-4 border-b border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 truncate">
        {title}
      </h3>
    </div>

    {/* 16:9 Aspect Ratio Container */}
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      {type === "youtube" ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
          frameBorder="0"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <video
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          controls
          playsInline
        />
      )}
    </div>
  </div>
);

/**
 * Main Video Section component.
 * This component renders a horizontally scrollable row of video cards on mobile
 * and a 3-column static layout on large screens.
 */
export default function VideoSection() {
  return (
    <section
      className="py-16 bg-gray-100 font-sans"
      aria-labelledby="video-testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="video-testimonials-heading"
          className="text-3xl font-extrabold text-gray-900 text-center mb-10 md:mb-12 px-4 sm:px-6 lg:px-8"
        >
          Our Projects
        </h2>

        <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-row snap-x snap-mandatory space-x-6 px-4 sm:px-6 lg:px-8 pb-1">
          {videos.map((video) => (
            <div
              key={video.id}
              className="shrink-0 min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 lg:flex-1 snap-start"
            >
              <VideoCard
                title={video.title}
                type={video.type}
                embedId={video.embedId}
                src={video.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
