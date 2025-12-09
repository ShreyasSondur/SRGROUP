"use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4" style={{ fontFamily: "'Crimson Text', serif" }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Global Import & Export Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Connecting businesses with reliable international suppliers and buyers
          across the world.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
