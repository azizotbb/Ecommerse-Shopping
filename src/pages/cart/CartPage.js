import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../components/cart/CartItem";
import CartCheckout from "../../components/cart/CartCheckout";
import GetAllUserCartHook from "../../hooks/cart/GetAllUserCartHook";

export default function CartPage() {
  const [itemsNum, cartItems, totalCartPrice] = GetAllUserCartHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })
          ) : (
            <h6>لا توجد منتجات فى العربة</h6>
          )}
        </Col>

        <Col xs="6" md="3">
          <CartCheckout totalCartPrice={totalCartPrice} />
        </Col>
      </Row>
    </Container>
  );
}
