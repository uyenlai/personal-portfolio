import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import Tabs from "react-bootstrap/esm/Tabs";
import TabContainer from "react-bootstrap/esm/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import ProjectCard from "./ProjectCard";
import Project1 from "../assets/img/project-img1.png";
import Project2 from "../assets/img/project-img2.png";
import Project3 from "../assets/img/project-img3.png";

const Projects = () => {
  const projects = [
    {
      href: "https://github.com/uyenlai?tab=repositories",
      imgUrl: Project1,
      title: "Project 1",
      description: "Lorem...",
    },
    {
      href: "https://github.com/uyenlai?tab=repositories",
      imgUrl: Project2,
      title: "Project 2",
      description: "Lorem...",
    },
    {
      href: "https://github.com/uyenlai?tab=repositories",
      imgUrl: Project3,
      title: "Project 3",
      description: "Lorem...",
    },
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              voluptas molestias esse magnam? Facere iusto debitis labore
              suscipit? Ex nobis vero tempora, iusto beatae officia perferendis
              maiores fugit dolorum placeat!
            </p>
            <TabContainer>
              <Tabs
                id="controlled-tab-example"
                defaultActiveKey="tab1"
                activeKey={activeTab}
                onSelect={(tab) => setActiveTab(tab)}
                className="mb-3"
                fill
              >
                <Tab eventKey="tab1" title="Tab 1">
                  <TabContent>
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          href={project.href}
                          imgUrl={project.imgUrl}
                          title={project.title}
                          description={project.description}
                        />
                      ))}
                    </Row>
                  </TabContent>
                </Tab>
                <Tab eventKey="tab2" title="Tab 2">
                  <TabContent>
                    <Row>
                      {/* {projects.map((project) => (
                        <ProjectCard
                          key={project}
                          imgUrl={project.imgUrl}
                          title={project.title}
                          description={project.description}
                        />
                      ))} */}
                    </Row>
                  </TabContent>
                </Tab>
              </Tabs>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
