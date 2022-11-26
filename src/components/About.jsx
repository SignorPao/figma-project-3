import React from "react";

// import data
import { aboutData } from "../data";

// import react-countup
import CountUp from "react-countup";

const About = () => {
  // destructure about data
  const { title, subtitle, stats, vector, rectangle2 } = aboutData;

  return (
    <div id="about" className="section overflow-hidden">
      <div className="wrapper overflow-visible flex flex-col lg:flex-row gap-y-10 md:gap-y-12 lg:gap-y-0 lg:gap-x-20 relative">
        {/* image */}
        <div
          className="lg:flex-1 order-2 lg:order-1  h-[50vh] md:h-[60vh] lg:h-[40vh] xl:h-[75vh] w-full flex items-center justify-center lg:justify-start"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="w-[85%] h-full lg:w-[90%] lg:h-[100%] xl:w-[80%] xl:h-[90%] rounded-tl-[80px] lg:rounded-tl-[120px] bg-about bg-center bg-cover bg-no-repeat relative">
            {/* some shapes */}
            <img
              src={vector}
              alt="shape"
              className="absolute -top-[5%] xl:-top-[7%] 2xl:-top-[5%] -right-[7%] xl:-right-[9%] 2xl:-right-[6%] w-20 md:w-28 2xl:w-32"
            />
            <img
              src={rectangle2}
              alt="shape"
              className="absolute -bottom-[8%] md:-bottom-[4%] lg:-bottom-[10%] 2xl:-bottom-[7%] -left-[10%] md:-left-[5%] lg:-left-[10%] xl:-left-[13%] 2xl:-left-[9%] w-24 md:w-32 2xl:w-40"
            />
          </div>
        </div>

        {/* text */}
        <div
          className="w-[70%] md:w-[50%] mx-auto lg:flex-1 order-1 lg:order-2 flex flex-col items-center lg:items-start justify-start text-center lg:text-left lg:pt-28 2xl:pt-52 gap-y-4 lg:gap-y-6"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="h2 lg:max-w-[80%]">{title}</h2>
          <p className="capitalize lg:max-w-[80%]">{subtitle}</p>
        </div>

        {/* stats */}
        <div
          className="bg-white order-3 w-full lg:w-[70%] lg:absolute bottom-0 lg:-bottom-[8%] xl:-bottom-[2%] right-0 lg:right-4 flex justify-center items-center py-6 lg:py-10 2xl:py-16 shadow-lg xl:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {stats.map((item) => {
            // destructure stats data
            const { id, startNum, endNum, duration, suf, logo, text } = item;

            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center px-6 border-solid border-black/20 border-r-[1px] last:border-r-0 md:flex-1"
              >
                <div className="flex items-center space-x-1">
                  <h3 className="h3">
                    <CountUp
                      start={startNum}
                      end={endNum}
                      duration={duration}
                      enableScrollSpy="true"
                      useEasing="false"
                    />
                  </h3>
                  <span className="text-lg lg:text-2xl 2xl:text-3xl font-bold">
                    {suf}
                  </span>
                </div>
                <p className="text-xs xl:text-base 2xl:text-lg capitalize">
                  <span className="font-logo text-base xl:text-xl 2xl:text-2xl">
                    {logo}{" "}
                  </span>
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
