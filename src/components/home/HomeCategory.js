import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import CategoryCard from "../category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorypage } from "../../redux/category/categorySlice";
import Loding from "../uitily/Loding";

export default function HomeCategory() {
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.category.isGetAllLoding);
  const data = useSelector((state) => state.category.categorys.data);
  useEffect(() => {
    dispatch(getAllCategorypage(1));
  }, [dispatch]);

  return (
    <Container>
      <SubTitle btntitle="المزيد" title="التصنيفات" path="/allcategory" />
      <Row className="pt-3 d-flex justify-content-center ">
        {isLoding === false ? (
          data.slice(0, 6).map((value) => {
            return (
              <CategoryCard
                title={value.name}
                color="lightskyblue"
                img={value.image}
              />
            );
          })
        ) : (
          <div>
            <Loding />
          </div>
        )}
      </Row>
    </Container>
  );
}
