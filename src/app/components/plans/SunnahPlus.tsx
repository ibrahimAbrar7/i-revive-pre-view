// app/components/plans/SunnahPlus.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentPlan } from "../TreatmentPlans";

export default function SunnahPlus() {
  return (
    <section className="text-black bg-white">
      <TreatmentPlan />
      <section className="relative bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Text Content */}
          <div>
            <Link
              href="/treatment-plans"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary hover:underline transition duration-200 mt-4 md:mt-0"
            >
              <span className="mr-1 text-lg font-semibold">←</span> Back to
              Treatment Plans
            </Link>

            <h1 className="mt-4 text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Sunnah Plus
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
              The Sunnah Plus is a more extensive plan that covering 9 (10 with
            2nd Kahil) points including the basic Sunnah points, along with a
            deep tissue stroke and gliding cupping.
            </p>
            <div className="mt-8">
              <Link
                href="/book-appointment"
                className="bg-primary text-white px-7 py-3 rounded-full border border-hovershed hover:bg-white hover:text-hovershed hidden lg:inline-block"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/treat2.jpeg"
                alt="Sunnah Basic Treatment"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
    {/* Benefits */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li> Back and neck pains</li>
                <li> Stiff muscles & Sore joints</li>
                <li> Reduces pain and inflammation</li>
                <li> Migraines, Head Aches & Fatigue</li>
                <li> Rheumatic diseases such as arthritis andfibromyalgia.</li>
                <li> Fertility and gynecological disorders.</li>
                <li> Skin problems such as eczema and acne.</li>

                <li>
                   Sedate the nervous system (which makes it anexcellent
                  treatment for high blood pressure).
                </li>
                <li> Menstrual cramps,PMS and other OBGYN issues</li>
      </ul>
    </div>

    {/* Duration */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duration</h2>
      <p className="text-gray-700">
        Each session lasts approximately 45–60 minutes.
      </p>
    </div>

    {/* Requirement */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirement</h2>
      <p className="text-gray-700">1 Session</p>
    </div>
  </div>
</section>

      <div className="relative bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            <span className="text-primary">“Hijama Cupping”</span> – The only
            therapy which affects both{" "}
            <span className="text-primary font-extrabold">Body</span> &{" "}
            <span className="text-primary font-extrabold">Soul</span>.
          </h2>
        </div>
      </div>
    </section>
  );
}
