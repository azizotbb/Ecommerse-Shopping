import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import SearchCountResult from "../../components/uitily/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../components/uitily/SideFilter";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import Pagination from "../../components/uitily/Pagination";
import SearchProductHook from "../../hooks/product/SearchProductHook";

export default function ShopProductPage() {
  const [items, pagination, onPress, getProduct] = SearchProductHook();
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <div style={{ minHeight: "680px", maxHeight: "fit-content" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`نتائج البحث ${items.length}`}
        />
        <Row className="d-flex flex-row ">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <ProductsCardContainer Products={items} />
            <Pagination pageCount={pageCount} getPage={onPress} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
