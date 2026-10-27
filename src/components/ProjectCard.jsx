import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// One wide project row. "number" is 01, 02 ...
const ProjectCard = ({ number, title, description, features = [], tech, demo, code }) => {
  return (
    <div className='group grid md:grid-cols-12 gap-6 bg-surface border border-line rounded-3xl p-6 md:p-10 hover:border-accent/60 transition duration-300'>
      <div className='md:col-span-2'>
        <span className='font-display text-5xl md:text-6xl font-extrabold text-line group-hover:text-accent/40 transition'>{number}</span>
      </div>

      <div className='md:col-span-6'>
        <h3 className='text-2xl font-bold mb-3'>{title}</h3>
        <p className='text-slate-400 leading-7 mb-6'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tech.map((t) => (
            <span key={t} className='px-3 py-1 rounded-md text-sm text-accent bg-accent/10 border border-accent/20'>{t}</span>
          ))}
        </div>
      </div>

      <div className='md:col-span-4 flex flex-col justify-between gap-6'>
        <ul className='space-y-2 text-sm text-slate-300'>
          {features.map((f) => (
            <li key={f} className='flex gap-2'>
              <span className='text-accent-2'>▹</span>{f}
            </li>
          ))}
        </ul>

        <div className='flex gap-4'>
          {demo ? (
            <a href={demo} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:opacity-90 transition'>
              <FaExternalLinkAlt /> Live Demo
            </a>
          ) : (
            <span className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-2 text-slate-500 text-sm cursor-not-allowed'>Demo soon</span>
          )}
          {code ? (
            <a href={code} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-sm font-semibold hover:border-accent hover:text-accent transition'>
              <FaGithub /> Code
            </a>
          ) : (
            <span className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-slate-500 text-sm cursor-not-allowed'><FaGithub /> Code</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard