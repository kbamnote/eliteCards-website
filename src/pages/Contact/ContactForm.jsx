import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Contact" subtitle="Get in touch and send us a message" />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-80">
          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Office Address</h3>
                <p className="text-xs text-gray-400">Elite Associate, Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-xs text-gray-400">
                  <a href="tel:+919999999999" className="hover:text-(--mango-green)">+91 99999 99999</a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-xs text-gray-400">
                  <a href="mailto:hello@eliteassociate.in" className="hover:text-(--mango-green)">hello@eliteassociate.in</a>
                </p>
              </div>
            </div>
          </div>
          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Business Hours</h3>
                <p className="text-xs text-gray-400">Mon–Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Instagram</h3>
                <p className="text-xs text-gray-400">
                  <a href="#" className="hover:text-(--mango-green)">@eliteassociate</a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Facebook className="w-5 h-5 text-(--mango-green) mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Facebook</h3>
                <p className="text-xs text-gray-400">
                  <a href="#" className="hover:text-(--mango-green)">Elite Associate</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-4 rounded-xl min-h-80">
          <form className="grid md:grid-cols-2 gap-3">
            <input className="bg-transparent border border-white/10 rounded p-2 text-sm" placeholder="Name" />
            <input className="bg-transparent border border-white/10 rounded p-2 text-sm" placeholder="Email" />
            <input className="bg-transparent border border-white/10 rounded p-2 md:col-span-2 text-sm" placeholder="Phone" type="tel" inputMode="tel" />
            <textarea className="md:col-span-2 bg-transparent border border-white/10 rounded p-2 text-sm" placeholder="Message" rows="3" />
            <button className="md:col-span-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-linear-to-r from-(--mango-green) to-(--india-green) text-(--rich-black) font-semibold text-sm">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}