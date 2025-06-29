import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AdvancedCourse = () => {
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
          <div className="course-icon">🚀</div>
          <h1>Advanced Course</h1>
          <p className="course-subtitle">
            Take your skills to the next level with advanced techniques and expert-level content.
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
              <span className="value">Advanced</span>
            </div>
            <div className="info-item">
              <span className="label">Instructor:</span>
              <span className="value">Michael Chen</span>
            </div>
          </div>

          <div className="course-content">
            <h2>What You'll Learn</h2>
            <ul className="learning-objectives">
              <li>Advanced techniques and methodologies</li>
              <li>Expert-level strategies and approaches</li>
              <li>Complex problem-solving skills</li>
              <li>Industry best practices and standards</li>
              <li>Breakthrough coaching techniques</li>
            </ul>

            <h2>Course Structure</h2>
            <div className="course-modules">
              <div className="module">
                <h3>Module 1: Advanced Foundations (Weeks 1-3)</h3>
                <p>Deep dive into advanced concepts and sophisticated methodologies.</p>
              </div>
              <div className="module">
                <h3>Module 2: Expert Techniques (Weeks 4-6)</h3>
                <p>Mastering complex techniques and advanced strategies.</p>
              </div>
              <div className="module">
                <h3>Module 3: Advanced Applications (Weeks 7-9)</h3>
                <p>Applying advanced knowledge to real-world scenarios.</p>
              </div>
              <div className="module">
                <h3>Module 4: Expert Mastery (Weeks 10-12)</h3>
                <p>Achieving expert-level proficiency and leadership skills.</p>
              </div>
            </div>

            <div className="course-actions">
              <button className="btn btn-primary">Enroll Now</button>
              <button className="btn btn-secondary">Download Syllabus</button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/course/beginner')}
              >
                View Beginner Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedCourse 