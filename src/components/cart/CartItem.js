import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import laptop from "../../imgs/laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem() {
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <img
        width="160px"
        height="197px"
        src={laptop}
        alt=""
        style={{ padding: "8px" }}
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">الاكترونيات</div>
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ width: "16px", height: "18px" }}
              />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">ايفون</div>
            <div className="d-inline pt-2 cat-rate me-2">99</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">ابل</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: `red` }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2  d-inline">الكميه</div>
              <input
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button className="btn btn-dark">تطبيق</Button>
            </div>
            <div className="d-inline pt-2 barnd-text">600 ريال</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
