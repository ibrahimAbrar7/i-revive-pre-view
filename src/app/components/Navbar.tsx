"use client";


import Link from "next/link";

const Navbar = () => {
 
  

  return (
    <nav className="hidden xl:flex items-center space-x-6 text-gray-800">
      <Link href="/">HOME</Link>
      <Link href="/about-us">ABOUT US</Link>
      <Link href="/treatment-plans">TREATMENT PLANS</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/blog">BLOG</Link>
      <Link href="/contact-us" className="hidden md:inline-block">
        CONTACT US
      </Link>
      <Link href="/courses" className="hidden md:inline-block">
        COURSES
      </Link>
      {/* <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
          className="flex items-center space-x-1 hover:text-primary"
        >
          <span>COURSES</span>
          <ChevronDown size={16} />
        </button>
        {isCoursesOpen && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-30">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Level 1
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Level 2
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Level 3
            </Link>
          </div>
        )}
      </div> */}
      <Link
        href="/book-appointment"
        className="bg-primary text-white px-7 py-3 rounded-full border border-hovershed hover:bg-white hover:text-hovershed hidden lg:inline-block"
      >
        Book Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
