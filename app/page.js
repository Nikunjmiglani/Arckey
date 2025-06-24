'use client';
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import "@fortawesome/fontawesome-free/css/all.min.css";


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
      name: "Mr Mukul Hudiya",
      message:
        "Mr. Shivam Manchanda has made our house look really beautiful. We are all very pleased with his work. He and his team showed a lot of dedication while designing our house. I would recommend their services to everyone. If you want to design your house, choose Mr. Shivam from Latest Interiors.",
    },
    {
      name: "Mrs Priya Sharma",
      message:
        "From the first meeting to the final reveal, everything was so smooth! Thank you for bringing our vision to life.",
    },
    {
      name: "Mr Arjun Verma",
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
      img: "/post-image1.webp",
      date: "DESIGN / JUN 12, 2024",
      title: "Modern 2BHK Interior Under ₹8 Lakh",
      desc: "Explore how we transformed a compact 2BHK into a sleek, modern space with custom storage solutions and ambient lighting.",
    },
    {
      img: "/post-image2.webp",
      date: "STYLING / MAY 28, 2024",
      title: "Best Color Combinations for Small Living Rooms",
      desc: "Get inspired with palettes that enhance space perception and give a luxurious feel even in compact homes.",
    },
    {
      img: "/post-image3.webp",
      date: "TRENDS / APR 10, 2024",
      title: "2024 Interior Design Trends You Must Know",
      desc: "From Japandi styles to fluted panels, explore the top home interior trends shaping Indian homes this year.",
    },
    {
      img: "/post-image1.webp",
      date: "LUXURY / MAR 15, 2024",
      title: "Affordable Luxury Interiors for 3BHK Flats",
      desc: "How to achieve a premium finish under ₹12 lakh using budget-friendly materials and smart modular units.",
    },
    {
      img: "/post-image2.webp",
      date: "INSPIRATION / FEB 20, 2024",
      title: "Interior Tips for Newly Married Couples",
      desc: "From shared closets to cozy corners, personalize your new home with thoughtful design ideas.",
    },
    {
      img: "/post-image3.webp",
      date: "MODULAR / JAN 5, 2024",
      title: "Modular Kitchen Ideas for Indian Homes",
      desc: "Explore top layouts and materials for a functional, easy-to-clean kitchen design tailored for Indian cooking.",
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




  return (
    <main className="font-sans">
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
                <button key={type} className="border border-gray-400 px-3 py-1 rounded-full text-sm">{type}</button>
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
              By submitting, you consent to our <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">terms of use</a>.
            </p>
          </div>
        </div>
      )}

      {/* Carousel Section */}
      <section className="relative w-full h-[300px] sm:h-[500px] overflow-hidden bg-gray-100">
        <div className="relative w-full h-full">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              alt={`slide-${i}`}
            />
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow hover:bg-gray-200 transition z-20">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow hover:bg-gray-200 transition z-20">
          <FaArrowRight />
        </button>
      </section>

      {/* Intro Text + Steps */}
      <section className="mt-10 px-4 sm:px-10">
        <div className="ml-2 sm:ml-10">
          <h1 className="font-bold text-2xl mb-4">Home Interiors Made Easy</h1>
          <p className="text-gray-700">
            Book a FREE consultation, get expert guidance from 400+ top designers, and relax as we handle everything from design to installation. With 10,000+ homes transformed, your dream home is just a step away. Let’s design your dream home today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-center">
          {[
            { src: '/photo1.jpg', title: "Book an appointment" },
            { src: '/photo2.jpg', title: "Meet our designers" },
            { src: '/photo3.jpg', title: "Personalise your designs" },
            { src: '/photo4.webp', title: "Move in" },
          ].map(({ src, title }, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt={title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              <h2 className="mt-4 font-bold text-xl">{title}</h2>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 text-center">
          <a href="/" className="hover:text-black text-red-500 text-2xl cursor-pointer">Learn More - </a>
          <a href="/">
            <button className="px-6 py-5 hover:scale-110 transition-transform duration-200 rounded-full bg-red-400 font-mono text-center">Get Started Now</button>
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
            <button type="submit" className="bg-black text-white font-bold rounded-full py-3 shadow-lg hover:scale-110 transition-transform duration-200">SUBMIT</button>
          </form>


          {/* Circular Images Section */}
        <div className="relative w-full flex-1 h-[500px] mt-10 lg:mt-0 hidden lg:block">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="/roundimg1.webp" className="rounded-full w-60 sm:w-72 h-60 sm:h-72 object-cover border-4 border-white shadow-xl" />
              <div className="absolute top-5 right-5 bg-white px-4 py-2 rounded-xl shadow text-xl font-semibold">Design</div>
            </div>
            <div className="absolute bottom-0 right-0">
              <img src="/roundimg2.webp" className="rounded-full w-40 sm:w-48 h-40 sm:h-48 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-5 right-5 bg-black text-white px-4 py-1 rounded-xl shadow text-lg font-semibold">Implement</div>
            </div>
            <div className="absolute bottom-0 left-0">
              <img src="/roundimg3.webp" className="rounded-full w-40 sm:w-48 h-40 sm:h-48 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-5 left-5 bg-black text-white px-4 py-1 rounded-xl shadow text-lg font-semibold">Survey</div>
            </div>
            <div className="absolute top-0 right-0">
              <img src="/roundimg4.webp" className="rounded-full w-28 h-28 object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-1 right-1 bg-white px-3 py-1 rounded-xl shadow text-sm font-semibold">Handover</div>
            </div>
          </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
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
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md">
              READ MORE
            </button>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="">
            <img src="/bigimg.webp" className="" alt="Interior 1" />
           
          </div>
        </div>

        {/* Section 3: Product Categories */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10">Product Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-items-center  ">
            {[
              { label: "Commercial Interior Design", src: "/spcimg1.webp" },
              { label: "Residential Interior Design", src: "/spcimg2.webp" },
              { label: "Luxury Bathroom Design", src: "/spcimg3.webp" },
              { label: "Modular TV Unit", src: "/spcimg4.webp" },
              { label: "Designer Beds", src: "/spcimg5.webp" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-3 cursor-pointer hover:scale-110 transition-transform duration-200">
                <img src={item.src} alt={item.label} className="w-50  h-50 object-cover mx-auto mb-2" />
                <p className="text-base font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      <section
        className="relative bg-cover bg-center py-16 px-4 sm:px-8 bg-[#f4f0e9]"
        style={{ backgroundImage: "url('/bgimage.webp')" }}

      >
        <div className="absolute inset-0 bg-black/20"></div>





        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-amber-50 font-bold mb-10">Our Happy Clients</h2>

          <div className="relative hover:scale-110 transition-transform duration-500 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200 min-h-[250px]  ease-in-out">
            <h3 className="text-xl font-bold mb-4 transition-all duration-500">{testimonials[current].name}</h3>
            <hr className="my-4 w-20 mx-auto border-gray-300" />
            <p className="text-gray-700 text-base transition-all duration-500">
              {testimonials[current].message}
            </p>

            {/* Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              <FaArrowRight />
            </button>
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
      

      <section className="px-6 sm:px-12 mb-20 relative ">
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
                <Image
                  src={post.img}
                  alt={post.title}
                  width={300}
                  height={220}
                  className="object-cover w-full h-[220px] rounded-xl hover:scale-105 transition-transform duration-500 shadow-md"
                />
                <h2 className="text-gray-500 mt-3 text-sm sm:text-base">{post.date}</h2>
                <h1 className="mt-2 text-lg sm:text-xl font-semibold hover:underline transition text-gray-800">
                  {post.title}
                </h1>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{post.desc}</p>
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
              <div className="flex items-center gap-2 mb-4">
                <img src="/logoimg.png" alt="Logo" className="w-12 h-12" />
                <h1 className="text-xl font-bold leading-tight">
                  MIGGLA <br />
                  <span className="text-red-500 font-extralight">luxurious Interior Designer & custom furniture manufacturer</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm">
                Miggla is at your service, if you want to give your home interiors a fresh and elegant look without spending huge fortune.
              </p>
              <div className="mt-4">
                <p className="text-white font-semibold">Follow Us On:</p>
                <div className="flex gap-3 mt-2 text-gray-300 text-lg">
                  <a href=""> <i className=" hover:scale-110 transition-transform duration-200 fab fa-facebook"></i></a>
                  <a href=""><i className="fab  hover:scale-110 transition-transform duration-200 fa-twitter"></i></a>
                  <a href=""> <i className="fab  hover:scale-110 transition-transform duration-200  fa-youtube"></i></a>
                  <a href=""><i className="fab  hover:scale-110 transition-transform duration-200 fa-pinterest"></i></a>
                  <a href=""><i className="fab  hover:scale-110 transition-transform duration-200 fa-instagram"></i></a>
                  <a href=""><i className="fab  hover:scale-110 transition-transform duration-200 fa-linkedin"></i></a>
                </div>
              </div>

            </div>

            {/* Useful Links */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Useful Links</h2>
                {[
                  "3D Services", "Testimonials",
                  "Blog", "Get a Quote", "Contact us", "Talk to Designer"
                ].map((link, idx) => (
                  <p key={idx} className="text-gray-400 text-sm hover:text-white cursor-pointer">+ {link}</p>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4 invisible md:visible">&nbsp;</h2>
                {[
                  "Careers", "Privacy Policy", "Terms & Conditions",
                  "FAQ", "Vastu for Interior", "Services"
                ].map((link, idx) => (
                  <p key={idx} className="text-gray-400 text-sm hover:text-white cursor-pointer">+ {link}</p>
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



