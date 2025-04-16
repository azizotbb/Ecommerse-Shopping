import React, { useEffect } from "react";
import { getOneProduct } from "../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import laptop from "../../imgs/laptop.png";
import { getOneCategory } from "../../redux/category/categorySlice";
import { getOneBrand } from "../../redux/brand/brandSlice";

const ProductsDetalisHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProduct = useSelector((state) => state.product.oneProduct);
  const oneCategory = useSelector((state) => state.category.onecategory);
  const oneBrand = useSelector((state) => state.brand.oneBrand);

  let item = [];
  if (oneProduct.data) {
    item = oneProduct.data;
  } else {
    item = [];
  }
  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
  }, [item]);

  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${laptop}` }];
  }

  let cat = [];
  if (oneCategory.data) {
    cat = oneCategory.data;
  } else {
    cat = [];
  }

  let brand = [];
  if (oneBrand.data) {
    cat = oneBrand.data;
  } else {
    brand = [];
  }
  return [item, images, cat, brand];
};

export default ProductsDetalisHook;
