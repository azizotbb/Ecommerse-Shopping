import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../imgs/slide1.png";
import slide2 from "../../imgs/slide2.png";
import slide3 from "../../imgs/slide3.png";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-2">
      <Carousel.Item style={{ backgroundColor: "lightblue" }}>
        <div className="d-flex flex-row  justify-content-center  align-items-center nav-text ">
          <img
            src={slide1}
            alt="slide1"
            text="fffff"
            style={{ height: "296px", width: "313" }}
          />
          <div>
            <p> هنالك خصومات كبيره </p>
            <h3>خصم يصل الى 50%</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "lightcoral" }}>
        <div className="d-flex flex-row  justify-content-center  align-items-center nav-text ">
          <img
            src={slide2}
            alt="slide1"
            text="fffff"
            style={{ height: "296px", width: "250px " }}
          />
          <div>
            <p> هنالك خصومات كبيره </p>
            <h3>خصم يصل الى 50%</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "lightgoldenrodyellow" }}>
        <div className="d-flex flex-row  justify-content-center  align-items-center nav-text ">
          <img
            src={slide3}
            alt="slide1"
            text="fffff"
            style={{ height: "296px", width: "313" }}
          />
          <div style={{ color: "black" }}>
            <p> هنالك خصومات كبيره </p>
            <h3>خصم يصل الى 50%</h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
