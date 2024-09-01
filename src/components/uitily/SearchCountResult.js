import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SearchCountResult() {
  return (
    <Container>
      <Row className="mt-4">
        <Col className="d-flex justify-content-between">
          <h3 className="font"> نتائج البحث 10</h3>
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
              <li>
                <a class="dropdown-item" href="/">
                  الاكثر مبيعا
                </a>
              </li>
              <li>
                <a class="dropdown-item " href="/">
                  الاعلى تقيم
                </a>
              </li>
              <li>
                <a class="dropdown-item " href="/">
                  السعر من الاقل الى الاعلى
                </a>
              </li>
            </ul>
          </div>
          {/** dropdown */}
        </Col>
      </Row>
    </Container>
  );
}
