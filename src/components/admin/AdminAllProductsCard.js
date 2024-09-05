import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import iphone from "../../imgs/iphone.png";

export default function AdminAllProductsCard() {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit">ازاله</div>
            <div className="d-inline item-delete-edit">تعديل</div>
          </Col>
        </Row>
        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={iphone} />
          <Card.Body>
            <Card.Title>
              <div className="card-title" style={{ color: "#555550" }}>
                ايفون 16 شريحتين 128 قيقا{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="" style={{ color: "#FFD43B" }}>
                  4.5
                </div>
                <div className="d-flex">
                  <div className="font mx-1" style={{ color: "#555550" }}>
                    ريال
                  </div>
                  <div className="font" style={{ color: "#555550" }}>
                    6000
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}
