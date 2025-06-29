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
import Enrollment from './pages/Enrollment'
import './App.css'

// Layout component that includes Navigation and Footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <Teachers />
      <Courses />
      <Features />
      {/* <Testimonials /> */}
      <CTA />
      <CallbackSection />
      <FAQ />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/course/beginner" element={
          <Layout>
            <BeginnerCourse />
          </Layout>
        } />
        <Route path="/course/advanced" element={
          <Layout>
            <AdvancedCourse />
          </Layout>
        } />
        <Route path="/enrollment" element={
          <Layout>
            <Enrollment />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
