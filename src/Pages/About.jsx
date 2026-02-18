import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FAQ from "../Other/FAQ";

const About = () => {
  return (
    <div className="bg-zinc-100 text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/grouo.png')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-5xl text-center text-white py-32">
          <motion.h1
            className="text-4xl md:text-6xl font-light leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Driving Digital Transformation
            <br />
            <span className="font-medium text-blue-400">
              Through Innovation & Engineering Excellence
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            SudurCodex delivers enterprise-grade digital solutions and
            industry-focused technology programs designed to empower
            organizations and future professionals across Nepal.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/services"
              className="px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
 {/* our experties section  */}
      <section className="relative py-28 md:py-36 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Label */}
    <motion.p
      className="uppercase tracking-[0.35em] text-blue-800 text-xs md:text-sm mb-6 font-semibold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Our Expertise
    </motion.p>

    {/* Heading */}
    <motion.h2
      className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Engineering Intelligent
      <br />
      <span className="text-blue-900">
        Digital Transformation
      </span>
    </motion.h2>

    {/* Divider */}
    <motion.div
      className="h-[3px] w-20 bg-blue-900 mx-auto mb-10"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ transformOrigin: "center" }}
    />

    {/* Description */}
    <motion.p
      className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      At SudurCodex, we combine strategic thinking, modern engineering,
      and advanced technologies to create digital ecosystems that
      deliver measurable business impact. Our solutions are built for
      long-term scalability, operational resilience, and sustainable growth.
    </motion.p>

  </div>
</section>



      {/* COMMITMENT SECTION */}
      <section className="py-36 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <img
              src="/discuss.png"
              alt="Strategic Collaboration"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] text-blue-900 text-sm mb-6 font-medium">
              Our Commitment
            </p>

            <h3 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
              Delivering Excellence Through
              <span className="text-blue-900 font-normal">
                {" "}
                Innovation & Precision
              </span>
            </h3>

            <div className="h-[2px] w-16 bg-blue-900 mb-8"></div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are committed to operational excellence, continuous innovation,
              and strategic collaboration. Our multidisciplinary approach
              integrates technology, design, and data-driven insights to solve
              complex real-world challenges.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Beyond enterprise solutions, SudurCodex fosters long-term impact
              through hackathons, professional workshops, and structured
              internship programs that cultivate future-ready technology
              leaders.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ENTERPRISE IMPACT SECTION */}
      <section className="py-24 bg-blue-900 text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-12">
    {[
      { value: "15+", label: "Enterprise Projects" },
      { value: "10+", label: "Professionals Trained" },
      { value: "10+", label: "Industry Initiatives" }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-5xl font-semibold">{item.value}</h4>
        <p className="mt-4 text-blue-200">{item.label}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* CORE VALUES */}
      <section className="hidden md:flex py-32 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-600">
                Continuously exploring modern technologies to build future-ready
                solutions.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4">Integrity</h4>
              <p className="text-gray-600">
                Delivering transparency, accountability, and trust in every
                engagement.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-4">Excellence</h4>
              <p className="text-gray-600">
                Striving for the highest standards in technology, service, and
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />



      {/* Newsletter */}
    <section className="hidden md:flex py-28 md:py-36 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center">

    {/* Small Badge */}
    <div className="inline-flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 rounded-full px-4 py-2 mb-8">
      <svg
        width="14"
        height="15"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
      <span className="tracking-wide">
        Empowering Digital Transformation
      </span>
    </div>

    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
      Transforming Ideas Into
      <br />
      <span className="text-indigo-700">
        Scalable Digital Solutions
      </span>
    </h2>

    {/* Description */}
    <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
      Partner with SudurCodex to architect secure, performance-driven
      web platforms and AI-powered systems that enable innovation,
      operational efficiency, and sustainable long-term growth.
    </p>

    {/* Newsletter Form */}
    <form className="mt-12 flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">

      <div className="relative w-full">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
          required
        />
      </div>

      <button
        type="submit"
        className="px-8 py-4 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-300"
      >
        Subscribe
      </button>

    </form>

  </div>
</section>

    </div>
  );
};

export default About;
