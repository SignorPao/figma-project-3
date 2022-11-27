import React from "react";

// import data
import { discountData } from "../data";

const Discount = () => {
  // destructure discount data
  const { title, subtitle, date, btn, img, gradient, vector } = discountData;

  return (
    <div className="section">
      <div className="wrapper bg-brown-100 flex flex-col lg:flex-row">
        {/* text */}
        <div className="flex-[60%]">
          <h2 className="h2">{title}</h2>
          <p className="capitalize">{subtitle}</p>
          <div>date</div>
          <button className="btn btn-primary">{btn}</button>
        </div>

        {/* image */}
        <div className="flex-[40%]">image</div>
      </div>
    </div>
  );
};

export default Discount;
