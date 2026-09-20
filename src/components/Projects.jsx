function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">Projects</p>

          <h2>
            Some of the projects I have worked on.
          </h2>

          <p>
            A selection of web applications and software projects
            built with modern development technologies.
          </p>
        </div>


        <div className="projects-grid">

          <article className="project-card featured">

            <div className="project-content">

              <span className="project-status">
                Personal Project
              </span>

              <h3>RavanSport</h3>

              <p>
                A sports psychology platform designed for publishing
                educational content, introducing coaches, managing
                posts, and providing an online platform for sports
                psychology services.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Django</span>
                <span>DRF</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>

              <div className="project-links">
                <a
                  href="https://ravansport.ir"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>

                <a
                  href="https://github.com/alimohebbise/Ravanshenasi_Varzeshi"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

            </div>

          </article>


          <article className="project-card">

            <div className="project-content">

              <span className="project-status">
                Web Project
              </span>

              <h3>Personal Portfolio</h3>

              <p>
                A modern personal portfolio website built to present
                my skills, projects, experience, and technical background.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>Docker</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/alimohebbise/alimohebbise.ir"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

            </div>

          </article>


          <article className="project-card">

            <div className="project-content">

              <span className="project-status">
                Future Project
              </span>

              <h3>More Projects</h3>

              <p>
                More software and web development projects will be
                added here as I continue building and improving my
                technical experience.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Django</span>
                <span>React</span>
                <span>Docker</span>
              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  )
}

export default Projects