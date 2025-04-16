import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../useNotification";
import { createReview } from "../../redux/review/reviewSlice";

const ReviewHook = (id) => {
  const dispatch = useDispatch();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const onchangeRateText = (e) => {
    setRateText(e.target.value);
  };

  const onchangeRateValue = (value) => {
    setRateValue(value);
  };

  let data = "";
  if (localStorage.getItem("user") !== null) {
    data = JSON.parse(localStorage.getItem("user"));
  }
  const submint = async () => {
    if (rateText === "") {
      notify("لا يوجد تعليق", "error");
      return;
    }
    setLoading(true);

    await dispatch(
      createReview({ id: id, review: rateText, rating: rateValue })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.review.res);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res && res.status === 201) {
          notify("تمت اضافة التقيم بنجاح", "success");
        } else if (res.status === 400) {
          notify(
            "لقد قمت باضافة تقييم لهذا المنتج مسبقا او لم تضع تقيما",
            "error"
          );
        }
      } else if (res.status && res.status === 403) {
        notify("غير مسموح للادمن بالتقييم", "error");
      }
    }
  }, [loading]);
  return [
    onchangeRateText,
    onchangeRateValue,
    rateText,
    rateValue,
    data,
    submint,
  ];
};

export default ReviewHook;
