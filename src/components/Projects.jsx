import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../assets/assets'

const Projects = () => {
  return (
    <section id='projects' className='py-24 bg-bg'>
      <div className='container mx-auto px-6'>
        <p className='section-label'>02 / Projects</p>
        <h2 className='section-heading'>Things I've built</h2>

        <div className='space-y-8 max-w-6xl'>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <ProjectCard number={String(i + 1).padStart(2, '0')} {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects