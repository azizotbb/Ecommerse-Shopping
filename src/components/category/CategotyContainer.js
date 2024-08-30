import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import laptop from "../../imgs/laptop.png";
import iphone from "../../imgs/iphone.png";
import SubTitle from "../uitily/SubTitle";
import Pagination from "../uitily/Pagination";

export default function CategotyContainer() {
  return (
    <Container>
      <SubTitle title="التصنيفات" />

      <Row className="pt-3 d-flex justify-content-center ">
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
        <CategoryCard title="لابتوبات" color="lightskyblue" img={laptop} />
        <CategoryCard title="جوالات" color="lightcoral" img={iphone} />
      </Row>
      <Pagination />
    </Container>
  );
}
