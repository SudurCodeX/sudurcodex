const Testimonal = () => {
const cardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Suman Shrestha",
    role: "Founder, TechNep Solutions",
    rating: 5,
    review:
      "SudurCodex delivered our corporate website with exceptional quality and precision. Their professional approach exceeded expectations.",
    date: "April 20, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Aarav Gurung",
    role: "Startup Founder",
    rating: 5,
    review:
      "The team built a scalable platform for our startup. Communication was smooth and delivery was timely.",
    date: "May 10, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarita Karki",
    role: "IT Student",
    rating: 5,
    review:
      "The training program was practical and industry-focused. It helped me gain real project experience.",
    date: "June 5, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Rohit Tamang",
    role: "Product Manager",
    rating: 5,
    review:
      "AI integration from SudurCodex improved our operational efficiency significantly.",
    date: "May 18, 2025",
  },

  {
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shyam Kumar",
    role: "Startup Founder",
    rating: 5,
    review:
      "The team built a scalable and responsive platform for our startup. Their technical expertise and smooth communication made the entire process seamless.",
    date: "May 10, 2025",
  },
  
 
  {
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&auto=format&fit=crop&q=60",
    name: "Prakash Rai",
    role: "Business Owner",
    rating: 5,
    review:
      "Professional team, timely delivery, and enterprise-level quality. Our website now reflects our brand perfectly.",
    date: "June 12, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    name: "Ramesh Adhikari",
    role: "E-commerce Owner",
    rating: 5,
    review:
      "Their development team delivered a scalable e-commerce solution that improved our customer experience significantly.",
    date: "August 2, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&auto=format&fit=crop&q=60",
    name: "Mina Basnet",
    role: "Marketing Director",
    rating: 5,
    review:
      "SudurCodex transformed our digital presence with a modern, high-performing website aligned with our brand vision.",
    date: "August 15, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=60",
    name: "Kiran Bhandari",
    role: "Tech Consultant",
    rating: 5,
    review:
      "Their expertise in AI and web architecture is impressive. The team delivers both innovation and reliability.",
    date: "August 28, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60",
    name: "Sujata KC",
    role: "College Student",
    rating: 5,
    review:
      "The hands-on training approach at SudurCodex helped me build confidence and a strong development portfolio.",
    date: "September 5, 2025",
  },
];



  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex text-gray-900 items-center gap-1">
            <p>{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">
        {card.review}
      </p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-sky-500"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full  h-full  bg-zinc-100">
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div className="text-black/80 text-center p-2">
        <h1 className="text-4xl font-semibold">What Our Clients Say</h1>

        <p className="text-md p-2 text-zinc-600">
          Join thousand of successful students who transformed their careers
          with us
        </p>
      </div>

      <div className="marquee-row w-full mx-auto max-w-9xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-9xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>
    </div>
  );
};


export default Testimonal