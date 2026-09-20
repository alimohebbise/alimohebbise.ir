function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Ali Mohebbi</h1>

        <h2>Software Developer & Web Developer</h2>

        <p className="hero-description">
          I build modern web applications with Python, Django, React,
          and PostgreSQL.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button primary">
            View My Projects
          </a>

          <a href="#contact" className="hero-button secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero