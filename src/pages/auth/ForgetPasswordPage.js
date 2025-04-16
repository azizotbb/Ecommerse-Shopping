import React from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import ForgetPasswordHook from "../../hooks/auth/ForgetPasswordHook";

export default function ForgetPasswordPage() {
  const [email, loading, onchangeName, submint] = ForgetPasswordHook();
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
          نسيت كلمه السر{" "}
        </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className=" auth-text">الأيميل</Form.Label>
          <Form.Control
            onChange={onchangeName}
            type="email"
            placeholder=" ادخل الايميل"
            className="text-center mb-5"
          />
        </Form.Group>

        <Button onClick={submint} variant="dark" type="submint">
          ارسال الكود{" "}
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
}
