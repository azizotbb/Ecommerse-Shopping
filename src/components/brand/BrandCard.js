import React from "react";
import { Card, Col } from "react-bootstrap";

export default function BrandCard({ img }) {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="mb-4">
      <Card style={{ width: "11rem" }}>
        <Card.Img
          variant="top"
          src={img}
          className="p-3 "
          style={{ height: "150px" }}
        />
      </Card>
    </Col>
  );
}
