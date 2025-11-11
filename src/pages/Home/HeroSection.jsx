import React from 'react'
import { motion } from 'framer-motion'
import Scene from '../../components/threejs/Scene'

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-500/5 to-black/60" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 mb-6"
          >
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-violet-300">Elite Collection 2025</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
            Modern Elite 3D NFC Cards
          </h1>
          
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
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
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">NFC Enabled</p>
                <p className="text-xs text-gray-400">Instant connect</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Premium Design</p>
                <p className="text-xs text-gray-400">Limited edition</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold transition shadow-lg shadow-violet-500/50" 
              href="#"
            >
              Get Started
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold transition backdrop-blur-sm" 
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
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
          
          <div className="relative glass rounded-2xl p-6 border border-white/10 shadow-2xl shadow-purple-500/20">
            <Scene height={420} />
            
            {/* Card info overlay */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-400">Interactive 3D Model</span>
              <span className="text-violet-400 font-semibold">Drag to rotate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection