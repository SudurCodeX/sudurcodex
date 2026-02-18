export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Discover",
      desc: "We understand your goals, users, and market needs.",
      icon: "🔍",
    },
    {
      title: "Design",
      desc: "Clean, intuitive UI/UX crafted for real users.",
      icon: "🎨",
    },
    {
      title: "Develop",
      desc: "Scalable and high-performance applications.",
      icon: "⚙️",
    },
    {
      title: "Test",
      desc: "Rigorous testing for speed, security & quality.",
      icon: "🧪",
    },
    {
      title: "Launch",
      desc: "Smooth deployment with long-term support.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-200 to-white text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        How We Build Digital Products
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20">
        A proven, transparent process that turns ideas into scalable products.
      </p>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-10">
        {/* Stable Gradient Line */}
        <div
          className="absolute left-0 right-0 h-0.5 top-10 rounded-full
                     bg-linear-to-r from-orange-500 via-purple-500 to-blue-500
                     pointer-events-none"
        ></div>

        <div className="grid grid-cols-5 gap-10 relative">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              {/* Step Circle */}
              <div
                className="mx-auto w-16 h-16 flex items-center justify-center
                           text-2xl rounded-full bg-white shadow-xl
                           border border-gray-200
                           group-hover:-translate-y-2 transition duration-300"
              >
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="text-xs text-gray-400 mt-2">STEP {i + 1}</div>

              {/* Card */}
              <div
                className="mt-8 p-4 rounded-2xl bg-white
                           shadow-md border border-gray-200
                           group-hover:shadow-xl
                           group-hover:-translate-y-2
                           transition duration-300"
              >
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 space-y-4 max-w-md mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex gap-4 p-6 rounded-2xl bg-white shadow-md
                       border border-gray-100 hover:-translate-y-1
                       transition duration-300"
          >
            <div className="text-2xl">{step.icon}</div>

            <div>
              <div className="text-xs text-gray-400 mb-1">STEP {i + 1}</div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
