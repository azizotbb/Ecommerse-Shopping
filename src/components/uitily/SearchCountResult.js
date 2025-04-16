import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SearchCountResult({ onClick, title }) {
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <Container>
      <Row className="mt-4">
        <Col className="d-flex justify-content-between">
          <h3 className="font"> {title}</h3>
          {/** dropdown */}
          <div class="dropdown" style={{ paddingLeft: "65px" }}>
            <button
              data-mdb-button-init
              data-mdb-ripple-init
              data-mdb-dropdown-init
              class="btn  "
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCircleDown} /> ترتيب حسب
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li onClick={() => clickMe("")}>
                <div class="dropdown-item">بدون ترتيب</div>
              </li>
              <li onClick={() => clickMe("الاكثر مبيعا")}>
                <div class="dropdown-item">الاكثر مبيعا</div>
              </li>
              <li onClick={() => clickMe("الاعلى تقيم")}>
                <div class="dropdown-item ">الاعلى تقيم</div>
              </li>
              <li onClick={() => clickMe("السعر من الاقل الى الاعلى")}>
                <div class="dropdown-item ">السعر من الاقل الى الاعلى</div>
              </li>
              <li onClick={() => clickMe("السعر من الاعلى الى الاقل")}>
                <div class="dropdown-item ">السعر من الاعلى الى الاقل</div>
              </li>
            </ul>
          </div>
          {/** dropdown */}
        </Col>
      </Row>
    </Container>
  );
}
