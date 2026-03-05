import React, { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle.jsx";
import premiumCardImg from "../../assets/nfcCard/nfc1.jpg";
import goldCardImg from "../../assets/NFCcard/nfc2.jpg";
import googleReviewImg from "../../assets/NFCcard/nfc3.jpg";
import EnquiryModal from "../../modal/EnquiryModal.jsx";

const products = [
  {
    title: "Premium NFC Business Card",
    subtitle: "Smart digital business card with modern design",
    img: premiumCardImg,
    category: "NFC",
    points: [
      "NFC-enabled one-tap sharing",
      "Digital business profile",
      "Custom branding & colors",
      "Works on Android & iPhone",
      "No app required",
    ],
  },
  {
    title: "Gold Finish NFC Card",
    subtitle: "Luxury gold design for premium networking",
    img: goldCardImg,
    category: "NFC",
    points: [
      "Premium gold finish",
      "Instant NFC sharing",
      "Professional digital profile",
      "High-quality durable PVC",
      "Perfect for executives",
    ],
  },
  {
    title: "Google Review NFC Card",
    subtitle: "Increase Google reviews instantly",
    img: googleReviewImg,
    category: "NFC",
    points: [
      "Direct Google review tap",
      "Boost customer engagement",
      "NFC + QR support",
      "Custom business branding",
      "Ideal for shops & restaurants",
    ],
  },
];

export default function NFCCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="NFC Card Showcase"
        subtitle="Explore our best-selling NFC card options"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            onClick={() => setOpen(true)}
            className="
              glass
              rounded-2xl
              overflow-hidden
              flex
              flex-col
              items-center
              border
              border-green-50
              shadow-lg
              transition
              hover:shadow-xl
            "
          >
            {/* IMAGE */}
            <div className="w-full aspect-[4/3] bg-black/30 flex items-center justify-center">
              <img
                src={p.img}
                alt={p.title}
                width={200}
                height={100}
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 bg-[rgba(0,0,0,0.4)] backdrop-blur-md w-full">
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
            </div>
          </div>
        ))}
      </div>

      <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}