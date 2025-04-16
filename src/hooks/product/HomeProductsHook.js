import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/product/productSlice";

const HomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const getProducts = useSelector((state) => state.product.products);

  let items = [];
  if (getProducts.data) {
    items = getProducts.data.slice(0, 6);
  } else {
    items = [];
  }

  return [items];
};

export default HomeProductsHook;
