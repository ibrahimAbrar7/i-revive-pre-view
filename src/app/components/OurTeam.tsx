"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/data/teamData";

export default function OurTeam() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect(); // Initial check

    // Cleanup function
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-16 px-6 lg:px-44">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex justify-center items-center">
          <h3 className="flex items-center gap-4 text-[#99b760] font-semibold text-2xl md:text-3xl font-playfair-display uppercase tracking-wider pb-12 md:pb-16">
            <span className="flex flex-col gap-[5px] mt-2 transform scale-x-[-1]">
              <span className="w-12 h-[2px] bg-[#99b760]"></span>
              <span className="w-20 h-[2px] bg-[#99b760]"></span>
            </span>
            Our Team
            <span className="flex flex-col gap-[5px] mt-2">
              <span className="w-12 h-[2px] bg-[#99b760]"></span>
              <span className="w-20 h-[2px] bg-[#99b760]"></span>
            </span>
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4"
                >
                  <div className="group relative bg-white hover:rounded-none rounded-2xl overflow-hidden shadow-lg hover:shadow-none border border-gray-100 h-full transition-all">
                    {/* Image */}
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    {/* Content */}
                    <div className="py-4 px-3 text-center">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      {member.occupation && (
                        <p className="text-sm text-gray-500">
                          {member.occupation}
                        </p>
                      )}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 border border-gray-400 bg-primary dark:bg-gray-900/80 text-center px-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-md lg:text-lg text-white font-bold">
                        {member.occupation}
                      </p>
                      <Link
                        href={`/profile/${member.slug}`}
                        className="mt-4 bg-white text-primary px-4 py-2 rounded-full hover:bg-white/80 border border-[#99b760] transition-all font-bold"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 transition-all lg:hidden ${
              canScrollPrev
                ? "bg-primary dark:bg-gray-700 hover:bg-primary/80 dark:hover:bg-gray-600"
                : "opacity-50 cursor-not-allowed bg-gray-200 dark:bg-gray-800"
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-white dark:text-black" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10 transition-all lg:hidden ${
              canScrollNext
                ? "bg-primary dark:bg-gray-700 hover:bg-primary/80 dark:hover:bg-gray-600"
                : "opacity-50 cursor-not-allowed bg-gray-200 dark:bg-gray-800"
            }`}
          >
            <ChevronRight className="h-6 w-6 text-white dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
