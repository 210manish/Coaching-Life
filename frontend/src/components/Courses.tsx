import type { Course } from '../types'
import GlareHover from './GlareHover'

const courses: Course[] = [
  {
    icon: "📊",
    title: "Data Science Fundamentals",
    description: "Master the basics of data analysis, statistics, and machine learning.",
    duration: "12 weeks",
    level: "Intermediate"
  },
  {
    icon: "💻",
    title: "Web Development Bootcamp",
    description: "Learn modern web technologies and build real-world projects.",
    duration: "16 weeks",
    level: "Beginner"
  },
  {
    icon: "🎨",
    title: "Digital Marketing Mastery",
    description: "Comprehensive digital marketing strategies for business growth.",
    duration: "10 weeks",
    level: "All Levels"
  }
]

const Courses = () => {
  return (
    <section id="courses" className="section courses">
      <div className="container">
        <h2 className="section-title">Popular Courses</h2>
        <p className="section-subtitle">
          Explore our most sought-after courses designed to accelerate your career growth
        </p>
        
        <div className="grid grid-cols-3">
          {courses.map((course, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="100%"
              background="var(--card)"
              borderRadius="var(--radius)"
              borderColor="var(--border)"
              glareColor="var(--accent-foreground)"
              glareOpacity={0.15}
              glareAngle={-25}
              glareSize={180}
              transitionDuration={700}
              playOnce={false}
              className="course-glare-wrapper"
            >
              <div className="course-card">
                <div className="course-image">
                  <div className="course-placeholder">{course.icon}</div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses 