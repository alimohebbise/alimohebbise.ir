import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`app theme-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <main>
        <section id="hero">
          <h1>Hi, I'm Ali Mohebbi</h1>
          <p>Software Developer & Web Developer</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
        </section>

        <section id="skills">
          <h2>Skills</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="experience">
          <h2>Experience</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default App