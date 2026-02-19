import { motion } from "framer-motion";
import { Globe, Brain, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Enterprise-grade web platforms engineered for scalability, security, and long-term growth.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI-powered automation and intelligent systems driving innovation and operational efficiency.",
  },
  {
    icon: GraduationCap,
    title: "IT Training Programs",
    description:
      "Practical, industry-focused programs bridging academic learning with real-world execution.",
  },
  {
    icon: Trophy,
    title: "Hackathons & Internships",
    description:
      "Community-driven innovation initiatives nurturing future-ready professionals.",
  },
];

const WhatWeDo = () => {
  return (
<<<<<<< HEAD
    <section
      className="relative bg-fixed bg-cover bg-center py-36 px-6 md:px-16"
      style={{ backgroundImage: "url('nature.pngj')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-black/80"></div>

      <div className="relative max-w-7xl mx-auto text-white">

        {/* Header */}
=======
    <section className="relative overflow-hidden">

      {/* PARALLAX BACKGROUND */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/banner.png')",
        }}
      />

      {/* Corporate Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/85 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative py-36 px-6 md:px-16 max-w-7xl mx-auto text-white">

        {/* HEADER */}
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <p className="uppercase text-2xl font-bold tracking-[0.2em] text-blue-300 mb-6">
=======
          <p className="uppercase text-sm tracking-[0.4em] text-blue-400 mb-6">
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
<<<<<<< HEAD
            Driving Digital Transformation
            <br />
            <span className="font-normal text-blue-300">
              Through Innovation & Education
=======
            Engineering Intelligent
            <br />
            <span className="text-blue-400 font-normal">
              Digital Transformation
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-blue-200 text-lg leading-relaxed">
<<<<<<< HEAD
            SudurCodex combines enterprise engineering, AI innovation,
            and hands-on learning programs to accelerate digital growth
            and empower Nepal’s next generation of technology leaders.
          </p>
        </motion.div>
        {/* Services Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

        {services.map((service, index) => {
=======
            SudurCodex integrates enterprise engineering, AI innovation,
            and practical technology education to empower businesses
            and develop future-ready professionals across Nepal.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {services.map((service, index) => {
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
<<<<<<< HEAD
                className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
=======
                className="group bg-white/95 backdrop-blur-lg p-10 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Accent Line */}
<<<<<<< HEAD
                <div className="h-1 w-12 bg-blue-900 mb-8 group-hover:w-20 transition-all duration-500"></div>

                <Icon
                  size={34}
                  className="text-blue-900 mb-6"
                />

                <h3 className="text-xl font-semibold mb-4">
=======
                <div className="h-1 w-10 bg-blue-900 mb-8 group-hover:w-20 transition-all duration-500"></div>

                <Icon
                  size={36}
                  className="text-blue-900 mb-6"
                />

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="text-blue-900 font-medium tracking-wide hover:underline"
=======
                  className="text-blue-900 font-medium hover:underline"
>>>>>>> c2140cb64328b572eb1b0d3ca934a2bc727a56fc
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
