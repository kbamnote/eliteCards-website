import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Mission & Vision" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl">Mission: Elevate brand presence.</div>
        <div className="glass p-6 rounded-xl">Vision: Seamless NFC-first future.</div>
      </div>
    </section>
  )
}