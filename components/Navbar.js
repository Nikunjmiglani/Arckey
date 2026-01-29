"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta
          name="description"
          content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi NCR."
        />
        <meta
          name="keywords"
          content="interior designer in Delhi NCR, best interior designers in Noida, commercial interior designer delhi"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <nav className="bg-red-50 shadow-sm px-4 py-0">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" aria-label="Miggla home">
            <Image
              src="/logofinal.png"
              alt="Miggla logo"
              width={160}
              height={80}
              className="h-16 sm:h-20 w-auto object-scale-down"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-800 text-sm">
            {[
              ["About", "/about"],
              ["Reviews", "/#reviews"],
              ["Services", "/#services"],
              ["Design Gallery", "/gallery"],
              ["Recent Projects", "/projectss"],
              ["Blogs", "/blog"],
              ["Our Presence", "/cities"],
              ["Contact Us", "/contact"],
            ].map(([name, link]) => (
              <Link key={name} href={link}>
                <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                  {name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Right buttons */}
          <div className="flex items-center gap-3">

            <Link href="https://wa.me/919899890157" target="_blank">
              <FaWhatsapp
                size={32}
                className="text-green-500 hover:scale-110 transition-transform animate-pulse"
              />
            </Link>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer hover:px-6 hidden sm:block animate-bounce"
              onClick={() => setShowPopup(true)}
            >
              Get Free Estimate
            </button>

            <button
              className="lg:hidden text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-3 mt-4 text-gray-800 text-sm font-medium lg:hidden">
            {[
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Reviews", "/#reviews"],
              ["Services", "/#services"],
              ["Gallery", "/gallery"],
              ["Projects", "/projectss"],
              ["Blogs", "/blog"],
              ["Presence", "/cities"],
            ].map(([name, link]) => (
              <Link key={name} href={link}>
                <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/40 flex justify-center items-center z-1000 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Get a <span className="text-red-500">free design consultation</span>
            </h2>

            <form
              action="https://formspree.io/f/mgvynjpo"
              method="POST"
              className="flex flex-col gap-4"
            >
              {/* Lead metadata */}
              <input type="hidden" name="source" value="Navbar Free Estimate Popup" />
              <input type="hidden" name="website" value="Miggla Interiors" />

              <input name="name" required placeholder="Name*" className="input" />
              <input name="phone" required placeholder="Mobile Number*" className="input" />
              <input name="email" type="email" required placeholder="Email*" className="input" />
              <textarea name="query" required placeholder="Your Query*" rows="3" className="input resize-none" />

              <select name="budget" required className="input text-gray-500">
                <option value="">Estimated Budget*</option>
                <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                <option value="₹5 - ₹10 Lakh">₹5 - ₹10 Lakh</option>
                <option value="₹10+ Lakh">₹10+ Lakh</option>
              </select>

              <button
                type="submit"
                className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-105 transition"
              >
                SUBMIT
              </button>
            </form>

            <p className="text-xs text-center mt-3 text-gray-500">
              By submitting, you agree to our privacy policy and terms.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          border-radius: 1rem;
          padding: 0.75rem 1rem;
          border: 1px solid #065f46;
          width: 100%;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
