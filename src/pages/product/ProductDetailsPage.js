import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../components/product/ProductDetails";
import RateContaine from "../../components/rate/RateContaine";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import { useParams } from "react-router-dom";
import ProductsDetalisHook from "../../hooks/product/ProductsDetalisHook";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [item, images, cat, brand] = ProductsDetalisHook(id);
  if (item) {
    var rateAvg = item.ratingsAverage;
    var ratingsQuantity = item.ratingsQuantity;
  }
  return (
    <div style={{ minHeight: "680px", maxHeight: "fit-content" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContaine rateAvg={rateAvg} ratingsQuantity={ratingsQuantity} />
        <ProductsCardContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
}
