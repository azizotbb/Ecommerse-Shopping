import React, { useEffect, useState } from "react";
import SearchProductHook from "../product/SearchProductHook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = SearchProductHook();

  const [searchWord, setSearchWord] = useState("");
  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/product") {
      window.location.href = "/product";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [onChangeSearch, searchWord];
};

export default NavbarSearchHook;
