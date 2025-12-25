import React from "react";

function About() {
  return (
    <div className="pt-20">
      {/* ------------ Hero Section ----------- */}
      <section className="w-full bg-blue-100 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
                Your trusted partner for AC, Refrigerator, Washing Machine, and Cooler
                installation, repair, and maintenance services.
                We ensure fast response, expert technicians, and long-lasting solutions
                to keep your home running smoothly every day.
          </p>
        </div>
      </section>

      {/* ------------ Company Intro ---------- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="w-full md:w-1/2">
            <img
              src="/img/about-1.jpg"
              alt="About Saini Refrigeration"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a professional home-appliance service company providing
              expert repair and installation for ACs, refrigerators, washing
              machines, water coolers, and RO systems. With years of experience,
              we deliver reliable, fast, and trustworthy service across the
              region.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our aim is to keep your home cool, comfortable, and running
              smoothly with hassle-free service, verified technicians, and
              guaranteed satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ------------ Why Choose Us ---------- */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">
            Why Choose Saini Refrigeration?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-6 shadow-md rounded-xl">
              <img
                src="/img/professionals.webp"
                className="h-32 mx-auto mb-4"
                alt="Verified Professionals"
              />
              <h4 className="font-semibold text-lg mb-2">
                Verified Professionals
              </h4>
              <p className="text-gray-600 text-sm">
                Skilled and trusted technicians for every appliance service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 shadow-md rounded-xl">
              <img
                src="/img/insured work.avif"
                className="h-32 mx-auto mb-4"
                alt="Insured Work"
              />
              <h4 className="font-semibold text-lg mb-2">Insured Work</h4>
              <p className="text-gray-600 text-sm">
                Every service is safe, secure, and fully insured.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 shadow-md rounded-xl">
              <img
                src="/img/Satisfaction.jpg"
                className="h-32 mx-auto mb-4"
                alt="Satisfaction Guaranteed"
              />
              <h4 className="font-semibold text-lg mb-2">
                Satisfaction Guaranteed
              </h4>
              <p className="text-gray-600 text-sm">
                We deliver quality service with 100% customer satisfaction.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 shadow-md rounded-xl">
              <img
                src="/img/Payment.png"
                className="h-32 mx-auto mb-4"
                alt="Easy Payment"
              />
              <h4 className="font-semibold text-lg mb-2">Easy Payment</h4>
              <p className="text-gray-600 text-sm">
                Quick and convenient payment options for all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ Services Overview ---------- */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Service Card */}
            {[
              {
                icon: "/img/washingRepair.jpg",
                title: "Washing Machine Repair",
              },
              {
                icon: "/img/WaterRepair.png",
                title: "Water Cooler Repair",
              },
              {
                icon: "/img/fridgeRepair.jpg",
                title: "Refrigerator Repair",
              },
              {
                icon: "/img/AcRepair.webp",
                title: "AC Repair & Installation",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-40 mx-auto mb-4 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-lg text-center">
                  {item.title}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ------------ Mission Section ------------ */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our mission is to provide fast, affordable, and reliable appliance
            repair services to every home. We work with honesty, dedication, and
            professional expertise to keep your appliances running smoothly.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
