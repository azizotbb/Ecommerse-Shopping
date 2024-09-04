import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../components/product/ProductDetails";
import RateContaine from "../../components/rate/RateContaine";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";

export default function ProductDetailsPage() {
  return (
    <div style={{ minHeight: "680px", maxHeight: "fit-content" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContaine />
        <ProductsCardContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
}
