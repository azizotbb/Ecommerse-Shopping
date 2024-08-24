import React from "react";
import { Button } from "react-bootstrap";

export default function SubTitle({ title, btntitle }) {
  return (
    <div className="d-flex justify-content-between m-3">
      <h3 className="font "> {title}</h3>
      <Button variant="outline-dark" className="font">
        {btntitle}
      </Button>
    </div>
  );
}
