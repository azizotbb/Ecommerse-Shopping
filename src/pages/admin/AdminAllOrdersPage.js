import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Pagination from "../../components/uitily/Pagination";
import AdminAllOrders from "../../components/admin/AdminAllOrders";

export default function AdminAllOrdersPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
}
