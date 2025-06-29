import { useState } from 'react'
import { Link } from 'react-router-dom'

const CallbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'morning'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Callback request:', formData)
    alert('Thank you! We will call you back soon.')
    setFormData({ name: '', phone: '', email: '', preferredTime: 'morning' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="callback" className="section callback-section">
      <div className="container">
        <div className="callback-content">
          <div className="callback-left">
            <h2>Transform Your Future Today!</h2>
            <p className="urgency-text">Join thousands of successful students who have already taken the first step towards their dream career</p>
            <div className="seats-info">
              <div className="seat-count">
                <span className="count">🎯</span>
                <span className="label">Clear Concept Understanding</span>
              </div>
              <div className="seat-count">
                <span className="count">💼</span>
                <span className="label">Direct Path to Jobs</span>
              </div>
              <div className="enrollment-deadline">
                <span className="deadline">Expert Instructors • Flexible Schedule • Lifetime Access</span>
              </div>
            </div>
          </div>
          
          <div className="callback-right">
            <h3>Request a Callback</h3>
            <p>Get personalized guidance from our experts</p>
            
            <form onSubmit={handleSubmit} className="callback-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                  <option value="night">Night (6 PM - 9 PM)</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Request Callback
              </button>
            </form>
          </div>
        </div>
        
        <div className="enroll-now-section">
          <Link to="/enrollment" className="btn btn-primary btn-large">
            Enroll Now - Secure Your Spot!
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallbackSection 