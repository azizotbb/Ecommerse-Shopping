import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegistrarHook from "../../hooks/auth/RegistrarHook";
import { ToastContainer } from "react-toastify";

export default function RegistrarPag() {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ] = RegistrarHook();
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
          تسجيل
        </h1>
        <Form.Group className="mb-3">
          <Form.Label className=" auth-text">اسم المستخدم</Form.Label>
          <Form.Control
            value={name}
            onChange={onChangeName}
            type="text"
            placeholder=" ادخل اسم المستخدم"
            className="text-center mb-4"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className=" auth-text">الأيميل</Form.Label>
          <Form.Control
            value={email}
            onChange={onChangeEmail}
            type="email"
            placeholder=" ادخل الايميل"
            className="text-center mb-4"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className=" auth-text">الهاتف</Form.Label>
          <Form.Control
            value={phone}
            onChange={onChangePhone}
            type="phone"
            placeholder="رقم الهاتف"
            className="text-center mb-4"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>كلمة السر</Form.Label>
          <Form.Control
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="ادخل كلمة السر "
            className="text-center mb-4 "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>تأكيد كلمة السر</Form.Label>
          <Form.Control
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type="password"
            placeholder="ادخل كلمة السر "
            className="text-center mb-4 "
          />
        </Form.Group>

        <Button onClick={onSubmit} variant="dark" type="submit">
          تسجيل الدخول{" "}
        </Button>
        <h5
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          لديك حساب بالفعل؟{" "}
          <Link to="/login " style={{ textDecoration: "none", color: "red" }}>
            تسجيل دخول
          </Link>
        </h5>
        <ToastContainer />
      </Form>
    </div>
  );
}
