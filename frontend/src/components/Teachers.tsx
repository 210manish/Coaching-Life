import GlareHover from './GlareHover'

interface Teacher {
  id: number
  name: string
  role: string
  description: string
  image: string
  specialties: string[]
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Instructor",
    description: "With over 8 years of experience in coaching and mentoring, Sarah specializes in helping beginners build strong foundations and develop confidence in their learning journey.",
    image: "👩‍🏫",
    specialties: ["Beginner Coaching", "Confidence Building", "Learning Strategies"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Advanced Specialist",
    description: "A seasoned expert with 12+ years in advanced techniques and methodologies. Michael excels at pushing experienced learners to achieve breakthrough results.",
    image: "👨‍🏫",
    specialties: ["Advanced Techniques", "Breakthrough Coaching", "Expert Mentoring"]
  }
]

const Teachers = () => {
  return (
    <section id="teachers" className="section teachers">
      <div className="container">
        <h2 className="section-title">Meet Our Expert Teachers</h2>
        <p className="section-subtitle">
          Learn from experienced professionals who are passionate about your success
        </p>
        
        <div className="grid grid-cols-2">
          {teachers.map((teacher) => (
            <GlareHover
              key={teacher.id}
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
              className="teacher-glare-wrapper"
            >
              <div className="teacher-card">
                <div className="teacher-left">
                  <div className="teacher-image">
                    <div className="teacher-avatar">{teacher.image}</div>
                  </div>
                </div>
                <div className="teacher-right">
                  <div className="teacher-content">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-role">{teacher.role}</p>
                    <p className="teacher-description">{teacher.description}</p>
                    <div className="teacher-specialties">
                      {teacher.specialties.map((specialty, index) => (
                        <span key={index} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                    <button className="btn btn-secondary">View Profile</button>
                  </div>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachers 