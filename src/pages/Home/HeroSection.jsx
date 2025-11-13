import React from 'react'
import { motion } from 'framer-motion'
import Scene from '../../components/threejs/Scene'

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-b from-[var(--rich-black)] via-[var(--dark-jungle-green)]/20 to-[var(--rich-black)]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[var(--india-green)]/5 to-[var(--rich-black)]/60" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--india-green)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--yellow-green)]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Elite badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--india-green)]/20 to-[var(--yellow-green)]/20 border mb-6"
            style={{ borderColor: 'var(--india-green)' }}
          >
            <span className="w-2 h-2 bg-[var(--yellow-green)] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[var(--mango-green)]">Elite Collection 2025</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[var(--text-primary)] via-[var(--mango-green)]/40 to-[var(--yellow-green)]/40 bg-clip-text text-transparent">
            Modern Elite 3D NFC Cards
          </h1>
          
          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            Interactive, premium, and optimized for performance. Elevate your brand with futuristic design and cutting-edge technology.
          </p>
          
          {/* Feature highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--india-green)]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--mango-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">NFC Enabled</p>
                <p className="text-xs text-[var(--text-secondary)]">Instant connect</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--yellow-green)]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--yellow-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Premium Design</p>
                <p className="text-xs text-[var(--text-secondary)]">Limited edition</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] hover:from-[var(--yellow-green)] hover:to-[var(--india-green)] text-[var(--rich-black)] font-semibold transition shadow-lg" 
              style={{ boxShadow: '0 0 24px color-mix(in srgb, var(--neon-green) 40%, transparent)' }}
              href="#"
            >
              Get Started
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border text-[var(--text-primary)] font-semibold transition backdrop-blur-sm hover:bg-[var(--dark-jungle-green)]/10" 
              style={{ borderColor: 'var(--yellow-green)' }}
              href="#"
            >
              View Templates
            </motion.a>
          </div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">5K+</p>
              <p className="text-sm text-gray-400">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-sm text-gray-400">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9★</p>
              <p className="text-sm text-gray-400">Rating</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--india-green)]/20 to-[var(--yellow-green)]/20 rounded-3xl blur-2xl" />
          
          <div className="relative glass rounded-2xl p-6 border" style={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }}>
            <Scene height={420} />
            
            {/* Card info overlay */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[var(--text-secondary)]">Interactive 3D Model</span>
              <span className="text-[var(--yellow-green)] font-semibold">Drag to rotate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection