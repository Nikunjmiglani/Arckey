'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const projectsData = [
  {
    city: 'Delhi',
    image: '/delhiimg2.webp',
    projects: [
      { name: 'Modern Villa', image: '/projects/delhi1.jpg', feedback: 'Amazing attention to detail!' },
      { name: 'Luxury Apartment', image: '/projects/delhi2.jpg', feedback: 'Stunning results, beyond expectations!' },
      { name: 'Urban Loft', image: '/projects/delhi3.jpg', feedback: 'Transformed our home completely.' },
      { name: 'Commercial Office', image: '/projects/delhi4.jpg', feedback: 'Elegant and professional design.' },
      { name: 'Minimalist Flat', image: '/projects/delhi5.jpg', feedback: 'Clean, modern, and peaceful.' },
       { name: 'Minimalist Flat', image: '/projects/delhi5.jpg', feedback: 'Clean, modern, and peaceful.' },
    ],
  },
  {
    city: 'Rohtak',
    image: '/rohtakimg.webp',
    projects: [
      { name: 'Contemporary Home', image: '/projects/rohtak1.jpg', feedback: 'Perfect use of space.' },
      { name: 'Rustic Villa', image: '/projects/rohtak2.jpg', feedback: 'Charming and cozy.' },
      { name: 'Studio Apartment', image: '/projects/rohtak3.jpg', feedback: 'Impressive functionality in a small space.' },
      { name: 'Boutique Office', image: '/projects/rohtak4.jpg', feedback: 'Modern and client-friendly.' },
      { name: 'Bright Flat', image: '/projects/rohtak5.jpg', feedback: 'Loved the natural lighting.' },
      { name: 'Bright Flat', image: '/projects/rohtak5.jpg', feedback: 'Loved the natural lighting.' },
    ],
  },
  {
    city: 'Nepal',
    image: '/nepalimg.webp',
    projects: [
      { name: 'Hillside Retreat', image: '/projects/nepal1.jpg', feedback: 'Breathtaking interiors matching the view.' },
      { name: 'City Apartment', image: '/projects/nepal2.jpg', feedback: 'Very practical and elegant.' },
    ],
  },
  {
    city: 'Chandigarh',
    image: '/chandigarhimg.webp',
    projects: [
      { name: 'Penthouse', image: '/projects/chandigarh1.jpg', feedback: 'Premium and sleek.' },
    ],
  },
  {
    city: 'Kashmir',
    image: '/kashmir.webp',
    projects: [
      { name: 'Wooden Chalet', image: '/projects/kashmir1.jpg', feedback: 'Warm and natural design.' },
    ],
  },
];

export default function RecentProjects() {
  const [activeCity, setActiveCity] = useState('Delhi');
  const activeData = projectsData.find((c) => c.city === activeCity);

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">Our Recent Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {projectsData.map((city) => (
          <button
            key={city.city}
            onClick={() => setActiveCity(city.city)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
              activeCity === city.city
                ? 'bg-black text-white'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {city.city}
          </button>
        ))}
      </div>

      <div className="mb-10">
        <Image
          src={activeData.image}
          alt={activeData.city}
          width={1200}
          height={500}
          className="w-full h-65 rounded-2xl shadow-md"
        />
        <h3 className="text-2xl font-semibold mt-4 text-center"> Some Projects in {activeData.city}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeData.projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h4 className="mt-4 text-lg font-bold">{project.name}</h4>
            <p className="mt-2 text-sm text-gray-600 flex items-start gap-2">
              <FaQuoteLeft className="text-gray-400 mt-1" /> {project.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
