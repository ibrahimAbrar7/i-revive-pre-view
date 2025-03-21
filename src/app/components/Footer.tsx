"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  const links = [
    { name: "About Us", href: "/about-us" },
    { name: "Treatment Plans", href: "/treatment-plans" },
    { name: "Faq's", href: "/faq" },
    { name: "Our Blog & News", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Book Appointment", href: "/book-appointment" },
  ];
  const services = [
    {
      id: 1,
      title: "Sunnah Basic",
      slug: "sunnah-basic",
    },
    {
      id: 2,
      title: "Sunnah Plus",
      slug: "sunnah-plus",
    },
    {
      id: 3,
      title: "Vital Organ Cleanse",
      slug: "vital-organ-cleanse",
    },
    {
      id: 4,
      title: "Head Cupping",
      slug: "head-cupping",
    },
    {
      id: 5,
      title: "Lymphatic Cleanse",
      slug: "lymphatic-cleanse",
    },
    {
      id: 6,
      title: "Infertility Cupping",
      slug: "infertility-cupping",
    },
    {
      id: 7,
      title: "i-Revive Plan",
      slug: "i-revive-plan",
    },
    {
      id: 8,
      title: "Custom Plan",
      slug: "custom-plan",
    },
    {
      id: 9,
      title: "Sports Plus",
      slug: "why-choose-a-female-hijama-specialist-in-hyderabad",
    },
  ];
  return (
    <footer className="bg-blackone text-gray-300">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 gap-12 items-start pt-10">
        {/* Logo and Quote */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center">
            <div className="relative w-52 h-20">
              <Image
                src="/i-revive-logof.avif"
                alt="i-REVIVE Logo"
                fill
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="mt-4 text-lg leading-relaxed max-w-xs">
            If you think wellness is expensive, then how about illness?
          </p>
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href={
                  idx === 0
                    ? "https://www.facebook.com/share/16BDece5wc/" // Replace with your Facebook URL
                    : idx === 1
                    ? "https://www.instagram.com/i.revive_hyd?igsh=MXB3aXllMmk2ZXFzZQ==" // Replace with your Instagram URL
                    : "https://youtube.com/@i-revive4714?si=jG9xuzmtJMG8GmCu"
                }
                className="bg-primary p-3 rounded-full text-white hover:bg-hovershed transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <li className="flex items-center gap-2 mb-2 hover:text-hovershed cursor-pointer transition-all duration-300 hover:tracking-wider">
                  <IoIosArrowRoundForward size={20} /> {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-5">Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <Link href={`/treatment-plans/${service.slug}`} key={index}>
                <li
                key={index}
                className="flex items-center gap-2 hover:text-hovershed cursor-pointer transition-all duration-300 hover:tracking-wider"
              >
                <IoIosArrowRoundForward size={20} /> {service.title}
              </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-5">
            Contact Info
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-2 transition-all duration-300">
              <MdLocationOn
                className="text-primary mt-1 flex-shrink-0"
                size={22}
              />
              <span className="leading-tight">
                6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam,
                Hyderabad, Telangana 500028, India
              </span>
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:tracking-wider">
              <MdMail className="text-primary" size={22} />
              <Link href="mailto:info@irevive.com">info@irevive.com</Link>
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:tracking-wider">
              <MdPhone className="text-primary" size={22} />
              <Link href="tel:+918009944335">800-9944-335</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blackshed mt-12 py-4 text-center text-gray-400 flex justify-center items-center px-10">
        <p className="text-lg">
          &copy; 2025{" "}
          <Link
            href="https://www.i-revive.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-hovershed"
          >
            i-REVIVE
          </Link>
          , All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
