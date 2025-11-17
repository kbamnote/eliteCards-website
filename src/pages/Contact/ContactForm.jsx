import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Contact" subtitle="Get in touch and send us a message" />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[440px]">
          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-sm text-gray-400">Elite Associate, Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-400">
                  <a href="tel:+919999999999" className="hover:text-[var(--mango-green)]">+91 99999 99999</a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-400">
                  <a href="mailto:hello@eliteassociate.in" className="hover:text-[var(--mango-green)]">hello@eliteassociate.in</a>
                </p>
              </div>
            </div>
          </div>
          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-sm text-gray-400">Mon–Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <Instagram className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-sm text-gray-400">
                  <a href="#" className="hover:text-[var(--mango-green)]">@eliteassociate</a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl min-h-[140px]">
            <div className="flex items-start gap-3">
              <Facebook className="w-6 h-6 text-[var(--mango-green)]" />
              <div>
                <h3 className="font-semibold">Facebook</h3>
                <p className="text-sm text-gray-400">
                  <a href="#" className="hover:text-[var(--mango-green)]">Elite Associate</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl min-h-[440px]">
          <form className="grid md:grid-cols-2 gap-4">
            <input className="bg-transparent border border-white/10 rounded p-2" placeholder="Name" />
            <input className="bg-transparent border border-white/10 rounded p-2" placeholder="Email" />
            <input className="bg-transparent border border-white/10 rounded p-2 md:col-span-2" placeholder="Phone" type="tel" inputMode="tel" />
            <textarea className="md:col-span-2 bg-transparent border border-white/10 rounded p-2" placeholder="Message" rows="4" />
            <button className="md:col-span-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] text-[var(--rich-black)] font-semibold">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}