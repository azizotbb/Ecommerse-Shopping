import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserAllAddress from "../../components/user/UserAllAddress";
import UserSideBar from "../../components/user/UserSideBar";

export default function UserAllAddresPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <UserAllAddress />
        </Col>
      </Row>
    </Container>
  );
}
