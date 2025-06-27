'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import "@fortawesome/fontawesome-free/css/all.min.css";
const faqs = [
  {
    question: "Do you offer commercial interior design for offices and retail spaces?",
    answer:
      "Yes. Miggla offers expert commercial interior design services across Delhi NCR for corporate offices, clinics, salons, showrooms, cafes, and more. We specialize in designing boss cabins, reception areas, conference rooms, workstations, and brand-aligned interiors that enhance both aesthetics and productivity. Whether you need a modern office makeover or a complete turnkey commercial setup, our team ensures smart space planning, quality execution, and on-time delivery.",
  },
  {
    question: "How long does a full interior design project take?",
    answer:
      "Project timelines vary by size and complexity, but most 2BHK/3BHK homes are delivered within 45–60 days, and commercial spaces in 30–45 days. We’re known for our on-time handovers with regular progress updates.",
  },
  {
    question: "Can I see previous interior design projects done by Miggla?",
    answer:
      "Yes, you can explore our portfolio of 1000+ completed projects across Delhi, Noida, Gurugram, and Faridabad. Visit our [Project Gallery] or follow us on Instagram for real-time design inspiration.",
  },
  {
    question: "What is a turnkey interior solution?",
    answer:
      "A turnkey interior solution means we handle everything—from design, material selection, civil work, electrical, false ceiling, carpentry, furnishing, to final styling. You simply approve the design, and we deliver the finished space, ready for you to walk in.",
  },
   {
    question: "What services does Miggla offer for interior design in Delhi NCR?",
    answer:
      "Miggla provides end-to-end interior design services for residential and commercial spaces including space planning, 3D designs, modular kitchen and wardrobe design, custom furniture manufacturing, and full turnkey interior solutions. We handle everything from concept to execution — so you can relax and move in stress-free.",
  },
   {
    question: "How is Miggla different from other interior designers in Delhi?",
    answer:
      "Miggla offers end-to-end residential and commercial interior design with in-house custom furniture, modular kitchens, and full turnkey execution. With 1000+ projects delivered across Delhi NCR, we ensure Vastu-aligned planning, on-time handovers, and tailored spaces that blend style and function.",
  },
];



const tabs = [
  {
    title: "Beyond Just Aesthetics",
    content: (
      <>
        <p>
          At Miggla, interior design goes far beyond looks — we craft intelligent, functional, and future-ready spaces. Whether it's a luxury apartment in Delhi or a commercial office in NCR, our team focuses on human-centric design, blending form with function. Every layout is optimized for energy flow, natural light, and usability, creating interiors that not only look stunning but also support better living and working.
        </p>
      </>
    ),
    image: "/roundimg4.webp"
  },
  {
    title: "Tailored For You",
    content: (
      <>
        <p>
          We understand that no two spaces — or clients — are alike. That’s why we offer personalized interior solutions for both residential and commercial projects. From cozy urban apartments to expansive villas and high-end office interiors, Miggla delivers bespoke furniture, custom modular designs, and turnkey execution that align with your lifestyle or brand identity.
        </p>
      </>
    ),
    image: "/finalnewimg (4).jpg"
  },
  {
    title: "On-Time Always",
    content: (
      <>
        <p>
          Deadlines matter. At Miggla, we pride ourselves on on-time delivery and transparent project management. Our seasoned execution team, real-time progress tracking, and detailed planning ensure a smooth, delay-free transformation — so you can move in, launch, or host without stress. We take care of everything, from civil work to final styling.
        </p>
      </>
    ),
    image: "/finalnewimg (1).jpg"
  },
  {
    title: "Crafted With Innovation",
    content: (
      <>
        <p>
          With an in-house team of designers, artisans, and project managers, we bring together high-end craftsmanship and cutting-edge design tools. Every element — be it a custom TV unit, modular kitchen, or CEO cabin — is built to perfection. We use 3D visualization, vastu-integrated planning, and sustainable materials to deliver interiors that feel fresh, functional, and future-proof.
        </p>
      </>
    ),
    image: "/finalnewimg (3).jpg"
  },
  {
    title: "Delhi’s Trusted Designers",
    content: (
      <>
       <p>
        With dozens of successful projects across Delhi, Noida, Gurgaon, and beyond, Miggla has earned its place as a leading interior design company in Delhi NCR. Our growing client base, 5-star reviews, and repeat business speak volumes about the trust we build. When you choose Miggla, you're choosing passion, precision, and peace of mind — all under one roof.
       </p>
      </>
    ),
    image: "/finalnewimg (2).jpg"
  }
];





export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  const [activeTab, setActiveTab] = useState(0);



  const [showPopup, setShowPopup] = useState(true);
  const [index, setIndex] = useState(0);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startCount) setStartCount(true);
    }, { threshold: 0.5 });

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
  const testimonials = [
    {
      name: "Mr Rahul Bansal",
      message:
        "Mrs Arti Gupta has made our house look really beautiful. We are all very pleased with her work. she and her team showed a lot of dedication while designing our house. I would recommend their services to everyone. If you want to design your house, choose Mrs. Arti from Miggla Interiors.",
    },
    {
      name: "Mr Amit Jain",
      message:
        "From the first meeting to the final reveal, everything was so smooth! Thank you for bringing our vision to life.",
    },
    {
      name: "Mr Anshul Goel",
      message:
        "Professional, creative, and incredibly talented team. Highly recommend Latest Interiors for premium home design.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // Auto-Rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);
  const [start, setStart] = useState(0);
  const visible = 3;

  const blogs = [
    {
      img: "/blogimg4.webp",
      date: "JUN 12, 2024",
      title: "Top 7 Commercial Interior Design Trends Transforming Modern Workspaces in 2025",

    },
    {
      img: "/blogimg1.webp",
      date: " MAY 28, 2024",
      title: "Top 5 Bathroom Interior Designers in Delhi NCR | Interior designers near me",

    },
    {
      img: "/blogimg3.webp",
      date: " APR 10, 2024",
      title: "Top 5 Commercial Interior Designers in Delhi NCR – Offices, Retail & Hospitality Spaces",

    },
    {
      img: "/blogimg2.webp",
      date: " MAR 15, 2024",
      title: "Modern Luxury Living Room Design Tips to Transform Your Home in 2025",

    },
    {
      img: "/post-image2.webp",
      date: "FEB 20, 2024",
      title: "Interior Tips for Newly Married Couples",

    },
    {
      img: "/post-image3.webp",
      date: " JAN 5, 2024",
      title: "Modular Kitchen Ideas for Indian Homes",

    },
  ];

  const next = () => {
    if (start + visible < blogs.length) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mgvynjpo", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const result = await res.text();
    alert("Submitted Successfully!");
    setFormData({ name: "", phone: "", email: "", query: "", budget: "" });
  };
  const handleDotClick = (index) => {
    setCurrent(index)
  }
  const leftLinks = [
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#reviews" },
    { name: "Blog", href: "/#blogs" },
    { name: "Contact us", href: "/contact" },

  ]
  const rightLinks = [
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/legal" },
    { name: "Terms & Conditions", href: "/legal" },
    { name: "FAQ", href: "/legal" },


  ]
  const [showTimedPopup, setShowTimedPopup] = useState(false);

  useEffect(() => {
    console.log("Mounted and checking popup...");
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {

      const timer = setTimeout(() => {
        setShowTimedPopup(true);
        sessionStorage.setItem("popupShown", "true");
        console.log("Popup displayed");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);





  return (
    <main className="font-sans">
      {showTimedPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowTimedPopup(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Book a Free Design Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="name" required placeholder="Name" className="w-full border p-2 rounded" onChange={handleChange} value={formData.name} />
              <input type="tel" name="phone" required placeholder="Mobile Number" className="w-full border p-2 rounded" onChange={handleChange} value={formData.phone} />
              <input type="email" name="email" required placeholder="Email" className="w-full border p-2 rounded" onChange={handleChange} value={formData.email} />
              <textarea name="query" required placeholder="Your Query" className="w-full border p-2 rounded" onChange={handleChange} value={formData.query}></textarea>
              <select name="budget" required className="w-full border p-2 rounded text-gray-600" onChange={handleChange} value={formData.budget}>
                <option value="">Estimated Budget</option>
                <option>Below ₹5 Lakh</option>
                <option>₹5 - ₹10 Lakh</option>
                <option>₹10+ Lakh</option>
              </select>
              <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}




      <section className="relative w-full h-[300px] sm:h-[500px] overflow-hidden bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/logologo.webp"
            alt="mainimg"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-10 px-4 sm:px-10">
        <div className="ml-2 sm:ml-10">
          <h1 className="font-bold text-2xl mb-4">Let’s design a space you’ll love — home or office.</h1>
          <p className="text-gray-700">
          Book your free consultation with Delhi’s top interior designers! From stunning commercial and residential interiors to complete turnkey execution, we design for style, function, and timely delivery. Miggla excels in modular kitchens, custom furniture, and transforming spaces you'll love to live or work in.

          </p>
        </div>

        {/* Responsive Steps */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { src: '/finalnewimg (3).jpg', title: "Schedule a visit" },
            { src: '/finalnewimg (4).jpg', title: "Consult Our Experts" },
            { src: '/finalnewimg (1).jpg', title: "Tailor Your Space" },
            { src: '/finalnewimg (2).jpg', title: "Enter Your Dream Space" },
          ].map(({ src, title }, i) => (
            <div key={i} className="flex flex-col items-center text-center sm:block sm:text-center">
              <div className="w-full">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h2 className="font-bold text-base sm:text-lg">
                  <span className="text-red-500 text-lg sm:text-xl font-semibold block mb-1">
                    {`0${i + 1}`}
                  </span>
                  {title}
                </h2>
              </div>
            </div>
          ))}
        </div>


        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 text-center">

          <a href="#contactform">
            <button className="px-6 py-5 hover:scale-110 transition-transform duration-200 rounded-full bg-red-400 font-mono text-center">
              Get Started Now
            </button>
          </a>
        </div>
      </section>




      <section className="bg-[#f4f0e9] py-10 px-4 sm:px-10 mt-10" id="contactform"  >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-bold text-3xl sm:text-4xl mb-3">
            Transform Your Space With The Best Interior Designers In Delhi
          </h1>
          <p className="text-gray-700">
            Your dream home is just a click away. Take the first step towards a more beautiful and functional living space.
          </p>
          <h2 className="mt-3 text-lg font-medium">Let's bring your vision to life!</h2>
          <button className="bg-green-950 text-white font-bold  hover:scale-110 transition-transform duration-200 rounded-full px-6 py-3 mt-4">
            Fill the form Now to get a Call
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <form
            action="https://formspree.io/f/mgvynjpo"
            method="POST"
            className="w-full sm:max-w-md flex flex-col gap-4 mx-auto"
          >
            <input type="text" name="name" required placeholder="Name*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full" />
            <input type="tel" name="phone" required placeholder="Mobile Number*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full" />
            <input type="email" name="email" required placeholder="Email*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full" />
            <textarea name="query" required placeholder="Your Query*" className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full resize-none" ></textarea>
            <select name="budget" required className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full text-gray-500">
              <option value="">Estimated Budget*</option>
              <option>Below ₹5 Lakh</option>
              <option>₹5 - ₹10 Lakh</option>
              <option>₹10+ Lakh</option>
            </select>
            <button type="submit" className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-110 transition-transform cursor-pointer duration-200">SUBMIT</button>
          </form>




          {/* Custom Image Layout Section - Hidden on mobile */}
          <div className="hidden lg:flex w-full flex-1 gap-10 mt-7">

            {/* Left Big Image */}
            <div className="flex-1 h-[504px] rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-full w-full">
                <img
                  src="/roundimg1.webp"
                  alt="Design"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Two Smaller Images */}
            <div className="flex flex-col gap-6 w-[40%]">
              <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/roundimg2.webp"
                  alt="Implement"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/roundimg3.webp"
                  alt="Survey"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>



        </div>
      </section>

      <div className="border-t border-gray-500 mx-6 sm:mx-20"></div>


      <section className="bg-[#f4f0e9] py-16 px-4 sm:px-10 " id="services">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Services We Provide</h2>
          <p className="text-gray-600 text-lg">
            Discover our range of expert services that transform spaces into dream homes with thoughtful design and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 text-center lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Commercial Interior design",

              img: "/servicesimg (2).jpeg",
            },
            {
              title: "Residential Interior Design",

              img: "/servicesimg (5).jpeg",
            },
            {
              title: "Turnkey Projects",

              img: "/servicesimg (4).jpeg",
            },
            {
              title: "Modular kitchen",

              img: "/servicesimg (3).jpeg",
            },
            {
              title: "Design Consultation",

              img: "/servicesimg (6).jpeg",
            },
            {
              title: "Bathroom Remodelling",

              img: "/servicesimg (1).jpeg",
            },
          ].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:scale-110 transition-transform duration-200 overflow-hidden"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>






      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-10 bg-white" >

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Clients Trust Us as the Best Interior Designers in Delhi
          </h2>
          <p className="text-gray-700 mb-12 max-w-4xl mx-auto">
            Clients trust Miggla as the best interior designers in Delhi for our perfect blend of luxury interior design, functional space planning, and customized turnkey solutions.
          </p>

          <div
            className="border-t border-b py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={statsRef}
          >
            <div>
              <h3 className="text-3xl font-bold text-[#444444]">Journey</h3>
              <p className="text-gray-600 mt-2">Migglа began with a vision to transform ordinary spaces into timeless.</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#444444]">{counts[0]}+</h3>
              <p className="text-gray-700 mt-2">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#444444]">{counts[1]}+</h3>
              <p className="text-gray-700 mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#444444]">{counts[2]}+</h3>
              <p className="text-gray-700 mt-2">Years Experience</p>
            </div>
          </div>
        </div>



        {/* Section 2: Story Behind */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-0">
          {/* LEFT: Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">The Story Behind Delhi’s Best Interiors</h2>
            <p className="text-gray-700 mb-4">
              Miggla’s journey to becoming one of the best interior designers in Delhi is built on vision, creativity, and commitment. Led by Director Sandeep Kumar and award-winning designer Arti Gupta, we create luxurious, functional interiors for both residential and commercial projects across Delhi NCR.
            </p>
            <p className="text-gray-700 mb-4">
              From luxury homes to modern corporate offices, Miggla delivers turnkey interior solutions that blend innovation, style, and functionality. With a client-focused approach, we’re redefining interior design in Delhi NCR through trend-driven, personalized spaces.
            </p>
            <p className="text-gray-700 mb-6">
              Miggla delivers turnkey interior solutions for luxury homes and corporate offices, blending innovation, style, and functionality. With a client-first mindset and trend-led design, we’re redefining interior design in Delhi NCR.
            </p>

          </div>

          {/* RIGHT: Image Grid */}
          <div className="">
            <img src="/bigimg.webp" className="" alt="Interior 1" />

          </div>
        </div>



      </section>
      <section className="bg-[#f4f0e9] py-10 px-4 sm:px-10" id="delivered-projects">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Delivered Projects</h2>
          <p className="text-gray-600 text-lg">
            Take a look at some of the beautiful spaces we've had the pleasure of creating for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 text-center sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Elegant 3BHK in Gurgaon",
              img: "/nowimg (6).jpeg",
            },
            {
              title: "Modern Kitchen in Noida",
              img: "/servicesimg (5).jpeg",
            },
            {
              title: "Luxury Living Room Delhi",
              img: "/servicesimg (2).jpeg",
            },
            {
              title: "Office Interior Mumbai",
              img: "/servicesimg (1).jpeg",
            },
            {
              title: "Classic Bedroom Setup",
              img: "/nowimg (3).jpeg",
            },
            {
              title: "Rustic Theme Apartment",
              img: "/nowimg (4).jpeg",
            },
          ].map(({ title, img }, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 md:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
          Why Miggla
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center sm:justify-start border-b border-gray-300 text-base sm:text-lg font-medium text-gray-700 mb-8 space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-3 sm:px-4 py-2 transition ${activeTab === index
                  ? 'border-b-2 border-yellow-500 text-black'
                  : 'text-gray-600 hover:text-black'
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left - Image */}
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full rounded-lg shadow"
            />

          </div>

          {/* Right - Text */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-base sm:text-lg text-gray-700">
              {tabs[activeTab].content}
            </p>

          </div>
        </div>
      </section>








      <section id="reviews"
        className="relative bg-cover bg-center py-16 px-4 sm:px-8 bg-[#f4f0e9]"
        style={{ backgroundImage: "url('/bgimage.webp')" }}

      >
        <div className="absolute inset-0 bg-black/20"></div>





        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-amber-50 font-bold mb-10">Our Happy Clients</h2>

          <div className="relative hover:scale-110 transition-transform duration-500 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200 min-h-[250px] ease-in-out">
            <h3 className="text-xl font-bold mb-4 transition-all duration-500">{testimonials[current].name}</h3>
            <hr className="my-4 w-20 mx-auto border-gray-300" />
            <p className="text-gray-700 text-base transition-all duration-500">
              {testimonials[current].message}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-amber-500 scale-125' : 'bg-gray-300'
                  } transition-transform duration-300`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Brands</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center px-6">
          {[
            "/brandimg1.webp",
            "/brandimg2.webp",
            "/brandimg3.webp",
            "/brandimg4.webp",
            "/brandimg5.webp",
            "/brandimg6.webp",
            "/brandimg7.webp",
            "/brandimg8.webp",
            "/brandimg9.webp",
            "/brandimg10.webp"
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>
      <section className="min-h-screen px-4 py-15 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center ">
     <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-5 md:ml-[-80px]">

        
       {/* Left Image (Only on md+ screens) */}
<div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
  <div className="max-w-[400px] max-h-[700px] w-full h-full ">
    <Image
      src="/frthtrh.jpg"
      alt="Interior Design FAQ"
      width={350}
      height={500}
      className="rounded-2xl shadow-xl object-cover w-full h-full"
    />
  </div>
</div>



        {/* Right FAQ Glass Card */}
        <div className="w-full md:w-1/2 glassmorphism rounded-3xl shadow-2xl p-6 md:p-10 bg-white/30 backdrop-blur-md border border-white/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
            Frequently Asked <span className="text-indigo-500">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold text-lg hover:bg-white/50 transition"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-4 text-gray-600 text-sm"
                    >
                      <div>{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      


      <section className="px-6 sm:px-12 mb-20 relative " id="blogs">
        <h1 className="text-left text-xl sm:text-2xl mb-6 mt-10 font-bold text-gray-800" data-aos="fade-right">
          READ BLOG POSTS
        </h1>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${start * (100 / visible)}%)` }}
          >
            {blogs.map((post, idx) => (
              <div
                key={idx}
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Link
                  key={idx}
                  href={`/blog${idx + 1}`}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={300}
                    height={220}
                    className="object-cover w-full h-[220px] rounded-xl hover:scale-105 transition-transform duration-500 shadow-md cursor-pointer"
                  />
                  <h2 className="text-gray-500 mt-3 text-sm sm:text-base">{post.date}</h2>
                  <h1 className="mt-2 text-lg sm:text-xl font-semibold hover:underline transition text-gray-800">
                    {post.title}
                  </h1>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{post.desc}</p>
                </Link>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={start === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow hover:bg-gray-800 transition disabled:opacity-30"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            disabled={start + visible >= blogs.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow hover:bg-gray-800 transition disabled:opacity-30"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>


      <section>
        <footer className="bg-[#1e1e23] text-white pt-14 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-600">

            {/* Logo + About */}
            <div>
              <Link href="/"> <div className="flex items-center gap-2 mb-4">
                <img src="/logofooter.png" alt="Logo" className="w-12 h-12" />
                <h1 className="text-xl font-bold leading-tight">
                  MIGGLA <br />
                  <span className="text-red-500 font-extralight">luxurious Interior Designer & custom furniture manufacturer</span>
                </h1>
              </div></Link>
              <p className="text-gray-400 text-sm">
                Miggla is at your service, if you want to give your home interiors a fresh and elegant look without spending huge fortune.
              </p>
              <div className="mt-4">
                <p className="text-white font-semibold">Follow Us On:</p>
                <div className="flex gap-3 mt-2 text-gray-300 text-lg">
                  <a href="https://www.facebook.com/migglaofficial" target="/"> <i className=" hover:scale-110 transition-transform duration-200 fab fa-facebook"></i></a>
                  <a href="https://x.com/miggla_official" target="/"><i className="fab  hover:scale-110 transition-transform duration-200 fa-twitter"></i></a>
                  <a href="https://www.youtube.com/@miggla_official" target="/"> <i className="fab  hover:scale-110 transition-transform duration-200  fa-youtube"></i></a>
                  <a href="https://in.pinterest.com/miggla_official/" target="/"><i className="fab  hover:scale-110 transition-transform duration-200 fa-pinterest"></i></a>
                  <a href="https://www.instagram.com/miggla_official/#" target="/"><i className="fab  hover:scale-110 transition-transform duration-200 fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/miggla/posts/?feedView=all" target=""><i className="fab  hover:scale-110 transition-transform duration-200 fa-linkedin"></i></a>
                </div>
              </div>

            </div>

            {/* Useful Links */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Useful Links</h2>
                {leftLinks.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">+ {link.name}</p>
                  </Link>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 invisible md:visible">&nbsp;</h2>
                {rightLinks.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">+ {link.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <h2 className="text-xl font-bold mb-4">Subscribe Us</h2>
              <form
                action="https://formspree.io/f/mgvynjpo"
                method="POST"
                className="flex flex-col sm:flex-row justify-center items-center gap-6"
              >
                <input
                  type="email"
                  name="email"              // Required by Formspree
                  placeholder="Email Address"
                  required                  // Makes the field mandatory
                  className="w-full p-3 bg-gray-700 text-sm rounded-md placeholder:text-gray-400 text-white"
                />
                <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2">
                  Subscribe <span className="text-lg">→</span>
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-3">
                *Subscribe us and get latest news and updates
              </p>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="text-center text-gray-500 text-xs py-6">
            © {new Date().getFullYear()} Miggla. All rights reserved.
          </div>
        </footer>

      </section>






    </main>
  );
}



