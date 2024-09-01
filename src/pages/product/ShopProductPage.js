import React from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import SearchCountResult from "../../components/uitily/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../components/uitily/SideFilter";
import ProductsCardContainer from "../../components/product/ProductsCardContainer ";
import Pagination from "../../components/uitily/Pagination";

export default function ShopProductPage() {
  return (
    <div style={{ height: "680px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult />
        <Row className="d-flex flex-row ">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <ProductsCardContainer />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}
