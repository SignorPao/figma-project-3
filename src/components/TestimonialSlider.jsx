import React from "react";

// import style
import "../style.css";

// import Swiper slider
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSlider = ({ cards }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={"auto"}
      centeredSlides={"true"}
      spaceBetween={10}
      speed={500}
      loop={"true"}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      breakpoints={{
        1024: {
          spaceBetween: 20,
        },
        1540: {
          spaceBetween: 30,
        },
      }}
      className="testimonialSwiper h-full w-full"
    >
      {cards.map((card) => {
        // destructure card
        const { id, title, subtitle, avatar, name, position } = card;

        return (
          <SwiperSlide
            key={id}
            className="bg-brown-200 h-full max-w-[260px] lg:max-w-[350px] xl:max-w-[450px] 2xl:min-w-[550px] flex flex-col items-center justify-center text-center gap-y-4 p-4 lg:p-8 2xl:p-10 select-none"
          >
            {/* text */}
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">{title}</p>
              <p className="text-xs">{subtitle}</p>
            </div>

            {/* avatar */}
            <div className="flex w-16 h-16 rounded-full overflow-hidden">
              <img src={avatar} alt="avatar" className="w-full object-cover" />
            </div>

            {/* name & position */}
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-black/50">{position}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
