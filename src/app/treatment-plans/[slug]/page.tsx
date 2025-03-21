"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import { treatmentPlansData } from "@/data/treatmentPlansData"; // Assuming you have your blog posts here
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function BlogPost() {
  const { slug } = useParams();
  console.log("Slug from useParams:", slug); // Log the slug from the URL
  const plan = treatmentPlansData.find((item) => item.slug === slug);
  console.log("Found Post:", plan); // Log the post object (or undefined if not found)

  if (!plan) {
    notFound(); // Display a 404 page if post is not found
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <Topbar />
      <Header />
     {plan.content}
     {/* Embla Carousel */}
    <div className="container mx-auto relative mt-6 py-4 pb-8">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex space-x-4">
          {treatmentPlansData.map((plan, index) => (
            <div key={index} className="flex-none w-48 sm:w-72">
              <div className="w-full aspect-square bg-gray-200 rounded-lg shadow-lg">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 font-semibold text-gray-800 lg:text-2xl">{plan.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        ➜
      </button>
    </div>

      <Footer />
    </div>
  );
}
