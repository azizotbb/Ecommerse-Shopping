import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../redux/product/productSlice";

const SearchProductHook = () => {
  const dispatch = useDispatch();
  const getProduct = async () => {
    let word = "",
      queryCat = "",
      brandCat = "";
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("catCecked") != null)
      queryCat = localStorage.getItem("catCecked");
    if (localStorage.getItem("brandCecked") != null)
      brandCat = localStorage.getItem("brandCecked");
    sortDate();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=6&keyword=${word}&${queryCat}&${brandCat}`
      )
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  const getProducts = useSelector((state) => state.product.products);

  let items = [];
  if (getProducts.data) items = getProducts.data;
  else items = [];

  let pagination = [];
  if (getProducts.paginationResult)
    pagination = getProducts.paginationResult.numberOfPages;
  else pagination = [];

  const onPress = async (page) => {
    let word = "",
      queryCat = "",
      brandCat = "";
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
      if (localStorage.getItem("catCecked") != null)
        queryCat = localStorage.getItem("catCecked");
      if (localStorage.getItem("brandCecked") != null)
        brandCat = localStorage.getItem("brandCecked");
      await dispatch(
        getAllProductsSearch(
          `limit=2&page=${page}&keyword=${word}&${queryCat}&${brandCat}`
        )
      );
    }
  };
  let sortType = "",
    sort;
  const sortDate = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل الى الاعلى") sort = "+price";
    else if (sortType === "السعر من الاعلى الى الاقل") sort = "-price";
    else if (sortType === "") sort = "";
    else if (sortType === "الاكثر مبيعا") sort = "-sold";
    else if (sortType === "الاعلى تقيم") sort = "-quantity";
  };

  return [items, pagination, onPress, getProduct];
};

export default SearchProductHook;
