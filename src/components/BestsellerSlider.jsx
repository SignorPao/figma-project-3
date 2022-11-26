import React from "react";

// import style
import "../style.css";

// import Swiper slider
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BestsellerSlider = ({ cards }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1.3}
      spaceBetween={10}
      speed={500}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        1540: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
      }}
      className="bestSwiper h-full w-full"
    >
      {cards.map((card) => {
        // destructure card
        const { id, img, icon, name, priceOld, priceNew } = card;

        return (
          <SwiperSlide
            key={id}
            className="h-full max-w-[300px] 2xl:max-w-[350px] flex flex-col select-none"
          >
            {/* image */}
            <div className="h-[75%] w-full">
              <img
                src={img}
                alt="bestseller"
                className="object-cover h-auto max-w-full"
              />
            </div>

            {/* text */}
            <div className="bg-white h-[25%] p-4 flex flex-col justify-between">
              <div className="flex gap-x-1 text-yellow">
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
              </div>
              <h6 className="h6">{name}</h6>
              <p className="flex gap-x-3 font-semibold">
                <span className="text-black/30 line-through">{priceOld}</span>
                <span className="text-red">{priceNew}</span>
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BestsellerSlider;
