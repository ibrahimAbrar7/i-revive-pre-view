
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
    <header className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
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
        <div className="hidden sm:flex md:hidden xl:flex">
          <Navbar />
        </div>
        <button className="flex xl:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
