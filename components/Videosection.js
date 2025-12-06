"use client";

import React, { useState } from "react";

// Video data
const videos = [
  // {
  //   id: 1,
  //   title: "",
  //   type: "local",
  //   src: "/videoplayback.mp4",
  // },
  {
    id: 2,
    title: "Our Projects Walkthrough",
    type: "youtube", // YouTube video
    embedId: "wy7c_hmqUQE",
  },
  {
    id: 3,
    title: "How we work",
    type: "local", // Local MP4 from /public
    src: "/videoplayback (1).mp4",
  },
];

/**
 * Renders a single, responsive video card.
 * - YouTube (type: "youtube") -> click thumbnail to load iframe
 * - Local video (type: "local") -> HTML5 <video> with lazy loading
 */
const VideoCard = ({ title, type, embedId, src }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
      </div>

      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {type === "youtube" ? (
          showPlayer ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              frameBorder="0"
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowPlayer(true)}
              className="absolute top-0 left-0 w-full h-full group cursor-pointer"
              aria-label={`Play video: ${title}`}
            >
              {/* Lightweight YouTube thumbnail instead of full player */}
              <img
                src={`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl">
                  <span className="ml-1 border-l-18px border-y-10px border-y-transparent border-l-red-600" />
                </div>
              </div>
            </button>
          )
        ) : (
          <video
            className="absolute top-0 left-0 w-full h-full"
            src={src}
            controls
            playsInline
            preload="none"
          />
        )}
      </div>
    </div>
  );
};

/**
 * Main Video Section component.
 * Horizontally scrollable row on mobile,
 * 3-column static layout on large screens.
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
