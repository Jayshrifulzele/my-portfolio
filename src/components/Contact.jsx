import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { socialLinks } from '../assets/assets'

const inputClass =
  'w-full px-4 py-3.5 rounded-lg bg-bg border border-line text-white placeholder:text-slate-600 focus:border-accent outline-none transition'

const Contact = () => {
  const [status, setStatus] = useState('') // '', 'sending', 'sent', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const f = new FormData(form)

    // Option 1: Formspree (message goes straight to your email)
    if (socialLinks.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(socialLinks.formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: f,
        })
        if (res.ok) {
          setStatus('sent')
          form.reset()
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    // Option 2 (fallback): open Gmail compose in a new tab
    const body = `Hi Jaya,\n\n${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}&su=${encodeURIComponent(f.get('subject') || 'Portfolio contact')}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const links = [
    { label: 'Email', value: socialLinks.email, icon: FaEnvelope, href: `mailto:${socialLinks.email}` },
    { label: 'GitHub', value: 'View my code', icon: FaGithub, href: socialLinks.github },
    { label: 'LinkedIn', value: 'Connect with me', icon: FaLinkedin, href: socialLinks.linkedin },
  ]

  return (
    <section id='contact' className='py-24 bg-bg'>
      <div className='container mx-auto px-6'>
        <p className='section-label'>04 / Contact</p>
        <h2 className='section-heading'>Let's work together</h2>

        <div className='grid md:grid-cols-12 gap-12 max-w-6xl'>
          {/* left */}
          <div className='md:col-span-5'>
            <p className='text-lg text-slate-400 leading-8 mb-8'>
              I'm a fresher looking for internship and full-time opportunities in Frontend and Full Stack Development. Have a project or an opening? Send me a message.
            </p>
            <div className='space-y-4'>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href || undefined}
                  target={l.label === 'Email' ? undefined : '_blank'}
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 bg-surface border border-line rounded-2xl p-4 hover:border-accent/60 transition group'
                >
                  <span className='w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl'><l.icon /></span>
                  <span className='flex-1 min-w-0'>
                    <span className='block font-semibold'>{l.label}</span>
                    <span className='block text-sm text-slate-500 truncate'>{l.value}</span>
                  </span>
                  <FaArrowUpRightFromSquare className='text-slate-600 group-hover:text-accent text-sm' />
                </a>
              ))}
            </div>
          </div>

          {/* right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.15 }}
            className='md:col-span-7 bg-surface border border-line rounded-3xl p-6 md:p-10 space-y-5'
          >
            <div className='grid sm:grid-cols-2 gap-5'>
              <input name='name' required type='text' placeholder='Your name' className={inputClass} />
              <input name='email' required type='email' placeholder='Your email' className={inputClass} />
            </div>
            <input name='subject' type='text' placeholder='Subject' className={inputClass} />
            <textarea name='message' required rows='6' placeholder='Your message' className={`${inputClass} resize-none`} />

            <button
              type='submit'
              disabled={status === 'sending'}
              className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-bg font-semibold hover:opacity-90 transition disabled:opacity-60'
            >
              <FaPaperPlane /> {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'sent' && <p className='text-green-400'>Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className='text-red-400'>Sorry, something went wrong. Please email me directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact