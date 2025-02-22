import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import { Link } from "react-scroll";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            if (sectionId === "connect") {
              setActiveSection(null); // No navbar highlight when on "Get in Touch"
            } else {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.6 } // Adjust for better section detection
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => {
      document.querySelectorAll("section").forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeSection === "home" ? "nav-link navbar-link active" : "nav-link navbar-link"}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeSection === "skills" ? "nav-link navbar-link active" : "nav-link navbar-link"}
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeSection === "projects" ? "nav-link navbar-link active" : "nav-link navbar-link"}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass="active"
                to="achievements"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeSection === "achievements" ? "nav-link navbar-link active" : "nav-link navbar-link"}
              >
                Achievements
              </Link>
            </Nav.Item>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/loyamark" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/CooCodez" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <Link
              to="connect"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === "connect" ? "vvd active" : "vvd"}
            >
              <button><span>Let’s Connect</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
