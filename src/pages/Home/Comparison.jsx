import React from 'react'
import { CheckCircle } from 'lucide-react'

function Comparison() {
  const paperPoints = [
    'Easily Lost or Damaged',
    'You forget it.',
    'They lose your card.',
    'You print again and Again.',
    'You still look flustered.',
    'They barely remember you.',
    'Wasteful & Not Eco-Friendly',
    'Your info? Already outdated.',
    'No Updates Possible – Change your number? Reprint.',
  ]

  const smartPoints = [
    'You tap once.',
    "You’re remembered.",
    'You get their info, too.',
    'You look composed and professional.',
    'You update your profile anytime.',
    'Digital + QR Code works even with non-NFC phones',
    'Made with premium PVC/metal, waterproof & scratch-resistant',
    'One card replaces 1000s of paper cards',
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">Then vs Now</h2>
        <p className="mt-2 text-[var(--text-secondary)]">They thought you had it all under control. You made sure they were right.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Paper card (Then) */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[var(--rich-black)]/10 to-[var(--dark-jungle-green)]/10 border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Paper Business Card</h3>
          <ul className="space-y-3">
            {paperPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--dark-jungle-green)]/30">
                  <CheckCircle className="w-4 h-4 text-[var(--text-secondary)]" />
                </span>
                <span className="text-[var(--text-secondary)]">{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Smart card (Now) */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[var(--india-green)]/25 to-[var(--mango-green)]/25 border shadow-lg" style={{ borderColor: 'var(--india-green)' }}>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Smart Business Card</h3>
          <ul className="space-y-3">
            {smartPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[var(--india-green)] to-[var(--yellow-green)]">
                  <CheckCircle className="w-4 h-4 text-[var(--rich-black)]" />
                </span>
                <span className="text-[var(--text-primary)]">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <a className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] hover:from-[var(--yellow-green)] hover:to-[var(--india-green)] text-[var(--rich-black)] font-semibold transition shadow-lg" href="#">
          Get Your Smart Card
        </a>
        <p className="mt-3 text-sm text-[var(--text-secondary)]">100% Lifetime Guarantee</p>
      </div>
    </section>
  )
}

export default Comparison