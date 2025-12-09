"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#0E254A] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg">

        {/* Title */}
        <h2 className="text-center text-white text-4xl font-semibold mb-10 tracking-wide drop-shadow-lg">
          Get in touch
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">

          <input
            name="name"
            placeholder="Name"
            required
            className="w-full px-5 py-3 bg-transparent border border-white/50 rounded-md text-white placeholder-white/80 outline-none transition duration-300 
                      focus:border-white focus:shadow-lg focus:shadow-white/20"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-5 py-3 bg-transparent border border-white/50 rounded-md text-white placeholder-white/80 outline-none transition duration-300 
                      focus:border-white focus:shadow-lg focus:shadow-white/20"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className="w-full px-5 py-3 bg-transparent border border-white/50 rounded-md text-white placeholder-white/80 outline-none transition duration-300 
                      focus:border-white focus:shadow-lg focus:shadow-white/20"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-5 py-3 bg-transparent border border-white/50 rounded-md text-white placeholder-white/80 outline-none resize-none transition duration-300 
                      focus:border-white focus:shadow-lg focus:shadow-white/20"
          />

          {/* SUBMIT BUTTON — upgraded */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3.5 bg-white text-black font-semibold rounded-md 
              transition-all duration-300 cursor-pointer
              shadow-md
              hover:shadow-xl hover:scale-[1.02] hover:bg-[#f1f1f1]
              active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        {/* STATUS MESSAGES */}
        {status === "success" && (
          <p className="text-green-400 mt-4 text-center animate-pulse">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
