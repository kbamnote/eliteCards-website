import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import FeatureItem from '../../components/ui/FeatureItem.jsx'
import { Smartphone, Palette, Share2, Video, QrCode, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Responsive Everywhere',
    description: 'Optimized for mobile, tablet, and desktop to look perfect on all screens.'
  },
  {
    icon: Video,
    title: 'Hover Preview',
    description: 'Cards pan vertically on hover to showcase long, scrolling content elegantly.'
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Match your colors, fonts, and style to keep a consistent brand identity.'
  },
  {
    icon: QrCode,
    title: 'Share Instantly',
    description: 'Built-in QR support and easy links so clients can access your card fast.'
  },
  {
    icon: Share2,
    title: 'Social & Contact',
    description: 'Add socials, phone, email, and more to convert visitors into customers.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Fast',
    description: 'Modern stack and best practices for smooth performance and stability.'
  }
]

export default function TemplateFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Template Features" subtitle="What you get with every template" />
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  )
}