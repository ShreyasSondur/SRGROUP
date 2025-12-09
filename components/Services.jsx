"use client";

export default function Services() {
  const services = [
    {
      icon: (
        <img src="/rice.png" alt="Rice logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
      ),
      title: "Rice",
      description: "Multiple rice varieties handled across markets."
    },
    {
      icon: (
        <img src="/cement.png" alt="Cement fiber board logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
      ),
      title: "Cement Fiber Board",
      description: "Different sizes of cement boards supplied across sectors."
    },
    {
      icon: (
        <img src="/veg.png" alt="Vegetables logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
      ),
      title: "Vegetables",
      description: "Selected vegetable categories managed for trade."
    },
    {
      icon: (
        <img src="/plywood.png" alt="Plywood logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
      ),
      title: "Commercial Grade Plywood",
      description: "Various plywood types for different applications."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#14294A] via-[#1a3255] to-[#14294A] py-24 px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-3">What We Offer</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          <p className="text-blue-200 text-lg mt-6 max-w-2xl mx-auto">
            Delivering excellence across diverse product categories with unmatched quality and reliability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center border border-gray-100"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with subtle animation */}
              <div className="relative mb-6 p-4 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4 leading-tight group-hover:text-[#14294A] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#14294A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}