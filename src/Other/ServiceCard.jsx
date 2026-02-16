import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function ServiceCard() {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and scalable websites and web applications using the latest technologies to help businesses establish a strong digital presence.",
      imgUrl: "web.avif",
    },
    {
      title: "AI & Automation Solutions",
      description:
        "We develop AI-powered solutions and automation tools that streamline business processes, improve efficiency, and enable smarter decision-making.",
      imgUrl: "ai_automation.avif",
    },
    {
      title: "IT Training Programs",
      description:
        "Industry-oriented training programs designed to equip students and professionals with practical skills needed for real-world technology careers.",
      imgUrl: "IT_training.avif",
    },
    {
      title: "Hackathons & Internships",
      description:
        "We organize hackathons and provide internship opportunities to give learners hands-on project experience and exposure to real industry workflows.",
      imgUrl: "hackathon.avif",
    },
  ];
  return (
    <div className=" w-full  bg-[#4f4d4d70]   flex  flex-wrap lg:flex-nowrap sm:p-0   p-8   ">
      <Swiper
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="w-[90%] h-100   "
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {servicesData.map((elem, idx) => (
          <SwiperSlide key={idx}>
            <div
              key={idx}
              className="  p-2 sm:m-auto  lg:m-3  lg:h-85  flex lg:flex-row flex-col-reverse  shadow-[0px_2px_3px_#fff]   rounded-lg"
            >
              {/* Left */}
              <div className="   lg:w-1/2 h-full  p-4     ">
                <h3 className=" text-xl lg:text-4xl font-bold text-white">
                  {elem.title}
                </h3>
                <p className="text-base  opacity-90 pt-2 text-blue-200">
                  {elem.description}
                </p>
              </div>

              {/* Right */}

              <div className="  lg:w-1/2 h-[95%] border-2 border-[#281C18] rounded-lg  mx-2 my-2  p-2 ">
                <img
                  src={elem.imgUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-lg s"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServiceCard;
