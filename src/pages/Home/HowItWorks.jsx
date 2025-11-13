import React from 'react'
import Scene from '../../components/threejs/Scene'

const steps = [
  {
    label: 'STEP 1',
    title: 'Order',
    desc: 'Select a card and add-ons. Complete the order process and payment.',
  },
  {
    label: 'STEP 2',
    title: 'Card Design',
    desc: 'Our designer will contact you after your order confirmation to discuss and finalize your card design.',
  },
  {
    label: 'STEP 3',
    title: 'Review',
    desc: 'Review the digital card design proof and provide feedback.',
  },
  {
    label: 'STEP 4',
    title: 'Print & Ship',
    desc: 'After approval we will program, produce and ship your card.',
  },
]

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--text-primary)]">How it works?</h2>

      {/* Visual area: themed container with 3D card */}
      <div className="mt-8 relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--india-green)] to-[var(--mango-green)] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition" />
        <div className="relative bg-gradient-to-br from-[var(--dark-jungle-green)]/70 to-[var(--rich-black)]/70 rounded-2xl p-4 border" style={{ borderColor: 'var(--dark-jungle-green)' }}>
          <Scene height={280} variant="silver" />
        </div>
      </div>

      {/* Steps */}
      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="group relative">
            {/* hover glow */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[var(--india-green)] to-[var(--mango-green)] opacity-0 group-hover:opacity-25 blur transition duration-300" />
            {/* card */}
            <div
              className="relative rounded-xl p-6 border bg-gradient-to-br from-[var(--rich-black)]/10 to-[var(--dark-jungle-green)]/10 transition-transform duration-300 ease-out transform group-hover:-translate-y-1 group-hover:scale-[1.02] hover:border-[var(--mango-green)] hover:shadow-lg"
              style={{ borderColor: 'var(--dark-jungle-green)' }}
            >
              <p className="text-xs tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--mango-green)]">{s.label}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks