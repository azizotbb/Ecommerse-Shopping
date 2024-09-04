import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">الشروط والاحكام</div>
            <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#949494", width: "20px", height: "20px" }}
              />
              <p className="footer-phone">0123455349356</p>
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#949494", width: "20px", height: "20px" }}
              />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ color: "#949494", width: "20px", height: "20px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
