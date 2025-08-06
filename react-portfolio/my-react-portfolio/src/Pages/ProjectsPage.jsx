import projects from '../projectsData';
import ProjectCard from '../Components/ProjectCard';

function ProjectsPage() {
  return (
    <section className="projects-gallery">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
export default ProjectsPage;