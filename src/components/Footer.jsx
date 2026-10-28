import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 bg-surface border-t border-line'>
      <div className='container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-500'>
        <p className='font-display font-bold text-white'>Jaya<span className='text-accent'>.</span></p>
        <p>© {new Date().getFullYear()} Jayshri Fulzele. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer