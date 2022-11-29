import React from "react";

// import component
import TestimonialSlider from "./TestimonialSlider";

// import data
import { testimonialData } from "../data";

const Testimonial = () => {
  // destructure testimonial data
  const { title, subtitle, cards } = testimonialData;

  return (
    <div id="testimonial" className="section">
      <div className="flex flex-col gap-y-6 md:gap-y-9 lg:gap-y-12">
        {/* text */}
        <div
          className="wrapper w-[70%] md:w-[50%] xl:w-full mx-auto flex flex-col items-center justify-center text-center gap-y-4 lg:gap-y-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2 className="h2">{title}</h2>
          <p className="capitalize">{subtitle}</p>
        </div>

        {/* slider */}
        <div
          className="h-[400px] w-full"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <TestimonialSlider cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
