import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <ProjectCard
          title="Failure Risk Prediction"
          description="Predictive ML system using classification and regression models to estimate failure risk."
          link="#"
        />

        <ProjectCard
          title="Image Denoising"
          description="Implemented trainable nonlinear reaction diffusion for high-quality image restoration."
          link="#"
        />

        <ProjectCard
          title="Data Analysis Dashboard"
          description="Interactive dashboard for analyzing datasets and extracting insights."
          link="#"
        />
      </div>
    </section>
  );
}

export default Projects;