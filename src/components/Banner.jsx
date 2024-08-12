import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import headerImg from "../assets/img/header-img.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/esm/Button";
import resume from "../documents/Uyen Lai - Resume - FrontEndDev.pdf";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section id="home" className="banner">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="text">
            <h5>Welcome to my portfolio!</h5>
            <h1>
              <Typewriter
                onInit={(typewrite) => {
                  typewrite
                    .typeString("Hi! I'm Uyen Lai")
                    .pauseFor(300)
                    .deleteChars(9)
                    .typeString(" a front-end developer")
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <p>
              Join me on this digital odyssey, where lines of code transform
              aspirations into accomplishments, passion fuels progress, and each
              project is a testament to the limitless possibilities of
              technology.
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
