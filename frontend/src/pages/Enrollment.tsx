import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Enrollment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="enrollment-page">
      <div className="container">
        <div className="enrollment-header">
          <h1>Choose Your Learning Path</h1>
          <p>Select the course that best matches your current skill level and career goals</p>
        </div>

        <div className="course-selection-grid">
          <div className="course-card beginner">
            <div className="course-badge">Beginner Friendly</div>
            <h2>Beginner Course</h2>
            <div className="course-icon">🌱</div>
            
            <div className="course-description">
              <p>Perfect for those starting their journey in the field. No prior experience required.</p>
            </div>

            <div className="course-price">
              <span className="price">₹15,000</span>
              <span className="price-note">One-time payment</span>
            </div>

            <Link to="/course/beginner" className="btn btn-primary course-btn">
              Learn More About Beginner Course
            </Link>
          </div>

          <div className="course-card advanced">
            <div className="course-badge">Advanced Level</div>
            <h2>Advanced Course</h2>
            <div className="course-icon">🚀</div>
            
            <div className="course-description">
              <p>For experienced learners ready to master advanced concepts and accelerate their career growth.</p>
            </div>

            <div className="course-price">
              <span className="price">₹25,000</span>
              <span className="price-note">One-time payment</span>
            </div>

            <Link to="/course/advanced" className="btn btn-primary course-btn">
              Learn More About Advanced Course
            </Link>
          </div>
        </div>

        <div className="enrollment-footer">
          <div className="enrollment-cta">
            <h3>Still Not Sure?</h3>
            <p>Schedule a free consultation call with our experts to discuss your goals and find the perfect course for you.</p>
            <Link to="/#callback" className="btn btn-secondary">
              Request a Callback
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enrollment 