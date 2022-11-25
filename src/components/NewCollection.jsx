import React from "react";

// import data
import { newCollectionData } from "../data";

const NewCollection = () => {
  // destructure new collection data
  const { title, subtitle, cards, rectangle } = newCollectionData;

  return (
    <div id="new" className="section overflow-hidden">
      <div className="wrapper flex flex-col gap-y-6 md:gap-y-9 lg:gap-y-12 relative overflow-visible">
        {/* text */}
        <div
          className="w-[70%] md:w-[50%] mx-auto flex flex-col items-center justify-center text-center gap-y-4 lg:gap-y-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="h2">{title}</h2>
          <p className="capitalize">{subtitle}</p>
        </div>

        {/* cards */}
        <div className="flex flex-col lg:flex-row gap-y-4 md:gap-y-10 lg:gap-y-0 lg:gap-x-6 relative">
          {cards.map((item, index) => {
            // destructure cards data
            const { img, text, delay } = item;

            return (
              <figure
                className="relative overflow-hidden z-[20]"
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <img
                  className="hover:scale-110 transition"
                  src={img}
                  alt="new collection"
                />
                <figcaption className="absolute bottom-[4%] w-[90%] left-1/2 -translate-x-1/2">
                  <p className="bg-white w-full text-center py-3 uppercase cursor-pointer font-semibold hover:bg-black hover:text-white transition">
                    {text}
                  </p>
                </figcaption>
              </figure>
            );
          })}
          {/* some shapes */}
          <img
            src={rectangle}
            alt="shape"
            className="absolute -bottom-[3%] md:-bottom-[1%] lg:-bottom-[10%] xl:-bottom-[13%] -right-[10%] md:-right-[9%] xl:-right-[7%] w-40 md:w-52 lg:w-60 2xl:w-80 z-[10]"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
