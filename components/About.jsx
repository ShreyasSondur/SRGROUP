"use client";

export default function About() {
  return (
    <section id="about" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/boat.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Subtle overlay to match screenshot contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered card */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl max-w-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 border-b pb-2">
            About SRGROUP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Established with a vision to connect global markets with local industries,
            <strong> SRGROUP</strong> has grown into a trusted name in the import and
            export sector. We specialize in sourcing and distributing a diverse range
            of products, simplifying the complexities of international logistics so
            that every shipment moves efficiently and reliably.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With deep industry insight and a strong network of partners, we navigate
            regulatory processes and supply-chain challenges with precision. At
            <strong> SRGROUP</strong>, every shipment represents our commitment to
            integrity, transparency, and a consistent pursuit of excellence—building
            partnerships that last.
          </p>
        </div>
      </div>
    </section>
  );
}
