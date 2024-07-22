import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("#home");
  const [changeColor, setChangeColor] = useState(false);

  const hanldleSetActiveLink = (link) => {
    setActive(link);
  };

  useEffect(() => {
    const hanldleScroll = () => {
      if (window.scrollY > 150) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    window.addEventListener("scroll", hanldleScroll);

    return () => window.removeEventListener("scroll", hanldleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`${changeColor ? "nav light" : "nav"}`}>
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="#home"
          onClick={() => hanldleSetActiveLink("#home")}
        >
          <img src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <span
            className={`navbar-toggler-icon ${expanded ? "expanded" : ""}`}
          ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`nav-text`}
              onClick={() => hanldleSetActiveLink("#home")}
              active={active === "#home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`nav-text`}
              onClick={() => hanldleSetActiveLink("#skills")}
              active={active === "#skills"}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-text`}
              onClick={() => hanldleSetActiveLink("#projects")}
              active={active === "#projects"}
            >
              Projects
            </Nav.Link>

            {/* Social links */}
            <div className="nav-icons">
              <Nav.Link
                href="https://www.linkedin.com/in/uyen-lai-684975198"
                target="_blank"
                className="nav-icon"
              >
                <img src={navIcon1} />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/uyenlai"
                target="_blank"
                className="nav-icon"
              >
                <img src={navIcon2} />
              </Nav.Link>
            </div>
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
