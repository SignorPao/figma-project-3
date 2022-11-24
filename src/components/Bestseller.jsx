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
      className="section bg-bestseller bg-bottom bg-cover lg:overflow-hidden"
    >
      <div className="wrapper flex flex-col justify-center lg:justify-start lg:items-center gap-y-6 md:gap-y-9 lg:gap-y-0 lg:flex-row lg:relative lg:overflow-visible lg:min-h-[60vh]">
        {/* text */}
        <div className="text-white w-[70%] md:w-[50%] mx-auto lg:w-[20%] flex flex-col items-center lg:items-start justify-center text-center gap-y-4 lg:absolute xl:left-0 lg:min-w-[400px]">
          <h2 className="h3">{title}</h2>
          <p className="capitalize">{subtitle}</p>
          <button className="btn btn-secondary bg-black border-white text-white mt-2">
            <a href="#product">{btn}</a>
          </button>
        </div>

        {/* slider */}
        <div className="lg:absolute lg:left-[40%] lg:-right-52 lg:min-w-[1500px]">
          <BestsellerSlider cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
