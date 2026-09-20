import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`app theme-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <main>
        <Hero />

        <About />

        <Skills />

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