import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import CategoryCard from "./CategoryCard";

export default function HomeCategory() {
  return (
    <Container>
      <SubTitle btntitle="المزيد" title="التصنيفات" />
      <Row>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Row>
    </Container>
  );
}
