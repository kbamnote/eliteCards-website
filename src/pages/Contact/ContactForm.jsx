import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle 
        title="Contact" 
        subtitle="Get in touch and send us a message" 
      />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-80">

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Office Address</h3>
                <p className="text-xs text-gray-400">
                  1st Floor Mohota Complex, Above State Bank Of India, Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-xs text-gray-400">
                  <a 
                    href="tel:+919999999999" 
                    className="hover:text-[var(--mango-green)]"
                  >
                    +91 9730893320
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-xs text-gray-400">
                  <a 
                    href="mailto:hello@eliteassociate.in" 
                    className="hover:text-[var(--mango-green)]"
                  >
                    eliteassociate3@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Business Hours</h3>
                <p className="text-xs text-gray-400">
                  Mon–Sat: 9:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Instagram</h3>
                <p className="text-xs text-gray-400">
                  <a 
                    href="https://www.instagram.com/elitedigitalcards/" 
                    className="hover:text-[var(--mango-green)]"
                  >
                    @elitedigitalcards
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-4 rounded-xl min-h-[100px]">
            <div className="flex items-start gap-3">
              <Facebook className="w-5 h-5 text-[var(--mango-green)] mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Facebook</h3>
                <p className="text-xs text-gray-400">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61584628592903&mibextid=ZbWKwL" 
                    className="hover:text-[var(--mango-green)]"
                  >
                    Elite Cards
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form (White Background Added Here) */}
        <div className="glass bg-white p-4 rounded-xl min-h-80 shadow-md-white">
          <form className="grid md:grid-cols-2 gap-3">

            <input
              className="border border-gray-300 rounded p-2 text-sm"
              placeholder="Name"
            />

            <input
              className="border border-gray-300 rounded p-2 text-sm"
              placeholder="Email"
              type="email"
            />

            <input
              className="border border-gray-300 rounded p-2 md:col-span-2 text-sm"
              placeholder="Phone"
              type="tel"
              inputMode="tel"
            />

            <textarea
              className="md:col-span-2 border border-gray-300 rounded p-2 text-sm"
              placeholder="Message"
              rows="3"
            />

            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] text-[var(--rich-black)] font-semibold text-sm"
            >
              Send
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}