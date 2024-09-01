import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CategoryHeader() {
  return (
    <div className="product-header">
      <Container>
        <Row>
          <Col className="d-flex">
            <div className="cat-product-header">اجهزه</div>
            <div className="cat-product-header">اجهزه</div>
            <div className="cat-product-header">اجهزه</div>
            <div className="cat-product-header">اجهزه</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
