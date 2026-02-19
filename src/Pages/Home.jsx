import React from "react";
import { Code, Brain, GraduationCap } from "lucide-react";
import {
  Zap,
  Shield,
  Users,
  Rocket,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { Globe, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatWeDo from "../Components/WhatWeDo";
import Testimonal from "../Other/Testimonal";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import AboutSection from "../Other/AboutSetion";

const Home = () => {
  const features = [
    {
      icon: <Zap size={22} />,
      title: "Lightning Fast Delivery",
      desc: "We deliver high-quality solutions on time, every time, without compromising on excellence.",
    },
    {
      icon: <Shield size={22} />,
      title: "Secure & Reliable",
      desc: "Your data security is our priority. We implement industry-leading security practices.",
    },
    {
      icon: <Users size={22} />,
      title: "Expert Team",
      desc: "Our talented developers, designers, and strategists bring years of experience to your project.",
    },
    {
      icon: <Rocket size={22} />,
      title: "Cutting-Edge Technology",
      desc: "We use the latest tools and frameworks to build future-proof digital solutions.",
    },
    {
      icon: <HeartHandshake size={22} />,
      title: "Client-Centric Approach",
      desc: "Your vision drives our work. We collaborate closely to ensure your goals are met.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Scalable Solutions",
      desc: "Built for growth, our solutions scale effortlessly as your business expands.",
    },
  ];
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Parallax effect on scroll
    const handleScroll = () => {
      const videoSection = document.querySelector(".hero-video-bg");
      if (videoSection) {
        videoSection.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-blue-950 text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-white">
        {/* Video Background */}
        <div className="hero-video-bg absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/banner1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/70 to-gray-950/80"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md hover:bg-blue-500/30 transition duration-300">
            <span className="animate-spin text-lg">✨</span>
            Transforming Businesses Digitally
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight">
            Your Vision,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Our Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            SudurcodeX delivers cutting-edge digital solutions to help your
            business thrive in the modern world. From AI-powered tools to
            stunning web experiences, we turn your ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            {/* Primary Button */}
            <Link to="/contact">
              <button className="group relative px-8 py-4 rounded-lg text-white font-semibold text-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-blue-500/50">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition duration-300"></div>

                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Secondary Button */}
            <Link to="/ourwork">
              <button className="group relative px-8 py-4 rounded-lg text-white font-semibold text-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                {/* Border and Hover Background */}
                <div className="absolute inset-0 border-2 border-gray-400/50 group-hover:border-purple-400/80 transition duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition duration-300"></div>

                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  View Our Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* about sudurcodex  */}
      <AboutSection />
      {/* what we do setion   */}
      <WhatWeDo />

      {/* why to coose section  */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose SudurcodeX?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver
            exceptional results
          </p>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition duration-300"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonal />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
