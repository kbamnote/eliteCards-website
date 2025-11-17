import React, { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

import hairDresserTemplate from '../../assets/hairDresserTemplate.png'
import eventManagerTemplate from '../../assets/eventManagerTemplate.png'
import doctorTemplate from '../../assets/doctorTemplate.png'
import developerTemplate from '../../assets/developerTemplate.png'
import lawyerTemplate from '../../assets/lawyerTemplate.png'
import ceoTemplate from '../../assets/ceoTemplate.png'
import musicianTemplate from '../../assets/musicianTemplate.png'
import uiDesignerTemplate from '../../assets/uiDesignerTemplate.png'
import taxiServicesTemplate from '../../assets/taxiServicesTemplate.png'
import interiorDesignerTemplate from '../../assets/interiorDesignerTemplate.png'
import handyManTemplate from '../../assets/handyManTemplate.png'

const templates = [
  { name: 'Developer', src: developerTemplate },
  { name: 'Hair Dresser', src: hairDresserTemplate },
  { name: 'Event Manager', src: eventManagerTemplate },
  { name: 'Doctor', src: doctorTemplate },
  { name: 'Lawyer', src: lawyerTemplate },
  { name: 'CEO', src: ceoTemplate },
  { name: 'Musician', src: musicianTemplate },
  { name: 'UI Designer', src: uiDesignerTemplate },
  { name: 'Taxi Services', src: taxiServicesTemplate },
  { name: 'Interior Designer', src: interiorDesignerTemplate },
  { name: 'Handy Man', src: handyManTemplate }
]

export default function TemplatePreview() {
  const [selected, setSelected] = useState(0)
  const current = templates[selected]

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Preview" subtitle="Pick a template to see a larger hover preview" />

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <div className="group glass rounded-2xl overflow-hidden relative h-[640px]">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-top transition-[background-position] duration-[8000ms] ease-linear group-hover:bg-bottom"
              style={{ backgroundImage: `url(${current.src})` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-wide">{current.name}</h3>
                <button className="px-4 py-2 rounded-lg bg-accent text-black font-semibold">Use Template</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {templates.slice(0, 6).map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setSelected(idx)}
              className={`w-full flex items-center gap-3 glass rounded-xl p-3 transition-colors ${
                selected === idx ? 'ring-2 ring-[var(--india-green)]' : ''
              }`}
            >
              <div
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${t.src})` }}
              />
              <div className="text-left">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">Hover large card to preview</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}