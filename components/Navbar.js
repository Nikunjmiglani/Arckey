import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-red-50 shadow-sm">

            <div className="mt-1 cursor-pointer ">
                <img
                    src="/logoimg.png"
                    alt="logo"
                    className="w-36 hover:opacity-90 transition-opacity duration-300"
                />
            </div>

           
            <ul className="flex gap-5 text-[15px] mt-1 font-medium text-gray-800">
                <li className="hover:text-red-600 transition-colors hover:font-bold duration-200 cursor-pointer">Design Gallery</li>
                <li className="hover:text-red-600 transition-colors hover:font-bold duration-200 cursor-pointer">Recent Projects</li>
                <li className="hover:text-red-600  hover:font-bold transition-colors duration-200 cursor-pointer">Reviews</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">Site Services</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">DC Signature New</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">Guides</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">Blogs</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">Cities</li>
                <li className="hover:text-red-600 hover:font-bold transition-colors duration-200 cursor-pointer">More</li>
            </ul>


            <div className="flex items-center gap-4 mt-1">
                <FaWhatsapp className="text-green-500 text-4xl  hover:scale-110 transition-transform duration-200 cursor-pointer" />
                <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow transition-all duration-300 cursor-pointer animate-bounce hover:px-7  ">
                    
                    Get Free Estimate
                </button>
            </div>
        </nav>
    )
}

export default Navbar
