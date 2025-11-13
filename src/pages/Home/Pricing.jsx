import React from 'react'
import premiumCardImg from '../../assets/premiumCard.webp'
import goldCardImg from '../../assets/goldCard.webp'
import googleReviewImg from '../../assets/googleReview.webp'

function PriceRow({
  title,
  subtitle,
  oldPrice,
  price,
  bullets,
  img,
  reversed = false,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className={`grid md:grid-cols-2 gap-10 items-start ${reversed ? 'md:grid-flow-dense' : ''}`}>
        {/* Left copy */}
        <div className={`${reversed ? 'md:order-2' : ''}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{subtitle}</p>
          )}

          <div className="mt-3 flex items-baseline gap-3">
            {oldPrice && (
              <span className="text-[var(--text-secondary)] line-through">₹ {oldPrice.toLocaleString('en-IN')}</span>
            )}
            <span className="text-2xl font-bold text-[var(--mango-green)]">₹ {price.toLocaleString('en-IN')}</span>
          </div>

          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--yellow-green)]" />
                <span className="text-[var(--text-secondary)]">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] hover:from-[var(--yellow-green)] hover:to-[var(--india-green)] text-[var(--rich-black)] font-semibold shadow-lg transition"
              href="#"
            >
              Create my Card
            </a>
            <a
              className="inline-flex items-center px-5 py-2.5 rounded-xl border hover:border-[var(--mango-green)] text-[var(--text-primary)] transition"
              style={{ borderColor: 'var(--dark-jungle-green)' }}
              href="#"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Right media */}
        <div className={`relative ${reversed ? 'md:order-1' : ''}`}>
          <div className="absolute -inset-2 bg-gradient-to-br from-[var(--india-green)]/20 to-[var(--yellow-green)]/20 rounded-2xl blur-lg" />
          <div className="relative rounded-2xl border overflow-hidden bg-[var(--rich-black)]/20" style={{ borderColor: 'var(--dark-jungle-green)' }}>
            <div className="aspect-[4/3] grid place-items-center">
              <img src={img} alt={title} className="relative w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Explore Our Digital Business Card Options
        </h2>
      </section>
      <PriceRow
        title="Premium Matt Card"
        subtitle="(Mini Website)"
        oldPrice={41999}
        price={1799}
        bullets={[
          'Premium black matte PVC with elegant gold foil printing.',
          'Built-in NFC — share your profile with just a tap, no apps needed.',
          'Personal NFC Website with 33 templates, fully customizable, switch anytime.',
        ]}
        img={premiumCardImg}
      />

      <PriceRow
        title="VIP Metal Card"
        subtitle="(Mini Website)"
        oldPrice={44999}
        price={3749}
        bullets={[
          'Premium metal with precision laser-engraved finish.',
          'Built-in NFC — share your profile with just a tap, no apps needed.',
          'Personal NFC Website with 33 templates, fully customizable, switch anytime.',
        ]}
        img={goldCardImg}
        reversed
      />

      <PriceRow
        title="Social Media or Google Review Card"
        oldPrice={4299}
        price={799}
        bullets={[
          'Full UV Printing on Premium PVC Material.',
          'Built-in NFC — share your social / Google Review with just a tap, no apps needed.',
          'Custom printed with your design and logo in full color, front and back.',
        ]}
        img={googleReviewImg}
      />
    </div>
  )
}

export default Pricing