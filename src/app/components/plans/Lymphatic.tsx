// app/components/plans/Lymphatic.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentPlan } from "../TreatmentPlans";

export default function Lymphatic() {
  return (
    <section className="text-black bg-white mt-7 md:mt-0">
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
              Lymphatic Cleanse
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
              The lymphatic system is our body’s ‘sewerage system’. It is
            responsible for collecting and removing wastes, toxins, dead cells
            etc from the tissues, acting as a systematic garbage collection
            service. When this waste is not collected adequately or effectively,
            it congregates as a localized congestion. <br />
            <br />
            This is where Cupping Therapy can assist; in the removal of these
            blockages and stagnant fluids and having the lymph channels clear to
            allow the lymphatic system to operate freely once again.
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
                src="/treat5.jpeg"
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
        <li>
                   Stimulate the lymphatic system and release local toxins
                </li>
                <li> Clear blockages and stagnated circulation</li>
                <li>
                   Activate and clear the veins, arteries and capillaries
                </li>
                <li>
                   Helps treat blood disorders and neurological disorders
                </li>
                <li>
                   Reduces anxiety & depression by sedating central nervous
                  system
                </li>
                <li>
                   Boosts metabolism and immune system. Facilitates weight loss
                </li>
      </ul>
    </div>

    {/* Duration */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duration</h2>
      <p className="text-gray-700 text-justify">
        Each session goes for approximately 90-120 mins
      </p>
    </div>

    {/* Requirement */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirement</h2>
      <p className="text-gray-700">3 Sessions - 2 LD (lymphatic drainage)+ 1 HLD (LD followed by
                Hijama cupping on nodal sites), weekly once for first timers;
                may take more sessions to show up quantifiable/noticeable
                results.</p>
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
