import React from 'react'
import { motion } from 'framer-motion'
import Scene from '../../components/threejs/Scene'

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/60" />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Modern 3D NFC Cards
          </h1>
          <p className="mt-4 text-gray-300">
            Interactive, premium, and optimized for performance. Elevate your brand with futuristic design.
          </p>
          <div className="mt-8 flex gap-4">
            <a className="px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition shadow-lg" href="#">Get Started</a>
            <a className="px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 transition" href="#">View Templates</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
          <div className="glass rounded-2xl p-4 neon">
            <Scene height={420} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection