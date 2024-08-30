import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../imgs/logo.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavbarLogin() {
  return (
    <Navbar expand="lg" bg="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex w-100 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-center"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/login"
              className="d-flex justify-content-center mt-3"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#ffffff" }}
                className="m-2"
              />
              <p className="nav-text">دخول</p>
            </Nav.Link>
            <Nav.Link
              href="cart"
              className="d-flex justify-content-center mt-3"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
                className="m-2"
              />
              <p className="nav-text">عربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
