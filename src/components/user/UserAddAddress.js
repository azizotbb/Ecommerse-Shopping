import React from "react";
import { Col, Row } from "react-bootstrap";
import AddAddressHook from "../../hooks/user/AddAddressHook";
import { ToastContainer } from "react-toastify";

export default function UserAddAddress() {
  const [
    alias,
    detalis,
    phone,
    city,
    onChaneAlias,
    onChaneDetalis,
    onChanePhone,
    onChaneCity,
    onSubmit,
  ] = AddAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
          <input
            value={alias}
            onChange={onChaneAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            value={detalis}
            onChange={onChaneDetalis}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            value={phone}
            onChange={onChanePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
          <input
            value={city}
            onChange={onChaneCity}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
            اضافة عنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
