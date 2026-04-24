import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Failure Risk Prediction",
      description:
        "Built a predictive system using classification and regression models to estimate system failure risk.",
      tech: ["Python", "ML", "Regression"],
      link: "#",
      image: "images/project1.jpg",
    },
    {
      title: "Image Denoising",
      description:
        "Implemented trainable nonlinear reaction diffusion for high-quality image restoration.",
      tech: ["Python", "Computer Vision"],
      link: "#",
      image: "images/project2.jpg",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;