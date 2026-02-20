import React from "react";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hackathon = () => {
  const pillars = [
    {
      icon: <Lightbulb size={22} />,
      title: "Ideation Sprint",
      desc: "Transform raw concepts into validated problem statements.",
    },
    {
      icon: <Users size={22} />,
      title: "Team Collaboration",
      desc: "Work with designers, developers & business strategists.",
    },
    {
      icon: <Rocket size={22} />,
      title: "Rapid Prototyping",
      desc: "Build functional MVPs within intense innovation cycles.",
    },
    {
      icon: <Trophy size={22} />,
      title: "Launch & Recognition",
      desc: "Pitch to experts, win rewards & access incubation.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000"
          alt="Hackathon"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-yellow-900/40"></div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-yellow-400 tracking-widest text-sm mb-4">
            SUDURCODEX INNOVATION LABS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build. Compete. <span className="text-yellow-400">Launch.</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            A high-energy innovation ecosystem where creators, coders, and
            founders turn bold ideas into real-world impact.
          </p>

          <div className="mt-12">
            <Link to="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl font-semibold hover:scale-105 transition duration-300">
                Join the Next Hackathon
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="py-14 bg-zinc-900 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
            <p className="text-gray-400 text-sm mt-2">Participants</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">120+</h3>
            <p className="text-gray-400 text-sm mt-2">Projects Built</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">30+</h3>
            <p className="text-gray-400 text-sm mt-2">Startups Launched</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
            <p className="text-gray-400 text-sm mt-2">Industry Mentors</p>
          </div>
        </div>
      </section>

      {/* ================= INNOVATION FLOW ================= */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Innovation Framework
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A structured yet dynamic process that turns creativity into scalable
            digital ventures.
          </p>

          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {pillars.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl transition"
              >
                <div className="text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA PANEL ================= */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-yellow-600 to-orange-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build the Future?
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Join SudurCodeX Hackathons and transform your idea into a scalable
            product with mentorship, exposure, and rewards.
          </p>

          <Link to="/contact">
            <button className="mt-10 px-10 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Register Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
