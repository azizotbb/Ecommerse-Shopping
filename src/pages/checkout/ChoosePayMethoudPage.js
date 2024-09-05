import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethoud from "../../components/checkout/ChoosePayMethoud";

export default function ChoosePayMethoudPage() {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePayMethoud />
    </Container>
  );
}
