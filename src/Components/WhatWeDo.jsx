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
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-[0.4em] text-blue-400 mb-6">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Engineering Intelligent
            <br />
            <span className="text-blue-400 font-normal">
              Digital Transformation
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-blue-200 text-lg leading-relaxed">
            SudurCodex integrates enterprise engineering, AI innovation,
            and practical technology education to empower businesses
            and develop future-ready professionals across Nepal.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white/95 backdrop-blur-lg p-10 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Accent Line */}
                <div className="h-1 w-10 bg-blue-900 mb-8 group-hover:w-20 transition-all duration-500"></div>

                <Icon
                  size={36}
                  className="text-blue-900 mb-6"
                />

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="text-blue-900 font-medium hover:underline"
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
