import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
            type="email"
            placeholder=" ادخل الايميل"
            className="text-center mb-5"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>كلمة السر</Form.Label>
          <Form.Control
            type="password"
            placeholder="ادخل كلمة السر "
            className="text-center mb-5 "
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
          ليس لديك حساب ؟{" "}
          <Link
            to="/registrar "
            style={{ textDecoration: "none", color: "red" }}
          >
            تسجيل
          </Link>
        </h5>
      </Form>
    </div>
  );
}
