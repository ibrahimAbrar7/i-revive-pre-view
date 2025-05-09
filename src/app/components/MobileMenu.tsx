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
    <>
      {/* Overlay */}
      <div
        className={`${
          isOpen ? "fixed inset-0 bg-black opacity-70" : "hidden"
        } z-30 transition-opacity duration-300`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-md z-40 transform transition-transform duration-300 xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-6 right-6 text-gray-800" onClick={onClose}>
          <X size={28} />
        </button>

        <div className="flex mt-4 px-6">
          <Image
            src="/i-revive-logo.avif"
            alt="i-REVIVE Logo"
            width={200}
            height={60}
            className="w-[70%] mb-6"
            priority
          />
        </div>

        <nav className="mt-4 px-6 space-y-4 text-black">
          <Link href="/" className="block hover:text-primary" onClick={onClose}>
            HOME
          </Link>
          <Link href="/about-us" className="block hover:text-primary" onClick={onClose}>
            ABOUT US
          </Link>
          <Link href="/treatment-plans" className="block hover:text-primary" onClick={onClose}>
            TREATMENT PLANS
          </Link>
          <Link href="/faq" className="block hover:text-primary" onClick={onClose}>
            FAQ
          </Link>
          <Link href="/blog" className="block hover:text-primary" onClick={onClose}>
            BLOG
          </Link>
          <Link href="/contact-us" className="block hover:text-primary" onClick={onClose}>
            CONTACT US
          </Link>
          <Link href="/courses" className="block hover:text-primary" onClick={onClose}>
            COURSES
          </Link>
          <Link
            href="/book-appointment"
            className="block mt-4 bg-primary text-white text-center py-2 rounded-full border border-primary hover:bg-white hover:text-primary"
            onClick={onClose}
          >
            BOOK APPOINTMENT
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
