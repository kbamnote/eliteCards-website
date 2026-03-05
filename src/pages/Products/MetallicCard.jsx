import React, { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import premiumCardImg from '../../assets/MetalCard/met1.jpg'
import goldCardImg from '../../assets/MetalCard/met2.jpg'
import googleReviewImg from '../../assets/MetalCard/met3.jpg'
import EnquiryModal from '../../modal/EnquiryModal.jsx'

const products = [
  {
    title: "VIP Stainless Steel Metal Card",
    subtitle: "Laser-engraved stainless steel luxury card",
    img: premiumCardImg,
    category: "Metal",
    points: [
      "Premium stainless steel body",
      "Precision laser engraving",
      "NFC enabled smart sharing",
      "Scratch & water resistant",
      "Ultra-premium professional look"
    ]
  },
  {
    title: "Gold Finish Metal NFC Card",
    subtitle: "Luxury gold plated metal card",
    img: goldCardImg,
    category: "Metal",
    points: [
      "Gold plated premium finish",
      "NFC one-tap digital sharing",
      "Custom logo & name engraving",
      "High durability metal body",
      "Ideal for executives & founders"
    ]
  },
  {
    title: "Google Review Metal Card",
    subtitle: "Boost reviews with a premium metal touch",
    img: googleReviewImg,
    category: "Metal",
    points: [
      "Direct Google review tap",
      "Laser engraved branding",
      "NFC + QR support",
      "Heavy-duty metal construction",
      "Perfect for hotels & restaurants"
    ]
  }
];

export default function MetallicCard() {
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="Metallic Card Showcase"
        subtitle="Explore our best-selling metallic card options"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            onClick={() => setOpen(true)}
            key={p.title}
            className="glass rounded-2xl overflow-hidden flex flex-col shadow-lg transition hover:shadow-xl items-center"
          >

            {/* IMAGE */}
            <div className="w-full aspect-[4/3] bg-black/30 flex items-center justify-center">
              <img width={200}
                height={100}
                src={p.img}
                alt={p.title}
                // className="w-full h-full object-contain"
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
              {/* <div className="mt-4 flex gap-3">
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
              </div> */}
            </div>

          </div>
        ))}
      </div>
      <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}
