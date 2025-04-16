import React from "react";
import { Row } from "react-bootstrap";
import SidebarSearchHook from "../../hooks/search/SidebarSearchHook";

export default function SideFilter() {
  const [category, brand, clickCategory, clickBrand] = SidebarSearchHook();
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {category ? (
            category.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input
                    onChange={clickCategory}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>لا يوجد تصنيفات</h6>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input onChange={clickBrand} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brand ? (
            brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input
                    onChange={clickBrand}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>لا يوجد ماركات</h6>
          )}
        </div>
      </Row>
    </div>
  );
}
