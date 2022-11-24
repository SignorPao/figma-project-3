import React from "react";

// import Swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BestsellerSlider = ({ cards }) => {
  return (
    <Swiper
      slidesPerView={1.3}
      spaceBetween={10}
      grabCursor={true}
      loop={false}
      className="h-[50vh]"
    >
      {cards.map((card) => {
        // destructure bestseller cards
        const { id, img, icon, name, priceOld, priceNew } = card;

        return (
          <SwiperSlide key={id} className="h-full w-full flex flex-col">
            {/* image */}
            <div className="h-[70%]">
              <img
                src={img}
                alt="bestseller"
                className="h-full w-full object-cover"
              />
            </div>

            {/* text */}
            <div className="h-[30%] bg-white p-4 flex flex-col justify-center gap-y-2">
              <p className="flex gap-x-[2px] text-yellow">
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
              </p>
              <h6 className="h6">{name}</h6>
              <div className="flex gap-x-3">
                <span className="text-black/50 line-through">{priceOld}</span>
                <span className="font-semibold text-red">{priceNew}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BestsellerSlider;
