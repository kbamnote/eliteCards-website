import React, { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import premiumCardImg from '../../assets/nfcCard/nfc1.jpg'
import vip1 from '../../assets/Vipcard/vip1.jpg'
import vip2 from '../../assets/Vipcard/vip2.jpg'
import vip3 from '../../assets/Vipcard/vip3.jpg'
import vip4 from '../../assets/Vipcard/vip4.jpg'
import vip5 from '../../assets/Vipcard/vip5.jpg'
import vip6 from '../../assets/Vipcard/vip6.jpg'
import EnquiryModal from '../../modal/EnquiryModal.jsx'

const products = [
  {
    title: "VIP Metal NFC Card",
    subtitle: "Luxury stainless steel with laser engraving",
    img: vip1,
    category: "VIP",
    points: [
      "Premium metal body",
      "Laser engraved branding",
      "NFC one-tap sharing",
      "Scratch & water resistant",
      "Unlimited profile updates"
    ]
  },
  {
    title: "VIP Black Edition Card",
    subtitle: "Matte black finish with gold detailing",
    img: vip2,
    category: "VIP",
    points: [
      "Matte black premium finish",
      "Gold foil highlights",
      "Instant NFC access",
      "High durability coating",
      "Modern luxury design"
    ]
  },
  {
    title: "VIP Executive Card",
    subtitle: "Designed for founders & executives",
    img: vip3,
    category: "VIP",
    points: [
      "Professional executive look",
      "Custom name & logo engraving",
      "NFC smart connectivity",
      "Minimal luxury aesthetic",
      "Perfect for corporate networking"
    ]
  },
  {
    title: "VIP Google Review Card",
    subtitle: "Boost reviews with a premium touch",
    img: vip4,
    category: "VIP",
    points: [
      "Direct Google review tap",
      "Premium metal or PVC finish",
      "NFC enabled smart sharing",
      "Increases customer reviews",
      "Elegant business utility"
    ]
  },
  {
    title: "VIP Social Media Card",
    subtitle: "All your social links in one tap",
    img: vip5,
    category: "VIP",
    points: [
      "Instagram, WhatsApp, LinkedIn",
      "One-tap NFC sharing",
      "Fully customizable links",
      "Premium visual design",
      "Perfect for influencers"
    ]
  },
  {
    title: "Custom VIP Signature Card",
    subtitle: "Fully personalized luxury card",
    img: vip6,
    category: "VIP",
    points: [
      "Custom design & color",
      "Personal branding focused",
      "High-quality premium finish",
      "NFC enabled smart card",
      "Made to order VIP product"
    ]
  }
];

export default function VipCard() {
    const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="VIP Card Showcase"
        subtitle="Explore our best-selling VIP card options"
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
