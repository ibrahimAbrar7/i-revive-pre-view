'use client';
import { useState } from 'react'; // Importing useState to manage content visibility
import Image from 'next/image';

const About = () => {
  // State to manage the visibility of the content
  const [showFullContent, setShowFullContent] = useState(false);

  // Toggle function to show and hide content
  const toggleContent = () => setShowFullContent((prev) => !prev);

  return (
    <section className="pt-8 pb-8 md:px-16 xl:px-44 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
        {/* Left: Image (1/3 on md+) */}
        <div className="w-full md:col-span-3">
          <Image
            src="/about-img.jpg" 
            alt="Hijama Treatment"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full"
          />
        </div>

        <div className="md:col-span-4">
          <h3 className="flex items-center gap-4 text-[#99b760] font-semibold text-2xl md:text-3xl font-playfair-display uppercase tracking-wider">
            What We Do
            <span className="flex flex-col gap-[5px] mt-2">
              <span className="w-12 h-[2px] bg-[#99b760]"></span>
              <span className="w-24 h-[2px] bg-[#99b760]"></span>
            </span>
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-snug mb-4 font-playfair-display">
            Healing Through Hijama-Natural Wellness for Your Body
          </h2>

          <div className={`${showFullContent ? '' : 'line-clamp-6'}`}>
            <p className="text-gray-500 mb-4 text-justify">
              At i-Revive Hijama Center in Hyderabad, we offer professional Hijama (cupping therapy) for both women and men, designed to restore health, balance, and overall well-being. Whether you’re struggling with back pain, neck stiffness, migraines, fatigue, or chronic conditions like diabetes, hormonal imbalances, or high blood pressure, our certified Hijama specialists are here to support your healing journey.
            </p>

            <p className="text-gray-700 mb-4 text-justify">
              We also provide Hijama for females by experienced female therapists, ensuring complete privacy, comfort, and personal care in a safe environment. Our therapy works by removing toxins, improving blood circulation, and stimulating the body’s natural ability to heal itself—gently and effectively.
            </p>

            <p className="text-gray-700 text-justify">
              At i-Revive, we believe in real results and have helped many clients experience relief and transformation through regular sessions. If you&apos;re looking for the best Hijama center in Hyderabad or a ladies-only Hijama center near you, we’re here for you.
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={toggleContent}
              className="bg-primary text-white px-7 py-2 rounded-full border border-green-600 hover:bg-white hover:text-hovershed transition-all duration-300"
            >
              {showFullContent ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
