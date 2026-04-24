function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Rithvik 👋</h1>
        <h2>Machine Learning & Data Science Enthusiast</h2>
        <p>
          I build data-driven solutions, work on ML models, and create systems
          that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src={`${import.meta.env.BASE_URL}images/cat_profile.jpg`} 
          alt="profile" 
        />
      </div>
    </section>
  );
}

export default Home;