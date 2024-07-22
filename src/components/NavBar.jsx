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
  const [changeColorNavbar, setChangeColorNavbar] = useState(false);

  const hanldleSetActiveLink = (link) => {
    setActive(link);
  };

  useEffect(() => {
    const hanldleScroll = () => {
      if (window.scrollY > 150) {
        setChangeColorNavbar(true);
      } else {
        setChangeColorNavbar(false);
      }
    };

    window.addEventListener("scroll", hanldleScroll);

    return () => window.removeEventListener("scroll", hanldleScroll);
  }, []);

  useEffect(() => {
    const home = document.getElementById("home");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    const sections = [home, skills, projects, contact];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`${changeColorNavbar ? "nav light" : "nav"}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand>
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
