import React, { Component, useState, useEffect, useContext } from "react";
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
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
const TestNavBarComp = () => {
  const { searchText, setSearchText } = useContext(AuthContext);
  const { authState, setAuthState } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  return (
    <Navbar className="navbar" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontSize: "30px", fontWeight: "bold" }}>
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
              href="/"
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
                name="searchInput"
                style={{ width: "300px" }}
                onChange={(event) => {
                  setInputText(event.target.value);
                }}
              />
              <Button
                variant="outline-light"
                onClick={() => {
                  console.log(inputText.toLowerCase());
                  setSearchText(inputText.toLowerCase());
                }}
              >
                Search
              </Button>
            </Form>
          </Nav>
        
            <Nav>
              <Nav.Item>
                <Nav.Link href="/register" className="">
                  Sign-Up
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login" className="">
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TestNavBarComp;
