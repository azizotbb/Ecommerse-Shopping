import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../uitily/Pagination";

export default function RateContaine() {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#FFD43B",
              height: "16px",
              width: "16px",
              paddingTop: "8px",
            }}
          />
          <div className="cat-rate  d-inline  p-1 pt-2">9.9</div>
          <div className="rate-count d-inline p-1 pt-2">({`  تقيم`})</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination />
    </Container>
  );
}
