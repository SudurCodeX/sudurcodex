import { useRef } from "react";

export default function SpotlightText() {
  const sectionRef = useRef(null);

  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionRef.current.style.setProperty("--x", `${x}px`);
    sectionRef.current.style.setProperty("--y", `${y}px`);
  };

  const textClass =
    " textClass w-full px-5 flex justify-between text-[20vw] lg:text-[22vw] font-extrabold select-none";

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      className="hidden lg:block relative py-20 lg:py-30 bg-black overflow-hidden"
    >
      {/* Outline Text */}
      <div
        className={`${textClass} text-transparent`}
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
      >
        <span>Sudur</span>
        <span>CodeX</span>
      </div>

      {/* Spotlight Reveal */}
      <div
        className={`textClass hidden lg:flex absolute inset-0 justify-between items-center px-5
                    pointer-events-none lg:text-[22vw] font-extrabold
                    text-transparent bg-clip-text`}
        style={{
          backgroundImage:
            "radial-gradient(circle 220px at var(--x) var(--y), #ff6a00, #ff2d55, #7c3aed, transparent 60%)",
        }}
      >
        <span>Sudur</span>
        <span>CodeX</span>
      </div>
    </section>
  );
}
