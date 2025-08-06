import React from 'react';
import { Link } from 'react-router-dom';

// This is a reusable component for each project card.
const ProjectCard = ({ title, description, imageSrc, linkTo }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="cta-link">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;