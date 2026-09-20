import ThemeSwitcher from './ThemeSwitcher'

function Header({ theme, setTheme }) {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#hero" className="site-logo">
          <span className="logo-name">Ali Mohebbi</span>
          <span className="logo-role">Software Developer</span>
        </a>

        <nav className="main-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <ThemeSwitcher
          theme={theme}
          setTheme={setTheme}
        />

      </div>
    </header>
  )
}

export default Header