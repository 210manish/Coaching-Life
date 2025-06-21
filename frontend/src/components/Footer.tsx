import type { FooterSection } from '../types'

const footerSections: FooterSection[] = [
  {
    title: "EduCenter",
    content: "Empowering students to achieve their dreams through quality education and expert guidance."
  },
  {
    title: "Quick Links",
    links: [
      { text: "Home", href: "#home" },
      { text: "Courses", href: "#courses" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" }
    ]
  },
  {
    title: "Connect",
    links: [
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "LinkedIn", href: "#" },
      { text: "Instagram", href: "#" }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              {section.content && <p>{section.content}</p>}
              {section.links && (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 EduCenter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 