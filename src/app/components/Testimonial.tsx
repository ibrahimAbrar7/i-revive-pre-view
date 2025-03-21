"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import { testimonials } from "../../data/testimonialsData";
import "aos/dist/aos.css";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="bg-primary py-20 text-center text-white"
      data-aos="zoom-in-down"
    >
      <h3 className="text-2xl font-serif font-semibold">TESTIMONIAL</h3>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black font-bold mt-2">
        What Clients are Say
      </h2>
      <div className="flex items-center justify-evenly mt-6 gap-6">
        <button
          onClick={prevTestimonial}
          className="bg-white p-3 rounded-full text-green-500 shadow-lg"
        >
          <FaArrowLeft />
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-2/3 max-w-xl"
        >
         
          <p className="mt-4 text-lg font-light">{testimonials[index].text}</p>
          <h4 className="mt-4 font-semibold">{testimonials[index].name}</h4>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-red-400" />
            ))}
          </div>
        </motion.div>
        <button
          onClick={nextTestimonial}
          className="bg-white p-3 rounded-full text-green-500 shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
