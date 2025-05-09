"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatment Plans", href: "/treatment-plans" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQs", href: "/faq" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Courses", href: "/courses" },
    { name: "Book Appointment", href: "/book-appointment" },
  ];

  const services = [
    { title: "Sunnah Basic", slug: "sunnah-basic" },
    { title: "Sunnah Plus", slug: "sunnah-plus" },
    { title: "Vital Organ Cleanse", slug: "vital-organ-cleanse" },
    { title: "Head Cupping", slug: "head-cupping" },
    { title: "Lymphatic Cleanse", slug: "lymphatic-cleanse" },
    { title: "Infertility Cupping", slug: "infertility-cupping" },
    { title: "i-Revive Plan", slug: "i-revive-plan" },
    { title: "Custom Plan", slug: "custom-plan" },
    {
      title: "Sports Plus",
      slug: "why-choose-a-female-hijama-specialist-in-hyderabad",
    },
  ];

  return (
    <footer className="bg-blackone text-gray-300 text-sm">
      <div className="container mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Quote */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <div className="relative w-48 h-16">
              <Image
                src="/i-revive-logof.avif"
                alt="i-REVIVE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-lg leading-relaxed max-w-xs mt-2">
            If you think wellness is expensive, then how about illness?
          </p>
          <div className="flex gap-3 mt-5">
            {[FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://www.facebook.com/share/16BDece5wc/"
                    : i === 1
                    ? "https://www.instagram.com/i.revive_hyd"
                    : "https://youtube.com/@i-revive4714"
                }
                className="bg-primary hover:bg-hovershed text-white p-2.5 rounded-full transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-hovershed transition-all hover:tracking-wide text-md md:text-lg"
                >
                  <IoIosArrowRoundForward size={22} /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-2xl mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link
                  href={`/treatment-plans/${service.slug}`}
                  className="flex items-center gap-2 hover:text-hovershed transition-all hover:tracking-wide text-md md:text-lg"
                >
                  <IoIosArrowRoundForward size={18} /> {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <address className="not-italic">
          <h4 className="text-white font-semibold text-2xl mb-4">
            Contact Info
          </h4>
          <ul className="space-y-6 text-base">
            <li className="flex items-start gap-3">
              <MdLocationOn
                className="text-primary mt-1.5 flex-shrink-0"
                size={20}
              />
              <span className="max-w-xs leading-relaxed">
                6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam,
                Hyderabad, Telangana 500028, India
              </span>
            </li>

            <li className="flex items-center gap-2">
              <MdMail className="text-primary" size={20} />
              <Link
                href="mailto:info@irevive.com"
                className="hover:text-hovershed"
              >
                info@irevive.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-primary" size={20} />
              <Link href="tel:+918009944335" className="hover:text-hovershed">
                +91 80099 44335
              </Link>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blackshed text-center py-4 text-white text-md md:text-lg">
        &copy; 2025{" "}
        <Link
          href="https://www.i-revive.com/"
          className="text-primary hover:text-hovershed transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          i-REVIVE
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
