import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import profile from '../assets/profile.jpeg'
import { socialLinks } from '../assets/assets'

const stats = [
  { value: '2', label: 'Projects built' },
  { value: 'B.Tech', label: 'Computer Science' },
  { value: '2025', label: 'Graduate' },
]

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center pt-28 pb-16 bg-bg relative overflow-hidden'>
      <div className='absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl'></div>

      <div className='container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative'>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='md:col-span-7'
        >
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface text-sm text-slate-300 mb-6'>
            <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
            Open to internships &amp; full-time roles
          </span>

          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4'>
            Hi, I'm <br />
            <span className='text-accent'>Jayshri Fulzele</span>
          </h1>
          <p className='font-display text-xl md:text-2xl text-slate-300 mb-5'>Frontend Developer</p>
          <p className='text-lg text-slate-400 max-w-xl mb-8 leading-8'>
            I turn ideas into clean, responsive web apps with React, JavaScript and Tailwind CSS. Fresh graduate, ready to learn fast and ship real work.
          </p>

          <div className='flex flex-wrap gap-4 mb-12'>
            <a href='#projects' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-accent text-bg hover:-translate-y-1 transition'>
              See my work <FaArrowRight className='text-sm' />
            </a>
            <a href={socialLinks.resume} download className='inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-line hover:border-accent hover:text-accent transition'>
              <FaDownload className='text-sm' /> Resume
            </a>
          </div>

          <div className='flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6'>
            {stats.map((s) => (
              <div key={s.label}>
                <p className='font-display text-2xl font-bold'>{s.value}</p>
                <p className='text-sm text-slate-500'>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='md:col-span-5 flex justify-center'
        >
          <div className='relative w-64 h-80 md:w-80 md:h-[26rem]'>
            <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-accent/50'></div>
            <img src={profile} alt='Jayshri Fulzele' className='relative w-full h-full object-cover rounded-[2rem]' />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -left-4 bottom-10 px-4 py-2 rounded-xl bg-surface border border-line text-sm font-semibold shadow-lg'
            >
              ⚛️ React Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero