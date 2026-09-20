function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>
            Let's build something together.
          </h2>

          <p>
            I'm open to new opportunities, interesting projects,
            and collaborations in software and web development.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <a
              href="mailto:alimohebbise@gmail.com"
              className="contact-item"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">
                alimohebbise@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/alimohebbise"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                github.com/alimohebbise
              </span>
            </a>

            <a
              href="https://t.me/django_computer"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-label">Telegram</span>
              <span className="contact-value">
                @django_computer
              </span>
            </a>

          </div>

          <div className="contact-cta">
            <span>Have a project in mind?</span>

            <a
              href="mailto:alimohebbise@gmail.com"
              className="contact-button"
            >
              Get In Touch
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact