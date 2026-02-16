export default function ChooseUs() {
  const reasons = [
    "Solutions tailored for startups & businesses",
    "Real-world internship & training programs",
    "Affordable and scalable tech solutions",
    "Dedicated support & long-term partnership",
    "Passionate developers who care about results",
    "Fast delivery without compromising quality",
  ];

  return (
    <section className="py-20 bg-gray-700/30  text-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        Why People Choose Us?
      </h2>

      <div className="w-full  mx-auto grid md:grid-cols-2 gap-5 px-6 items-center ">
        {/* Left Image */}
        <div className=" w-[80%] overflow-hidden rounded-xl">
          <img
            src="c1.jpg"
            alt="Team working"
            className="w-full  object-cover rounded-xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="p-5 border border-gray-700 rounded-lg hover:bg-[#10182b] transition"
            >
              ✔ {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
