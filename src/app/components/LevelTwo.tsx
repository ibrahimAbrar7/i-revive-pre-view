import React from "react";
import ThreeCoursesButton from "./ThreeCoursesButton";
import Link from "next/link";

const LevelTwo = () => {
  return (
    <div className="bg-white">
      <ThreeCoursesButton activeCourse={2} />
      
      {/* First Row: Content + Video */}
      <section className="relative bg-white py-4 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Course Content */}
          <div className="lg:order-1 lg:col-span-1">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Hijama Practitioner Pro
            </h1>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Course Details
              </h2>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Proficiency:</strong>{" "}
                  <span>Level 2</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Duration:</strong>{" "}
                  <span>4 days + 7 days as intern at i-Revive Wellness Clinic</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Format:</strong>{" "}
                  <span>Hands-on practice + Advanced theory</span>
                </li>
              </ul>
              <div className="mt-4 text-gray-700">
                <p>
                  Building upon Level One, this course advances practitioners&apos;
                  proficiency in Hijama therapy...
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdE3IeK4Ztz_3DCkcqO2bIkieNq3vAxCMF7reIAyH0skP_RfA/viewform?pli=1" target="_blank"
                  className="bg-[#557a1f] text-white mt-4 md:mt-6 px-6 py-2 rounded-md border border-green-300 hover:bg-white hover:text-hovershed transition-all duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Video */}
          <div className="w-full h-0 pb-[56.25%] relative lg:order-2 lg:h-[350px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8hjUOqhcVd8"
              title="Hijama Practitioner Pro - Level 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Second Row: Boxed Sections */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {/* Conclusion of Level 2 */}
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              By the conclusion of Level Two, participants will:
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Accurately diagnose and treat various conditions.</li>
              <li>Manage pain and provide relief effectively.</li>
              <li>Implement dry gliding & facial cupping techniques.</li>
              <li>Integrate complementary procedures.</li>
            </ul>
          </div>

          {/* Who Is This Course For */}
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who Is This Course For?
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Those who have completed Level 1.</li>
              <li>Practitioners looking to master advanced Hijama techniques.</li>
            </ul>
          </div>

          {/* What You’ll Learn */}
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What You’ll Learn:
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Extended Anatomy & Physiology</li>
              <li>Advanced disease diagnosis & treatment.</li>
              <li>Pain Management strategies.</li>
              <li>Facial & Gliding Cupping Techniques</li>
            </ul>
          </div>

          {/* Why Choose Our Course */}
          <div className="w-full p-6 mb-12 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Course?
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>
                <strong>Expertly Designed Curriculum:</strong> Advanced training
                backed by medical professionals.
              </li>
              <li>
                <strong>Hands-on Experience:</strong> Intern at a real wellness
                clinic.
              </li>
              <li>
                <strong>Globally Certified:</strong> Meets international
                standards.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LevelTwo;
