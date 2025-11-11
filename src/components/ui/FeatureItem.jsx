import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass p-5 rounded-xl"
    >
      {Icon && <Icon className="w-6 h-6 text-indigo-400" />}
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </motion.div>
  )
}