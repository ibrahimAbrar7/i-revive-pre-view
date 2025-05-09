"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Treatment Plans", href: "/treatment-plans" },
  { label: "Blogs", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Courses", href: "/courses" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="hidden xl:flex items-center space-x-6 text-gray-800 relative font-playfair">
      {navItems.map(({ label, href }) => {
        const isActive =
          pathname === href || pathname.startsWith(href + "/");

        return (
          <Link
            key={href}
            href={href}
            className={`relative group transition-colors ${
              isActive ? "text-[#5e8319]" : "hover:text-[#5e8319]"
            }`}
          >
            {label}
            <span
              className={`absolute left-0 ${
                isScrolled ? "bottom-[-28px]" : "bottom-[-28px]"
              } w-full h-[4px] rounded-full bg-[#5e8319] transition-transform duration-300 origin-left ${
                isActive ? "" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}

      {/* Book Appointment Button */}
      <Link
        href="/book-appointment"
        className="bg-primary text-white px-6 py-2 rounded-full border border-green-300 hover:bg-white hover:text-hovershed hidden lg:inline-block transition-all duration-300"
      >
        Book Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
