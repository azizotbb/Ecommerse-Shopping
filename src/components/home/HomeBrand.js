import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../uitily/SubTitle";
import BrandCard from "../brand/BrandCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/brand/brandSlice";
import Loding from "../uitily/Loding";

export default function HomeBrand() {
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.brand.isGetAllLoding);
  const data = useSelector((state) => state.brand.brands.data);
  useEffect(() => {
    dispatch(getAllBrand(1));
  }, [dispatch]);
  return (
    <Container className="pb-5">
      <SubTitle btntitle="المزيد" title="اشهر البراندات" path="/allbarnd" />
      <Row className="pt-3 d-flex justify-content-center ">
        {isLoding === false ? (
          data.slice(0, 6).map((value) => {
            return <BrandCard img={value.image} />;
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
