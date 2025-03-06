import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, liveLink, apkLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div className="project-buttons">
            {/* GitHub Button */}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                View on GitHub
              </a>
            )}

            {/* Live Website Button */}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                Visit Live Site
              </a>
            )}

            {/* APK Download Button */}
            {apkLink && (
              <a href={apkLink} target="_blank" rel="noopener noreferrer" className="btn project-btn apk-btn">
                Download APK
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
