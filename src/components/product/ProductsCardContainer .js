import React from "react";
import SubTitle from "../uitily/SubTitle";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";

export default function ProductsCardContainer({ title, btntitle }) {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path="/product" />
      <Row className="justify-content-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}
