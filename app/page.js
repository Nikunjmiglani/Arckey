"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dynamic from "next/dynamic";

// Lazy-load VideoSection to reduce main bundle size
const VideoSection = dynamic(() => import("@/components/Videosection"), {
  ssr: false,
  loading: () => null,
});

// Motion wrapper for Next/Image
const MotionImage = motion(Image);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const popIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "backOut" },
};

const slides = [
  {
    image: "/home and office interior design.webp",
    alt: "Modern living room interior designed by Miggla with warm lighting and contemporary furniture",
  },
  {
    image: "/best interior designer in Delhi NCR.webp",
    alt: "Luxury bedroom interior with minimalist decor and natural light",
  },
  {
    image: "/interior designer near me.webp",
    alt: "Contemporary office interior designed by Miggla with clean lines and functional layout",
  },
];



// FAQ Data
const faqs = [
  {
    question: "What services does Miggla offer for interior design in Delhi NCR?",
    answer:
      "Miggla provides end-to-end interior design services for residential and commercial spaces including space planning, 3D designs, modular kitchen and wardrobe design, custom furniture manufacturing, and full turnkey interior solutions. We handle everything from concept to execution — so you can relax and move in stress-free.",
  },
  {
    question: "Do you offer commercial interior design for offices and retail spaces?",
    answer:
      "Yes. Miggla offers expert commercial interior design services across Delhi NCR for corporate offices, clinics, salons, showrooms, cafes, and more. We specialize in designing boss cabins, reception areas, conference rooms, workstations, and brand-aligned interiors that enhance both aesthetics and productivity. Whether you need a modern office makeover or a complete turnkey commercial setup, our team ensures smart space planning, quality execution, and on-time delivery.",
  },
  {
    question: "How long does a full interior design project take?",
    answer:
      "Project timelines vary by size and complexity, but most 2BHK/3BHK homes are delivered within 45–60 days, and commercial spaces in 30–45 days. We're known for our on-time handovers with regular progress updates.",
  },
  {
    question: "What is a turnkey interior solution?",
    answer:
      "A turnkey interior solution means we handle everything—from design, material selection, civil work, electrical, false ceiling, carpentry, furnishing, to final styling. You simply approve the design, and we deliver the finished space, ready for you to walk in.",
  },
  {
    question: "How is Miggla different from other interior designers in Delhi?",
    answer:
      "Miggla offers end-to-end residential and commercial interior design with in-house custom furniture, modular kitchens, and full turnkey execution. With 1000+ projects delivered across Delhi NCR, we ensure Vastu-aligned planning, on-time handovers, and tailored spaces that blend style and function.",
  },
  {
    question: "Can I see previous interior design projects done by Miggla?",
    answer:
      "Yes, you can explore our portfolio of 1000+ completed projects across Delhi, Noida, Gurugram, and Faridabad. Visit our [Project Gallery] or follow us on Instagram for real-time design inspiration.",
  },
];

// Tabs Data
const tabs = [
  {
    title: "Beyond Just Aesthetics",
    content: (
      <>
        <p>
          At Miggla, interior design goes far beyond looks — we craft intelligent, functional, and future-ready spaces. Whether it's a luxury apartment in Delhi or commercial office in NCR, our team focuses on human-centric design, blending form with function. Every layout is optimized for energy flow, natural light, and usability, creating interiors that not only look stunning but also support better living and working.
        </p>
      </>
    ),
    image: "/roundimg4.webp",
  },
  {
    title: "Tailored For You",
    content: (
      <>
        <p>
          We understand that no two spaces — or clients — are alike. That's why we offer personalized interior solutions for both residential and commercial projects. From cozy urban apartments to expansive villas and high-end office interiors, Miggla delivers bespoke furniture, custom modular designs, and turnkey execution that align with your lifestyle or brand identity.
        </p>
      </>
    ),
    image: "/ff.jpg",
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
    image: "/1 (2).jpg",
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
    image: "/mm.jpg",
  },
  {
    title: "Delhi's Trusted Designers",
    content: (
      <>
        <p>
          With dozens of successful projects across Delhi, Noida, Gurgaon, and beyond, Miggla has earned its place as a leading interior design company in Delhi NCR. Our growing client base, 5-star reviews, and repeat business speak volumes about the trust we build. When you choose Miggla, you're choosing passion, precision, and peace of mind — all under one roof.
        </p>
      </>
    ),
    image: "/fgfg.jpg",
  },
];

// Services Data
const services = [
  {
    title: "Commercial Interior design",
    img: "/servicesimg (2).jpeg",
    link: "/commercial-interior-design",
  },
  {
    title: "Residential Interior Design",
    img: "/servicesimg (5).jpeg",
    link: "/residential-interior-design",
  },
  {
    title: "Turnkey Projects",
    img: "/servicesimg (4).jpeg",
    link: "/turnkey-projects",
  },
  {
    title: "Modular kitchen",
    img: "/servicesimg (3).jpeg",
    link: "/modular-kitchen",
  },
  {
    title: "Design Consultation",
    img: "/servicesimg (6).jpeg",
    link: "/design-consultation",
  },
  {
    title: "Bathroom Remodelling",
    img: "/servicesimg (1).jpeg",
    link: "/bathroom-remodelling",
  },
];

// Testimonials Data
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

export default function Home() {
  // Blog States
  const [blogs, setBlogs] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const visibleCount = 3;

  // FAQ States
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Tab States
  const [activeTab, setActiveTab] = useState(0);

  // Popup States
  const [showTimedPopup, setShowTimedPopup] = useState(false);

  // Stats States
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  // Testimonial States
  const [current, setCurrent] = useState(0);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    budget: "",
  });

  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoadingBlogs(true);
        const response = await fetch("/api/blogs");
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const result = await response.json();
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  // Stats Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) setStartCount(true);
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
        let currentVal = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          currentVal += step;
          setCounts((prev) => {
            const updated = [...prev];
            updated[idx] = currentVal >= target ? target : currentVal;
            return updated;
          });
          if (currentVal >= target) clearInterval(interval);
        }, 30);
      });
    }
  }, [startCount]);

  // Testimonial Auto-Rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Timed Popup
  useEffect(() => {
    if (typeof window === "undefined") return;
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowTimedPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Blog Navigation
  const nextBlog = () => {
    if (blogIndex + visibleCount < blogs.length) setBlogIndex(blogIndex + 1);
  };

  const prevBlog = () => {
    if (blogIndex > 0) setBlogIndex(blogIndex - 1);
  };

  // Testimonial Navigation
  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleDotClick = (index) => setCurrent(index);

  // Form Handlers
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    await res.text();
    alert("Submitted Successfully!");
    setFormData({ name: "", phone: "", email: "", query: "", budget: "" });
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <meta property="og:url" content="https://miggla.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="font-sans">
       

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[300px] sm:h-[500px] overflow-hidden"
        >
          {/* BACKGROUND IMAGES */}
          <div className="absolute inset-0 z-0">
            {slides.map((slide, i) => (
              <motion.div
                key={slide.image}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            ))}
          </div>

          
          
          {/* STATIC TEXT — ALWAYS VISIBLE */}
<div className="absolute inset-0 z-10 flex items-center px-6 sm:px-12">
  <div className="max-w-3xl mt-40 text-white">
    
    <h1 className="font-serif sm:text-xl lg:text-3xl font-bold leading-tight">
      Best Interior Designer <br />
      in Delhi NCR
    </h1>

    <p className="mt-5 text-sm sm:text-lg text-gray-200 max-w-xs">
      Residential and commercial interiors delivered on time—without cost surprises.
    </p>

    <Link href="/contact">
      <button
        className="
          mt-6
          mb-15
          inline-flex items-center
          bg-amber-400
          hover:bg-amber-500
          text-black
          text-sm sm:text-base
          font-semibold
          rounded-lg
          px-3 py-1
          transition
          cursor-pointer
        "
      >
        Book Consultation
      </button>
    </Link>

  </div>
</div>


        </motion.section>

        {/* Introduction Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 px-4 sm:px-10"
        >
          <div className="ml-2 sm:ml-10">
            <motion.h1
              variants={fadeInUp}
              className="font-bold text-2xl mb-4"
            >
              Interior design isn’t just about looks—it’s about execution.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-700">
             Miggla delivers planned home and office interiors through end-to-end turnkey execution—on time, without chaos or cost overruns. From modular kitchens and custom furniture to complete residential and commercial projects, our experts balance aesthetics, functionality, and disciplined execution for practical spaces.
            </motion.p>
          </div>

          {/* Responsive Steps */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { src: "/finalnewimg (3).jpg", title: "Schedule a visit" },
              { src: "/finalnewimg (4).jpg", title: "Consult Our Experts" },
              { src: "/finalnewimg (1).jpg", title: "Tailor Your Space" },
              { src: "/finalnewimg (2).jpg", title: "Enter Your Dream Space" },
            ].map(({ src, title }, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center sm:block sm:text-center"
              >
                <Link href="#contactform" aria-label={`${title} - go to contact form`}>
                  <div className="w-full">
                    <MotionImage
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={src}
                      alt={title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                </Link>
                <div className="mt-3 sm:mt-4">
                  <h2 className="font-bold text-base sm:text-lg">
                    <span className="text-red-500 text-lg sm:text-xl font-semibold block mb-1">
                      {`0${i + 1}`}
                    </span>
                    {title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 text-center"
          >
            <a href="#contactform">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-5 rounded-full bg-red-400 font-mono text-center"
              >
                Get Started Now
              </motion.button>
            </a>
          </motion.div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#f4f0e9] py-10 px-4 sm:px-10 mt-10"
          id="contactform"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h1 className="font-bold text-3xl sm:text-4xl mb-3">
              Transform Your Space With The Best Interior Designers In Delhi
            </h1>
            <p className="text-gray-700">
              Your dream home is just a click away. Take the first step towards
              a more beautiful and functional living space.
            </p>
            <h2 className="mt-3 text-lg font-medium">
              Let's bring your vision to life!
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-950 text-white font-bold rounded-full px-6 py-3 mt-4"
              type="button"
            >
              Fill the form Now to get a Call
            </motion.button>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.form
              variants={slideInLeft}
              action="https://formspree.io/f/mgvynjpo"
              method="POST"
              className="w-full sm:max-w-md flex flex-col gap-4 mx-auto"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="sr-only"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="sr-only"
                >
                  Mobile Number
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Number*"
                  className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="sr-only"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-query"
                  className="sr-only"
                >
                  Your Query
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="contact-query"
                  name="query"
                  required
                  placeholder="Your Query*"
                  className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full resize-none"
                  onChange={handleChange}
                  value={formData.query}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-budget"
                  className="sr-only"
                >
                  Estimated Budget
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="contact-budget"
                  name="budget"
                  required
                  className="rounded-2xl bg-white shadow-xl px-4 py-3 border border-green-900 w-full text-gray-500"
                  onChange={handleChange}
                  value={formData.budget}
                >
                  <option value="">Estimated Budget*</option>
                  <option>Below ₹5 Lakh</option>
                  <option>₹5 - ₹10 Lakh</option>
                  <option>₹10+ Lakh</option>
                </motion.select>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-black text-white font-bold rounded-full py-3 shadow-lg cursor-pointer"
              >
                SUBMIT
              </motion.button>
            </motion.form>

            {/* Image Grid */}
            <motion.div
              variants={slideInRight}
              className="hidden lg:flex w-full flex-1 gap-10 mt-7"
            >
              <div className="flex-1 h-[504px] rounded-xl overflow-hidden shadow-xl">
                <MotionImage
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="/roundimg1.webp"
                  alt="Contemporary master bedroom with ambient lighting"
                  width={900}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-6 w-[40%]">
                {["/roundimg2.webp", "/roundimg3.webp"].map((src, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative h-60 rounded-xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={src}
                      alt={
                        idx === 0
                          ? "Luxury 3BHK flat interior design in Noida"
                          : "Vastu-compliant pooja room with custom cabinetry"
                      }
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="border-t border-gray-500 mx-6 sm:mx-20"></div>

        {/* Services Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#f4f0e9] py-16 px-4 sm:px-10"
          id="services"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Services We Provide
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our range of expert services that transform spaces into
              dream homes with thoughtful design and flawless execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-2 text-center lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {services.map(({ title, img, link }, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Link href={link} aria-label={`Learn more about ${title}`}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer">
                    <MotionImage
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={img}
                      alt={title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          ref={statsRef}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16 px-4 sm:px-10 bg-white"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Clients Trust Us as the Best Interior Designers in Delhi
            </h2>
            <p className="text-gray-700 mb-12 max-w-4xl mx-auto">
              Clients trust Miggla as the best interior designers in Delhi for
              our perfect blend of luxury interior design, functional space
              planning, and customized turnkey solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="border-t border-b py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                number: "Journey",
                text: "Miggla began with a vision to transform ordinary spaces into timeless.",
              },
              { number: `${counts[0]}+`, text: "Satisfied Customers" },
              { number: `${counts[1]}+`, text: "Projects Completed" },
              { number: `${counts[2]}+`, text: "Years Experience" },
            ].map((stat, index) => (
              <motion.div key={index} variants={popIn} className="text-center">
                <motion.h3
                  className="text-3xl font-bold text-[#444444]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                  }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 mt-2">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Story Behind Section */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-0 mt-16"
          >
            <motion.div variants={slideInLeft}>
              <h2 className="text-4xl font-bold mb-6">
                The Story Behind Delhi's Best Interiors
              </h2>
              <p className="text-gray-700 mb-4">
                Miggla's journey to becoming one of the best interior designers
                in Delhi is built on vision, creativity, and commitment. Led by
                Director Sandeep Kumar and award-winning designer Arti Gupta, we
                create luxurious, functional interiors for both residential and
                commercial projects across Delhi NCR.
              </p>
              <p className="text-gray-700 mb-4">
                From luxury homes to modern corporate offices, Miggla delivers
                turnkey interior solutions that blend innovation, style, and
                functionality. With a client-focused approach, we're redefining
                interior design in Delhi NCR through trend-driven, personalized
                spaces.
              </p>
              <p className="text-gray-700 mb-6">
                Miggla delivers turnkey interior solutions for luxury homes and
                corporate offices, blending innovation, style, and
                functionality. With a client-first mindset and trend-led design,
                we're redefining interior design in Delhi NCR.
              </p>
            </motion.div>

            <motion.div variants={slideInRight}>
              <Image
                src="/bigimg.webp"
                alt="Modular wardrobe design for compact spaces"
                width={900}
                height={600}
                loading="lazy"
                className="w-full rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <div className="border-t border-gray-500 mx-6 sm:mx-20"></div>

        {/* Founders Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white py-20 px-4 sm:px-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              variants={slideInLeft}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                Meet Our Founders
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                With over a decade of experience in architectural and interior
                excellence, our founders envisioned a design house that not only
                delivers style but also understands space, budget, and human
                emotion.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Their journey began with a shared passion for elegant
                functionality. Today, they lead a team of passionate designers
                delivering turn-key solutions tailored for every lifestyle.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Designing Beyond Aesthetics
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong> Miggla</strong> is driven by two creative leaders
                  transforming both <strong> residential </strong> and{" "}
                  <strong> commercial interiors </strong> across{" "}
                  <strong> Delhi NCR.</strong>
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>Sandeep Kumar</strong>,{" "}
                  <strong>Founder &amp; Director</strong>, brings strategic
                  vision and precision to every project. Known for delivering
                  luxury interiors and custom furniture on time, he leads with
                  innovation, ensuring every space performs beautifully.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>Arti Gupta</strong>,{" "}
                  <strong>Co-Founder &amp; Lead Designer</strong>, is the
                  creative force behind Miggla's signature style. Her designs
                  marry modern elegance with vastu harmony, crafting interiors
                  that are both soulful and stunning.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Together, they shape interiors that inspire, function, and
                  endure.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="w-full md:w-1/2 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/founderfounder.jpg"
                  alt="Miggla founders portrait"
                  width={600}
                  height={700}
                  loading="lazy"
                  className="object-cover w-full h-auto"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 left-4 right-4 bg-white p-5 shadow-lg rounded-2xl border-l-4 border-yellow-500"
              >
                <p className="italic text-gray-700">
                  "We design spaces that don't just look beautiful, but feel
                  like home."
                </p>
                <p className="mt-2 text-right font-semibold text-gray-800">
                  – Founders
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#f4f0e9] py-10 px-4 sm:px-10"
          id="delivered-projects"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Delivered Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Take a look at some of the beautiful spaces we've had the
              pleasure of creating for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 text-center sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {[
              { title: "Elegant 3BHK in Gurgaon", img: "/nowimg (6).jpeg" },
              { title: "Modern Kitchen in Noida", img: "/servicesimg (5).jpeg" },
              {
                title: "Luxury Living Room Delhi",
                img: "/servicesimg (2).jpeg",
              },
              { title: "Office Interior Mumbai", img: "/servicesimg (1).jpeg" },
              { title: "Classic Bedroom Setup", img: "/nowimg (3).jpeg" },
              { title: "Rustic Theme Apartment", img: "/nowimg (4).jpeg" },
            ].map(({ title, img }, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"
              >
                <MotionImage
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={img}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Miggla Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-10 px-4 sm:px-6 md:px-20 bg-white"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left"
          >
            Why Miggla
          </motion.h2>

          {/* Tab Navigation */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center sm:justify-start border-b border-gray-300 text-base sm:text-lg font-medium text-gray-700 mb-8 space-x-2"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 py-2 transition ${activeTab === index
                  ? "border-b-2 border-yellow-500 text-black"
                  : "text-gray-600 hover:text-black"
                  }`}
                onClick={() => setActiveTab(index)}
                type="button"
                aria-pressed={activeTab === index}
              >
                {tab.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md mx-auto md:mx-0"
            >
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                width={800}
                height={600}
                loading="lazy"
                className="w-full rounded-lg shadow object-cover"
              />
            </motion.div>

            <motion.div
              key={activeTab + "content"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left space-y-4"
            >
              <span className="text-base sm:text-lg text-gray-700">
                {tabs[activeTab].content}
              </span>
            </motion.div>
          </div>
        </motion.section>

        <VideoSection />

        {/* Testimonials Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          id="reviews"
          className="relative bg-cover bg-center py-16 px-4 sm:px-8 bg-[#f4f0e9]"
          style={{ backgroundImage: "url('/bgimage.webp')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl text-amber-50 font-bold mb-10"
            >
              Our Happy Clients
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200 min-h-[250px]"
              >
                <h3 className="text-xl font-bold mb-4">
                  {testimonials[current].name}
                </h3>
                <hr className="my-4 w-20 mx-auto border-gray-300" />
                <p className="text-gray-700 text-base">
                  {testimonials[current].message}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mt-6 space-x-2"
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${current === index ? "bg-amber-500" : "bg-gray-300"
                    } transition-transform duration-300`}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Brands Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-12 bg-white text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10">
            Partner Brands
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center px-6"
          >
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
              "/brandimg10.webp",
            ].map((src, idx) => (
              <MotionImage
                key={idx}
                variants={popIn}
                whileHover={{ scale: 1.1, grayscale: 0 }}
                src={src}
                alt={`Partner brand logo ${idx + 1}`}
                width={240}
                height={60}
                loading="lazy"
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300 w-auto"
              />
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="min-h-screen px-4 py-15 bg-linear-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center"
        >
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-5 md:-ml-20">
            <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-[400px] max-h-[700px] w-full h-full"
              >
                <Image
                  src="/frthtrh.jpg"
                  alt="L-shaped modular kitchen in matte finish"
                  width={350}
                  height={500}
                  loading="lazy"
                  className="rounded-2xl shadow-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 glassmorphism rounded-3xl shadow-2xl p-6 md:p-10 bg-white/30 backdrop-blur-md border border-white/20"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800"
              >
                Frequently Asked{" "}
                <span className="text-indigo-500">Questions</span>
              </motion.h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-md"
                  >
                    <motion.button
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.5)",
                      }}
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold text-lg transition"
                      type="button"
                      aria-expanded={activeIndex === index}
                    >
                      {faq.question}
                      <motion.div
                        animate={{
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5" aria-hidden="true" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4 text-gray-600 text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-6 sm:px-12 mb-20 relative"
          id="blogs"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-left text-xl sm:text-2xl mb-6 mt-10 font-bold text-gray-800"
          >
            READ BLOG POSTS
          </motion.h1>

          {loadingBlogs ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full mx-auto mb-4"
                aria-label="Loading blog posts"
              />
              <p className="text-gray-500">Loading blog posts...</p>
            </motion.div>
          ) : blogs.length > 0 ? (
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${blogIndex * (100 / visibleCount)
                    }%)`,
                }}
              >
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[33.3333%]"
                  >
                    <Link
                      href={`/blog/${blog.slug?.current}`}
                      aria-label={`Read blog: ${blog.title}`}
                    >
                      <motion.div
                        whileHover={{
                          y: -10,
                          transition: { duration: 0.3 },
                        }}
                        className="cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="relative overflow-hidden rounded-xl"
                        >
                          <Image
                            src={blog.img || "/blog-placeholder.jpg"}
                            alt={blog.title}
                            width={300}
                            height={220}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="object-cover w-full h-[220px] rounded-xl shadow-md"
                          />
                        </motion.div>
                        <h2 className="text-gray-500 mt-3 text-sm sm:text-base">
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </h2>
                        <h1 className="mt-2 text-lg sm:text-xl font-semibold hover:underline transition text-gray-800 line-clamp-2">
                          {blog.title}
                        </h1>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {blogs.length > visibleCount && (
                <>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#1f2937",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevBlog}
                    disabled={blogIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow disabled:opacity-30"
                    type="button"
                    aria-label="Show previous blog posts"
                  >
                    <FaArrowLeft aria-hidden="true" />
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#1f2937",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextBlog}
                    disabled={blogIndex + visibleCount >= blogs.length}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 shadow disabled:opacity-30"
                    type="button"
                    aria-label="Show next blog posts"
                  >
                    <FaArrowRight aria-hidden="true" />
                  </motion.button>
                </>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <p className="text-gray-500">
                No blog posts available yet. Check back soon!
              </p>
            </motion.div>
          )}
        </motion.section>
      </main>
    </>
  );
}
