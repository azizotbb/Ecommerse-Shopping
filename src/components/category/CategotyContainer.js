import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import SubTitle from "../uitily/SubTitle";
import Pagination from "../uitily/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorypage } from "../../redux/category/categorySlice";
import Loding from "../uitily/Loding";

export default function CategotyContainer() {
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.category.isLoding);
  const data = useSelector((state) => state.category.categorys.data);
  const page = useSelector(
    (state) => state.category.categorys.paginationResult
  );
  let pageCount = 0;
  if (page) {
    pageCount = page.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllCategorypage(page));
    console.log(page);
  };
  useEffect(() => {
    dispatch(getAllCategorypage(1));
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
            return (
              <CategoryCard
                title={value.name}
                color="lightskyblue"
                img={value.image}
              />
            );
          })
        )}
      </Row>
      <Pagination pageCount={pageCount} getPage={getPage} />
    </Container>
  );
}
