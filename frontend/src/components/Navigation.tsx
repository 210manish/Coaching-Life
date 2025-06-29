import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import AuthPanel from './AuthPanel'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false)

  const smoothScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2 onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                EduCenter
              </h2>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <button onClick={() => smoothScrollTo('courses')} className="nav-link">Courses</button>
              <button onClick={() => smoothScrollTo('callback')} className="nav-link">Admissions</button>
              <button onClick={() => smoothScrollTo('features')} className="nav-link">Why Us?</button>
            </div>
            
            <div className="nav-actions">
              <ThemeToggle />
              <button 
                className="btn btn-primary"
                onClick={() => setIsAuthPanelOpen(true)}
              >
                Login/Sign Up
              </button>
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

      <AuthPanel 
        isOpen={isAuthPanelOpen}
        onClose={() => setIsAuthPanelOpen(false)}
      />
    </>
  )
}

export default Navigation 