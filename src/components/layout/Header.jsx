import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/templates', label: 'Templates' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Elite<span className="text-indigo-400">Cards</span>
        </NavLink>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-indigo-300' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}