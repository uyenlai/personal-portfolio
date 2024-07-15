import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-text">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-text">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-text">
              Projects
            </Nav.Link>

            {/* Social links */}
            <Nav.Link href="" className="nav-icon">
              <img src={navIcon1} />
            </Nav.Link>
            <Nav.Link href="" className="nav-icon">
              <img src={navIcon2} />
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-text cta">
              Contact me!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
