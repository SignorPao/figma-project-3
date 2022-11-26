import React from "react";

// import data
import { productData } from "../data";

const Product = () => {
  // destructure product data
  const { title, menu, cards, vector } = productData;

  return (
    <div id="product" className="section relative overflow-hidden">
      <div className="wrapper flex flex-col gap-y-6 md:gap-y-9 lg:gap-y-12">
        {/* text */}
        <div
          className="text-center flex flex-col gap-y-4 lg:gap-y-6"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="h2">{title}</h2>
          <ul className="flex justify-center items-center gap-x-4 lg:gap-x-10 xl:gap-x-20">
            {menu.map((item, index) => {
              // destructure item
              const { name, href } = item;

              return (
                <li key={index}>
                  <a
                    href={href}
                    className="capitalize font-extrabold hover:border-b-2 xl:hover:border-b-[3px] border-black transition"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* cards */}
        <div
          className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-x-6 lg:gap-y-10"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          {cards.map((card, index) => {
            // destructure card
            const { img, icon, name, priceOld, priceNew } = card;

            return (
              <div className="bg-violet-100 cursor-pointer hover:shadow-lg xl:hover:shadow-xl transition h-[250px] md:h-[330px] xl:h-[320px] 2xl:h-[450px] w-full">
                {/* image */}
                <div className="h-[70%] w-full overflow-hidden">
                  <img
                    src={img}
                    alt="product"
                    className="object-cover h-auto max-w-full"
                  />
                </div>

                {/* text */}
                <div className="h-[30%] w-full bg-white p-4 flex flex-col justify-between items-center">
                  <div className="flex gap-x-1 text-yellow">
                    <span>{icon}</span>
                    <span>{icon}</span>
                    <span>{icon}</span>
                    <span>{icon}</span>
                    <span>{icon}</span>
                  </div>
                  <h6 className="h6">{name}</h6>
                  <p className="flex gap-x-3 font-semibold">
                    <span className="text-black/30 line-through">
                      {priceOld}
                    </span>
                    <span className="text-red">{priceNew}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* shape */}
      <img
        src={vector}
        alt="shape"
        className="absolute z-[15] top-[2%] -right-[4%] md:-right-[2%] xl:-right-[3%] 2xl:-right-[2%] w-16 lg:w-32 2xl:w-36"
      />
    </div>
  );
};

export default Product;
