import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/category/categorySlice";
import { getAllBrands } from "../../redux/brand/brandSlice";
import SearchProductHook from "../product/SearchProductHook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = SearchProductHook();
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrands());
    };
    get();
  });
  const allCat = useSelector((state) => state.category.categorys);

  const allBrand = useSelector((state) => state.brand.brands);

  let category = [];
  if (allCat.data) {
    category = allCat.data;
  }

  let brand = [];
  if (allBrand.data) {
    brand = allBrand.data;
  }
  var queryCat = "",
    queryBrand = "";
  const [catChecked, setCatChecked] = useState([]);

  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = catChecked.filter((e) => e !== value);
        setCatChecked(newArry);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catCecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);
  const [brandChecked, setBrandChecked] = useState([]);
  //when user press any category
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArry);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandCecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  return [category, brand, clickCategory, clickBrand];
};

export default SidebarSearchHook;
