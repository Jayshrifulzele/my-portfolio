import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'
import { education } from '../assets/assets'

const Education = () => {
  return (
    <section id='education' className='py-24 bg-surface'>
      <div className='container mx-auto px-6'>
        <p className='section-label'>03 / Education</p>
        <h2 className='section-heading'>Where I studied</h2>

        <div className='space-y-6 max-w-4xl'>
          {education.map((e) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className='flex flex-col sm:flex-row gap-6 sm:items-center bg-surface-2 border border-line rounded-3xl p-6 md:p-8 hover:border-accent/60 transition'
            >
              <div className='sm:w-32 shrink-0'>
                <p className='font-display text-4xl font-extrabold text-accent'>{e.year}</p>
                <p className='text-sm text-slate-500'>Passing year</p>
              </div>
              <div className='sm:border-l sm:border-line sm:pl-8'>
                <h3 className='text-xl font-bold flex items-center gap-3 mb-1'>
                  <FaGraduationCap className='text-accent-2' /> {e.degree}
                </h3>
                <p className='text-slate-300'>{e.college}</p>
                <p className='flex items-center gap-2 text-sm text-slate-500 mt-2'><FaMapMarkerAlt /> Nagpur, Maharashtra</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education