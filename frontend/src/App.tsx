import {
  Navigation,
  Hero,
  Features,
  Courses,
  Teachers,
  Testimonials,
  CTA,
  FAQ,
  Footer
} from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Courses />
      <Teachers />
      <Features />
      {/* <Testimonials /> */}
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
