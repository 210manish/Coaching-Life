import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Enrollment = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCallbackClick = () => {
    // Navigate to home page first
    navigate('/')
    // Then scroll to callback section after a short delay
    setTimeout(() => {
      const callbackSection = document.getElementById('callback')
      if (callbackSection) {
        callbackSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="enrollment-page">
      <div className="container">
        <div className="enrollment-header">
          <h1>Choose Your Learning Path</h1>
          <p>Select the course that best matches your current skill level and career goals. Start your journey to success today!</p>
        </div>

        <div className="course-selection-grid">
          <div className="course-card beginner">
            <div className="course-badge">Beginner Friendly</div>
            <h2>Beginner Course</h2>
            <div className="course-icon">🌱</div>
            
            <div className="course-description">
              <p>Perfect for those starting their journey in the field. Build a strong foundation with our comprehensive beginner-friendly curriculum.</p>
            </div>

            <div className="course-price">
              <span className="price">₹15,000</span>
              <span className="price-note">One-time payment • Lifetime access</span>
            </div>

            <Link to="/course/beginner" className="btn btn-primary course-btn">
              Explore Beginner Course
            </Link>
          </div>

          <div className="course-card advanced">
            <div className="course-badge">Advanced Level</div>
            <h2>Advanced Course</h2>
            <div className="course-icon">🚀</div>
            
            <div className="course-description">
              <p>For experienced learners ready to master advanced concepts and accelerate their career growth with expert-level training.</p>
            </div>

            <div className="course-price">
              <span className="price">₹25,000</span>
              <span className="price-note">One-time payment • Lifetime access</span>
            </div>

            <Link to="/course/advanced" className="btn btn-primary course-btn">
              Explore Advanced Course
            </Link>
          </div>
        </div>

        <div className="enrollment-footer">
          <div className="enrollment-cta">
            <h3>Still Not Sure Which Course to Choose?</h3>
            <p>Schedule a free consultation call with our experts to discuss your goals, assess your current skill level, and find the perfect course for your career path.</p>
            <button onClick={handleCallbackClick} className="btn btn-secondary">
              Request a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enrollment 