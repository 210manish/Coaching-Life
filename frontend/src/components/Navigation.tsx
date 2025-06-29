import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import AuthPanel from './AuthPanel'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const smoothScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        smoothScrollTo(sectionId)
      }, 100)
    } else {
      // If we're already on home page, just scroll to section
      smoothScrollTo(sectionId)
    }
  }

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2 onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                EduCenter
              </h2>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <button onClick={() => handleNavigation('courses')} className="nav-link">Courses</button>
              <button onClick={() => handleNavigation('callback')} className="nav-link">Admissions</button>
              <button onClick={() => handleNavigation('features')} className="nav-link">Why Us?</button>
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