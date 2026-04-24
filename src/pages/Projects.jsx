import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <ProjectCard
          title="Failure Risk Prediction"
          description="ML model to predict system failure using classification and regression."
          link="#"
        />

        <ProjectCard
          title="Image Denoising Model"
          description="Implemented nonlinear reaction diffusion for image denoising."
          link="#"
        />
      </div>
    </section>
  );
}

export default Projects;