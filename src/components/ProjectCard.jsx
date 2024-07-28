import React from "react";
import Col from "react-bootstrap/esm/Col";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <Col sm={6} md={4}>
      <div className="card-container">
        <img src={imgUrl} />
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
