import React from "react";
import Col from "react-bootstrap/esm/Col";

const ProjectCard = ({ href, imgUrl, title, description }) => {
  return (
    <Col sm={6} md={6} lg={4}>
      <div className="card-container">
        <img src={imgUrl} />
        <div className="card-text">
          <a href={href} target="_blank">
            <h3>{title}</h3>
            <span>
              <i className="bi bi-box-arrow-up-right"></i>
            </span>
          </a>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
