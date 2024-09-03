import React from "react";
import { Col, Row, ToastContainer } from "react-bootstrap";

export default function ProductText() {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">جوالات :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            ايفون17 <div className="cat-rate d-inline mx-3">4.4</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">ايفون </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2"
            style={{ backgroundColor: "red", border: "3px solid black" }}
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {" "}
            سوف يأتي الهاتف بشاشة LTPO OLED كبيرة بحجم 6.7 بوصة، مع معدل تحديث
            يصل إلى 120 هرتز، ويأتي بحماية متقدمة بطبقة Ceramic Shield للحماية
            من الخدوش والصدمات. وسيكون مزودا بمعالج A18 Pro سداسي النواة، بتقنية
            تصنيع 3 نانومتر لأداء سريع وكفاءة عالية.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price  px-3 py-3 d-inline border">
            6000 ريال
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
