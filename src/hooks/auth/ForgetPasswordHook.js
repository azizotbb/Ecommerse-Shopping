import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../redux/auth/authSlice";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onchangeName = (e) => {
    setEmail(e.target.value);
  };

  const submint = async () => {
    setLoading(true);
    await dispatch(forgetPassword);
    setLoading(false);
  };

  useEffect(()=>{
    
  })
  return [email, loading, onchangeName, submint];
};

export default ForgetPasswordHook;
