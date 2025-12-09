"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with actual submission logic
    alert("Form submitted!");
    setShowPopup(false); // Close popup after submit
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta
          name="description"
          content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi Ncr."
        />
        <meta
          name="keywords"
          content="interior designer in Delhi NCR, best interior designers in Noida, famous commercial Interior designer in delhi, home interior designer Delhi, luxury interior designers Gurgaon, interior decorators near me"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Miggla Interiors - Transform Your Space"
        />
        <meta
          property="og:description"
          content="High-quality interior design services in Delhi NCR."
        />
        <meta property="og:url" content="arckey.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="bg-red-50 shadow-sm px-4 py-0">
        {/* Top Row: Logo + Hamburger + Right Buttons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="Miggla Interiors home">
            <div className="flex items-center">
              <Image
                src="/logofinal.png"
                alt="Miggla Interiors logo"
                width={160}
                height={80}
                loading="lazy"
                className="h-16 sm:h-20 w-auto object-scale-down"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-800 text-sm">
            <Link href="/about">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                About
              </li>
            </Link>

            <Link href="/#reviews">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Reviews
              </li>
            </Link>
            <Link href="/#services">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Services
              </li>
            </Link>
            <Link href="/gallery">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Design Gallery
              </li>
            </Link>
            <Link href="/projectss">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Recent Projects
              </li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Blogs
              </li>
            </Link>
            <Link href="/cities">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Our Presence
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/919899890157"
              target="_blank"
              aria-label="Chat with Miggla on WhatsApp"
              onClick={() => {
                if (typeof fireContactTrackingEvent !== "undefined") {
                  fireContactTrackingEvent("whatsapp_click_navbar");
                }
              }}
            >
              <FaWhatsapp
                size={32}
                className="text-green-500 hover:scale-110 transition-transform animate-pulse"
                aria-hidden="true"
              />
            </Link>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer hover:px-6 hidden sm:block animate-bounce"
              onClick={() => setShowPopup(true)}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={showPopup}
            >
              Get Free Estimate
            </button>

            {showPopup && (
              <div
                className="fixed inset-0 backdrop-blur-md bg-white/40 flex justify-center items-center z-1000 px-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="estimate-dialog-title"
              >
                <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    type="button"
                    aria-label="Close estimate form"
                  >
                    &times;
                  </button>

                  <h2
                    id="estimate-dialog-title"
                    className="text-2xl font-bold mb-4 text-center"
                  >
                    Get a{" "}
                    <span className="text-red-500">
                      free design consultation
                    </span>
                  </h2>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Duplex"].map(
                      (type) => (
                        <button
                          key={type}
                          className="border border-gray-400 px-3 py-1 rounded-full text-sm"
                          type="button"
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="w-full sm:max-w-md flex flex-col gap-4 mx-auto"
                  >
                    <div>
                      <label
                        htmlFor="popup-name"
                        className="sr-only"
                      >
                        Name
                      </label>
                      <input
                        id="popup-name"
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="popup-phone"
                        className="sr-only"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="popup-phone"
                        type="text"
                        name="phone"
                        placeholder="Mobile Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="popup-email"
                        className="sr-only"
                      >
                        Email
                      </label>
                      <input
                        id="popup-email"
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="popup-query"
                        className="sr-only"
                      >
                        Your Query
                      </label>
                      <textarea
                        id="popup-query"
                        name="query"
                        placeholder="Your Query*"
                        rows="4"
                        value={formData.query}
                        onChange={handleChange}
                        required
                        className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full resize-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="popup-budget"
                        className="sr-only"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="popup-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full text-gray-500"
                      >
                        <option value="">Estimated Budget*</option>
                        <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                        <option value="₹5 - ₹10 Lakh">₹5 - ₹10 Lakh</option>
                        <option value="₹10+ Lakh">₹10+ Lakh</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-110 transition-transform duration-200"
                    >
                      SUBMIT
                    </button>
                  </form>

                  <p className="text-xs text-center mt-3 text-gray-500">
                    By submitting, you consent to our{" "}
                    <a href="#" className="underline">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      terms of use
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* Hamburger Icon */}
            <button
              className="lg:hidden text-2xl cursor-pointer"
              onClick={toggleMenu}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <FaTimes aria-hidden="true" />
              ) : (
                <FaBars aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            id="mobile-menu"
            className="flex flex-col gap-3 mt-4 text-gray-800 text-sm font-medium lg:hidden"
          >
            <Link href="/about">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link href="/#reviews">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Reviews
              </li>
            </Link>

            <Link href="/#services">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Services
              </li>
            </Link>
            <Link href="/gallery">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Design Gallery
              </li>
            </Link>
            <Link href="/projectss">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Recent Projects
              </li>
            </Link>

            <Link href="/blog">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Blogs
              </li>
            </Link>
            <Link href="/cities">
              <li className="hover:text-red-600 hover:font-bold cursor-pointer">
                Our Presence
              </li>
            </Link>
            <Link href="/contact">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce"
                type="button"
              >
                Get Free Estimate Now!
              </button>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
