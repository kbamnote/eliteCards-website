import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

export default function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Our Location" subtitle="Find us on the map" />
      <div className="relative rounded-2xl overflow-hidden glass">
        <div className="absolute -inset-2 bg-gradient-to-br from-[var(--india-green)]/20 to-[var(--yellow-green)]/20 rounded-2xl blur-lg" />
        <div className="relative">
          <iframe
            title="Elite Associate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61428.24746656018!2d73.776869!3d18.564953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb0b7af3a6f%3A0x5bbf0e7e5cde5896!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}