import React, { useState } from "react";
import "./Projects.css";
import { myProjects } from "../../data.js";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const Projects = () => {
  // Component States
  const [projects] = useState(myProjects);

  return (
    <div className="projects mt-5 mb-5">
      <h2 className="mb-4">
        <i className="fa-solid fa-list-check"></i> My <span>Projects</span>
      </h2>
      <Row>
        {projects.length >= 1 ? (
          projects.map((project, index) => (
            <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <Card.Img variant="top" src={project.projectImg} />
                  <Card.Body>
                    <h6>{project.projectName}</h6>
                    <Card.Text>{project.projectDescription}</Card.Text>
                    <div className="links d-flex">
                      <a href={project.projectLink}>
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href={project.projectCode}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <h4 className="text-center">No Projects Now</h4>
        )}
      </Row>
      <div className="another-projects mt-5">
        <div className="shine">Another Projects</div>
        <h6>
          <i className="fa-brands fa-html5"></i> If You Want All Projects With Html/Css That Show Front-End Cases{" "}
          <a target="_blank" href="https://front-end-show-cases.vercel.app/">
            <span>Go Here</span>
          </a>
        </h6>
        <h6>
          <i className="fa-brands fa-react"></i> If You Want All Small React Projects{" "}
          <a target="_blank" href="https://github.com/Marawan-Saqr/Small-React-Projects">
            <span>Go Here</span>
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Projects;