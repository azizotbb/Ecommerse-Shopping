import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function RateItem() {
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">ali aziz</div>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#FFD43B",
              height: "16px",
              width: "16px",
              paddingTop: "8px",
            }}
          />
          <div className="cat-rate d-inline p-1 pt-2">4.9</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description d-inline ms-2">
            is good product i like it and recommended{" "}
          </div>
        </Col>
      </Row>
    </div>
  );
}
