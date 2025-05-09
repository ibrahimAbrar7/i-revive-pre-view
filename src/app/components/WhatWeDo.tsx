"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatWeDoData } from "../../data/whatWeDoData";
import Link from "next/link";

const WhatWeDo = ({ limit = 8 ,showMoreButton = true}) => {
  // Slice the data to show only the first 'limit' number of plans
  const displayPlans = whatWeDoData.slice(0, limit);

  return (
    <section className="text-center py-6 lg:py-16 px-6 md:px-36 bg-white overflow-hidden">
      <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
        <h3 className="mx-[-1.5rem] md:mx-[-5rem] flex items-center gap-2 text-[#99b760] font-semibold text-2xl md:text-3xl font-playfair-display uppercase tracking-wider pb-2 md:pb-4">
          <span className="flex flex-col gap-[5px] mt-2 transform scale-x-[-1]">
            <span className="w-8 h-[2px] bg-[#99b760]"></span>
            <span className="w-16 h-[2px] bg-[#99b760]"></span>
          </span>
          Treatment Plans
          <span className="flex flex-col gap-[5px] mt-2">
            <span className="w-8 h-[2px] bg-[#99b760]"></span>
            <span className="w-16 h-[2px] bg-[#99b760]"></span>
          </span>
        </h3>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayPlans.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="relative flex flex-col group cursor-pointer rounded-lg overflow-hidden shadow-custom-shadow transition-all duration-500 dark:text-black border-b-8 border-primary card-container"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="overlay-top"></div>
              <div className="overlay-bottom"></div>
            </div>

            <div className="relative h-32 md:h-28 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out md:group-hover:scale-110"
              />
            </div>

            <div className="relative bg-white text-black p-4 overflow-hidden flex flex-col flex-1 justify-between">
              <h3 className="text-xl text-left font-semibold font-serif relative z-10 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-center flex-1 relative z-10 group-hover:text-white">
                {service.description}
              </p>
              <Link href={`/treatment-plans/${service.slug}`} >
                <button className="mt-4 bg-primary text-white py-3 px-5 rounded-full group-hover:bg-white group-hover:text-hovershed border group-hover:border-hovershed transition relative z-10 group-hover:text-primary">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {showMoreButton && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/treatment-plans"
            className="bg-primary text-white px-8 py-4 rounded-full border border-green-300 hover:bg-white hover:text-hovershed transition-all duration-300"
          >
            More Plans
          </Link>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
