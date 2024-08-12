import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SkillSlider from "./SkillSlider";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="skills-slider">
              <h2>Skills</h2>
              <p>
                As a dedicated and passionate student with a solid foundation in
                front-end development, I am enthusiastic about securing an
                entry-level position in full-stack development.
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
