import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { star } from "./star";
import ReviewHook from "../../hooks/review/ReviewHook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

export default function RatePost() {
  const { id } = useParams();
  const [
    onchangeRateText,
    onchangeRateValue,
    rateText,
    rateValue,
    data,
    submint,
  ] = ReviewHook(id);
  var name = "";
  if (data) {
    name = data.name;
  }
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
    onChange: (newValue) => {
      onchangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{name}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            onChange={onchangeRateText}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end al">
            <div
              className="product-cart-add px-3  py-2 text-center d-inline"
              onClick={submint}
            >
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
