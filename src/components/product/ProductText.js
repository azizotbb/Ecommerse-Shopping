import React, { useState } from "react";
import { Col, Row, ToastContainer } from "react-bootstrap";
import ProductsDetalisHook from "../../hooks/product/ProductsDetalisHook";
import { useParams } from "react-router-dom";
import AddToCartHook from "../../hooks/cart/AddToCartHook";

export default function ProductText() {
  const { id } = useParams();
  const [item, images, cat, brand] = ProductsDetalisHook(id);

  const [colorClick, indexColor, addToCardHandel] = AddToCartHook(id, item);

  return (
    <div className="mx-6">
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {" "}
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      colorClick(index, color);
                    }}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: index === indexColor ? "2px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12" className="pb-4">
          <div className="product-price  px-3 py-3 d-inline border">
            {item.price} ريال
          </div>
          <div
            onClick={addToCardHandel}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
