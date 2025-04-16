import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loding() {
  return (
    <div className="text-center">
      <Spinner className="mx-1 " animation="grow" variant="info" />
      <Spinner animation="grow" variant="info" />
      <Spinner className="mx-1 " animation="grow" variant="info" />
    </div>
  );
}
