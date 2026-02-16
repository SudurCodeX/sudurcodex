import React from "react";
import { Code, Brain, GraduationCap, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-(--bg-color) text-(--prim-color)">
      {/* HERO SECTION */}
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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Nepal Through
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Technology & Innovation
            </span>
          </h1>

          <p className="mt-6 text-blue-200 text-lg max-w-3xl mx-auto">
            SudurCodex is a Nepal-based IT company delivering modern web
            development, AI-driven solutions, and industry-focused IT training
            programs.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              Our Services
            </button>

            <button className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Join Training
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-20 py-30 bg-[#0b1220]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Code size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-blue-200 text-sm">
              Professional websites and scalable web applications using modern
              technologies.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Brain size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
            <p className="text-blue-200 text-sm">
              Intelligent AI-powered systems and automation tools for modern
              businesses.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <GraduationCap size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">IT Training</h3>
            <p className="text-blue-200 text-sm">
              Industry-based skill development programs for students and
              professionals.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-xl text-center hover:scale-105 transition">
            <Rocket size={40} className="mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Hackathons & Internships
            </h3>
            <p className="text-blue-200 text-sm">
              Practical exposure through hackathons and real-world internship
              programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
