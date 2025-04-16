import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../imgs/logo.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchHook from "../../hooks/search/NavbarSearchHook";
import cart from "../../imgs/cart.png";
import GetAllUserCartHook from "../../hooks/cart/GetAllUserCartHook";

export default function NavbarLogin() {
  const [onChangeSearch, searchWord] = NavbarSearchHook();

  let data = "";
  if (localStorage.getItem("user") !== null) {
    data = JSON.parse(localStorage.getItem("user"));
  }

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.reload();
  };

  const [itemsNum] = GetAllUserCartHook();
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
              value={searchWord}
              onChange={onChangeSearch}
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
            {data.name ? (
              data.role === "admin" ? (
                <Nav.Link
                  href="/admin/allorders"
                  className="d-flex justify-content-center mt-3"
                >
                  <p className="nav-text"> {data.name}</p>
                </Nav.Link>
              ) : (
                <Nav.Link
                  href="/user/profile"
                  className="d-flex justify-content-center mt-3"
                >
                  <p className="nav-text"> {data.name}</p>
                </Nav.Link>
              )
            ) : (
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
            )}

            <Nav.Link
              href="cart"
              className="d-flex justify-content-center mt-3 position-relative"
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemsNum}
                <span class="visually-hidden">unread messages</span>
              </span>

              <p className="nav-text">عربه</p>
            </Nav.Link>
            {data.name ? (
              <Nav.Link
                onClick={logOut}
                href="/"
                className="d-flex justify-content-center mt-3"
              >
                <p className="nav-text">تسجيل خروج</p>
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
