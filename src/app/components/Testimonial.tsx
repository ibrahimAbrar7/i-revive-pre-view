"use client";

import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const reviews = [
  {
    name: "Adiba Fatima",
    content:
      "Professional and clean facility where privacy is respected. A1 service by the practitioners. A bit costly, but worth the experience and comfort.",
  },
  {
    name: "Anjum Fatima",
    content:
      "Wonderful hijama experience for myself and ruqyah for my child. The staff was excellent and very cooperative. A peaceful and fulfilling visit.",
  },
  {
    name: "Ramlatha Ramla",
    content:
      "Traveled from the Andaman Islands. Felt truly relaxed after hijama therapy. Doctor and staff showed real compassion. Highly recommend!",
  },
  {
    name: "Abdul Hameed",
    content:
      "Visited iRevive in Hyderabad. Dr. Imran listened carefully and gave personalized suggestions. The technicians performed with great care and skill.",
  },
  {
    name: "Zeenith Zia",
    content:
      "One of the best hijama centers in town. Cleanliness maintained, sunnahs followed, and staff is humble. Currently undergoing ruqyah sessions too.",
  },
  {
    name: "Mohammed Sayeed",
    content:
      "A unique experience! Excellent hygiene and maintenance. No worries about infections. They’ve elevated the hijama standard. Definitely recommended!",
  },
  
];

export default function Testimonials() {
  return (
    <section className="bg-[#F2F4F7] py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-4">
          <Image
            src="/google-logo.png"
            alt="Google Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-black">5.0</h2>
          <div className="flex justify-center text-yellow-400 my-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <IoIosStar
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current"
                />
              ))}
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 rounded-xl bg-white shadow-md h-full flex flex-col justify-between mb-12">
                <div className="text-[#99CC66] text-2xl mb-2">
                  <RiDoubleQuotesR />
                </div>
                <div className="text-sm text-gray-800 pb-4 leading-relaxed text-justify">
                  {review.content}
                </div>
                <p className="font-semibold text-gray-900 mt-auto">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center">
          <Link
            href="https://www.google.com/search?sca_esv=177fae3e0b1a050b&hl=en-IN&gl=in&sxsrf=AHTn8zppkj79D5TqwRDCMDE3cF7pQ2nCJg:1746711331220&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzakj-GbCdSCkmqupr1KjpohNisQQTKommH0Zco98T6yEya8zN6FR9OvjIH7y93CINOoDB6gdLMXwW3xvQw7lV6g1Zb35Mm4NuSJOHYwRrIV1b36zUrFPOTdpiguNCM1hAB3DSIQ%3D&q=i-Revive+Cupping+Clinic+%28Hijama%29+Reviews&sa=X&ved=2ahUKEwiztLDj_pONAxWVSWwGHWgdHJoQ0bkNegQIQRAE&biw=1600&bih=773&dpr=1"
            target="blank"
            className="bg-primary text-white px-6 py-3 rounded-full border border-green-300 hover:bg-white hover:text-hovershed transition-all duration-300"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
