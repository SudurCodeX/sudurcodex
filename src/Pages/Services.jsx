import React from "react";
import ServiceCard from "../Other/ServiceCard";
import DevelopmentProcess from "../Other/DevelopmentProcess";
import ChooseUs from "../Other/ChooseUs";

import ServiceCTA from "../Other/ServiceCTA";

function Services() {
  return (
    <div className="w-full   text-(--prim-color)">
      {/* Hero Section */}
      <div className=" bg-img h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <h4 className="text-5xl md:text-6xl font-bold mb-6">
          Our <span className="text-blue-400">Services</span>
        </h4>

        <p className="text-lg md:text-xl max-w-3xl text-white leading-relaxed">
          We provide end-to-end technology solutions designed to help businesses
          grow, automate processes, and innovate faster. From product
          development to training and internships, we deliver scalable and
          future-ready digital solutions.
        </p>

        <button className="mt-8 px-8 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
          Explore Services
        </button>
      </div>

      {/* Services Cards */}
     
        <ServiceCard />
     

      {/* Other Sections */}
      <DevelopmentProcess />
      <ChooseUs />
     
      <ServiceCTA />
    </div>
  );
}

export default Services;
