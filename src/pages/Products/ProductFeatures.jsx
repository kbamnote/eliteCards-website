import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import FeatureItem from '../../components/ui/FeatureItem.jsx'
import { Nfc, ShieldCheck, Palette, Zap, Globe, Truck } from 'lucide-react'

const features = [
  {
    icon: Nfc,
    title: 'Tap to Share',
    description: 'Built-in NFC lets you share your profile instantly with a tap.'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Your logo, colors, and layout designed to match your brand.'
  },
  {
    icon: ShieldCheck,
    title: 'Durable Materials',
    description: 'Premium PVC and metal options built to last with daily use.'
  },
  {
    icon: Globe,
    title: 'Mini Website',
    description: 'Personal NFC website with 33+ templates you can switch anytime.'
  },
  {
    icon: Zap,
    title: 'Fast & Smooth',
    description: 'Optimized experience with modern stack and performance best practices.'
  },
  {
    icon: Truck,
    title: 'Quick Delivery',
    description: 'Streamlined production and shipping for rapid turnaround.'
  }
]

export default function ProductFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Product Features" subtitle="Everything included to make sharing effortless" />
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  )
}