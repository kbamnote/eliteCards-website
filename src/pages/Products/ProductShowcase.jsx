import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import premiumCardImg from '../../assets/premiumCard.webp'
import goldCardImg from '../../assets/goldCard.webp'
import googleReviewImg from '../../assets/googleReview.webp'

const products = [
  {
    title: 'Premium Matt Card',
    subtitle: 'Elegant matte PVC with gold foil',
    img: premiumCardImg,
    points: ['NFC enabled', 'Mini website', 'Custom branding']
  },
  {
    title: 'VIP Metal Card',
    subtitle: 'Laser-engraved premium metal',
    img: goldCardImg,
    points: ['NFC enabled', 'Mini website', 'Premium finish']
  },
  {
    title: 'Google Review / Social Card',
    subtitle: 'Drive reviews and social engagement',
    img: googleReviewImg,
    points: ['UV print', 'NFC quick share', 'Full-color design']
  }
]

export default function ProductShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="Product Showcase"
        subtitle="Explore our best-selling NFC card options"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            className="glass rounded-2xl overflow-hidden flex flex-col shadow-lg transition hover:shadow-xl"
          >

            {/* IMAGE */}
            <div className="w-full aspect-[4/3] bg-black/30 flex items-center justify-center">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 bg-[rgba(0,0,0,0.4)] backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-300">{p.subtitle}</p>

              <ul className="space-y-2 mt-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[var(--yellow-green)]" />
                    <span className="text-gray-200">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-4 flex gap-3">
                <a
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] text-black font-semibold transition"
                  href="#"
                >
                  Buy Now
                </a>

                <a
                  className="px-4 py-2 rounded-xl border border-white/20 text-white transition hover:border-[var(--mango-green)]"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
