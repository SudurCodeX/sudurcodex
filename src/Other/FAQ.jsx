import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

   const faqs = [
     {
       question: "What does your company specialize in?",
       answer:
         "We specialize in intelligent and scalable digital solutions, including AI-powered systems, modern web applications, and automation solutions.",
     },
     {
       question: "Do you build AI-powered applications?",
       answer:
         "Yes, we develop AI-powered systems that help businesses automate processes, improve decision-making, and enhance user experiences.",
     },
     {
       question: "What types of web applications do you develop?",
       answer:
         "We build scalable, secure, and user-friendly web applications tailored to startups, enterprises, and growing businesses.",
     },
    
     {
       question: "Do you offer custom digital solutions?",
       answer:
         "Yes, all our solutions are customized based on client requirements to ensure scalability and long-term business growth.",
     },
     {
       question: "How do you ensure scalable solutions?",
       answer:
         "We use modern architectures, cloud-ready technologies, and best development practices to ensure solutions grow with your business.",
     },
     
     
     {
       question: "What is your approach to project collaboration?",
       answer:
         "We focus on innovation and close collaboration with clients to deliver solutions aligned with their goals.",
     },
     {
       question: "How can we start working with your team?",
       answer:
         "You can contact us through our website or email with your project details, and our team will guide you through the next steps.",
     },
   ];


  return (
    <div className="w-full py-20 px-4 bg-linear-to-b from-indigo-100 via-white to-blue-100">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-14">
          <p className="text-indigo-600 font-medium">FAQs</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our digital solutions,
            development process, and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800 text-lg">
                  {faq.question}
                </h3>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
