import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default Home