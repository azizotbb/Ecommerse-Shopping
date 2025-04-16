import React from "react";
import { Col, Row } from "react-bootstrap";
import Loding from "../uitily/Loding";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../hooks/category/AddCategoryHook";

export default function AdminAddCategory() {
  const [img, text, isLoding, onImageChange, submint, onChangeName] =
    AddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="80px"
                width="100px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={onChangeName}
            value={text}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={submint} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isLoding ? (
        <div>
          <Loding />
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
}
