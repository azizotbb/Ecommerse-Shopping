import React from "react";
import laptop2 from "../../imgs/laptop2.png";

export default function DiscountSection() {
  return (
    <div className="discount-section my-5  ">
      <div>
        <h4 className="font  discount-text ">
          خصومات ضخمه على اجهزه الابتوب تصل الى 50%
        </h4>
      </div>
      <img src={laptop2} alt="" className="discount-img" />
    </div>
  );
}
