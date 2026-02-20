import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Web = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="text-zinc-900 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"
          alt="SudurCodeX Web Development"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl text-white"
        >
          <p className="uppercase tracking-widest text-blue-400 text-sm mb-4">
            SudurCodeX
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming Ideas Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Powerful Web Platforms
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We engineer scalable, secure, and performance-driven web systems
            that empower modern businesses to grow faster.
          </p>

          <Link to="/contact">
            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium shadow-lg hover:scale-105 transition">
              Start Your Project
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ================= INNOVATIVE SECTION ================= */}
      <section className="py-28 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            How SudurCodeX Delivers Excellence
          </h2>
          <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
            We combine strategy, technology, and design thinking to transform
            complex ideas into scalable digital products.
          </p>

          {/* Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-xl border border-zinc-200 p-8 rounded-2xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Research & Strategy
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                We analyze your business goals and design a technical roadmap
                that ensures long-term success and scalability.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-xl border border-zinc-200 p-8 rounded-2xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-4">Agile Development</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Our team builds modular, performance-driven systems with clean
                architecture and modern frameworks.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-xl border border-zinc-200 p-8 rounded-2xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Continuous Optimization
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                We monitor, improve, and evolve your platform to keep it secure,
                fast, and competitive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Strategic Web Engineering
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              SudurCodeX builds structured, scalable architectures that support
              long-term growth. Every system is crafted with clean code
              principles and performance optimization.
            </p>
          </motion.div>

          <motion.img
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200"
            alt="Strategic Engineering"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Build The Future With SudurCodeX
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Let’s collaborate to create powerful digital platforms that scale
            with your ambition.
          </p>

          <Link to="/contact">
            <button className="mt-10 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Web;
