"use client";

import React from "react";

const projects = [
  {
    id: 1,
    title: "Living room interior project video",
    src: "/ytimg1.jpg", // image in /public
    href: "https://www.youtube.com/shorts/_xQ_dBDECqg",
  },
  {
    id: 2,
    title: "Full home interior project walkthrough",
    src: "/ytimg.jpg", // main (bigger) middle image
    href: "https://www.youtube.com/watch?v=wy7c_hmqUQE",
  },
  {
    id: 3,
    title: "Kitchen interior project video",
    src: "/ytimg2.jpg",
    href: "https://www.youtube.com/shorts/w7V8Pt-2zZE",
  },
];

const ImageCard = ({ title, src, href, isCenter }) => {
  const accessibleLabel = title || "Project video";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl ${
        isCenter ? "lg:scale-105" : "lg:opacity-95"
      }`}
      aria-label={accessibleLabel}
    >
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <img
          src={src}
          alt={accessibleLabel}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </a>
  );
};

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

        {/* 
          Layout:
          - Mobile: horizontal scroll
          - Desktop: 3 in a row, middle one larger
        */}
        <div className="flex flex-row overflow-x-scroll lg:overflow-x-visible lg:flex-row snap-x snap-mandatory space-x-6 px-4 sm:px-6 lg:px-8 pb-1">
          {projects.map((project, index) => {
            const isCenter = index === 1; // middle item

            return (
              <div
                key={project.id}
                className={`shrink-0 snap-start ${
                  isCenter
                    ? "min-w-[80vw] sm:min-w-[60vw] lg:min-w-0 lg:flex-[1.2]"
                    : "min-w-[70vw] sm:min-w-[50vw] lg:min-w-0 lg:flex-[0.9] lg:mt-6"
                }`}
              >
                <ImageCard
                  title={project.title}
                  src={project.src}
                  href={project.href}
                  isCenter={isCenter}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
