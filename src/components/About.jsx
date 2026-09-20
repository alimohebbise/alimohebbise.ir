function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">About Me</p>
          <h2>Turning ideas into practical web solutions.</h2>
        </div>

        <div className="about-content">
          <p>
            I am a Computer Science graduate with an interest in software
            development and web technologies. My main programming language
            is Python, and I primarily work with Django and Django REST
            Framework for backend development.
          </p>

          <p>
            I also work with React and modern frontend technologies to build
            responsive and practical web applications. I am interested in
            continuously improving my technical skills and gaining experience
            in software development, databases, deployment, and modern
            development tools.
          </p>

          <div className="about-highlights">
            <div className="about-card">
              <strong>Backend</strong>
              <span>Python · Django · DRF</span>
            </div>

            <div className="about-card">
              <strong>Frontend</strong>
              <span>React · JavaScript · Vite</span>
            </div>

            <div className="about-card">
              <strong>Database</strong>
              <span>PostgreSQL · SQL</span>
            </div>

            <div className="about-card">
              <strong>Tools</strong>
              <span>Docker · Git · Linux</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About