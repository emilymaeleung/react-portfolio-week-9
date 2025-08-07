import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import bannerImage from '../assets/projects-image.jpg'; 

// You will need to add these images to your src/assets folder.
// I'm using placeholders for now.
import project1Image from '../assets/note.png';
import project2Image from '../assets/check.png';
import project3Image from '../assets/weatherlogo.png';
import project4Image from '../assets/vet.png';
import project5Image from '../assets/familytable.png';
import project6Image from '../assets/portfoliologo.png';

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
            title="Full Stack Notes Application using Node and Express"
            description="A useful note-taking application."
            imageSrc={project1Image}
            linkTo="https://note-taker-app-jwoy.onrender.com/"
          />
          <ProjectCard
            title="JavaScript To-Do List"
            description="A list tracker and creator"
            imageSrc={project2Image}
            linkTo="https://emilymaeleung.github.io/week-4-java/"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="An interactive Weather Dasboard that fetches current weather data based on location."
            imageSrc={project3Image}
            linkTo="https://github.com/DylanRhodes098/iWeather.io"
          />
          <ProjectCard
            title="Veterinary website built using Bootstrap"
            description="A responsve veterinary website utilising html, css & bootstrap"
            imageSrc={project4Image}
            linkTo="https://emilymaeleung.github.io/bootstrap-project/"
          />
          <ProjectCard
            title="Catering website for the elderly built using CSS Flex"
            description="An online subscription service built using CSS Flex"
            imageSrc={project5Image}
            linkTo="https://emilymaeleung.github.io/the-family-table/"
          />
          <ProjectCard
            title="Simple portfolio website"
            description="A simple portfolio website built using HTML & CSS"
            imageSrc={project6Image}
            linkTo="https://emilymaeleung.github.io/portfolio_project/"
          />                   
        </div>
      </section>
    </main>
  );
}

export default Projects;
