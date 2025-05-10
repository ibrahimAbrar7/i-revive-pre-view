// app/components/plans/Infertility.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentPlan } from "../TreatmentPlans";

export default function Infertility() {
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
              Infertility Cupping
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
             Cupping helps body’s internal Ph / chemical / hormonal balances,
            ridding toxins, clearing blockages and improve blood circulation. It
            facilitates a healthy flow of blood to the reproductive organs
            giving them all the nutrients, oxygen, vitamins and minerals they
            need to produce healthy sperm and ovum, and also building a healthy
            endometrium to nourish & sustain a pregnancy.
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
                src="/treat6.jpeg"
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
                   Induce ovulation. Removes blockages and inflammation in the
                  Fallopian tube
                </li>
                <li>
                   Addresses endometriosis or problems where the lining of the
                  uterus forms outside of it
                </li>
                <li> Balances hormones in Ovarian Syndrome (PCOS)</li>
                <li> Helps in promoting hormonal balance</li>
                <li>
                   It helps to reposition a misaligned uterus, which itself
                  helps to increase circulation of blood, lymph, nervous system.
                </li>
                <li> Brings rich, oxygenated blood to ovaries & testes.</li>
                <li>
                   Can increase libido. Can increase the quality and quantity
                  of sperm
                </li>
      </ul>
    </div>

    {/* Duration */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duration</h2>
      <p className="text-gray-700">
         Each session goes for approximately 60-90 mins
      </p>
    </div>

    {/* Requirement */}
    <div className="w-full p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirement</h2>
      <p className="text-gray-700 text-justify">1. iRP Lite (Highly recommended but not mandatory): Lymphatic
                cleanse with wet cupping + 3 session full body & vital organ
                cleanse (upper body + Torso + lower body) <br />
                <br />
                2. Fertility focused wet cupping</p>
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
