'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';


const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with actual submission logic
    alert("Form submitted!");
    setShowPopup(false); // Close popup after submit
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-red-50 shadow-sm px-4 py-0">
      {/* Top Row: Logo + Hamburger + Right Buttons */}
      <div className="flex justify-between items-center">
        {/* Logo */}
   <Link href="/"> <div className="flex items-center">
  <img
  src="/logofinal.png"
  alt="Miggla Logo"
  className="h-16 sm:h-20 w-auto object-scale-down"
/>

</div>

</Link>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium text-gray-800 text-sm">
       <Link  href="/about" target='/'>  <li className="hover:text-red-600 hover:font-bold cursor-pointer">About</li></Link>
         
        <Link  href="/#reviews" >   <li className="hover:text-red-600 hover:font-bold cursor-pointer">Reviews</li></Link>
          <Link  href="/#services" >   <li className="hover:text-red-600 hover:font-bold cursor-pointer">Services</li></Link>
           <Link  href="/gallery" >  <li className="hover:text-red-600 hover:font-bold cursor-pointer">Design Gallery</li></Link>
          <Link  href="/projectss" target='/'> <li className="hover:text-red-600 hover:font-bold cursor-pointer">Recent Projects</li></Link>
          <Link  href="/#blogs" > <li className="hover:text-red-600 hover:font-bold cursor-pointer">Blogs</li></Link>
           <Link  href="/cities" target='/'> <li className="hover:text-red-600 hover:font-bold cursor-pointer">Our Presence</li></Link>
            <Link  href="/contact" target='/'>  <li className="hover:text-red-600 hover:font-bold cursor-pointer">Contact Us</li></Link>
         
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
         <Link href="https://wa.me/919519517579 
" target="_blank"><FaWhatsapp size={32} className="text-green-500 hover:scale-110 transition-transform animate-pulse " /></Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer hover:px-6 hidden sm:block animate-bounce" onClick={() => setShowPopup(true)} >
            Get Free Estimate
          </button>
          {showPopup && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/40 flex justify-center items-center z-[1000] px-4">
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

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Duplex"].map(type => (
                <button
                  key={type}
                  className="border border-gray-400 px-3 py-1 rounded-full text-sm"
                >
                  {type}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full sm:max-w-md flex flex-col gap-4 mx-auto"
            >
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
              />
              <textarea
                name="query"
                placeholder="Your Query*"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                required
                className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full resize-none"
              />
              <select
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
              <button
                type="submit"
                className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-110 transition-transform duration-200"
              >
                SUBMIT
              </button>
            </form>

            <p className="text-xs text-center mt-3 text-gray-500">
              By submitting, you consent to our{' '}
              <a href="#" className="underline">privacy policy</a> and{' '}
              <a href="#" className="underline">terms of use</a>.
            </p>
          </div>
        </div>
      )}

          {/* Hamburger Icon */}
          <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-3 mt-4 text-gray-800 text-sm font-medium lg:hidden">
          <Link  href="/about"> <li className="hover:text-red-600 hover:font-bold cursor-pointer">About</li></Link>  
          <Link  href="/contact"><li className="hover:text-red-600 hover:font-bold cursor-pointer">Contact Us</li></Link> 
          <Link  href="/#reviews">  <li className="hover:text-red-600 hover:font-bold cursor-pointer">Reviews</li></Link>
          
          <Link  href="/#services" > <li className="hover:text-red-600 hover:font-bold cursor-pointer">Services</li></Link>
          <Link  href="/#gallery" > <li className="hover:text-red-600 hover:font-bold cursor-pointer">Design Gallery</li></Link>
         <Link  href="/projectss" > <li className="hover:text-red-600 hover:font-bold cursor-pointer">Recent Projects</li></Link> 
         
          <Link  href="/#blogs" >  <li className="hover:text-red-600 hover:font-bold cursor-pointer">Blogs</li></Link>
         <Link  href="/cities">  <li className="hover:text-red-600 hover:font-bold cursor-pointer">Cities</li></Link>
        <Link href="/contact">  <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce " >
            Get Free Estimate Now!!
          </button></Link>
          
        </ul>
      )}
      
    </nav>
  );
};

export default Navbar;



