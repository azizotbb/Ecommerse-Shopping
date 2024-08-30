import React from "react";
import { Card, Col } from "react-bootstrap";
import lg from "../../imgs/lg.png";

export default function BrandCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="mb-4">
      <Card style={{ width: "11rem" }}>
        <Card.Img
          variant="top"
          src={lg}
          className="p-3 "
          style={{ height: "150px" }}
        />
      </Card>
    </Col>
  );
}
