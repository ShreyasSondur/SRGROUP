// app/page.jsx
"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function HomePage() {

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
