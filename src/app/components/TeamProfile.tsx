"use client";
import Image from "next/image";

interface TeamProfileProps {
  name: string;
  qualification: string;
  description: string;
  image: string;
}

export default function TeamProfile({
  name,
  qualification,
  description,
  image,
}: TeamProfileProps) {
  return (
    <section className="bg-white dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={`Profile image of ${name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-montserrat mb-2">
              {name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-green-600 dark:text-green-400 font-lora mb-4">
              {qualification}
            </h2>
            <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-lora text-justify">
              <strong>{name}</strong>, {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
