// // import React from "react";
// // import { Link } from "react-router-dom";


// // const engagements = [
// //   {
// //     title: "Enterprise Digital Platform",
// //     description:
// //       "Architected and delivered a scalable web-based platform designed to enhance operational efficiency and improve customer engagement across multiple touchpoints.",
// //     impact: "Improved performance and streamlined internal workflows.",
// //   },
// //   {
// //     title: "Education Technology System",
// //     description:
// //       "Developed a performance-driven dashboard enabling real-time analytics, user monitoring, and structured digital content delivery.",
// //     impact: "Enabled data-backed decision-making and measurable user growth.",
// //   },
// //   {
// //     title: "Corporate Web Transformation",
// //     description:
// //       "Designed and implemented a modern, responsive corporate website aligned with brand positioning and lead-generation strategy.",
// //     impact: "Strengthened digital presence and improved conversion efficiency.",
// //   },
// // ];

// // const OurWork = () => {
// //   return (
// //     <div className="bg-white text-[#1a1a1a]">
// // <section className="relative py-36 overflow-hidden text-white">
// //   <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-600"></div>
// //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_40%)]"></div>
// //   <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
// //   <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>

// //   <div className="relative max-w-6xl mx-auto px-6">
// //     <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
// //       Delivering <span className="text-yellow-300">Strategic</span> Digital Solutions
// //     </h1>

// //     <p className="text-lg text-indigo-100 max-w-3xl leading-relaxed">
// //       We collaborate with forward-thinking organizations to design and
// //       develop scalable digital systems that drive operational excellence,
// //       strengthen customer engagement, and enable sustainable growth.
// //     </p>
// //   </div>

// // </section>
// // {/* ================= PROJECT CARDS SECTION ================= */}
// // <section className="py-32 bg-gradient-to-b from-white to-[#f8fafc]">
// //   <div className="max-w-7xl mx-auto px-6">

// //     <div className="text-center mb-20">
// //       <h2 className="text-4xl font-semibold mb-6">
// //         Projects We Have Delivered
// //       </h2>
// //       <p className="text-gray-600 max-w-2xl mx-auto">
// //         A selection of digital platforms and enterprise solutions designed
// //         to drive measurable business impact and operational excellence.
// //       </p>
// //     </div>

// //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

// //       {/* Project Card 1 */}
// //       <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
// //         <div className="overflow-hidden">
// //           <img
// //             src="/ai.png"
// //             alt="Enterprise Platform"
// //             className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
// //           />
// //         </div>

// //         <div className="p-8">
// //           <h3 className="text-xl font-semibold mb-4">
// //             Enterprise Digital Platform
// //           </h3>

// //           <p className="text-gray-600 leading-relaxed mb-6">
// //             A scalable enterprise system designed to streamline operations,
// //             improve customer engagement, and enhance workflow efficiency.
// //           </p>

// //           <div className="flex justify-between text-sm text-gray-500">
// //             <span>Industry: Enterprise</span>
// //             <span className="text-indigo-600 font-medium">
// //               Performance Optimized
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Project Card 2 */}
// //       <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
// //         <div className="overflow-hidden">
// //           <img
// //             src="/banner.png"
// //             alt="Education System"
// //             className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
// //           />
// //         </div>

// //         <div className="p-8">
// //           <h3 className="text-xl font-semibold mb-4">
// //             Education Technology System
// //           </h3>

// //           <p className="text-gray-600 leading-relaxed mb-6">
// //             A real-time analytics dashboard enabling structured learning,
// //             performance monitoring, and adaptive content delivery.
// //           </p>

// //           <div className="flex justify-between text-sm text-gray-500">
// //             <span>Industry: EdTech</span>
// //             <span className="text-indigo-600 font-medium">
// //               Data-Driven
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Project Card 3 */}
// //       <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
// //         <div className="overflow-hidden">
// //           <img
// //             src="/banner1.png"
// //             alt="Corporate Website"
// //             className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
// //           />
// //         </div>

// //         <div className="p-8">
// //           <h3 className="text-xl font-semibold mb-4">
// //             Corporate Web Transformation
// //           </h3>

// //           <p className="text-gray-600 leading-relaxed mb-6">
// //             A modern corporate website focused on strategic brand positioning,
// //             optimized performance, and lead generation growth.
// //           </p>

// //           <div className="flex justify-between text-sm text-gray-500">
// //             <span>Industry: Professional Services</span>
// //             <span className="text-indigo-600 font-medium">
// //               Conversion Focused
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //     </div>
// //   </div>
// // </section>

// //       {/* Call to Action */}
// //       <section className="border-t border-gray-200 py-24">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //           <h2 className="text-3xl font-semibold mb-6">
// //             Partner With Us to Drive Digital Transformation
// //           </h2>

// //           <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
// //             Engage with a team committed to delivering secure, scalable,
// //             and strategically aligned digital solutions.
// //           </p>

// //           <button className="px-10 py-4 bg-[#111827] text-white text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition">
// //            <Link to='/contact'> Contact Our Team</Link>
// //           </button>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };
// // export default OurWork;
// import React from "react";
// import { Link } from "react-router-dom";

// const OurWork = () => {
//   return (
//     <div className="relative text-[#1a1a1a] overflow-hidden">

//       {/* ================= GLOBAL SMOOTH BACKGROUND ================= */}
//       <div className="fixed inset-0 -z-10">

//         {/* Base Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827]" />

//         {/* Background Image */}
//        <div
//   className="absolute inset-0 bg-cover bg-center opacity-50"
//   style={{ backgroundImage: "url('/banner1.png')" }}
// />


//         {/* Soft Light Effects */}
//         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[140px] animate-pulse" />
//         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[140px] animate-pulse" />
//       </div>

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative py-36 text-white backdrop-blur-sm">
//         <div className="max-w-6xl mx-auto px-6">
//           <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
//             Delivering <span className="text-yellow-300">Strategic</span> Digital Solutions
//           </h1>

//           <p className="text-lg text-indigo-100 max-w-3xl leading-relaxed">
//             We collaborate with forward-thinking organizations to design and
//             develop scalable digital systems that drive operational excellence,
//             strengthen customer engagement, and enable sustainable growth.
//           </p>
//         </div>
//       </section>

//       {/* ================= PROJECT CARDS SECTION ================= */}
//       <section className="relative py-32 bg-white/90 backdrop-blur-xl">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-20">
//             <h2 className="text-4xl font-semibold mb-6">
//               Projects We Have Delivered
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               A selection of digital platforms and enterprise solutions designed
//               to drive measurable business impact and operational excellence.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

//             {/* Project Card 1 */}
//             <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
//               <div className="overflow-hidden">
//                 <img
//                   src="/ai.png"
//                   alt="Enterprise Platform"
//                   className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
//                 />
//               </div>

//               <div className="p-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Enterprise Digital Platform
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   A scalable enterprise system designed to streamline operations,
//                   improve customer engagement, and enhance workflow efficiency.
//                 </p>

//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>Industry: Enterprise</span>
//                   <span className="text-indigo-600 font-medium">
//                     Performance Optimized
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Project Card 2 */}
//             <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
//               <div className="overflow-hidden">
//                 <img
//                   src="/banner.png"
//                   alt="Education System"
//                   className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
//                 />
//               </div>

//               <div className="p-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Education Technology System
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   A real-time analytics dashboard enabling structured learning,
//                   performance monitoring, and adaptive content delivery.
//                 </p>

//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>Industry: EdTech</span>
//                   <span className="text-indigo-600 font-medium">
//                     Data-Driven
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Project Card 3 */}
//             <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
//               <div className="overflow-hidden">
//                 <img
//                   src="/banner1.png"
//                   alt="Corporate Website"
//                   className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
//                 />
//               </div>

//               <div className="p-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Corporate Web Transformation
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   A modern corporate website focused on strategic brand positioning,
//                   optimized performance, and lead generation growth.
//                 </p>

//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>Industry: Professional Services</span>
//                   <span className="text-indigo-600 font-medium">
//                     Conversion Focused
//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
//       <section className="relative border-t border-gray-200 py-24 bg-white/95 backdrop-blur-md">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold mb-6">
//             Partner With Us to Drive Digital Transformation
//           </h2>

//           <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
//             Engage with a team committed to delivering secure, scalable,
//             and strategically aligned digital solutions.
//           </p>

//           <button className="px-10 py-4 bg-[#111827] text-white text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition">
//             <Link to="/contact">Contact Our Team</Link>
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default OurWork;
import React from "react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="relative overflow-hidden text-[#1a1a1a]">

      {/* ================= GLOBAL SMOOTH BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/banner1.png')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Smooth Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-36 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Delivering <span className="text-yellow-300">Strategic</span> Digital Solutions
          </h1>

          <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
            We collaborate with forward-thinking organizations to design and
            develop scalable digital systems that drive operational excellence,
            strengthen customer engagement, and enable sustainable growth.
          </p>
        </div>
      </section>

      {/* ================= PROJECT CARDS SECTION ================= */}
      <section className="relative py-32 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6">
              Projects We Have Delivered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of digital platforms and enterprise solutions designed
              to drive measurable business impact and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Project 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/enterprise.png"
                  alt="Enterprise Platform"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Enterprise Digital Platform
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A scalable enterprise system designed to streamline operations,
                  improve customer engagement, and enhance workflow efficiency.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: Enterprise</span>
                  <span className="text-indigo-600 font-medium">
                    Performance Optimized
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/education.png"
                  alt="Education System"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Education Technology System
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A real-time analytics dashboard enabling structured learning,
                  performance monitoring, and adaptive content delivery.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: EdTech</span>
                  <span className="text-indigo-600 font-medium">
                    Data-Driven
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="/corporate.png"
                  alt="Corporate Website"
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Corporate Web Transformation
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A modern corporate website focused on strategic brand positioning,
                  optimized performance, and lead generation growth.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Industry: Professional Services</span>
                  <span className="text-indigo-600 font-medium">
                    Conversion Focused
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative border-t border-gray-200 py-24 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Partner With Us to Drive Digital Transformation
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Engage with a team committed to delivering secure, scalable,
            and strategically aligned digital solutions.
          </p>

          <button className="px-10 py-4 bg-[#111827] text-white text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition">
            <Link to="/contact">Contact Our Team</Link>
          </button>
        </div>
      </section>

    </div>
  );
};

export default OurWork;

