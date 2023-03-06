import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProjectCard from "../components/ProjectCard";
import projects from "../components/projects.json";
import movieApp from "../components/images/movieApp.png"
import planner from "../components/images/planner.png"
import profileGenerator from "../components/images/profileGenerator.png"
import quiz from "../components/images/quiz.png"
import weather from "../components/images/weather.png"
import readme from "../components/images/readme.png"

function Projects() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row>
          <Col size="md-6">
          <ProjectCard
            name={projects[0].name}
            image={movieApp}
            info={projects[0].info}
            link={projects[0].link}
            repo={projects[0].repo}
          />
            </Col>
            <Col size="md-6">
          <ProjectCard
            name={projects[1].name}
            image={weather}
            info={projects[1].info}
            link={projects[1].link}
            repo={projects[1].repo}
          />
            </Col>
          </Row>
          <Row>
          <Col size="md-6">
          <ProjectCard
            name={projects[2].name}
            image={planner}
            info={projects[2].info}
            link={projects[2].link}
            repo={projects[2].repo}
          />
            </Col>
            <Col size="md-6">
          <ProjectCard
            name={projects[3].name}
            image={readme}
            info={projects[3].info}
            link={projects[3].link}
            repo={projects[3].repo}
          />
            </Col>
          </Row>
          <Row>
          <Col size="md-6">
          <ProjectCard
            name={projects[4].name}
            image={profileGenerator}
            info={projects[4].info}
            link={projects[4].link}
            repo={projects[4].repo}
          />
            </Col>
            <Col size="md-6">
          <ProjectCard
            name={projects[5].name}
            image={quiz}
            info={projects[5].info}
            link={projects[5].link}
            repo={projects[5].repo}
          />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

  export default Projects;