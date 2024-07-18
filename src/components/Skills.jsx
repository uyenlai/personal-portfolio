import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SkillSlider from "./SkillSlider";

const Skills = () => {
  return (
    <section className="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="skills-slider">
              <h2>Skills</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos modi corrupti ut saepe iure, fugit animi
                exercitationem dolore repudiandae harum doloribus id at, earum
                provident, consectetur consequatur ab. Non, quas.
              </p>
              <SkillSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
