import React from "react";
import { Card, Col } from "react-bootstrap";
import iphone from "../../imgs/iphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className=" my-2">
      <Card
        style={{
          width: "185px",
          height: "380px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Card.Img variant="top" src={iphone} className="product-img" />
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
          </Card.Title>
          <Card.Text className="font">
            ابل ايفون 15 برو ماكس الجديد- تيتانيوم أزرق , شريحة واحدة
          </Card.Text>
          <div className=" d-flex flex-row justify-content-between">
            <div style={{ color: "#FFD43B" }}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /> 4.4
            </div>
            <div>
              <h6 className="font">
                السعر <b> 6000</b>
              </h6>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
