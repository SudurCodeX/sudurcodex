
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: "url('/nature.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/92 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About Us</p>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Ideas Into Reality
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              We deliver cutting-edge digital solutions that drive measurable business growth. From concept to deployment, we're your trusted technology partner.
            </p>

            <motion.div
              className="flex gap-12 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-80 md:h-96"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false }}
            style={{ y: imageY }}
          >
            <img
              src="ai.png"
              alt="About"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}