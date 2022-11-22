import React from "react";

// import component
import Nav from "./Nav";

// import data
import { heroData } from "../data";

const Header = () => {
  // destructure hero data
  const { title, subtitle, btn, gradient, vector } = heroData;

  return (
    <header
      id="home"
      className="h-screen bg-header bg-cover bg-bottom relative overflow-hidden"
    >
      <div className="wrapper h-full relative overflow-visible">
        {/* navigation */}
        <Nav />

        {/* hero */}
        <div className="flex flex-col lg:flex-row h-full pt-20 relative z-[20]">
          {/* text */}
          <div className="flex-1 h-full w-[85%] mx-auto lg:w-full flex flex-col items-center lg:items-start justify-center gap-y-6 text-center lg:text-left lg:max-w-md 2xl:max-w-[600px]">
            <h1 className="h1 capitalize">{title}</h1>
            <p className="capitalize lg:max-w-[360px]">{subtitle}</p>
            <button className="btn btn-primary shadow-2xl">{btn}</button>
          </div>

          {/* image */}
          <div className="flex-1 h-full w-full flex items-start lg:items-center justify-center lg:justify-end">
            <div className="w-[85%] h-[90%] lg:w-[90%] lg:h-[50%] xl:w-[70%] xl:h-[75%] bg-rose-300 rounded-bl-[90px] lg:rounded-bl-[150px] bg-hero bg-center bg-cover bg-no-repeat relative">
              {/* some shapes */}
              <img src={vector} alt="shape" className="absolute top-[15%] -right-[12%] md:-right-[8%] lg:-right-[15%] 2xl:-right-[11%] w-20 md:w-28 lg:w-32 2xl:w-36" />
              <img src={vector} alt="shape" className="absolute bottom-[10%] -left-[12%] md:-left-[8%] lg:-left-[13%] 2xl:-left-[11%] w-20 md:w-28 lg:w-32 2xl:w-36" />
            </div>
          </div>
        </div>
      </div>

      {/* some shapes */}
      <img src={gradient} alt="shape" className="absolute -left-60  lg:-left-40 bottom-0 lg:-bottom-32 z-[10]" />
      <img src={gradient} alt="shape" className="absolute -right-60 lg:-right-10 bottom-1/2 xl:bottom-[35%] z-[10]" />
      <img src={vector} alt="shape" className="absolute z-[15] top-24 lg:top-28 -left-4 w-16 lg:w-24" />
    </header>
  );
};

export default Header;
