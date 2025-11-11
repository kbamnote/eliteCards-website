import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`glass rounded-xl p-6 ${className}`}>{children}</div>
  )
}