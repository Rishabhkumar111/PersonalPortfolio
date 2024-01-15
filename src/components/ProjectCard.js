import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, git }) => {
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  const handleMobileHover = () => {
    setIsMobileHovered(!isMobileHovered);
  };
  return (
    <Col xs={12} sm={6} md={4}>
      <div
        className={`proj-imgbx ${isMobileHovered ? "mobile-hover" : ""}`}
        onClick={() => window.open(git)}
        onTouchStart={handleMobileHover}
        onTouchEnd={handleMobileHover}
      >
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
