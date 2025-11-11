import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Shield } from 'lucide-react'

const features = [
  { icon: Cpu, title: '3D Performance', desc: 'Optimized rendering and lighting for smooth visuals.' },
  { icon: Zap, title: 'Immersive Motion', desc: 'Framer Motion animations for a premium experience.' },
  { icon: Shield, title: 'Secure NFC', desc: 'Modern NFC interactions with best practices.' },
]

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 hover:translate-y-[-2px] transition"
          >
            <f.icon className="w-8 h-8 text-cyan-300" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features