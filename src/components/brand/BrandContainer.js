import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import Pagination from "../uitily/Pagination";
import BrandCard from "./BrandCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/brand/brandSlice";
import Loding from "../uitily/Loding";

export default function BrandContainer() {
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.brand.isLoding);
  const data = useSelector((state) => state.brand.brands.data);
  const page = useSelector((state) => state.brand.brands.paginationResult);
  let pageCount = 0;
  if (page) {
    pageCount = page.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllBrand(page));
  };
  useEffect(() => {
    dispatch(getAllBrand());
  }, [dispatch]);
  return (
    <Container>
      <SubTitle title="التصنيفات" />

      <Row className="pt-3 d-flex justify-content-center ">
        {isLoding === true ? (
          <div>
            <Loding />
          </div>
        ) : (
          data.map((value) => {
            return <BrandCard img={value.image} />;
          })
        )}
      </Row>
      <Pagination pageCount={pageCount} getPage={getPage} />
    </Container>
  );
}
