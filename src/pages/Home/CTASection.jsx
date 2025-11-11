import React from 'react'
import { motion } from 'framer-motion'

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl p-10 bg-gradient-to-r from-violet-600/40 to-cyan-500/40 border border-white/10">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-semibold">
          Ready to build your premium NFC experience?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mt-2 text-gray-300">
          Start with templates or craft a bespoke design with interactive 3D.
        </motion.p>
        <div className="mt-6">
          <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20" href="#">Get Started</a>
        </div>
      </div>
    </section>
  )
}

export default CTASection