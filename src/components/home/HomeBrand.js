import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import BrandCard from "../brand/BrandCard";

export default function HomeBrand() {
  return (
    <Container className="pb-5">
      <SubTitle btntitle="المزيد" title="اشهر البراندات" path="/allbarnd" />
      <Row className="pt-3 d-flex justify-content-center ">
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </Row>
    </Container>
  );
}
