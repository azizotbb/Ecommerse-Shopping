import React from "react";
import { Col } from "react-bootstrap";
import laptop from "../../imgs/laptop.png";

export default function CategoryCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="2">
      <div className="category-Img-background">
        <img className="category-Img" src={laptop} alt="" />
      </div>
      <h4 className="px-5"> اجهزه</h4>
    </Col>
  );
}
