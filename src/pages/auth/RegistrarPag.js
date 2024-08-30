import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegistrarPag() {
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
            type="text"
            placeholder=" ادخل اسم المستخدم"
            className="text-center mb-4"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className=" auth-text">الأيميل</Form.Label>
          <Form.Control
            type="email"
            placeholder=" ادخل الايميل"
            className="text-center mb-4"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>كلمة السر</Form.Label>
          <Form.Control
            type="password"
            placeholder="ادخل كلمة السر "
            className="text-center mb-4 "
          />
        </Form.Group>
        <Button variant="dark" type="submit">
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
      </Form>
    </div>
  );
}
