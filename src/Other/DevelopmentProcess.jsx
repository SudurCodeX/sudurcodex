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
    <section className="py-24 bg-zinc-200 text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        How We Build Digital Products
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20">
        A proven, transparent process that turns ideas into scalable products.
      </p>

      {/* Desktop timeline */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-10">
        <div className="absolute top-8 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

        <div className="grid grid-cols-5 gap-10 relative">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 flex items-center justify-center text-2xl rounded-full bg-white shadow-lg border border-gray-200 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Card */}
              <div className="mt-8 p-4 rounded-2xl bg-gray-200 shadow-md border border-gray-400 group-hover:shadow-xl transition    ">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden px-6 space-y-6 max-w-md mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-2xl bg-white shadow-md border border-gray-100"
          >
            <div className="text-2xl">{step.icon}</div>
            <div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
