import React from "react";

// import data
import { discountData } from "../data";

// import react-countup
import CountUp from "react-countup";

const Discount = () => {
  // destructure discount data
  const { title, subtitle, date, btn, gradient, vector } = discountData;

  return (
    <div className="section overflow-hidden">
      <div className="wrapper relative overflow-hidden">
        <div className="bg-brown-100 flex flex-col lg:flex-row gap-y-10 md:gap-y-12 lg:gap-y-0 lg:gap-x-20 xl:gap-x-28 pt-10 pr-10 pb-0 pl-10 lg:pt-16 lg:pr-16 lg:pl-16 xl:pt-20 xl:pr-20 xl:pl-20 2xl:pt-36 2xl:pr-36 2xl:pl-36">
          {/* text */}
          <div className="lg:flex-[55%] w-[70%] md:w-[50%] mx-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-4 lg:gap-y-6 lg:mb-8 xl:mb-20 2xl:mb-36 z-[20]"   data-aos="fade-up"
          data-aos-delay="400">
            <h2 className="h2">{title}</h2>
            <p className="capitalize">{subtitle}</p>
            <div className="flex gap-x-4">
              {date.map((item) => {
                // destructure item
                const { id, startNum, endNum, duration, desc } = item;

                return (
                  <div
                    key={id}
                    className="w-20 bg-white p-2 flex flex-col gap-y-1 justify-center items-center"
                  >
                    {/* num */}
                    <p className="text-2xl lg:text-4xl font-semibold">
                      <CountUp
                        start={startNum}
                        end={endNum}
                        duration={duration}
                        enableScrollSpy="true"
                        useEasing="false"
                      />
                    </p>

                    {/* desc */}
                    <p className="text-sm">{desc}</p>
                  </div>
                );
              })}
            </div>
            <button className="btn btn-primary">{btn}</button>
          </div>

          {/* image */}
          <div className="lg:flex-[45%] h-[40vh] md:h-[50vh] lg:h-[40vh] xl:h-[60vh] 2xl:h-[55vh] w-[90%] md:w-[70%] mx-auto flex justify-center items-center z-[20]"   data-aos="fade-up"
          data-aos-delay="600">
            <div className="bg-discount bg-slate-400 bg-cover bg-no-repeat w-full h-full relative">
              {/* shape */}
              <img
                src={vector}
                alt="shape"
                className="absolute w-20 md:w-28 2xl:w-32 -right-[13%] md:-right-[11%] lg:-right-[15%] 2xl:-right-[13%] bottom-[20%]"
              />
            </div>
          </div>
        </div>

        {/* shape */}
        <img
          src={gradient}
          alt="shape"
          className="wrapper absolute w-60 md:w-72 lg:w-80 bottom-[13%] md:bottom-[17%] lg:bottom-[23%] right-0 z-[10]"
        />
      </div>
    </div>
  );
};

export default Discount;
