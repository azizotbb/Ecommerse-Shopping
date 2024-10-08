import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import Pagination from "../uitily/Pagination";
import BrandCard from "./BrandCard";

export default function BrandContainer() {
  return (
    <Container>
      <SubTitle title="التصنيفات" />

      <Row className="pt-3 d-flex justify-content-center ">
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </Row>
      <Pagination />
    </Container>
  );
}
