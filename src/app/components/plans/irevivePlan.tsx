// app/components/plans/IRevivePlan.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentPlan } from "../TreatmentPlans";

export default function IRevivePlan() {
  return (
    <section className="text-black bg-white mt-10 md:mt-0">
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
             i-Revive Plan
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
              The i-Revive Plan is a master plan that resets the whole body
            addressing almost all diseases & conditions, chronic issues, various
            imbalances etc. It kickstarts the body back to optimum health using
            a series of cupping sessions acting as a super charged boost to the
            body in a short period of time before the body goes back to its
            DIS-eased state. The plan consists of lymphatic drainage sessions,
            sectional cleansing sessions. The 3 week plan comes with a 21 day
            diet plan.
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
                src="/treat7.jpeg"
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
                   Revives your body as a whole and it’s ability to healitself
                </li>
                <li>
                   Addresses almost all diseases, allergies, conditionsand
                  chronic issues.
                </li>
                <li> Aids the body in achieving homeostasis</li>
                <li> Keeps skin healthy by increasing skin blood flow</li>
      </ul>
    </div>

    {/* Duration */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duration</h2>
      <p className="text-gray-700">
       3 Lymphatic cleanse session 3 Sessions - 2 LD (lymphatic
                drainage)+ 1 HLD (LD followed by Hijama cupping on nodal sites)
                + 3 session full body & vital organ cleanse (Upper body + Torso
                + Lower body)
      </p>
    </div>

    {/* Requirement */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirement</h2>
      <p className="text-gray-700">3-4 weeks plan; 6 sessions</p>
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
