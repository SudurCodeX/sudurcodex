export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Discover & Strategize",
      desc: "We analyze goals and plan solutions before development starts.",
      img: "d1.jpg",
    },
    {
      title: "Design Experience",
      desc: "We craft intuitive and modern UI/UX experiences.",
      img: "d2.jpg",
    },
    {
      title: "Build & Develop",
      desc: "Robust applications built using modern technologies.",
      img: "d3.jpg",
    },
    {
      title: "Testing & Optimization",
      desc: "Ensuring performance, stability and reliability.",
      img: "d4.jpg",
    },
    {
      title: "Launch & Support",
      desc: "Deployment and continuous improvement support.",
      img: "d5.jpg",
    },
  ];

  return (
    <section className="hidden lg:block py-20 bg-[#0b1220] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        How We Build Products 
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[#121b2d] rounded-xl overflow-hidden border border-gray-700 hover:scale-105 transition"
          >
            <img src={step.img} className="h-36 w-full object-cover" alt="" />

            <div className="p-4 text-center">
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
