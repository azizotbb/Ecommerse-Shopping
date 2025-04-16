import React, { useEffect, useState } from "react";
import { getAllUserCart } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemsNum, setItemsNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserCart());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.cart.getAllUserCartRes);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        setItemsNum(res.numOfCartItems);
        setCartItems(res.data.products);
        setTotalCartPrice(res.data.totalCartPrice);
      } else {
        setItemsNum(0);
        setCartItems([]);
        setTotalCartPrice(0);
      }
    }
  }, [loading]);
  return [itemsNum, cartItems, totalCartPrice];
};

export default GetAllUserCartHook;
