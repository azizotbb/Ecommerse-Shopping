import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserCart,
  deleteCartItem,
  updateCartItem,
} from "../../redux/cart/cartSlice";
import { notify } from "../useNotification";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearUserCart());
    setLoading(false);
  };
  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };
  useEffect(() => {
    if (item) setItemCount(item.count);
  }, []);
  const res = useSelector((state) => state.cart.clearUserCartRes);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDeleteItem = async () => {
    await dispatch(deleteCartItem({ id: item._id }));
    setShow(false);
    window.location.reload(false);
  };

  const handeleUpdateCart = async () => {
    await dispatch(updateCartItem({ id: item._id, itemCount: itemCount }));
    console.log(itemCount);
    window.location.reload(false);
  };

  return [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ];
};

export default DeleteCartHook;
