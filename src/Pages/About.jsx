import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-zinc-100 text-gray-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-fixed bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('grouo.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-950/80"></div>

        <div className="relative text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-light leading-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Tomorrow's Innovators
          </motion.h1>

          <motion.p
            className="mt-8 text-lg md:text-xl text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            SudurCodex is an innovation-driven technology company
            building scalable digital solutions and empowering
            Nepal’s next generation of tech leaders.
          </motion.p>
          <button className="text-2xl font-semisbold text-white border-1 px-3 py-2 border-solid border-zinc-100 hover:bg-amber-500">Read More</button>
        </div>
      </section>

      {/* EXECUTIVE STATEMENT */}
      <section className="py-32 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering Intelligent
            <span className="text-blue-900"> Digital Transformation</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            At SudurCodex, we combine strategic thinking, modern engineering,
            and cutting-edge technologies to deliver measurable impact.
            From enterprise-grade web platforms to AI-powered solutions,
            our work is built to scale, evolve, and lead.
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid md:grid-cols-2 gap-24 items-center bg-zinc-100">

        <motion.img
          src="team.png"
          alt="SudurCodex Impact"
          className="rounded-2xl shadow-2xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-light mb-8">
            Our Commitment
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are committed to excellence, precision, and continuous innovation.
            Our approach integrates technology, design, and strategic insight
            to solve real-world challenges.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Beyond client services, SudurCodex fosters growth through
            hackathons, workshops, and internship programs that prepare
            future-ready professionals.
          </p>
        </motion.div>
      </section>

      {/* ENTERPRISE IMPACT SECTION */}
      <section className="bg-blue-950 text-white py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-20 text-center">

          <div>
            <h4 className="text-6xl font-light">15+</h4>
            <p className="mt-6 text-blue-200 text-lg">Enterprise Projects Delivered</p>
          </div>

          <div>
            <h4 className="text-6xl font-light">10+</h4>
            <p className="mt-6 text-blue-200 text-lg">Professionals Trained</p>
          </div>

          <div>
            <h4 className="text-6xl font-light">10+</h4>
            <p className="mt-6 text-blue-200 text-lg">Industry Events Hosted</p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-16">

            <div>
              <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-600">
                Continuously exploring modern technologies to build future-ready solutions.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4">Integrity</h4>
              <p className="text-gray-600">
                Delivering transparency, accountability, and trust in every engagement.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4">Excellence</h4>
              <p className="text-gray-600">
                Striving for the highest standards in technology, service, and execution.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
