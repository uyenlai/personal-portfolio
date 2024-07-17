import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import headerImg from "../assets/img/header-img.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/esm/Button";
import resume from "../documents/Uyen Lai - Resume - FrontEndDev.pdf";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="text">
            <h5>Welcome to my portfolio!</h5>
            <h1>Hi! I'm Uyen Lai</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              provident laudantium eum perferendis excepturi recusandae tempora,
              eos natus, et mollitia architecto quaerat nulla adipisci rerum non
              libero soluta, obcaecati praesentium!
            </p>
            <Button>
              <a href={resume} target="_blank">
                Resume
                <i className="bi bi-arrow-right-circle"></i>
              </a>
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image src={headerImg} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
