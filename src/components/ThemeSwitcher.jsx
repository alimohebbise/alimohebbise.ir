function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="theme-switcher">
      <button
        className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => setTheme('dark')}
        title="Professional Dark"
        aria-label="Professional Dark Theme"
      >
        🌙
      </button>

      <button
        className={`theme-button ${theme === 'light' ? 'active' : ''}`}
        onClick={() => setTheme('light')}
        title="Modern Light"
        aria-label="Modern Light Theme"
      >
        ☀️
      </button>

      <button
        className={`theme-button ${theme === 'developer' ? 'active' : ''}`}
        onClick={() => setTheme('developer')}
        title="Modern Developer"
        aria-label="Modern Developer Theme"
      >
        ⚡
      </button>
    </div>
  )
}

export default ThemeSwitcher