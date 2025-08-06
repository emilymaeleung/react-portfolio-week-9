import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import bannerImage from '../assets/projects-image.jpg'; 

// You will need to add these images to your src/assets folder.
// I'm using placeholders for now.
import project1Image from '../assets/projects-image.jpg';
import project2Image from '../assets/projects-image.jpg';
import project3Image from '../assets/projects-image.jpg';

function Projects() {
  return (
    <main>
      {/* The Projects page banner, a smaller version of the homepage banner */}
      <div className="hero-banner-small">
        <img src={bannerImage} alt="Projects Page Banner" className="banner-image" />
        <div className="banner-content-small">
          <h1>My Projects</h1>
        </div>
      </div>

      {/* The grid container for all the project cards */}
      <section className="projects-grid-container">
        <div className="projects-grid">
          {/* Example ProjectCard components */}
          <ProjectCard
            title="E-commerce Website"
            description="A modern, responsive e-commerce platform built with React, Redux, and Node.js."
            imageSrc={project1Image}
            linkTo="/projects/ecommerce"
          />
          <ProjectCard
            title="Mobile Game App"
            description="A fun and engaging mobile game developed for iOS and Android using Swift and Kotlin."
            imageSrc={project2Image}
            linkTo="/projects/mobile-game"
          />
          <ProjectCard
            title="Data Visualization Dashboard"
            description="An interactive dashboard for visualizing complex datasets, powered by D3.js and Tailwind CSS."
            imageSrc={project3Image}
            linkTo="/projects/data-viz"
          />
          {/* Add more ProjectCard components here as you create new projects */}
        </div>
      </section>
    </main>
  );
}

export default Projects;
