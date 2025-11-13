import React from 'react'

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-md bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] hover:from-[var(--yellow-green)] hover:to-[var(--india-green)] text-[var(--rich-black)] font-medium shadow-lg glow-neon transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}