"use client";

import { Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image 
            src="/logo.png" 
            width={80} 
            height={80} 
            alt="SR Group Logo" 
          />
          <p className="mt-2 font-semibold tracking-wide">SR GROUP</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <ul className="space-y-1">
            <li>Address</li>
            <li>Phone no.</li>
            <li>email</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} /> Twitter (X)
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} /> Facebook
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-4 text-center text-xs">
        © 2025 SRGROUP. All Rights Reserved.
      </div>
    </footer>
  );
}
