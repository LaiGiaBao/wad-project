import React, { Component, useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import userEvent from "@testing-library/user-event";
import "../styles/navbar.css";
const userName = "Bao";
const NavBarComp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    console.log(isSignedIn);
  });
  return (
    <Navbar className="navbar" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: "30px", fontWeight: "bold" }}>
          Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="nav-link"
              style={{ color: "white", fontSize: "20px" }}
            >
              <FontAwesomeIcon icon={solid("house")} />
            </Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mx-2"
                aria-label="Search"
                style={{ width: "300px" }}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Nav>
          {!isSignedIn && (
            <Nav>
              <Nav.Item>
                <Nav.Link href="#action2" className="">
                  Sign-Up
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setIsSignedIn(true)} className="">
                  Sign-In
                </Nav.Link>
              </Nav.Item>
            </Nav>
          )}
          {isSignedIn && (
            <Nav>
              <Nav.Link
                href="/cart"
                style={{ fontSize: "18px", marginRight: "8px" }}
              >
                <FontAwesomeIcon
                  icon={solid("cart-shopping")}
                ></FontAwesomeIcon>
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <FontAwesomeIcon icon={solid("user")}></FontAwesomeIcon>
                    &nbsp; Hello, {userName}
                  </span>
                }
                id="basic-nav-dropdown"
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => setIsSignedIn(false)}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarComp;
