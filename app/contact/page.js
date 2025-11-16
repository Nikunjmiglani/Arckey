'use client'
import { useState } from 'react'
import Head from 'next/head'
import {
  FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter,
  FaPinterestP, FaYoutube, FaLinkedinIn
} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <>
      {/* Tracking function (ONLY loads on contact page) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function fireContactTrackingEvent(actionName) {
              if (typeof gtag !== "undefined") {
                gtag('event', 'conversion_event_page_view', {
                  event_category: "contact_page",
                  event_label: actionName
                });
              }
            }
          `
        }}
      />

      <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta name="description" content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi NCR." />
        <meta name="keywords" content="interior designer in Delhi NCR, best interior designers in Noida, famous commercial Interior designer in delhi, home interior designer Delhi, luxury interior designers Gurgaon, interior decorators near me" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Miggla Interiors - Transform Your Space" />
        <meta property="og:description" content="High-quality interior design services in Delhi NCR." />
        <meta property="og:url" content="https://arckey.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-16 px-6">
        {/* New Content Block */}
        <section className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200 space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Miggla – Trusted Interior Designers Near You</h2>
          <p className="text-center text-gray-700 text-lg">
            Looking for top-rated interior designers in Delhi NCR, Pune, or Mumbai who understand your style and respect your budget?
            Miggla offers custom interior design, luxury renovation, and bespoke furniture solutions — all under one roof.
          </p>
          <ul className="text-gray-800 text-base space-y-2 pl-5 list-disc">
            <li>🏠 <strong>Home Interior Design</strong> – Living room, bedrooms, modular kitchens</li>
            <li>🛁 <strong>Luxury Bathroom Renovation</strong> – Space-optimized, vastu-friendly</li>
            <li>🪑 <strong>Custom Furniture Manufacturing</strong> – Modern, modular & made-to-fit</li>
            <li>🏢 <strong>Office & Boutique Interiors</strong> – Low-budget, high-impact transformations</li>
          </ul>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <p><strong>📍 Address:</strong> Serving Delhi NCR, Pune, Mumbai & PAN India</p>
              <p><strong>📞 Phone:</strong> 
                <a href="tel:+919899890157" onClick={() => fireContactTrackingEvent("call_click")}>
                  +91-9899890157
                </a>
              </p>
              <p><strong>📧 Email:</strong> info@miggla.com</p>
              <p><strong>🌐 Website:</strong> www.miggla.com</p>
              <p><strong>🕘 Hours:</strong> Mon–Sat | 10:00 AM – 7:00 PM</p>
              <p><strong>💬 Available on:</strong> WhatsApp, Google Messages, Instagram DM</p>
            </div>
            <div>
              <p><strong>⭐ Why People Trust Miggla:</strong></p>
              <ul className="list-disc pl-5 mt-1">
                <li>4.6⭐ Google Rated by Real Clients</li>
                <li>Free Design Consultation</li>
                <li>Transparent Pricing & Timely Delivery</li>
                <li>Custom Solutions for Every Budget & Space</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🗓️ Book Your Free Design Consultation</h3>
            <p className="mb-4">We’ll respond within 24 hours and start planning your space with your vision and budget in mind.</p>
            <a
              href="#"
              onClick={() => fireContactTrackingEvent("cta_click")}
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
            >
              👉 Let's Build Your Dream Space
            </a>
          </div>
        </section>

        {/* Contact Form + Map */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-gray-600 mb-8">Have a project in mind? We'd love to hear from you.</p>

            <form
              action="https://formspree.io/f/mgvynjpo"
              method="POST"
              onSubmit={() => fireContactTrackingEvent("form_submit")}
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

        {/* Contact Info with Social Media */}
        <div className="max-w-4xl mx-auto mt-16 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <FaPhoneAlt className="text-amber-500 text-xl" />
              <div>
                <p className="font-medium">Phone Numbers</p>
                <p className="text-sm">
                  <a href="tel:+919899890157" onClick={() => fireContactTrackingEvent("call_click")}>
                    +91 9899890157
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+919643531515" onClick={() => fireContactTrackingEvent("call_click")}>
                    +91 9643531515
                  </a>
                </p>
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

          {/* Social Media Links */}
          <div className="mt-8">
            <p className="text-lg font-semibold text-gray-700 mb-4">Follow us on</p>
            <div className="flex justify-center gap-5 text-amber-500 text-2xl">
              <a href="https://www.instagram.com/miggla_official/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/migglaofficial" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://x.com/miggla_official" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://in.pinterest.com/miggla_official/" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
              <a href="https://www.youtube.com/@miggla_official" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/miggla/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
