import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Contact Us" />
      <form className="grid md:grid-cols-2 gap-4 glass p-6 rounded-xl">
        <input className="bg-transparent border border-white/10 rounded p-2" placeholder="Name" />
        <input className="bg-transparent border border-white/10 rounded p-2" placeholder="Email" />
        <textarea className="md:col-span-2 bg-transparent border border-white/10 rounded p-2" placeholder="Message" rows="4" />
        <button className="px-4 py-2 bg-indigo-600 rounded">Send</button>
      </form>
    </section>
  )
}