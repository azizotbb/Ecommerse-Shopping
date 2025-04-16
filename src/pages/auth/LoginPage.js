import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hooks/auth/LoginHook";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [email, password, loading, onChangeEmail, onChangePassword, submint] =
    LoginHook();
  return (
    <div style={{ height: "680px" }}>
      <Form
        style={{
          width: "50%",
          textAlign: "center",
          marginRight: "25%",
          marginTop: "80px",
        }}
        className="font"
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          تسجيل دخول
        </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className=" auth-text">الأيميل</Form.Label>
          <Form.Control
            onChange={onChangeEmail}
            type="email"
            placeholder=" ادخل الايميل"
            className="text-center mb-5"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>كلمة السر</Form.Label>
          <Form.Control
            onChange={onChangePassword}
            type="password"
            placeholder="ادخل كلمة السر "
            className="text-center  "
          />

          {loading ? (
            loading === true ? (
              <Spinner style={{}} animation="border" />
            ) : null
          ) : null}
        </Form.Group>

        <Button onClick={submint} variant="dark" type="submint">
          تسجيل الدخول{" "}
        </Button>
        <br></br>
        <Link
          to="/user/forgetpassword "
          style={{
            textDecoration: "none",
            color: "red",
            fontSize: "12px",
          }}
        >
          هل نسيت كلمه المرور ؟
        </Link>
        <h5
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          ليس لديك حساب ؟{" "}
          <Link
            to="/registrar "
            style={{ textDecoration: "none", color: "red" }}
          >
            تسجيل
          </Link>
        </h5>
      </Form>

      <Link to="/admin/allproducts">
        <p>Log in as an admin</p>
      </Link>
      <Link to="/user/allorders">
        <p>Log in as an user</p>
      </Link>
      <ToastContainer />
    </div>
  );
}
