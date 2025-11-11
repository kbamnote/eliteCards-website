import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function ProductFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Product Features" />
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="glass p-6 rounded-xl h-40" />
        ))}
      </div>
    </section>
  )
}