import React from "react";

// import Swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Mousewheel } from "swiper/core";

SwiperCore.use([Mousewheel]);

const InstagramSlider = ({ images }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={0}
      speed={500}
      loop={"true"}
      mousewheel={{ enabled: true }}
      direction={"horizontal"}
      className="h-full w-full"
    >
      {images.map((item) => {
        // destructure item
        const { id, img } = item;
        
        return (
          <SwiperSlide key={id} className="h-full max-w-[300px] select-none">
            <img
              src={img}
              alt="instagram avatar"
              className="w-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default InstagramSlider;
