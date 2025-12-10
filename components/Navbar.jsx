"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#1a2b4b] text-white px-4 md:px-8 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + brand */}
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <div className="relative w-14 h-14 mr-3">
              <Image
                src="/logo.png"
                alt="SR Group Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <span className="hidden sm:inline text-lg font-semibold tracking-wide">
            SR Group
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            About us
          </Link>
          <Link
            href="#contact"
            className="bg-white text-[#1a2b4b] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 border-t border-white/10 pt-3">
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-2 px-1 hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={closeMenu}
              className="py-2 px-1 hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={closeMenu}
              className="py-2 px-1 hover:text-gray-300 transition-colors"
            >
              About us
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-2 bg-white text-[#1a2b4b] w-full text-center px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
