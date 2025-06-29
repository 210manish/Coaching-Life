import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const BeginnerCourse = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="course-page">
      <div className="container">
        <button 
          onClick={() => navigate('/')} 
          className="back-button"
        >
          ← Back to Courses
        </button>
        
        <div className="course-header">
          <div className="course-icon">🌱</div>
          <h1>Beginner Course</h1>
          <p className="course-subtitle">
            Perfect for newcomers! Learn the fundamentals and build a strong foundation for your journey.
          </p>
        </div>

        <div className="course-details">
          <div className="course-info">
            <div className="info-item">
              <span className="label">Duration:</span>
              <span className="value">12 weeks</span>
            </div>
            <div className="info-item">
              <span className="label">Level:</span>
              <span className="value">Beginner</span>
            </div>
            <div className="info-item">
              <span className="label">Instructor:</span>
              <span className="value">Sarah Johnson</span>
            </div>
          </div>

          <div className="course-content">
            <h2>What You'll Learn</h2>
            <ul className="learning-objectives">
              <li>Fundamental concepts and principles</li>
              <li>Basic techniques and methodologies</li>
              <li>Building confidence and mindset</li>
              <li>Practical exercises and assignments</li>
              <li>One-on-one mentoring sessions</li>
            </ul>

            <h2>Course Structure</h2>
            <div className="course-modules">
              <div className="module">
                <h3>Module 1: Foundations (Weeks 1-3)</h3>
                <p>Introduction to core concepts and building your learning foundation.</p>
              </div>
              <div className="module">
                <h3>Module 2: Core Skills (Weeks 4-6)</h3>
                <p>Developing essential skills and techniques.</p>
              </div>
              <div className="module">
                <h3>Module 3: Application (Weeks 7-9)</h3>
                <p>Applying your knowledge through practical projects.</p>
              </div>
              <div className="module">
                <h3>Module 4: Mastery (Weeks 10-12)</h3>
                <p>Refining your skills and preparing for advanced learning.</p>
              </div>
            </div>

            <div className="course-actions">
              <button className="btn btn-primary">Enroll Now</button>
              <button className="btn btn-secondary">Download Syllabus</button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/course/advanced')}
              >
                View Advanced Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginnerCourse 