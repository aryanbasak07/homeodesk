import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./assets/navbarLogo.png";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
  const customStyle = {
    height: "76px",
    sticky: "top"
  };
  const customLogo = {
    paddingTop: "5px",
  };
  const customButton = {
    backgroundColor: "#4F2D92",
    borderColor: "#4F2D92",
    height: "40px",
    width: "150px",
    marginLeft: "10px",
    fontWeight: "bold",
    borderRadius: "50px",
  };

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" style={customStyle}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={Logo}
              width="255px"
              height="45px"
              className="d-inline align-top"
              style={customLogo}
            />
          </Link>
        </Navbar.Brand>

        {/* Add the Navbar.Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-navbar-toggle"
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" fas icon="bars">
          <Nav className="ml-auto"> {/* Use "ml-auto" instead of "justify-content-end" */}
            <Nav.Link href="#home">
              <Link to="/howitworks">
              <span style={{ fontWeight: "", color: "grey", textDecoration: "none" }}>How It Works</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pricing">
                <span style={{ fontWeight: "", color: "grey", textDecoration: "none" }}>Pricing</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">
                <span style={{ fontWeight: "", color: "grey", textDecoration: "none" }}>Contact us</span>
              </Link>
            </Nav.Link>
            {/* Add a NavDropdown if needed */}
          </Nav>
          <Link to="/signup">
          <Button variant="primary" style={customButton}>
            Login/Sign Up
          </Button>
          </Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
