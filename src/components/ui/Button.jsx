import React from 'react'

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}