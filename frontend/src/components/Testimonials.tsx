import type { Testimonial } from '../types'

const testimonials: Testimonial[] = [
  {
    content: "EduCenter transformed my career. The instructors are amazing and the curriculum is perfectly structured for real-world application.",
    author: {
      name: "Sarah Johnson",
      title: "Data Scientist at TechCorp"
    }
  },
  {
    content: "The personalized support I received helped me overcome challenges and achieve my goals. Highly recommended!",
    author: {
      name: "Michael Chen",
      title: "Full Stack Developer"
    }
  },
  {
    content: "From beginner to professional, EduCenter guided me every step of the way. The community is supportive and inspiring.",
    author: {
      name: "Emily Rodriguez",
      title: "Digital Marketing Manager"
    }
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">
          Hear from our successful graduates about their learning experience
        </p>
        
        <div className="grid grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>{testimonial.author.name}</h4>
                  <p>{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 