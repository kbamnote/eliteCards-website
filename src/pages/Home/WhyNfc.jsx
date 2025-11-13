import React from 'react'

const GIF_URL = 'https://media.giphy.com/media/RBV67igNyGXT4fQdjx/giphy.gif'

function WhyNfc() {
  const audiences = [
    'Doctors & Healthcare Providers',
    'Photographers & Designers',
    'Tour Operators & Hotel Managers',
    'YouTubers, Influencers & Bloggers',
    'Trainers, Coaches & Educators',
    'Retailers & Small Business Owners',
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Why NFC Smart Business Cards Are Perfect for Events, Seminars & Business Networking ?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Whether you’re attending a conference, a trade show, or a networking event — our NFC smart business cards make
            sharing your information quick and effortless. Just tap your card on any smartphone, and your profile is shared instantly.
            No paper, no hassle, no chance of being forgotten.
          </p>
          <p className="mt-3 text-[var(--text-secondary)]">
            We craft smart visiting cards that are tailored to fit a wide range of professional needs. Every card is thoughtfully
            designed to reflect your brand and make a lasting impression. Our cards are designed for:
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">And Not Just for Events…</h3>
          <ul className="mt-3 space-y-2">
            {audiences.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--yellow-green)]" />
                <span className="text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-[var(--text-secondary)]">
            We create custom NFC visiting cards for all needs — whether you’re an entrepreneur, educator, artist, or executive.
          </p>

          <div className="mt-6">
            <a className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] hover:from-[var(--yellow-green)] hover:to-[var(--india-green)] text-[var(--rich-black)] font-semibold shadow-lg" href="#">
              Get Your Smart Card
            </a>
          </div>
        </div>

        {/* Right media (GIF) */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-[var(--india-green)]/20 to-[var(--yellow-green)]/20 rounded-2xl blur-lg" />
          <img
            src={GIF_URL}
            alt="NFC smart card demo"
            className="relative w-full h-full object-cover rounded-2xl border"
            style={{ borderColor: 'var(--dark-jungle-green)' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyNfc