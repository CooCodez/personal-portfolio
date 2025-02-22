import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

// Skills Data with Percentage
const skills = [
  { name: "Front-End Development", percentage: 90 }, // HTML, CSS, JS, React.js, Bootstrap
  { name: "Back-End Development", percentage: 85 }, // Java, Spring Boot, Python, Node.js
  { name: "Database & Cloud Computing", percentage: 80 }, // SQL, Firebase, AWS
  { name: "Problem Solving & Software Engineering", percentage: 95 } // Code efficiency, debugging, best practices
];


// Reusable Circular Meter Component
const CircularMeter = ({ percentage }) => {
  const radius = 90; // Circle radius
  const strokeWidth = 20; // Increase this for a thicker stroke
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const progress = (percentage / 100) * circumference; // Calculate progress length

  return (
    <svg width="204" height="204" viewBox="0 0 204 204" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle (Gray) */}
      <circle
        cx="102" cy="102" r={radius}
        stroke="#4A2FBD" stroke-opacity="0.2" stroke-width={strokeWidth} fill="none"
      />
      
      {/* Progress Circle */}
      <circle
        cx="102" cy="102" r={radius}
        stroke="url(#gradient)" stroke-width={strokeWidth} stroke-linecap="round" fill="none"
        stroke-dasharray={`${circumference}, ${circumference}`} // Full circle
        stroke-dashoffset={circumference - progress} // Offset to match percentage
        transform="rotate(-90 102 102)" // Start from top
      />
      
      {/* Percentage Text */}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24px" font-weight="bold" fill="white">
        {percentage}%
      </text>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#AA367C"/>
          <stop offset="100%" stop-color="#4A2FBD"/>
        </linearGradient>
      </defs>
    </svg>
  );
};


export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I specialize in both <strong>front-end</strong> and <strong>back-end development</strong>, creating dynamic, user-friendly web applications.  
              My expertise includes modern frameworks, database management, and cloud solutions, allowing me to build scalable and efficient systems.
              </p>
              
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <CircularMeter percentage={skill.percentage} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
