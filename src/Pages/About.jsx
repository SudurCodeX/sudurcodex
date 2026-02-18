import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FAQ from "../Other/FAQ";

const About = () => {
  return (
    <div className="bg-zinc-100 text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
        style={{ backgroundImage: "url('/grouo.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/85 to-black/90"></div>

        <div className="relative text-center max-w-5xl w-full mx-auto py-20 sm:py-28">
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-snug md:leading-tight text-white tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Engineering Digital Growth
            <br className="hidden sm:block" />
            For Businesses & Future Talent
          </motion.h1>

          {/* First Paragraph */}
          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            SudurCodex is a professional IT services and technology training
            company delivering scalable web solutions and practical,
            industry-focused education across Nepal.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-2 hidden lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            We combine modern engineering, AI innovation, and community-driven
            initiatives to bridge the gap between technology and real-world
            execution.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300">
              <Link to="/services"> Explore Services</Link>
            </button>

            <button className="w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium border border-white text-white rounded-full hover:bg-white hover:text-blue-950 transition duration-300">
              <Link to="/contact"> Learn More</Link>
            </button>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC TRANSFORMATION SECTION */}
      <section className="relative py-36 bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          {/* Small Label */}
          <motion.p
            className="uppercase tracking-[0.3em] text-blue-900 text-sm mb-6 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-light leading-tight mb-10 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Engineering Intelligent
            <br />
            <span className="text-blue-900 font-normal">
              Digital Transformation
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="h-[2px] w-24 bg-blue-900 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Description */}
          <motion.p
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At SudurCodex, we integrate strategic insight, modern engineering,
            and advanced technologies to deliver measurable business outcomes.
            From enterprise-grade web platforms to AI-driven systems, our
            solutions are built for scalability, resilience, and sustained
            growth.
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
      <section className="bg-blue-950 text-white py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-20 text-center">
          <div>
            <h4 className="text-6xl font-light">15+</h4>
            <p className="mt-6 text-blue-200 text-lg">
              Enterprise Projects Delivered
            </p>
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

      <FAQ/>

    

      {/* Newsletter */}

      <div className="w-full h-full py-20">
        <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

        <section className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                stroke="currentColor"
                strokeMiterlimit="5.759"
                strokeLinecap="round"
              />
            </svg>
            <span>Transfer your business Digitally</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
            Transforming Ideas Into Scalable Digital Solutions
          </h1>

          <p className="max-w-lg text-center text-slate-500 mt-6">
            Partner with SudurCodex to build modern web platforms, AI-powered
            systems, and industry-focused technology solutions designed for
            long-term growth.
          </p>
          <form className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
            <svg
              className="absolute left-3"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6"
                stroke="#90A1B9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1"
                stroke="#90A1B9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="focus:outline-none pl-10 py-5 bg-transparent w-full"
              required
            />
            <button className="shrink-0 mr-2 px-6 py-3 text-sm bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-md active:scale-95 transition duration-300 text-white">
              Subscribe now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default About;
