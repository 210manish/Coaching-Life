import type { Stat } from '../types'

const stats: Stat[] = [
  { value: "10,000+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Instructors" },
  { value: "95%", label: "Success Rate" },
  { value: "200+", label: "Courses Available" }
]

const Stats = () => {
  return (
    <section className="section stats">
      <div className="container">
        <div className="grid grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 