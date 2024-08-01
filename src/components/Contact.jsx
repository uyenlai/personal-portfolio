import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={7}>
            <img src={contactImg} />
          </Col>
          <Col sm={12} md={6} lg={5} className="contact-text">
            <h1>Contact me!</h1>
            <p>
              <a href="mailto: uyenlai6@gmail.com">
                <i className="bi bi-envelope"></i>
                uyenlai6@gmail.com
              </a>
            </p>
            <p>
              <i className="bi bi-phone"></i>
              (+358)413119700
            </p>
            <p>
              <i className="bi bi-geo-alt"></i>
              Pälkäne, Finland
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
