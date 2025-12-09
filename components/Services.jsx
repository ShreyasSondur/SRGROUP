"use client";

export default function Services() {
  const services = [
    {
      icon: (
        <img src="/rice.png" alt="Rice logo" className="w-20 h-20 mx-auto mb-6" />
      ),
      title: "Rice",
      description: "Multiple rice varieties handled across markets."
    },
    {
      icon: (
        <img src="/cement.png" alt="Cement fiber board logo" className="w-20 h-20 mx-auto mb-6" />
      ),
      title: "Cement fiber board",
      description: "Different sizes of cement boards supplied across sectors."
    },
    {
      icon: (
        <img src="/veg.png" alt="Vegetables logo" className="w-20 h-20 mx-auto mb-6" />
      ),
      title: "Vegetables",
      description: "Selected vegetable categories managed for trade."
    },
    {
      icon: (
        <img src="/plywood.png" alt="Plywood logo" className="w-20 h-20 mx-auto mb-6" />
      ),
      title: "Commercial grade plywood",
      description: "Various plywood types for different applications."
    }
  ];

  return (
    <div className="min-h-screen bg-[#14294A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-24">
          Our Services
          <div className="w-32 h-0.5 bg-white mx-auto mt-4"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              <div className="text-gray-800 mb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}