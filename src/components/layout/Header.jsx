import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/templates', label: 'Templates' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass mx-auto max-w-7xl px-6 py-3 flex items-center justify-between relative">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Elite Cards" className="h-8 w-auto" loading="lazy" />
          <span className="text-xl font-bold tracking-tight">
            Elite<span className="text-[var(--mango-green)]">Cards</span>
          </span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-[var(--mango-green)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--text-primary)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {open && (
          <div className="md:hidden absolute inset-x-0 top-full">
            <div className="mx-3 mt-2 rounded-xl px-4 py-3 border shadow-lg bg-[var(--rich-black)]" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'text-[var(--mango-green)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}