import React from 'react';
import {
  Card,
  CardDeck,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import "./skills.style.css";
import { skills } from './skills-data';

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* md = (12/no of columns i want) */}
          {/* Frontend */}
          <Col md={6}>
            <Card className="focus mt-3 mb-3">
              <Card.Body>
                
                <Card.Title className="text-center card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {
                    skills['frontend'].map((skill, index) => (
                      <span className="p-3" key={`${skill.skillName}${index}`}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />{skill.skillName}
                        </a>
                      </span>
                    ))
                  }
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-3 mb-3">
              <Card.Body>
                
                <Card.Title className="text-center card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {
                    skills.hostingPlatforms.map((skill, index) => (
                      <span className="p-3" key={`${skill.skillName}${index}`}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />{skill.skillName}
                        </a>
                      </span>
                    ))
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={6}>
            <Card className="focus mt-3 mb-3">
              <Card.Body>
                
                <Card.Title className="text-center card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {
                    skills.backend.map((skill, index) => (
                      <span className="p-3" key={`${skill.skillName}${index}`}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />{skill.skillName}
                        </a>
                      </span>
                    ))
                  }
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Programming Language */}
            <Card className="focus mt-3 mb-3">
              <Card.Body>
                
                <Card.Title className="text-center card-title">Programming Language</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {
                    skills.programmingLanguages.map((skill, index) => (
                      <span className="p-3" key={`${skill.skillName}${index}`}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />{skill.skillName}
                        </a>
                      </span>
                    ))
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  )

}

export default Skills