"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`bg-white shadow-md transition-all duration-300 h-[80px] border-b border-gray-300 sticky top-0 z-50`}
>
  <div className={`h-full flex justify-between items-center px-8 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/i-revive-logo.avif"
            alt="i-REVIVE Logo"
            width={isScrolled ? 250 : 300}
            height={isScrolled ? 80 : 100}
            priority
            className="transition-all duration-300 max-w-[180px] md:max-w-[170px] h-auto"
          />
        </Link>
        
        {/* Navbar */}
        <div className="hidden xl:flex">
          <Navbar />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="flex xl:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={48} className="border-primary border px-2 rounded-lg text-primary" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
