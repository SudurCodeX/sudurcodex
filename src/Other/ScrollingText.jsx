export default function ScrollingText() {
  const text = "Let's create something together";

  return (
    <section className="w-full h-30 lg:h-50 flex items-center border-y border-gray-500 bg-[#63615e] overflow-hidden">
      <div className="whitespace-nowrap flex group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex">
          {[...Array(6)].map((_, i) => (
            <h1
              key={i}
              className=" text-[10vw] lg:text-7xl md:text-[100px] font-light tracking-tight mr-10 inline-flex items-center"
            >
              {text}
              <span className="ml-6 px-4 bg-[#1b1b19] text-gray-400 uppercase text-[10vw] lg:text-7xl md:text-[70px]">
                Email US
              </span>
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}
