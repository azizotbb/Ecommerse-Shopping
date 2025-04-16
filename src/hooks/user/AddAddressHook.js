import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../useNotification";
import { addUserAddress } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const onChaneAlias = (e) => {
    e.persist();
    setAlias(e.target.value);
  };

  const onChaneDetalis = (e) => {
    e.persist();
    setDetalis(e.target.value);
  };

  const onChanePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const onChaneCity = (e) => {
    e.persist();
    setCity(e.target.value);
  };

  const onSubmit = async () => {
    if (alias === "" || detalis === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addUserAddress({
        alias: alias,
        detalis: detalis,
        phone: phone,
        city: city,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.user.res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت اضافة العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        console.log(res);
        notify("هناك مشكله فى عملية الاضافة ", "error");
      }
    }
  }, [loading]);

  return [
    alias,
    detalis,
    phone,
    city,
    onChaneAlias,
    onChaneDetalis,
    onChanePhone,
    onChaneCity,
    onSubmit,
  ];
};

export default AddAddressHook;
