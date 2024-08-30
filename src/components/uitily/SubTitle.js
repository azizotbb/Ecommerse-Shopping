import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SubTitle({ title, btntitle, path }) {
  return (
    <div className="d-flex justify-content-between mt-5 mb-3">
      <h3 className="font "> {title}</h3>

      {btntitle ? (
        <Link to={path}>
          <Button variant="outline-dark" className="font">
            {btntitle}
          </Button>
        </Link>
      ) : null}
    </div>
  );
}
