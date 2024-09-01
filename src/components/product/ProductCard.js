import React from "react";
import { Card, Col } from "react-bootstrap";
import iphone from "../../imgs/iphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className=" my-1">
      <Card
        style={{
          maxWidth: "185px",
          maxHeight: "400px",
          minWidth: "165",
          minHeight: "380",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Link to="/Details/:id">
          <Card.Img variant="top" src={iphone} className="product-img" />
        </Link>
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
          </Card.Title>
          <Link
            to="/Details/:id"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Text className="font">
              ابل ايفون 15 برو ماكس الجديد- تيتانيوم أزرق , شريحة واحدة
            </Card.Text>
            <div className=" d-flex flex-row justify-content-between">
              <div style={{ color: "#FFD43B" }}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
                4.4
              </div>
              <div>
                <h6 className="font">
                  السعر <b> 6000</b>
                </h6>
              </div>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
