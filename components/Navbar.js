'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    'Design Gallery', 'Recent Projects', 'Reviews', 'Site Services',
    'DC Signature New', 'Guides', 'Blogs', 'Cities', 'More'
  ];

  return (
    <nav className="bg-red-50 shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src="/logoimg.png"
            alt="logo"
            className="w-32 md:w-36 hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-5 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-red-600 transition-colors hover:font-bold duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* WhatsApp + Button */}
        <div className="hidden lg:flex items-center gap-4">
          <FaWhatsapp className="text-green-500 text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer" />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce hover:px-7">
            Get Free Estimate
          </button>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-red-600" />
            ) : (
              <FaBars className="text-2xl text-red-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4 px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-red-600 transition-colors hover:font-bold duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <FaWhatsapp className="text-green-500 text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer" />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce hover:px-7">
              Get Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

