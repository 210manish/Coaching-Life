import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navigation,
  Hero,
  Features,
  Courses,
  Teachers,
  // Testimonials,
  CTA,
  FAQ,
  CallbackSection,
  Footer
} from './components'
import BeginnerCourse from './pages/BeginnerCourse'
import AdvancedCourse from './pages/AdvancedCourse'
import './App.css'

function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Teachers />
      <Courses />
      <Features />
      {/* <Testimonials /> */}
      <CTA />
      <CallbackSection />
      <FAQ />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/beginner" element={<BeginnerCourse />} />
        <Route path="/course/advanced" element={<AdvancedCourse />} />
      </Routes>
    </Router>
  )
}

export default App
