"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const slides = [
  {
    image: "/img133.JPG",
    heading: (
      <>
        Health Through Hijama! Divine <br />
        Wisdom, Natural Healing.
      </>
    ),
    paragraph: (
      <>
        Detox the Body & Revive <span className="sm:hidden block my-0"> <br/> </span> the Soul.
      </>
    ),
  },
  {
    image: "/banner1.jpeg",
    heading: (
      <>
        Join Our Course- Learn,  <br />
        Practice and Grow With Us.
      </>
    ),
    paragraph: (
      <>
        Empowering Future Healers.
      </>
    ),
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle the automatic slide change with a clear interval on manual changes
  const handleSlideChange = (direction: "next" | "prev") => {
    clearInterval(intervalRef.current!);

    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  // Go to the next slide
  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Go to the previous slide
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Set an interval for automatic slide change
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Experience the ancient healing of Hijama therapy"
        />
        <meta
          property="og:title"
          content="Experience The Ancient Healing Of Hijama!"
        />
        <meta
          property="og:description"
          content="Discover the benefits of Hijama therapy and book an appointment for wellness."
        />
        <meta property="og:image" content={slides[0].image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={slides[0].image} />
        <title>Experience Ancient Healing with Hijama Therapy</title>
        <link rel="preload" href={slides[0].image} as="image" />
      </Head>

      <div className="relative h-[80vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: "-100%", opacity: 0 }} // Start from above
            animate={{ y: "0%", opacity: 1 }} // Slide to position
            exit={{ y: "100%", opacity: 0 }} // Move down on exit
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={slides[index].image}
              alt={`Hijama therapy image - Slide ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              className="object-cover"
              priority={index === 0} // Prioritize the first image
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-20">
          <h2 className="font-semibold mb-6 text-3xl md:text-3xl lg:text-[4.3rem] lg:leading-none leading-tight font-serif">
            {slides[index].heading}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-5xl leading-none">
            {slides[index].paragraph}
          </p>

          <Link href="/book-appointment">
            <button className="bg-primary text-white px-12 py-4 rounded-full text-[clamp(1.2rem, 2vw, 1.5rem)] hover:bg-white hover:text-hovershed border-[2px] border-green-400 hover:border-hovershed transition">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between px-6 z-30">
          <button
            onClick={() => handleSlideChange("prev")}
            aria-label="Previous Slide"
            className="bg-primary hover:bg-hovershed text-white p-3 rounded-full shadow-lg transition duration-300 max-[645px]:bg-transparent max-[645px]:hover:bg-transparent"
          >
            <ArrowLeft size={30} />
          </button>
          <button
            onClick={() => handleSlideChange("next")}
            aria-label="Next Slide"
            className="bg-primary hover:bg-hovershed text-white p-3 rounded-full shadow-lg transition duration-300 max-[645px]:bg-transparent max-[645px]:hover:bg-transparent"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
