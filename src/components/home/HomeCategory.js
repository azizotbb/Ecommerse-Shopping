import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import CategoryCard from "../category/CategoryCard";
import laptop from "../../imgs/laptop.png";
import iphone from "../../imgs/iphone.png";

export default function HomeCategory() {
  return (
    <Container>
      <SubTitle btntitle="المزيد" title="التصنيفات" />
      <Row className="pt-3 d-flex justify-content-center ">
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
      </Row>
    </Container>
  );
}
