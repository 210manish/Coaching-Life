import type { Course } from '../types'
import GlareHover from './GlareHover'

const courses: Course[] = [
  {
    icon: "🌱",
    title: "Beginner Course",
    description: "Perfect for newcomers! Learn the fundamentals and build a strong foundation for your journey.",
    duration: "12 weeks",
    level: "Beginner"
  },
  {
    icon: "🚀",
    title: "Advanced Course",
    description: "Take your skills to the next level with advanced techniques and expert-level content.",
    duration: "12 weeks",
    level: "Advanced"
  }
]

const Courses = () => {
  return (
    <section id="courses" className="section courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-subtitle">
          Choose the perfect course for your skill level and accelerate your learning journey
        </p>
        
        <div className="grid grid-cols-2">
          {courses.map((course, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="100%"
              background="var(--card)"
              borderRadius="var(--radius-lg)"
              borderColor="var(--border)"
              glareColor="var(--primary)"
              glareOpacity={0.25}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
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
                  <button className="btn btn-primary">Explore</button>
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