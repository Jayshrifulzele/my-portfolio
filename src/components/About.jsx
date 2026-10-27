import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
import { skills, socialLinks } from '../assets/assets'

const About = () => {
  return (
    <section id='about' className='py-24 bg-surface'>
      <div className='container mx-auto px-6'>
        <p className='section-label'>01 / About</p>
        <h2 className='section-heading'>A little about me</h2>

        <div className='grid md:grid-cols-12 gap-12'>
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className='md:col-span-5'
          >
            <p className='text-lg text-slate-300 leading-8 mb-5'>
              I'm a frontend developer who loves turning designs into smooth, responsive websites. I'm now growing into full stack by learning Node.js and databases.
            </p>
            <p className='text-slate-400 leading-8 mb-8'>
              I built an Employee Management System with login, task assignment and admin/employee views, and a Food Delivery Web Application. I finished my B.Tech in Computer Science &amp; Engineering in 2025 and I'm looking for my first role.
            </p>

            <div className='space-y-4 bg-surface-2 border border-line rounded-2xl p-6'>
              <p className='flex items-center gap-3 text-slate-300'><FaMapMarkerAlt className='text-accent' /> Nagpur, Maharashtra</p>
              <p className='flex items-center gap-3 text-slate-300'>
                <FaEnvelope className='text-accent' />
                <a href={`mailto:${socialLinks.email}`} className='hover:text-accent break-all'>{socialLinks.email}</a>
              </p>
              <p className='flex items-center gap-3 text-slate-300'><FaGraduationCap className='text-accent' /> B.Tech CSE, 2025</p>
            </div>
          </motion.div>

          {/* right: skills grouped */}
          <div className='md:col-span-7 grid sm:grid-cols-2 gap-5 content-start'>
            {skills.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className='bg-surface-2 border border-line rounded-2xl p-6 hover:border-accent/60 transition'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <group.icon className='text-accent text-xl' />
                  <h3 className='font-semibold'>{group.title}</h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {group.tags.map((t) => (
                    <span key={t} className='px-3 py-1 rounded-md text-sm bg-bg text-slate-300 border border-line'>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About