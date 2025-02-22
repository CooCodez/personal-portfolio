import { Col } from "react-bootstrap";

export const CertCard = ({ title, description, year, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
      <div className="cert-card">
        <img src={imgUrl} alt={title} />
        <div className="cert-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{year}</p>
        </div>
      </div>
    </Col>
  );
};
