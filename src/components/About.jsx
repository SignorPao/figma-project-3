import React from "react";

// import data
import { aboutData } from "../data";

const About = () => {
  // destructure about data
  const { img, title, subtitle, stats, gradient, rectangle } = aboutData;
  return (
    <div id="about" className="section h-screen overflow-hidden">
      <div className="wrapper h-full overflow-visible flex flex-col lg:flex-row relative">
        {/* image */}
        <div className="bg-amber-100 flex-1 order-2 lg:order-1  h-full w-full flex items-start lg:items-center justify-center lg:justify-start">
          <div className="w-[85%] h-[90%] lg:w-[90%] lg:h-[50%] xl:w-[80%] xl:h-[90%] rounded-tl-[80px] lg:rounded-tl-[120px] bg-about bg-center bg-cover bg-no-repeat relative">
            {/* some shapes */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
          </div>
        </div>

        {/* text */}
        <div className="bg-sky-100 flex-1 order-1 lg:order-2">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* stats */}
        <div className="bg-pink-100 order-3 lg:absolute bottom-0 right-0">
          stats
        </div>
      </div>
    </div>
  );
};

export default About;
