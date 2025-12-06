"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const leftLinks = [
  { name: "Services", href: "/#services" },
  { name: "Testimonials", href: "/#reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact" },
];

const rightLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "FAQ", href: "/faq" },
];

const socialLinks = [
  { href: "https://www.facebook.com/migglaofficial", Icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com/miggla_official", Icon: FaTwitter, label: "Twitter" },
  { href: "https://www.youtube.com/@miggla_official", Icon: FaYoutube, label: "YouTube" },
  { href: "https://in.pinterest.com/miggla_official/", Icon: FaPinterestP, label: "Pinterest" },
  { href: "https://www.instagram.com/miggla_official/#", Icon: FaInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/miggla/posts/?feedView=all", Icon: FaLinkedinIn, label: "LinkedIn" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#1e1e23] text-white pt-14 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-600">
        {/* Logo + About */}
        <div>
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <Image
                src="/logofooter.png"
                alt="Miggla logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h1 className="text-xl font-bold leading-tight">
                MIGGLA <br />
                <span className="text-red-500 font-extralight">
                  luxurious Interior Designer &amp; custom furniture manufacturer
                </span>
              </h1>
            </motion.div>
          </Link>
          <p className="text-gray-400 text-sm">
            Miggla is at your service, if you want to give your home interiors a
            fresh and elegant look without spending huge fortune.
          </p>
        </div>

        {/* Useful Links + Follow Us */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h2 className="text-xl font-bold text-center mb-4">Useful Links</h2>
            {leftLinks.map((link, idx) => (
              <Link key={idx} href={link.href}>
                <motion.p
                  whileHover={{ x: 5, color: "#ffffff" }}
                  className="text-gray-400 text-sm cursor-pointer transition-colors"
                >
                  + {link.name}
                </motion.p>
              </Link>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-0 invisible md:visible">&nbsp;</h2>
            {rightLinks.map((link, idx) => (
              <Link key={idx} href={link.href}>
                <motion.p
                  whileHover={{ x: 5, color: "#ffffff" }}
                  className="text-gray-400 text-sm cursor-pointer transition-colors"
                >
                  + {link.name}
                </motion.p>
              </Link>
            ))}
          </div>

          {/* Follow Us On */}
          <div className="col-span-2 mt-0">
            <p className="text-white font-semibold">Follow Us On:</p>
            <div className="flex gap-3 mt-0 text-gray-300 text-lg">
              {socialLinks.map(({ href, Icon, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Our Presence */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Presence</h2>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { href: "/interior-designer-in-delhi", text: "Interior Designer in Delhi" },
              { href: "/interior-designer-in-haryana", text: "Interior Designer in Rohtak" },
              { href: "/interior-designer-in-punjab", text: "Interior Designer in Ghaziabad" },
              { href: "/interior-designer-in-up", text: "Interior Designer in Noida" },
              { href: "/interior-designer-in-rajasthan", text: "Interior Designer in Faridabad" },
            ].map((location, idx) => (
              <Link key={idx} href={location.href}>
                <motion.p
                  whileHover={{ x: 5, color: "#ffffff" }}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  {location.text}
                </motion.p>
              </Link>
            ))}
          </div>
        </div>

        {/* Subscribe Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe Us</h2>
          <form
            action="https://formspree.io/f/mgvynjpo"
            method="POST"
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email address"
              required
              className="w-full p-3 bg-gray-700 text-sm rounded-md placeholder:text-gray-400 text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-3 w-full bg-red-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              Subscribe <span className="text-lg">→</span>
            </motion.button>
          </form>
          <p className="text-gray-400 text-sm mt-3">
            *Subscribe us and get latest news and updates.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 text-xs py-6"
      >
        © {currentYear} Miggla. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
