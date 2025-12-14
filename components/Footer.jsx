"use client";

import { Instagram, X, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  
  const XIcon = () => (
    <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );


  return (
    <footer className="w-full bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="SR Group" className="w-24" />
          <p className="mt-2 tracking-wide font-medium">SR GROUP</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <Link href="#services">Services</Link>
            </li>
            <li className="transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <Link href="#about">About</Link>
            </li>
            <li className="transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a
                href="tel:+919513201518"
                className="hover:text-blue-800 hover:translate-x-1 inline-block transition-all duration-300"
              >
                +91 9513201518 / +968 79672527
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919513201518"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 hover:translate-x-1 inline-block transition-all duration-300"
              >
                WhatsApp: +91 9513201518
              </a>
            </li>
            <li>
              <a
                href="mailto:info@srgroupind.com"
                className="hover:text-blue-800 hover:translate-x-1 inline-block transition-all duration-300"
              >
                Email: info@srgroupind.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <Instagram size={18} /> Instagram
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <XIcon size={18} /> Twitter (X)
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-blue-800 cursor-pointer">
              <Facebook size={18} /> Facebook
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-3 text-center text-sm text-gray-600">
        © 2025 SRGROUP. All Rights Reserved.
      </div>
    </footer>
  );
}
