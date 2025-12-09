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
    <section className="w-full min-h-screen bg-[#0E254A] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        
        {/* Heading */}
        <h2 className="text-center text-white text-4xl font-semibold mb-10">
          Get in touch
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

          {/* Name */}
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full px-4 py-3 border border-white/60 rounded-md bg-transparent text-white placeholder-white outline-none"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border border-white/60 rounded-md bg-transparent text-white placeholder-white outline-none"
          />

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone"
            className="w-full px-4 py-3 border border-white/60 rounded-md bg-transparent text-white placeholder-white outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            required
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 border border-white/60 rounded-md bg-transparent text-white placeholder-white outline-none resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-black font-semibold rounded-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
