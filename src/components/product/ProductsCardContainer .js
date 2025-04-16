import React, { useEffect, useState } from "react";
import SubTitle from "../uitily/SubTitle";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../redux/wishList/wishListSlice";

export default function ProductsCardContainer({ title, btntitle, Products }) {
  const [loading, isLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  const res = useSelector((state) => state.wishList.allWishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      isLoading(true);
      await dispatch(getWishList());
      isLoading(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data.length >= 1) {
        console.log(res.data.map((item) => item._id));
        setFavProd(res.data.map((item) => item._id));
      } else setFavProd([]);
    }
  }, [loading]);

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path="/product" />
      <Row className="justify-content-center">
        {Products
          ? Products.map((items, index) => (
              <ProductCard favProd={favProd} items={items} />
            ))
          : null}
      </Row>
    </Container>
  );
}
