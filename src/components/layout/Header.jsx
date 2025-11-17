import React, { useState, useEffect } from 'react'
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
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  
  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    
    // Initial check
    checkScreenSize()
    
    // Add resize listener
    const resizeHandler = () => {
      checkScreenSize()
      // Close mobile menu when resizing to large screen
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }
    
    window.addEventListener('resize', resizeHandler)
    
    // Cleanup
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass mx-auto max-w-7xl px-6 py-3 flex items-center justify-between relative">
        {/* Logo and text stacked vertically */}
        <NavLink to="/" className="flex flex-col items-center gap-1" aria-label="Elite Cards Home">
          <img src={logo} alt="Elite Cards Logo" className="h-8 w-auto" loading="eager" />
          <span className="text-sm font-bold tracking-tight text-center">
            Elite<span className="text-(--mango-green)">Cards</span>
          </span>
        </NavLink>
        
        {/* Desktop Navigation - visible on large screens */}
        {isLargeScreen && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-(--mango-green)' : 'text-(--text-secondary) hover:text-(--text-primary)'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
        
        {/* Mobile Hamburger Button - hidden on large screens */}
        {!isLargeScreen && (
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-(--text-primary)"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
        
        {/* Mobile Menu - hidden on large screens */}
        {open && !isLargeScreen && (
          <div className="absolute inset-x-0 top-full">
            <div className="mx-3 mt-2 rounded-xl px-4 py-3 border shadow-lg bg-(--rich-black)" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'text-(--mango-green)' : 'text-(--text-secondary) hover:text-(--text-primary)'
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