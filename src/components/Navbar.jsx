import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState('home')

  // mark the link of the section that is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className='fixed top-4 inset-x-4 z-50 flex justify-center'>
      <nav className='w-full max-w-3xl bg-surface/80 backdrop-blur-md border border-line rounded-2xl md:rounded-full px-5 py-3'>
        <div className='flex items-center justify-between'>
          <a href='#home' className='font-display font-bold text-lg'>
            Jaya<span className='text-accent'>.</span>
          </a>

          <div className='hidden md:flex items-center gap-1'>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active === l.id ? 'bg-accent text-bg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button className='md:hidden' aria-label='Toggle menu' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FaXmark className='text-xl' /> : <FaBars className='text-xl' />}
          </button>
        </div>

        {showMenu && (
          <div className='md:hidden mt-4 flex flex-col gap-1'>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setShowMenu(false)}
                className={`px-4 py-3 rounded-xl ${active === l.id ? 'bg-accent text-bg font-semibold' : 'text-slate-300'}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar