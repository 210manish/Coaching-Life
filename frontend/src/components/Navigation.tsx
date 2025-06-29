import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h2>EduCenter</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#admissions" className="nav-link">Admissions</a>
            <a href="#features" className="nav-link">Why Us?</a>
          </div>
          
          <div className="nav-actions">
            <ThemeToggle />
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
          
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 