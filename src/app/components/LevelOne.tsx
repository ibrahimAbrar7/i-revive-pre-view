import Link from "next/link";
import ThreeCoursesButton from "./ThreeCoursesButton";

export default function LevelOne() {
  return (
    <div className="bg-white">
      <ThreeCoursesButton activeCourse={1} />
      {/* First Row: Content + Video */}
      <section className="relative bg-white py-4 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Course Content */}
          <div className="lg:order-1 lg:col-span-1">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Hijama Practitioner Launchpad 
            </h1>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Course Details
              </h2>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Proficiency:</strong>{" "}
                  <span>Level 1</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Duration:</strong>{" "}
                  <span>5 days (3 days Theory + 2 days Hands-on)</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-baseline">
                  <strong className="md:mr-1">Format:</strong>{" "}
                  <span>Theory & Practical Training</span>
                </li>
              </ul>
              {/* Paragraph: Positioned after video on mobile, before on large screens */}
              {/* Right Side: Video */}
              <div className="w-full h-0 pb-[56.25%] relative lg:order-2 lg:h-[350px] lg:hidden mt-8 lg:mt-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/8hjUOqhcVd8"
                  title="Hijama Practitioner Course"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Paragraph: After video on mobile, before video on desktop */}
              <div className="lg:hidden order-2 mt-4 text-gray-700">
                <p>
                  Learn Hijama with our comprehensive Level One course, designed
                  for beginners and aspiring practitioners...
                  <br />
                  Unlike most courses that focus only on history, geography, and
                  basic Hijama procedures, we provide you with a solid
                  foundation...
                </p>
              </div>

              <div className="hidden lg:block lg:order-1 text-gray-700">
                <p>
                  Learn Hijama with our comprehensive Level One course, designed
                  for beginners and aspiring practitioners...
                  <br />
                  Unlike most courses that focus only on history, geography, and
                  basic Hijama procedures, we provide you with a solid
                  foundation...
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
          <div className="w-full h-0 pb-[56.25%] relative lg:order-2 lg:h-[350px] hidden lg:block">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8hjUOqhcVd8"
              title="Hijama Practitioner Course"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Second Row: Who is this course for and Why choose our course */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Curriculum Highlights
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>The human body from a contemporary medical perspective.</li>
              <li>The metaphysical aspects of the human body.</li>
              <li>All essential and core components of Hijama.</li>
            </ul>
          </div>

          {/* Who is this course for */}
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who Is This Course For?
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Individuals with no prior experience in Hijama</li>
              <li>Aspiring clinic owners or therapists</li>
              <li>Individuals looking to learn and apply Hijama</li>
            </ul>
          </div>

          {/* Why choose our course */}
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Course?
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>
                <strong>Expertly Designed Curriculum:</strong> Developed under
                the guidance of leading professionals.
              </li>
              <li>
                <strong>International Accreditation:</strong> Recognized by
                esteemed international bodies.
              </li>
              <li>
                <strong>Hands-on Experience:</strong> Every student participates
                in practical Hijama sessions.
              </li>
              <li>
                <strong>Comprehensive Knowledge:</strong> Medical, metaphysical,
                and Hijama practices.
              </li>
            </ul>
          </div>
          <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What You’ll Learn?
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Human Body, Health & Disease</li>
              <li>Metaphysical aspects affecting Wellness</li>
              <li>Anatomy & Physiology (from a Hijama perspective)</li>
              <li>Hijama Techniques & Insights</li>
              <li>Preventative Maintenance through Hijama</li>
              <li>Practical application of Sunnah points</li>
              <li>Hygiene, sterilization, and safety protocols</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
