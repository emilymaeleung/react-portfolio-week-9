// src/components/ContentSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection = ({ title, description, imageSrc, linkTo, linkText, isImageRight }) => {
  return (
    <div className={`content-section ${isImageRight ? 'image-right' : 'image-left'}`}>
      <div className="content-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="content-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={linkTo} className="cta-link">
          {linkText} &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ContentSection;