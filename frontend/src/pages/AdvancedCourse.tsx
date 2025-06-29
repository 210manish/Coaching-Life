import { useEffect } from 'react'

const AdvancedCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="course-page">
      <div className="container">
        <div className="course-header">
          <div className="course-icon">🚀</div>
          <h1>Advanced Course</h1>
          <p className="course-subtitle">For experienced learners ready to master advanced concepts</p>
        </div>

        <div className="course-details">
          <div className="course-info">
            <div className="info-item">
              <span className="label">Duration:</span>
              <span className="value">16 weeks</span>
            </div>
            <div className="info-item">
              <span className="label">Level:</span>
              <span className="value">Advanced</span>
            </div>
            <div className="info-item">
              <span className="label">Price:</span>
              <span className="value">₹25,000</span>
            </div>
          </div>
        </div>

        <div className="course-content">
          <h2>Course Overview</h2>
          <p>Take your skills to the next level with our advanced course designed for experienced learners who want to master complex concepts and accelerate their career growth.</p>

          <h2>What You'll Learn</h2>
          <ul className="learning-objectives">
            <li>Advanced techniques and methodologies</li>
            <li>Complex problem-solving strategies</li>
            <li>Industry best practices and optimization</li>
            <li>Advanced project implementation</li>
            <li>Leadership and mentoring skills</li>
          </ul>

          <h2>Course Modules</h2>
          <div className="course-modules">
            <div className="module">
              <h3>Module 1: Advanced Concepts</h3>
              <p>Deep dive into complex theories and advanced principles</p>
            </div>
            <div className="module">
              <h3>Module 2: Optimization</h3>
              <p>Performance optimization and efficiency techniques</p>
            </div>
            <div className="module">
              <h3>Module 3: Advanced Projects</h3>
              <p>Complex real-world project implementation</p>
            </div>
            <div className="module">
              <h3>Module 4: Mastery</h3>
              <p>Expert-level skills and industry leadership</p>
            </div>
          </div>
        </div>

        <div className="course-actions">
          <button className="btn btn-primary">Enroll Now</button>
          <button className="btn btn-outline">Download Syllabus</button>
        </div>
      </div>
    </div>
  )
}

export default AdvancedCourse 