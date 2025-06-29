import { useEffect } from 'react'

const BeginnerCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="course-page">
      <div className="container">
        <div className="course-header">
          <div className="course-icon">🌱</div>
          <h1>Beginner Course</h1>
          <p className="course-subtitle">Perfect for those starting their journey in the field</p>
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
              <span className="label">Price:</span>
              <span className="value">₹15,000</span>
            </div>
          </div>
        </div>

        <div className="course-content">
          <h2>Course Overview</h2>
          <p>This comprehensive beginner course is designed to take you from zero to confident in your chosen field. No prior experience required!</p>

          <h2>What You'll Learn</h2>
          <ul className="learning-objectives">
            <li>Fundamental concepts and principles</li>
            <li>Essential tools and technologies</li>
            <li>Best practices and industry standards</li>
            <li>Hands-on projects and real-world applications</li>
            <li>Problem-solving and critical thinking skills</li>
          </ul>

          <h2>Course Modules</h2>
          <div className="course-modules">
            <div className="module">
              <h3>Module 1: Foundations</h3>
              <p>Introduction to core concepts and basic terminology</p>
            </div>
            <div className="module">
              <h3>Module 2: Getting Started</h3>
              <p>Setting up your development environment and first steps</p>
            </div>
            <div className="module">
              <h3>Module 3: Core Skills</h3>
              <p>Building essential skills through practical exercises</p>
            </div>
            <div className="module">
              <h3>Module 4: Projects</h3>
              <p>Applying your knowledge to real-world projects</p>
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

export default BeginnerCourse 