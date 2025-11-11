import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function ProductShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Product Showcase" />
      <div className="glass rounded-xl h-64" />
    </section>
  )
}