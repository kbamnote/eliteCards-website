import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function TemplatePreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Preview" />
      <div className="glass rounded-xl h-64" />
    </section>
  )
}