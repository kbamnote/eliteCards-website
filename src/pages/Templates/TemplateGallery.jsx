import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

import hairDresserTemplate from '../../assets/hairDresserTemplate.webp'
import eventManagerTemplate from '../../assets/eventManagerTemplate.webp'
import doctorTemplate from '../../assets/doctorTemplate.webp'
import developerTemplate from '../../assets/developerTemplate.webp'
import lawyerTemplate from '../../assets/lawyerTemplate.webp'
import ceoTemplate from '../../assets/ceoTemplate.webp'
import musicianTemplate from '../../assets/musicianTemplate.webp'
import uiDesignerTemplate from '../../assets/uiDesignerTemplate.webp'
import taxiServicesTemplate from '../../assets/taxiServicesTemplate.webp'
import interiorDesignerTemplate from '../../assets/interiorDesignerTemplate.webp'
import handyManTemplate from '../../assets/handyManTemplate.webp'

const templates = [
  { name: 'Hair Dresser', src: hairDresserTemplate },
  { name: 'Event Manager', src: eventManagerTemplate },
  { name: 'Doctor', src: doctorTemplate },
  { name: 'Developer', src: developerTemplate },
  { name: 'Lawyer', src: lawyerTemplate },
  { name: 'CEO', src: ceoTemplate },
  { name: 'Musician', src: musicianTemplate },
  { name: 'UI Designer', src: uiDesignerTemplate },
  { name: 'Taxi Services', src: taxiServicesTemplate },
  { name: 'Interior Designer', src: interiorDesignerTemplate },
  { name: 'Handy Man', src: handyManTemplate }
]

export default function TemplateGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle title="Template Gallery" subtitle="Hover a card to preview with vertical pan" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((t) => (
          <div
            key={t.name}
            className="group glass rounded-2xl overflow-hidden relative h-[520px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-top transition-[background-position] duration-6500 ease-linear group-hover:bg-bottom"
              style={{ backgroundImage: `url(${t.src})` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/60 to-transparent">
              <h3 className="text-lg font-semibold tracking-wide">{t.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}