import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

const quotes = [
  { text: 'Talk is cheap. Show me the code.', by: 'Linus Torvalds' },
  { text: 'First, solve the problem. Then, write the code.', by: 'John Johnson' },
  { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', by: 'Martin Fowler' },
  { text: 'Make it work, make it right, make it fast.', by: 'Kent Beck' },
  { text: 'Simplicity is the soul of efficiency.', by: 'Austin Freeman' },
  { text: 'Code is like humor. When you have to explain it, it is bad.', by: 'Cory House' },
  { text: 'Premature optimization is the root of all evil.', by: 'Donald Knuth' },
  { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', by: 'Harold Abelson' },
  { text: 'The best way to predict the future is to invent it.', by: 'Alan Kay' },
  { text: 'Learning never exhausts the mind.', by: 'Leonardo da Vinci' },
]

const Quotes = () => {
  const [i, setI] = useState(0)
  const next = () => setI((v) => (v + 1) % quotes.length)
  const prev = () => setI((v) => (v - 1 + quotes.length) % quotes.length)

  // change quote automatically every 6 seconds
  useEffect(() => {
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [i])

  return (
    <section id='quotes' className='py-24 bg-dark-100'>
      <div className='container mx-auto px-6'>
        <h2 className='section-title'>Words I Code By</h2>
        <div className='section-bar'></div>
        <p className='section-sub'>Inspiring quotes that guide my coding journey</p>

        <div className='flex items-center justify-center gap-4 md:gap-10'>
          <button onClick={prev} aria-label='Previous quote' className='hidden sm:flex w-14 h-14 shrink-0 rounded-full border-2 border-indigo-500 items-center justify-center text-indigo-400 hover:bg-indigo-500/10 transition'>
            <FaChevronLeft />
          </button>

          <div className='relative w-full max-w-3xl bg-dark-300 rounded-3xl overflow-hidden px-6 md:px-12 py-12 text-center min-h-72 flex flex-col items-center justify-center'>
            <div className='absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-pink'></div>
            <FaQuoteLeft className='text-4xl text-purple/70 mb-6' />
            <p key={i} className='text-xl md:text-2xl italic font-medium'>
              {quotes[i].text} <span className='whitespace-nowrap'>— {quotes[i].by}</span>
            </p>
            <span className='mt-8 px-5 py-1.5 rounded-full bg-dark-100/40 text-slate-400 text-sm'>
              {i + 1} / {quotes.length}
            </span>
          </div>

          <button onClick={next} aria-label='Next quote' className='hidden sm:flex w-14 h-14 shrink-0 rounded-full border-2 border-indigo-500 items-center justify-center text-indigo-400 hover:bg-indigo-500/10 transition'>
            <FaChevronRight />
          </button>
        </div>

        <div className='flex justify-center gap-3 mt-8'>
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition ${idx === i ? 'bg-purple scale-125' : 'bg-indigo-500/40 hover:bg-indigo-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes