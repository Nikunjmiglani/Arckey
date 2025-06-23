'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/image1.webp',
  '/image2.webp',
  '/image3.webp',
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const [index, setIndex] = useState(0);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [startCount]);

  useEffect(() => {
    if (startCount) {
      const targets = [100, 150, 15];
      targets.forEach((target, idx) => {
        let current = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          current += step;
          setCounts(prev => {
            const updated = [...prev];
            updated[idx] = current >= target ? target : current;
            return updated;
          });
          if (current >= target) clearInterval(interval);
        }, 30);
      });
    }
  }, [startCount]);

  return (
    <main className="">
      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
    <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 relative shadow-2xl">
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Get a <span className="text-red-500">free design consultation</span></h2>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <button className="border border-gray-400 px-3 py-1 rounded-full text-sm">1 BHK</button>
        <button className="border border-gray-400 px-3 py-1 rounded-full text-sm">2 BHK</button>
        <button className="border border-gray-400 px-3 py-1 rounded-full text-sm">3 BHK</button>
        <button className="border border-gray-400 px-3 py-1 rounded-full text-sm">4+ BHK / Duplex</button>
      </div>

      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Property Location" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        <input type="text" placeholder="Name" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        <input type="tel" placeholder="Mobile Number" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        <label className="text-sm flex items-center gap-2 mt-2">
          <input type="checkbox" defaultChecked className="accent-green-600" />
          Yes, send me updates via WhatsApp.
        </label>
        <button type="submit" className="bg-red-700 hover:bg-red-800 text-white rounded-lg py-2 font-semibold mt-2">
          Book a Free Consultation
        </button>
      </form>

      <p className="text-xs text-center mt-3 text-gray-500">
        By submitting, you consent to our <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">terms of use</a>.
      </p>
    </div>
  </div>
)}


      <section className="relative w-full min-h-[300px] sm:h-[500px] overflow-hidden bg-gray-100">
        <div className="relative w-full h-full">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              alt={`slide-${i}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow hover:bg-gray-200 transition z-20"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow hover:bg-gray-200 transition z-20"
        >
          <FaArrowRight />
        </button>
      </section>

      <section className="mt-10 px-4 sm:px-10">
        <div className="ml-4 sm:ml-10">
          <h1 className="font-bold text-2xl font-sans mb-4">Home Interiors Made Easy</h1>
          <p className="text-gray-700 w-full">
            Book a FREE consultation, get expert guidance from 400+ top designers, and relax as we handle everything from design to installation. With 10,000+ homes transformed, your dream home is just a step away. Let’s design your dream home today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4 sm:px-10 text-center">
          <div>
            <img src="/photo1.jpg" alt="Book an appointment" className="w-full hover:scale-105 hover:brightness-110 h-auto mx-auto transition-transform duration-500" />
            <h2 className="mt-4 font-bold text-xl">Book an appointment</h2>
          </div>
          <div>
            <img src="/photo2.jpg" alt="Meet our designers" className="w-full hover:scale-105 hover:brightness-110 h-auto mx-auto transition-transform duration-500" />
            <h2 className="mt-4 font-bold text-xl">Meet our designers</h2>
          </div>
          <div>
            <img src="/photo3.jpg" alt="Personalise your designs" className="w-full hover:scale-105 hover:brightness-110 h-auto mx-auto transition-transform duration-500" />
            <h2 className="mt-4 font-bold text-xl">Personalise your designs</h2>
          </div>
          <div>
            <img src="/photo4.webp" alt="Move in" className="w-full hover:scale-105 hover:brightness-110 transition-transform duration-500 h-auto mx-auto" />
            <h2 className="mt-4 font-bold text-xl">Move in</h2>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 text-center">
          <a href="/" className="hover:text-black text-red-500 text-2xl cursor-pointer">Learn More - </a>
          <a href="/">
            <button className=" cursor-pointer px-6 py-5 hover:scale-110 transition-transform duration-200 rounded-full bg-red-400 font-mono text-center">Get Started Now</button>
          </a>
        </div>
      </section>

      <section className="bg-[#f4f0e9] py-10 px-4 sm:px-10 mt-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-bold text-3xl sm:text-4xl mb-3">
            Transform Your Space With The Best Interior Designers In Delhi
          </h1>
          <p className="text-gray-700">
            Your dream home is just a click away. Take the first step towards a more beautiful and functional living space.
          </p>
          <h2 className="mt-3 text-lg font-medium">Let's bring your vision to life!</h2>
          <button className="bg-green-950 text-white font-bold cursor-pointer hover:scale-110 transition-transform duration-200 rounded-full px-6 py-3 mt-4">
            Schedule Appointment Now
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4">
          <form className="w-full sm:max-w-md flex flex-col gap-4">
            <input type="text" placeholder="Name*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full placeholder:pl-2" />
            <input type="text" placeholder="Mobile Number*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full placeholder:pl-2" />
            <input type="email" placeholder="Email*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full placeholder:pl-2" />
            <textarea placeholder="Your Query*" rows="4" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full resize-none placeholder:pl-2" />
            <select className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full text-gray-500">
              <option>Estimated Budget*</option>
              <option>Below ₹5 Lakh</option>
              <option>₹5 - ₹10 Lakh</option>
              <option>₹10+ Lakh</option>
            </select>
            <button className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-110 transition-transform duration-200">
              SUBMIT
            </button>
          </form>

          <div className="relative w-full flex-1 h-[500px] mt-10 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="/roundimg1.webp" className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-xl" />
              <div className="absolute top-5 right-5 bg-white px-4 py-2 rounded-xl shadow text-xl font-semibold">Design</div>
            </div>

            <div className="absolute bottom-0 right-0">
              <img src="/roundimg2.webp" className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-5 right-5 bg-black text-white px-4 py-1 rounded-xl shadow text-lg font-semibold">Implement</div>
            </div>

            <div className="absolute bottom-0 left-0">
              <img src="/roundimg3.webp" className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-5 left-5 bg-black text-white px-4 py-1 rounded-xl shadow text-lg font-semibold">Survey</div>
            </div>

            <div className="absolute top-0 right-0">
              <img src="/roundimg4.webp" className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-1 right-1 bg-white px-3 py-1 rounded-xl shadow text-sm font-semibold">Handover</div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-4 sm:px-10 bg-red-50" ref={statsRef}>
        <h2 className="text-3xl font-bold mb-4">Why Clients Trust Us as the Best Interior Designers in Delhi</h2>
        <p className="w-full mx-auto text-gray-700 mb-12">
          Clients trust Miggla as the best interior designers in Delhi for our perfect blend of luxury interior design, functional space planning, and customized turnkey solutions. We start every project with a detailed consultation to align with your lifestyle or brand vision. Our expert team delivers stunning residential interiors, commercial office designs, and modern home renovations across Delhi NCR—always with a focus on quality, innovation, and timely delivery.
        </p>

        <div className="border-t border-b py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-[#444444]">Journey</h3>
            <p className="text-gray-600 mt-2">Migglа began with a vision to transform ordinary spaces into timeless.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold  text-[#444444]">{counts[0]}+</h3>
            <p className="text-gray-700 mt-2">Satisfy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#444444]">{counts[1]}+</h3>
            <p className="text-gray-700 mt-2">Project Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#444444]">{counts[2]}+</h3>
            <p className="text-gray-700 mt-2">Years Experience</p>
          </div>
        </div>
      </section>
    </main>
  );
}


