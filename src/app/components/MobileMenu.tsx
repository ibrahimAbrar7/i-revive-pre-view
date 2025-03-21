"use client";

import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`xl:hidden bg-white shadow-md fixed top-0 right-0 h-full w-3/4 max-w-sm py-4 px-6 z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-800"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <div className="flex mt-4">
        <Image
          src="/i-revive-logo.avif"
          alt="i-REVIVE Logo"
          width={200}
          height={60}
          className="w-[70%] mb-6"
          priority
        />
      </div>
      <nav className="mt-6 space-y-4 text-black">
        <Link href="/" className="block hover:text-primary">
          HOME
        </Link>
        <Link href="/about-us" className="block hover:text-primary">
          ABOUT US
        </Link>
        <Link href="/treatment-plans" className="block hover:text-primary">
          TREATMENT PLANS
        </Link>
        <Link href="/faq" className="block hover:text-primary">
          FAQ
        </Link>
        <Link href="/blog" className="block hover:text-primary">
          BLOG
        </Link>
        <Link href="/contact-us" className="block hover:text-primary">
          CONTACT US
        </Link>
        <Link href="/courses" className="block hover:text-primary">
          COURSES
        </Link>
        <Link
          href="/book-appointment"
          className="block mt-4 bg-primary text-white text-center py-2 rounded-full border border-primary hover:bg-white hover:text-primary"
        >
          BOOK APPOINTMENT
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
