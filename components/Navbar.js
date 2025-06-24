'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-red-50 shadow-sm px-4 py-3">
      {/* Top Row: Logo + Hamburger + Right Buttons */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logoimg.png"
            alt="logo"
            className="w-32 sm:w-36 cursor-pointer hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium text-gray-800 text-sm">
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Design Gallery</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Recent Projects</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Reviews</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Site Services</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">DC Signature New</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Guides</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Blogs</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Cities</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">More</li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:scale-110 transition-transform" />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer hover:px-6 hidden sm:block animate-bounce">
            Get Free Estimate
          </button>

          {/* Hamburger Icon */}
          <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-3 mt-4 text-gray-800 text-sm font-medium lg:hidden">
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Design Gallery</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Recent Projects</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Reviews</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Site Services</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">DC Signature New</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Guides</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Blogs</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">Cities</li>
          <li className="hover:text-red-600 hover:font-bold cursor-pointer">More</li>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce ">
            Get Free Estimate
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



