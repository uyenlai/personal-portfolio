import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import Tabs from "react-bootstrap/esm/Tabs";
import TabContainer from "react-bootstrap/esm/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import ProjectCard from "./ProjectCard";
import Project1 from "../assets/img/food-order-app.png";
import Project2 from "../assets/img/hover-effect-btn.png";
import Project3 from "../assets/img/tab-navigation.png";
import Project4 from "../assets/img/calculator-app.png";
import Project5 from "../assets/img/events-page.png";
import Project6 from "../assets/img/guess-the-number.png";
import Project7 from "../assets/img/todo-list.png";
import Project8 from "../assets/img/quiz-game.png";

const Projects = () => {
  const tab1 = [
    {
      href: "https://github.com/uyenlai/food-order-app",
      imgUrl: Project1,
      title: "Food Order App",
      description:
        "A dynamic React food order app, integrating API data to populate the menu. Managed with useContext, useReducer, useState, and useEffect hooks for efficient state handling.",
    },
    {
      href: "https://github.com/uyenlai/button-ripple-effect",
      imgUrl: Project2,
      title: "Ripple Effect Button",
      description:
        "A captivating Ripple Effect Button in Vanilla JavaScript that fills with color from the hover point, creating a dynamic visual experience.",
    },
    {
      href: "https://github.com/uyenlai/tabs-navigation",
      imgUrl: Project3,
      title: "Tabs Navigation",
      description:
        "A Tabs Navigation system in pure JavaScript, where clicking a tab updates the active class and dynamically displays the relevant content.",
    },
    {
      href: "https://github.com/uyenlai/calculator-app",
      imgUrl: Project4,
      title: "Calculator",
      description:
        "A simple, user-friendly calculator built with pure JavaScript, HTML, and CSS.",
    },
  ];

  const tab2 = [
    {
      href: "https://github.com/uyenlai/events-page-with-firebase",
      imgUrl: Project5,
      title: "Events Page",
      description:
        "Easily manage events on our page. Sign up or log in to create, edit, or delete events with ease. Powered by Redux Toolkit, React Router, and Firebase for smooth authentication and data storage.",
    },
    {
      href: "https://github.com/uyenlai/guess-the-number",
      imgUrl: Project6,
      title: "Guess The Number",
      description:
        'A Vanilla JavaScript "Guess the Number" game: Guess a number between 1 and 20, get feedback, and play again after guessing correctly.',
    },
    {
      href: "https://github.com/uyenlai/todo-list",
      imgUrl: Project7,
      title: "To-do List",
      description:
        "A React-powered To-Do List app where users can easily create, update statuses, and delete tasks for efficient management.",
    },
    {
      href: "https://github.com/uyenlai/quiz-app",
      imgUrl: Project8,
      title: "Quiz game",
      description: "A simple quiz game built with Typescript",
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
                      {tab1.map((project, index) => (
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
                      {tab2.map((project, index) => (
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
              </Tabs>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
