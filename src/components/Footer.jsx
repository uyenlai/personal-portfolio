import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo" />
          </Col>
          <Col>
            <ul className="profiles">
              <li>
                <a
                  href="https://www.linkedin.com/in/uyen-lai-684975198"
                  target="_blank"
                >
                  <img src={navIcon1} className="profile-img" />
                </a>
              </li>

              <li>
                <a href="https://github.com/uyenlai" target="_blank">
                  <img src={navIcon2} className="profile-img" />
                </a>
              </li>
            </ul>
            <p>Copyright 2024. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
