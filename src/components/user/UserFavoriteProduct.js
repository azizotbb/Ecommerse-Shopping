import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Pagination from "../uitily/Pagination";
import ProductCard from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../redux/wishList/wishListSlice";
import ProductsCardContainer from "../product/ProductsCardContainer ";

export default function UserFavoriteProduct() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.wishList.allWishlist);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        setItem(res.data);
      }
    }
  }, [loading]);
  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className="justify-content-start">
        <Row className="justify-content-center">
          {item.length <= 0 ? (
            <h6>لا توجد منتجات مفضله حاليا</h6>
          ) : (
            <ProductsCardContainer Products={item} />
          )}
        </Row>
      </Row>
    </div>
  );
}
