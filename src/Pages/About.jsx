import React from 'react';
import ContentSection from '../Components/ContentSection';
import bannerImage from '../assets/about-image.jpg'; 
import aboutImage from '../assets/about-image.jpg'; // Using a placeholder image for the section

function About() {
  return (
    <div>
      <main>
        {/* The About page banner, a smaller version of the homepage banner */}
        <div className="hero-banner-small">
          <img src={bannerImage} alt="About Page Banner" className="banner-image" />
          <div className="banner-content-small">
            <h1>About Me</h1>
          </div>
        </div>
        
        <ContentSection
          title="My Journey"
          description="I am a passionate developer with a background in web design and a love for creating beautiful, functional applications. My skills include front-end development with React, back-end services with Node.js, and creating engaging user experiences."
          imageSrc={aboutImage}
          linkTo="/contact"
          linkText="Get in Touch"
        />
      </main>
    </div>
  );
}

export default About;