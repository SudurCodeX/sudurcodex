import React from "react";
import { Code, Brain, GraduationCap } from "lucide-react";
import { Zap, Shield, Users, Rocket, HeartHandshake, TrendingUp } from "lucide-react";


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

  return (
    <div className="bg-blue-950 text-white">


      {/* HERO SECTION */}
     <section
  className="relative min-h-screen flex items-center justify-center text-white bg-fixed bg-center bg-cover"
  style={{
    backgroundImage:
      "url('/banner.png')", // Everest-style image
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gray-950/70"></div>


  {/* Content */}
  <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
          ✨ Transforming Businesses Digitally
        </div>
         {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-100">
          Your Vision,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Our Innovation
          </span>
        </h1>
        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          SudurcodeX delivers cutting-edge digital solutions to help your
          business thrive in the modern world. From AI-powered tools to
          stunning web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
            Get Started →
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-400 text-zinc-100 font-medium hover:bg-orange-400 transition">
            View Our Work
          </button>

        </div>
  

   

  </div>
</section>

      {/* why to coose section  */}
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose SudurcodeX?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We combine innovation, expertise, and dedication to deliver exceptional results
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

      

    </div>
  );
};

export default Home;
