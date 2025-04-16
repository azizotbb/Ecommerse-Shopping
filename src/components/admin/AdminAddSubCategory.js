import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AdminAddSubCategoryHook from "../../hooks/category/AdminAddSubCategoryHook";

export default function AdminAddSubCategory() {
  const [
    id,
    name,
    loading,
    data,
    subcategory,
    handelChange,
    handelClick,
    onChangeName,
  ] = AdminAddSubCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            onChange={onChangeName}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handelChange}
          >
            <option value="0">اختر تصنيف رئيسي</option>
            {data
              ? data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelClick} className="btn-save d-inline mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
