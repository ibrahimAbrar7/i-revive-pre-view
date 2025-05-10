// app/components/plans/CustomPlan.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentPlan } from "../TreatmentPlans";

export default function CustomPlan() {
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
              Custom Plan
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
             The custom plan targets client specific issues and requirements the
            varying from chronic issues related follow up sessions, pains,
            athletic performance enhancement, injury recoveries, Metaphysical
            issues focused sessions. Personal areas of pain are concentrated
            upon.
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
                src="/treat8.png"
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
        <li> Treats areas of muscular (and otherwise) painf</li>
                <li> Treats metaphysical issues</li>
                <li>
                   Cupping therapy sessions are tailored to your personal
                  issues and needs
                </li>
      </ul>
    </div>

    {/* Duration */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duration</h2>
      <p className="text-gray-700">
        Duration of each session varies with every client, approximately
                45 to 60 minutes and above
      </p>
    </div>

    {/* Requirement */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirement</h2>
      <p className="text-gray-700"> Number of sessions vary with every client</p>
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
