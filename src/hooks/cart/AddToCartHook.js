import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/cart/cartSlice";
import { notify } from "../useNotification";

const AddToCartHook = (id, item) => {
  const dispatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  const addToCardHandel = async () => {
    if (item.availableColors.length >= 1) {
      if (colorText === "") {
        notify("من فضلك اختر لون اولا للمنتج", "warn");
        return;
      }
    } else {
      setColorText("");
    }

    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: id,
        color: colorText,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.cart.addCartRes);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت اضافة المنتج للعربه بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("قم بتسجيل الدخول اولا", "warn");
      }
    }
  }, [loading]);

  return [colorClick, indexColor, addToCardHandel];
};

export default AddToCartHook;
