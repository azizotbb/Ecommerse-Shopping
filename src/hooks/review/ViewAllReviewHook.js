import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviewProduct } from "../../redux/review/reviewSlice";

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const productReviews = useSelector((state) => state.review.productReviews);
  if (productReviews) {
  }
  useEffect(() => {
    setLoading(true);
    const info = { id: id, page: 1, limit: 2 };
    dispatch(getAllReviewProduct(info));
    setLoading(false);
  }, []);

  const onPress = async (page) => {
    const onPressinfo = { id: id, page: page, limit: 2 };

    await dispatch(getAllReviewProduct(onPressinfo));
  };
  return [productReviews, onPress];
};

export default ViewAllReviewHook;
