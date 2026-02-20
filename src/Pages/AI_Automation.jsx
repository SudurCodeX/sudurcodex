import React from "react";
import { Bot, Cpu, LineChart, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AI_Automation = () => {
  const services = [
    {
      icon: <Bot size={22} />,
      title: "AI Chatbots",
      desc: "Intelligent automation for customer engagement and support.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Machine Learning",
      desc: "Custom ML models to automate business decisions.",
    },
    {
      icon: <LineChart size={22} />,
      title: "Predictive Analytics",
      desc: "Turn raw data into accurate business forecasts.",
    },
    {
      icon: <Workflow size={22} />,
      title: "Workflow Automation",
      desc: "Automate repetitive processes and increase efficiency.",
    },
  ];

  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000"
          alt="AI Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-purple-900/40"></div>

        <div className="relative z-10 max-w-5xl">
          {/* Company Tag */}
          <p className="text-purple-400 tracking-widest text-sm mb-4">
            SUDURCODEX
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI & <span className="text-purple-400">Automation</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Intelligent systems that transform the way your business operates.
            We design smart automation frameworks that scale with your growth.
          </p>

          {/* Small Feature Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Smart AI Integration
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Scalable Architecture
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Secure & Optimized
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </Link>

            <Link to="/services">
              <button className="px-8 py-4 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT SECTION ================= */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              AI That Drives{" "}
              <span className="text-purple-400">Real Business Impact</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              At SudurCodeX, we don’t experiment with AI — we implement
              intelligent systems that reduce cost, increase speed, and unlock
              scalable growth.
            </p>
          </motion.div>

          {/* Business Pillars */}
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Operational Efficiency
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automate repetitive processes, reduce manual errors, and
                increase execution speed across departments.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Data-Driven Decisions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transform raw business data into predictive insights that
                improve accuracy and strategic planning.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Scalable Intelligence
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploy AI infrastructure that grows with your business and
                adapts to evolving market demands.
              </p>
            </motion.div>
          </div>

          {/* Strategic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Link to="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
                Schedule AI Strategy Call
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SPLIT SECTION ================= */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
            alt="AI Innovation"
            className="rounded-2xl shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Future-Ready AI Infrastructure
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              From intelligent assistants to automated enterprise workflows,
              SudurCodeX builds scalable AI systems designed to evolve with your
              organization.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Our solutions integrate seamlessly into existing systems while
              unlocking new opportunities for innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">
        {/* Glow Background Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-14 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Build Intelligent Systems <br />
              <span className="text-purple-400">That Scale Your Business?</span>
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Partner with SudurCodeX to implement AI-driven automation that
              improves efficiency, reduces operational cost, and unlocks
              measurable growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-xl hover:scale-105 hover:shadow-purple-500/30 transition duration-300">
                  Schedule Consultation
                </button>
              </Link>

              <Link to="/services">
                <button className="px-10 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition duration-300">
                  View AI Capabilities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI_Automation;
