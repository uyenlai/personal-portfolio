import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SkillSlider from "./SkillSlider";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 10) {
          return prevCount + 1;
        } else {
          return prevCount;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="skills">
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
              {loading && (
                <p>
                  <i>Loading data...: {`${10 - count}`}</i>
                </p>
              )}
              <SkillSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
