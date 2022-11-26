import React from "react";

// import component
import BestsellerSlider from "./BestsellerSlider";

// import data
import { bestsellerData } from "../data";

const Bestseller = () => {
  // destructure bestseller data
  const { title, subtitle, btn, cards } = bestsellerData;

  return (
    <div
      id="best"
      className="section md:mt-10 lg:mt-16 xl:mt-4 bg-bestseller bg-bottom bg-cover lg:overflow-hidden"
    >
      <div className="wrapper flex flex-col justify-center lg:justify-start lg:items-center gap-y-6 md:gap-y-9 lg:gap-y-0 lg:flex-row lg:relative lg:overflow-visible lg:h-[500px] 2xl:h-[600px]">
        {/* text */}
        <div
          className="text-white w-[70%] md:w-[50%] lg:w-[25%] mx-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-4 lg:gap-y-6 lg:absolute xl:left-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="h2">{title}</h2>
          <p className="capitalize">{subtitle}</p>
          <button className="btn btn-secondary bg-black hover:bg-white border-white text-white hover:text-black mt-2">
            <a href="#product">{btn}</a>
          </button>
        </div>

        {/* slider */}
        <div
          className="h-full w-full lg:absolute lg:left-[30%] xl:left-[40%] lg:-right-[220px]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <BestsellerSlider cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
