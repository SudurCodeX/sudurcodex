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
    <section
      className="relative bg-fixed bg-cover bg-center py-36 px-6 md:px-16"
      style={{ backgroundImage: "url('nature.pngj')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-black/80"></div>

      <div className="relative max-w-7xl mx-auto text-white">

        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-2xl font-bold tracking-[0.2em] text-blue-300 mb-6">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Driving Digital Transformation
            <br />
            <span className="font-normal text-blue-300">
              Through Innovation & Education
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-blue-200 text-lg leading-relaxed">
            SudurCodex combines enterprise engineering, AI innovation,
            and hands-on learning programs to accelerate digital growth
            and empower Nepal’s next generation of technology leaders.
          </p>
        </motion.div>
        {/* Services Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

        {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Accent Line */}
                <div className="h-1 w-12 bg-blue-900 mb-8 group-hover:w-20 transition-all duration-500"></div>

                <Icon
                  size={34}
                  className="text-blue-900 mb-6"
                />

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="text-blue-900 font-medium tracking-wide hover:underline"
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
