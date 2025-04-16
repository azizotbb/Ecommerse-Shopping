import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/category/categorySlice";
import { getAllBrands } from "../../redux/brand/brandSlice";
import { getAllsub } from "../../redux/SubCategories/subSlice";
import { postProduct } from "../../redux/product/productSlice";

const AdminAddProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  const categories = useSelector((state) => state.category.categorys.data);
  const brands = useSelector((state) => state.brand.brands.data);
  const subcategory = useSelector((state) => state.subCategory.subCategory);

  const onSelect = (selectedList) => {
    setSeletedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSeletedSubID(selectedList);
  };

  const [options, setOptions] = useState([]);

  const [images, setImages] = useState({});
  const [prodName, setProdName] = useState("");
  const [prodDes, setProdDes] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAftr, setPriceAftr] = useState("سعر المنتج");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catID, setCatID] = useState("");
  const [brandID, setBrandID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [seletedSubID, setSeletedSubID] = useState([]);

  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  const onChangeDesName = (event) => {
    event.persist();
    setProdDes(event.target.value);
  };

  const onChangePriceBefor = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAftr(event.target.value);
  };
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);

  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const onSeletCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getAllsub(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (catID !== 0) {
      setOptions(subcategory);
    }
  }, [catID]);
  const onSeletBrand = (e) => {
    setBrandID(e.target.value);
  };
  /*
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
    */

  const handelSubmit = async (e) => {
    e.preventDefault();
    //const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    console.log(prodName);
    console.log(prodDes);
    console.log(qty);
    console.log(priceBefore);
    console.log(catID);

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDes);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("category", catID);
    await dispatch(postProduct(formData));
  };

  return [
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    categories,
    brands,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    onSeletBrand,
    colors,
    priceBefore,
    qty,
    prodDes,
    prodName,
  ];
};

export default AdminAddProductsHook;
