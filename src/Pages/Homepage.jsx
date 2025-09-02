import React from 'react';
import ContentSection from '../Components/ContentSection';

import bannerImage from '../assets/hero-2.jpg'; 
// Import your section images here
import projectsImage from '../assets/projects-image.jpg';
import aboutImage from '../assets/about-image.jpg';


function Homepage() {
  return (
    <main>
      <div className="hero-banner">
        <img src={bannerImage} alt="Homepage Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Welcome to my React Portfolio!</h1>
          <p>A collection of my work and skills.</p>
        </div>
      </div>

      {/* Projects Section - Image on the left by default */}
      <ContentSection
        title="Featured Projects"
        description="Explore a selection of my latest work, showcasing my skills in development, design, and problem-solving."
        imageSrc={projectsImage}
        linkTo="/projects"
        linkText="View All Projects"
      />

      {/* About Section - Image on the right */}
      <ContentSection
        title="About Me"
        description="Learn more about my background, professional experience, and what drives me to create and innovate."
        imageSrc={aboutImage}
        linkTo="/about"
        linkText="Get to Know Me"
        isImageRight={true}
      />
    </main>
  );
}

export default Homepage;