import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vacation Planner",
      description: "Android app for scheduling and managing vacations and excursions. It features a CRUD-based database, Firebase authentication, and a clean UI with intuitive navigation. Built using Java, Room Database, and the Android Jetpack suite.",
      imgUrl: projImg1, 
      githubLink: "https://github.com/CooCodez/Vacation-Planner-App.git", 
      apkLink: "https://appdistribution.firebase.dev/i/9323e0bb2691699b", 
    },
    {
      title: "Spring-Angular App",
      description: "Full-stack web app built with Spring Boot and Angular. Features RESTful API, database persistence, and Docker containerization.",
      imgUrl: projImg2,
      githubLink: "https://github.com/CooCodez/spring-angular-app",
    },
    {
      title: "Inventory Manager",
      description: "Spring Boot app with Thymeleaf UI for managing PC parts. Includes CRUD operations, inventory validation, and a 'Buy Now' button.",
      imgUrl: projImg3,
      githubLink: "https://github.com/CooCodez/Elite-Gaming-PC-Inventory-Manager", 
    },
    {
      title: "California State",
      description: "Informational state website built with HTML, CSS, and JavaScript, focusing on user experience and navigation.",
      imgUrl: projImg4, 
      liveLink: "http://mloya.atwebpages.com/",
    },
    {
      title: "Web App",
      description: "JavaScript & Angular web app with API integrations and interactive UI components.",
      imgUrl: projImg5, 
      liveLink: "http://loyamaps.atwebpages.com/", 
    },
    {
      title: "React Portfolio Website",
      description: "Modern, fully responsive portfolio built with React, React-Bootstrap, and Animate.css.",
      imgUrl: projImg6, 
      liveLink: "https://mark-loya.web.app/", 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Here are some of the projects I've worked on, showcasing my experience in 
                  <strong> front-end</strong>, <strong> back-end</strong>, and <strong> full-stack development</strong>. 
                  From building interactive web applications to developing scalable back-end systems, 
                  I focus on writing clean, efficient, and maintainable code. Each project highlights 
                  different aspects of my expertise, including <strong> React.js</strong>, <strong> Java</strong>, 
                  <strong> Spring Boot</strong>, <strong> SQL</strong>, and cloud computing.
                </p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
