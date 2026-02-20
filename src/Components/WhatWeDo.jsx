import { motion } from "framer-motion";
import { Globe2, Cpu, GraduationCap, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe2,
    title: "Enterprise Web Platforms",
    description:
      "Scalable, secure, and performance-driven web systems engineered for modern enterprises.",

    url: "/web",
  },
  {
    icon: Cpu,
    title: "AI & Automation Systems",
    description:
      "Intelligent AI infrastructure transforming operations with smart automation and analytics.",
    url: "/ai_automation",
  },
  {
    icon: GraduationCap,
    title: "Professional IT Training",
    description:
      "Industry-aligned programs preparing future-ready engineers and digital leaders.",
      url:"/training"
  },
  {
    icon: Rocket,
    title: "Innovation Labs & Hackathons",
    description:
      "Driving innovation through collaborative research, internships, and product incubation.",
      url:"/hackathon"
  },
];

const WhatWeDo = () => {
  return (
    <section
      className="hidden lg:flex relative bg-cover bg-center py-36 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('banner.png')",
      }}
    >
      {/* Dark Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black/85 to-black/90 backdrop-blur-xs"></div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Header */}
        <motion.div
          className="text-center mb-28"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-[0.4em] text-gray-300 font-semibold mb-6">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Empowering Businesses
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Through Technology & Innovation
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-blue-200 text-lg leading-relaxed">
            SudurCodex delivers enterprise-grade solutions combining technology,
            AI intelligence, and hands-on innovation to accelerate digital
            transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 transition duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition duration-500">
                    <Icon size={30} className="text-white" />
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-70 transition duration-500"></div>
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to={service.url}
                  className="text-blue-400 font-medium tracking-wide hover:text-purple-400 transition"
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
