 {servicesData.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className=" w-full h-full  lg:w-[45%]  lg:shrink-0 lg:h-90 flex lg:flex-row flex-col-reverse  lg:gap-1  gap-3 shadow-[0px_1px_3px_#fff]   rounded-lg"
          >
            {/* Left */}
            <div className="  lg:w-1/2 h-full  p-4     ">
              <h3 className=" text-2xl lg:text-4xl font-bold text-white">
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
        );
      })}