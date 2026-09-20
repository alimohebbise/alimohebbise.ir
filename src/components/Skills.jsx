function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">Skills</p>

          <h2>
            Technologies I use to build modern applications.
          </h2>

          <p>
            My technical skills cover backend development, frontend
            development, databases, and development tools.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Backend Development</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>Django</span>
              <span>Django REST Framework</span>
              <span>REST API</span>
            </div>
          </div>


          <div className="skill-category">
            <h3>Frontend Development</h3>

            <div className="skill-list">
              <span>JavaScript</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>


          <div className="skill-category">
            <h3>Database</h3>

            <div className="skill-list">
              <span>PostgreSQL</span>
              <span>SQL</span>
            </div>
          </div>


          <div className="skill-category">
            <h3>DevOps & Tools</h3>

            <div className="skill-list">
              <span>Docker</span>
              <span>Docker Compose</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Linux</span>
              <span>Nginx</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills