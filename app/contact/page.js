'use client'
import { useState } from 'react'
import Head from 'next/head'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
 

  return (
    <>
    <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta name="description" content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi Ncr." />
        <meta name="keywords" content="interior designer in Delhi NCR, best interior designers in Noida, famous commercial Interior designer in delhi, home interior designer Delhi, luxury interior designers Gurgaon, interior decorators near me" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Miggla Interiors - Transform Your Space" />
        <meta property="og:description" content="High-quality interior design services in Delhi NCR." />
       
        <meta property="og:url" content="arckey.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Form */}
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">Have a project in mind? We'd love to hear from you.</p>

          <form
            action="https://formspree.io/f/mgvynjpo"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.917433277682!2d77.14636427449655!3d28.6921163813742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030d45ceb16f%3A0xbbd989c385c609b5!2sMiggla!5e0!3m2!1sen!2sin!4v1750920588520!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-center justify-center gap-4 text-gray-700">
            <FaPhoneAlt className="text-amber-500 text-xl" />
            <div>
              <p className="font-medium">Phone Numbers</p>
              <p className="text-sm">+91 9899890157</p>
              <p className="text-sm">+91 9643531515</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-700">
            <FaEnvelope className="text-amber-500 text-xl" />
            <div>
              <p className="font-medium">Email Addresses</p>
              <p className="text-sm">info@miggla.com</p>
              <p className="text-sm">skumar@miggla.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

