import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { star } from "./star";

export default function RatePost() {
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />,
    halfIcon: (
      <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B" }} />
    ),
    filledIcon: star,
    onChange: (newValue) => {},
  };
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">ali</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end al">
            <div className="product-cart-add px-3  py-2 text-center d-inline">
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
