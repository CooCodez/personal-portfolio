import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import { Link } from "react-scroll";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
            setActiveSection(sectionId === "connect" ? null : sectionId);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => {
      document.querySelectorAll("section").forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Navbar
      expand="md"
      expanded={menuOpen} // ✅ Use expanded prop to track menu state
      onToggle={() => setMenuOpen(!menuOpen)} // ✅ Proper way to track menu toggle
      className={`${scrolled || menuOpen ? "scrolled menu-open" : ""}`} 
      fixed="top"
    >
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
                to="home"
                className={activeSection === "home" ? "nav-link navbar-link active" : "nav-link navbar-link"}
                spy smooth offset={-70} duration={500}
                onClick={() => setMenuOpen(false)} // ✅ Close menu when clicked
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="skills"
                className={activeSection === "skills" ? "nav-link navbar-link active" : "nav-link navbar-link"}
                spy smooth offset={-70} duration={500}
                onClick={() => setMenuOpen(false)} // ✅ Close menu when clicked
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="projects"
                className={activeSection === "projects" ? "nav-link navbar-link active" : "nav-link navbar-link"}
                spy smooth offset={-70} duration={500}
                onClick={() => setMenuOpen(false)} // ✅ Close menu when clicked
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="achievements"
                className={activeSection === "achievements" ? "nav-link navbar-link active" : "nav-link navbar-link"}
                spy smooth offset={-70} duration={500}
                onClick={() => setMenuOpen(false)} // ✅ Close menu when clicked
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
              className={activeSection === "connect" ? "vvd active" : "vvd"} 
              spy 
              smooth 
              offset={-70} 
              duration={500}
              onClick={() => setMenuOpen(false)} // ✅ Close menu when clicked
            >
              <button><span>Let’s Connect</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
