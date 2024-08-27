import React from "react";
import { Col } from "react-bootstrap";

export default function CategoryCard({ title, color, img }) {
  return (
    <Col xs="6" sm="6" md="4" lg="2">
      <div
        className="category-Img-background "
        style={{ backgroundColor: color }}
      >
        <img className="category-Img" src={img} alt="" />
      </div>
      <h5 className="font text-center mt-3"> {title}</h5>
    </Col>
  );
}
