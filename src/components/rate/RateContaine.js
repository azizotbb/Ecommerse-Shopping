import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../uitily/Pagination";
import ViewAllReviewHook from "../../hooks/review/ViewAllReviewHook";
import { useParams } from "react-router-dom";

export default function RateContaine({ rateAvg, ratingsQuantity }) {
  const { id } = useParams();

  const [productReviews, onPress] = ViewAllReviewHook(id);
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
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({` ${ratingsQuantity} تقيم`})
          </div>
        </Col>
      </Row>
      <RatePost />

      {productReviews.data ? (
        productReviews.data.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        <h6>لا يوجد تقيمات الان</h6>
      )}

      {productReviews.paginationResult &&
      productReviews.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            productReviews.paginationResult
              ? productReviews.paginationResult.numberOfPages
              : 0
          }
          getPage={onPress}
        />
      ) : null}
    </Container>
  );
}
