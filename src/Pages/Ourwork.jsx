
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const OurWork = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative overflow-hidden text-[#1a1a1a]">
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden text-center">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/build.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 animate-fadeIn">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Engineering{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Strategic Digital
          </span>{" "}
          Solutions for Modern Businesses
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          We help forward-thinking organizations design, develop, and deploy
          secure, scalable, and performance-driven digital systems that
          accelerate growth and create lasting competitive advantage.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="px-10 py-4 bg-yellow-500 text-black font-semibold uppercase tracking-wide rounded-md hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>

      {/* ================= PROJECT CARDS SECTION ================= */}
      <section className="relative py-32 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6">
              Projects We Have Delivered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of digital platforms and enterprise solutions designed
              to drive measurable business impact and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Project 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/enterprise.png"
                  alt="Enterprise Platform"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Enterprise Digital Platform
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A scalable enterprise system designed to streamline operations,
                  improve customer engagement, and enhance workflow efficiency.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: Enterprise</span>
                  <span className="text-indigo-600 font-medium">
                    Performance Optimized
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/education.png"
                  alt="Education System"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Education Technology System
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A real-time analytics dashboard enabling structured learning,
                  performance monitoring, and adaptive content delivery.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: EdTech</span>
                  <span className="text-indigo-600 font-medium">
                    Data-Driven
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/corporate.png"
                  alt="Corporate Website"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Corporate Web Transformation
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A modern corporate website focused on strategic brand positioning,
                  optimized performance, and lead generation growth.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: Professional Services</span>
                  <span className="text-indigo-600 font-medium">
                    Conversion Focused
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

   <section className="relative py-28 flex items-center justify-center overflow-hidden bg-blue-800">
  
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-center bg-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 " />

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
    
    {/* Small Label */}
    <p className="uppercase tracking-[3px] text-sm text-gray-300 mb-4">
      Ready to Collaborate
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      Let’s Build Something Exceptional
    </h2>

    {/* Description */}
    <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
      We create secure, scalable, and performance-driven digital solutions
      that help businesses grow, innovate, and stay ahead in a competitive market.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      
      <Link
        to="/contact"
        className="px-8 py-4 bg-white text-gray-900 text-sm font-semibold uppercase tracking-wide rounded-md hover:bg-gray-200 transition-all duration-300 shadow-lg"
      >
        Start Your Project
      </Link>

      <Link
        to="/projects"
        className="px-8 py-4 border border-white text-white text-sm font-semibold uppercase tracking-wide rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
      >
        Explore Our Work
      </Link>

    </div>
  </div>
</section>



    </div>
  );
};

export default OurWork;

