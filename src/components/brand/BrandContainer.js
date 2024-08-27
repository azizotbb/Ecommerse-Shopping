import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import BrandCard from "./BrandCard";

export default function BrandContainer() {
  return (
    <Container className="pb-5">
      <SubTitle btntitle="المزيد" title="اشهر البراندات" />
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
