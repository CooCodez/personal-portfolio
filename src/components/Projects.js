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
      title: "Vacation Planner App",
      description: "Android app for scheduling and managing vacations and excursions. It features a CRUD-based database, Firebase authentication, and a clean UI with intuitive navigation. Built using Java, Room Database, and the Android Jetpack suite.",
      imgUrl: projImg1, 
      githubLink: "https://github.com/CooCodez/Vacation-Planner-App.git", 
    },
    {
      title: "Spring-Angular App",
      description: "Full-stack web app built with Spring Boot and Angular. Features RESTful API, database persistence, and Docker containerization.",
      imgUrl: projImg2,
      githubLink: "https://github.com/CooCodez/spring-angular-app",
    },
    {
      title: "Elite Gaming PC Inventory Manager",
      description: "Spring Boot web application with Thymeleaf UI for managing gaming PC parts and products. Features CRUD operations, inventory validation, and a 'Buy Now' button.",
      imgUrl: projImg3,
      githubLink: "https://github.com/CooCodez/Elite-Gaming-PC-Inventory-Manager", 
    },
    {
      title: "California State Website",
      description: "A state information website built using HTML, CSS, and JavaScript, implementing user-centered design, navigational schemes, and data storage capabilities.",
      imgUrl: projImg4, 
      liveLink: "http://mloya.atwebpages.com/",
    },
    {
      title: "JavaScript & Angular Web App",
      description: "Dynamic web application built using JavaScript and Angular. Implements API integrations, interactive UI components, and enhances functionality with modern web development practices.",
      imgUrl: projImg5, 
      liveLink: "http://loyamaps.atwebpages.com/", 
    },
    {
      title: "React Portfolio Website",
      description: "A modern, fully responsive portfolio website built with React, React-Bootstrap, and Animate.css. Showcases my projects, skills, and experience with smooth animations and a clean UI.",
      imgUrl: projImg6, 
      liveLink: "https://your-portfolio-link.com", 
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
