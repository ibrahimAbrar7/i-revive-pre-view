"use client";

import Image from "next/image";
import Link from "next/link";

const BestHijamaCentreForLadiesHyderabad = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold">
          Best Hijama Centre for women in Hyderabad
        </h2>
        <p className="mt-4">
          At i-Revive, we understand the unique health needs of women and are
          proud to offer the best Hijama therapy for women in Hyderabad. Our
          center is designed with your comfort and care in mind, providing a
          serene and welcoming environment where you can experience the healing
          benefits of Hijama. <br />
          <br />
          With highly skilled female Hijama specialists in Hyderabad, we ensure
          that every treatment is tailored to meet your specific needs. Whether
          you&apos;re seeking Hijama treatment for women near me for
          detoxification, pain relief, or general wellness, we are here to
          support your journey to better health. <br />
          <br />
          We are committed to making wellness accessible, offering affordable
          Hijama for women in Hyderabad without compromising on quality. Our
          clinic is a safe and professional space, exclusively dedicated as a
          Hijama centre for ladies in Hyderabad, where you can receive expert
          care from our team. <br />
          <br />
          As one of the top-rated Hijama centres for women in Hyderabad,
          i-Revive specializes in various Hijama services, including the best
          cupping therapy for women in Hyderabad, with a focus on your holistic
          well-being. Whether you&apos;re interested in Hijama for weight loss
          for women in Hyderabad or other health benefits, our specialized
          treatments will help you feel revitalized and empowered. <br /> <br />
        </p>
        <p>
          Visit{" "}
          <Link
            href="/"
            className="text-green-600 underline hover:text-green-700"
          >
            i-Revive
          </Link>{" "}
          today, a trusted name among women-only Hijama clinics in Hyderabad,
          and experience the difference personalized care can make for your
          health and happiness.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-2 md:gap-6 justify-center">
                      <div className="w-full aspect-square max-h-[750px] p-2 lg:p-14">
                                  <Image
                                    alt="hi"
                                    src="/irevive11.jpg"
                                    width={600}
                                    height={600}
                                    className="w-full h-full max-h-[750px] object-cover"
                                  />
                                </div>
                      <div className="w-full aspect-square max-h-[750px] p-2 lg:p-14">
                                  <Image
                                    alt="hi"
                                    src="/b16.jpg"
                                    width={600}
                                    height={600}
                                    className="w-full h-full max-h-[750px] object-cover"
                                  />
                                </div>
                    </div>
    </section>
  );
};

export default BestHijamaCentreForLadiesHyderabad;
