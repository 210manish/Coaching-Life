import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What makes your coaching program different from others?",
    answer: "Our coaching program combines personalized one-on-one mentoring with proven methodologies and real-world applications. We focus on building strong foundations while adapting to each student's unique learning style and goals. Our expert instructors provide continuous support and feedback throughout your journey."
  },
  {
    id: 2,
    question: "How long does it take to complete a course?",
    answer: "Course duration varies based on the level and your pace. Our Beginner course typically takes 8-12 weeks, while the Advanced course can take 12-16 weeks. We offer flexible scheduling and self-paced learning options to accommodate your busy lifestyle."
  },
  {
    id: 3,
    question: "Do you offer any guarantees or refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our program. We're confident in our methodology and want you to feel secure in your investment. Additionally, we provide ongoing support even after course completion."
  },
  {
    id: 4,
    question: "Can I switch between courses or instructors?",
    answer: "Absolutely! We understand that learning preferences can change. You can switch between courses or request a different instructor at any time. Our goal is to ensure you have the best learning experience possible."
  },
  {
    id: 5,
    question: "What kind of support do you provide after course completion?",
    answer: "We provide lifetime access to course materials, monthly group coaching sessions, and access to our exclusive alumni community. You'll also receive ongoing mentorship opportunities and career guidance to help you continue growing professionally."
  }
]

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about our coaching programs
        </p>
        
        <div className="faq-container">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${openItem === item.id ? 'active' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
              </button>
              <div className={`faq-answer ${openItem === item.id ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 