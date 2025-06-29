import type { Feature } from '../types'

const features: Feature[] = [
  {
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in their respective fields."
  },
  {
    icon: "📚",
    title: "Comprehensive Curriculum",
    description: "Well-structured courses designed to take you from beginner to advanced level."
  },
  {
    icon: "🤝",
    title: "Personalized Support",
    description: "Get individual attention and support throughout your learning journey."
  }
]

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title">Why Choose EduCenter?</h2>
        <p className="section-subtitle">
          We provide the best learning experience with proven methodologies and expert instructors
        </p>
        
        <div className="grid grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 