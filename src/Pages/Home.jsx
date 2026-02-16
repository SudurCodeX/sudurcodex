import React from "react";
import { Code, Brain, GraduationCap, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-blue-950 text-white">


      {/* HERO SECTION */}
     <section
  className="relative min-h-screen flex items-center justify-center text-white bg-fixed bg-center bg-cover"
  style={{
    backgroundImage:
      "url('/banner.png')", // Everest-style image
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-blue-950/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
          ✨ Transforming Businesses Digitally
        </div>
         {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-100">
          Your Vision,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Our Innovation
          </span>
        </h1>
        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          SudurcodeX delivers cutting-edge digital solutions to help your
          business thrive in the modern world. From AI-powered tools to
          stunning web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
            Get Started →
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-400 text-zinc-100 font-medium hover:bg-orange-400 transition">
            View Our Work
          </button>

        </div>
  

   

  </div>
</section>

      <section
        className="relative min-h-screen flex items-center justify-center text-white bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/banner.png')", // Everest-style image
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
          ✨ Transforming Businesses Digitally
        </div>
         {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-100">
          Your Vision,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Our Innovation
          </span>
        </h1>
        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          SudurcodeX delivers cutting-edge digital solutions to help your
          business thrive in the modern world. From AI-powered tools to
          stunning web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
            Get Started →
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-400 text-zinc-100 font-medium hover:bg-orange-400 transition">
            View Our Work
          </button>

        </div>
  

   

  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="px-6 md:px-20 py-20 bg-blue-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Code size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-blue-200 text-sm">
              Professional websites and scalable web applications using modern technologies.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Brain size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
            <p className="text-blue-200 text-sm">
              Intelligent AI-powered systems and automation tools for modern businesses.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <GraduationCap size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">IT Training</h3>
            <p className="text-blue-200 text-sm">
              Industry-based skill development programs for students and professionals.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Rocket size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Hackathons & Internships</h3>
            <p className="text-blue-200 text-sm">
              Practical exposure through hackathons and real-world internship programs.
            </p>
          </div>

        </div>
      </section>
      {/* why to coose section  */}
      

    </div>
  );
};

export default Home;
