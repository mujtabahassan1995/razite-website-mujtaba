"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F4F7F4] shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div>
          <Image
            className="w-32 h-14"
            src="/logo.jpeg"
            alt="Logo"
            width={90}
            height={90}
          />
        </div>

        {/* Desktop Navbar (hidden on small screens) */}
        <nav className="hidden md:flex gap-6 items-center text-black">
          <Link href="#home">Home</Link>
          <Link href="#about-us">About Us</Link>
          <Link href="#contact-us">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-[#3481BC]">
              Contact Us
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger (only visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <Link
            href="#home"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about-us"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#contact-us"
            className="block px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-[#3481BC]">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
