import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import Tabs from "react-bootstrap/esm/Tabs";
import TabContainer from "react-bootstrap/esm/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";

const Projects = () => {
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
                  <TabContent>Tab content for Tab 1</TabContent>
                </Tab>
                <Tab eventKey="tab2" title="Tab 2">
                  <TabContent>Tab content for Tab 2</TabContent>
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
