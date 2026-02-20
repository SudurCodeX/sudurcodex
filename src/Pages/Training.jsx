import React from "react";
import { GraduationCap, Code, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  const programs = [
    {
      icon: <Code size={22} />,
      title: "Full Stack Development",
      desc: "Frontend, backend & database training with real-world projects.",
    },
    {
      icon: <GraduationCap size={22} />,
      title: "AI & Data Science",
      desc: "Master AI, ML & analytics with hands-on implementation.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Internship Programs",
      desc: "Work on live industry projects under expert mentorship.",
    },
    {
      icon: <Award size={22} />,
      title: "Certification & Placement",
      desc: "Career-focused training with interview preparation support.",
    },
  ];

  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2000"
          alt="Professional Training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Professional IT <span className="text-pink-400">Training</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            Industry-aligned programs designed to build confident engineers and
            future-ready digital professionals.
          </p>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:scale-105 transition duration-500 group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-6 group-hover:rotate-6 transition duration-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* SPLIT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Learn Today. <span className="text-pink-400">Lead Tomorrow.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            We bridge the gap between academic knowledge and industry
            expectations. Our programs focus on practical skills, real-world
            case studies, and career growth.
          </p>

          <Link to="/contact">
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Enroll Now
            </button>
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000"
          alt="Students Learning"
          className="rounded-3xl shadow-2xl"
        />
      </section>
    </div>
  );
};

export default Training;
