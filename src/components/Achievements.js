import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CertCard } from "./CertCard"; 
import projImg7 from "../assets/img/project-img7.jpg"; // WGU Degree
import projImg8 from "../assets/img/project-img8.jpg"; // Fresno State Degree
import projImg9 from "../assets/img/comptia-project-plus.png";
import projImg10 from "../assets/img/AWS.png";
import projImg11 from "../assets/img/ITIL4.png";
import projImg12 from "../assets/img/WGU-Certificate-Front-End-Developer.png";
import projImg13 from "../assets/img/WGU-Back-End-Developer.png";

export const Achievements = () => {
  const certifications = [
    { 
      title: "CompTIA Project+", 
      description: "CompTIA Project+ is the only industry certification designed to teach IT pros the entry-level skills they need to successfully manage small to medium-sized projects.", 
      year: "2024",
      imgUrl: projImg9 
    },
    { 
      title: "AWS Certified Cloud Practitioner", 
      description: "The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.", 
      year: "2024",
      imgUrl: projImg10
    },
    { 
      title: "ITIL® 4", 
      description: "ITIL 4 introduces a modern, flexible, and comprehensive approach to IT Service Management (ITSM). It emphasizes collaboration, automation, and delivering real value to customers.", 
      year: "2024",
      imgUrl: projImg11
    },
    { 
      title: "WGU Certificate: Front-End Developer", 
      description: "Earned from Western Governors University, this certificate validates proficiency in responsive web design, JavaScript, CSS, HTML, and front-end software development.", 
      year: "2024",
      imgUrl: projImg12
    },
    { 
      title: "WGU Certificate: Back-End Developer", 
      description: "Awarded by WGU, this certificate demonstrates expertise in Java, OOP, SQL, database management, Spring Framework, and mobile app development.", 
      year: "2024",
      imgUrl: projImg13
    }
  ];

  const degrees = [
    { 
      title: "Bachelor’s Degree in Software Engineering", 
      description: "Western Governors University (WGU)", 
      year: "2025",
      imgUrl: projImg7 
    },
    { 
      title: "Bachelor of Arts in Liberal Studies", 
      description: "California State University, Fresno", 
      year: "2012",
      imgUrl: projImg8 
    }
  ];

  return (
    <section className="project" id="achievements"> 
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Achievements</h2>
                  <p>
                    Here are my <strong>degrees, diplomas, and certifications</strong> that 
                    validate my skills and expertise in software engineering and education.
                  </p>

                  {/* Tabs for Certifications & Degrees (Order Switched) */}
                  <Tab.Container id="achievements-tabs" defaultActiveKey="certifications">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="certifications">Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="degrees">Degrees</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Certifications Tab (Now First) */}
                      <Tab.Pane eventKey="certifications">
                        <Row className="justify-content-center">
                          {certifications.map((cert, index) => (
                            <CertCard key={index} {...cert} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Degrees Tab (Now Second) */}
                      <Tab.Pane eventKey="degrees">
                        <Row className="justify-content-center">
                          {degrees.map((degree, index) => (
                            <CertCard key={index} {...degree} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
