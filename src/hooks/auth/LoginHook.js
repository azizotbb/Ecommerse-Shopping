import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/authSlice";
import { notify } from "../useNotification";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submint = async (e) => {
    e.preventDefault();

    setLoading(true);
    await dispatch(loginUser({ email, password }));
    setLoading(false);
  };
  const res = useSelector((state) => state.auth.loginUserData);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));

          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        if (res.data.message === "Incorrect email or password") {
          notify("الأيميل او كلمة السر خطأ", "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
  }, [loading]);
  return [email, password, loading, onChangeEmail, onChangePassword, submint];
};

export default LoginHook;
