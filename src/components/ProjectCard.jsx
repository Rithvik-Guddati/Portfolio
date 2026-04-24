function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div className="card">
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={title}
        className="card-img"
      />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        View Project →
      </a>
    </div>
  );
}