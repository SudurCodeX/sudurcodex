

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

// helper
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ChooseUs = () => {
  const container = useRef(null);
  const imageRefs = useRef([]);

  const cards = [
    { id: 1, image: "c1.jpg" },
    { id: 2, image: "c2.jpg" },
    { id: 3, image: "c3.jpg" },
    { id: 4, image: "c4.jpg" },
    { id: 5, image: "c5.jpg" },
    { id: 6, image: "c6.jpg" },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const images = imageRefs.current;
      const totalCards = images.length;

      if (!images[0]) return;

      gsap.set(images[0], { y: "0%" });

      for (let i = 1; i < totalCards; i++) {
        gsap.set(images[i], { y: "100%" });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        timeline.to(
          images[i],
          { scale: 0.7, rotation: 5, duration: 1, ease: "none" },
          i,
        );

        timeline.to(images[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
      }

      return () => {
        timeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <ReactLenis root>
      <section
        ref={container}
        className="hidden lg:flex relative h-full w-full py-20 bg-white"
      >
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Why Choose Us ?
        </h2>

        <div className="sticky-cards  flex items-center justify-center overflow-hidden p-3 lg:p-8">
          <div className="relative h-170  lg:h-screen w-full  overflow-hidden rounded-lg">
            {cards.map((card, i) => (
              <img
                key={card.id}
                src={card.image}
                alt=""
                className="absolute h-full  w-full    object-contain  rounded-3xl"
                ref={(el) => (imageRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default ChooseUs;
