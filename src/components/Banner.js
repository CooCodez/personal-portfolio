import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assets/img/me.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [bounceValue, setBounceValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const bounce = Math.sin((scrollPos / maxScroll) * Math.PI) * 15;
      setBounceValue(bounce);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__slow" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Mark Loya`} <br />
                    <span className="simple-fade-in">Software Engineer</span>
                  </h1>

                  {/* IMAGE MOVED HERE ON MOBILE */}
                  <div className="mobile-photo">
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          <img
                            src={myPhoto}
                            alt="Mark Loya"
                            className="profile-photo"
                            style={{
                              transform: `translateY(${bounceValue}px)`, 
                              transition: "transform 0.3s ease-in-out"
                            }}
                          />
                        </div>}
                    </TrackVisibility>
                  </div>

                  <p>I’m Mark Loya, a Software Engineer with a background in Java and full-stack development. Previously an educator for 10+ years, I bring strong problem-solving and adaptability to tech.</p>
                  <p>Proficient in Java, Python, SQL, and front-end technologies like HTML, CSS, and JavaScript. Skilled in both front-end and back-end development, I’m passionate about building efficient, user-friendly software. Whether it’s web design, back-end systems, or full-stack development, I’m always learning, always coding—let’s connect!</p>

                  <button className="vvd">
                    <a href="#connect" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>}
            </TrackVisibility>
          </Col>

          {/* Hides Image on Mobile, Shows Only on Desktop */}
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2 d-none d-md-block">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={myPhoto}
                    alt="Mark Loya"
                    className="profile-photo"
                    style={{
                      transform: `translateY(${bounceValue}px)`, 
                      transition: "transform 0.3s ease-in-out"
                    }}
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
