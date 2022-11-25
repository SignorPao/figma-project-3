import React from "react";

// import style
import "../style.css";

// import Swiper slider
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BestsellerSlider = ({ cards }) => {
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper bg-slate-50 h-full w-full pb-10"
  >
    {cards.map((card) => {
      // destructure card
      const { id, img, icon, name, priceOld, priceNew } = card;

      return (
        <SwiperSlide key={id}>
          <img src={img} alt="bestseller" className="block w-full" />
        </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default BestsellerSlider;
