import React, { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle.jsx";

import hairDresserTemplate from "../../assets/hairDresserTemplate.webp";
import eventManagerTemplate from "../../assets/eventManagerTemplate.webp";
import doctorTemplate from "../../assets/doctorTemplate.webp";
import developerTemplate from "../../assets/developerTemplate.webp";
import lawyerTemplate from "../../assets/lawyerTemplate.webp";
import ceoTemplate from "../../assets/ceoTemplate.webp";
import musicianTemplate from "../../assets/musician.jpeg";
import uiDesignerTemplate from "../../assets/uiDesignerTemplate.webp";
import taxiServicesTemplate from "../../assets/taxiServicesTemplate.webp";
import interiorDesignerTemplate from "../../assets/interiorDesignerTemplate.webp";
import handyManTemplate from "../../assets/handyManTemplate.webp";
import directorTemplate from "../../assets/ss/sir.mp4";
import studTemplate from "../../assets/ss/stud.mp4";

const templates = [
  { name: "Developer", src: developerTemplate, type: "image" },
  { name: "Director", src: directorTemplate, type: "video" },
  { name: "Stud", src: studTemplate, type: "video" },
  { name: "Hair Dresser", src: hairDresserTemplate, type: "image" },
  { name: "Event Manager", src: eventManagerTemplate, type: "image" },
  { name: "Doctor", src: doctorTemplate, type: "image" },
  { name: "Lawyer", src: lawyerTemplate, type: "image" },
  { name: "CEO", src: ceoTemplate, type: "image" },
  { name: "Musician", src: musicianTemplate, type: "image" },
  { name: "UI Designer", src: uiDesignerTemplate, type: "image" },
  { name: "Taxi Services", src: taxiServicesTemplate, type: "image" },
  { name: "Interior Designer", src: interiorDesignerTemplate, type: "image" },
  { name: "Handy Man", src: handyManTemplate, type: "image" },
];

export default function TemplatePreview() {
  const [selected, setSelected] = useState(0);
  const current = templates[selected];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="Preview"
        subtitle="Pick a template to see a larger preview"
      />

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* LARGE PREVIEW */}
        <div className="lg:col-span-2">
          <div className="group glass rounded-2xl overflow-hidden relative h-[640px]">
            {current.type === "image" ? (
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-top transition-[background-position] duration-[8000ms] ease-linear group-hover:bg-bottom"
                style={{ backgroundImage: `url(${current.src})` }}
              />
            ) : (
              <video
                src={current.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-wide">
                  {current.name}
                </h3>
                <button className="px-4 py-2 rounded-lg bg-accent text-black font-semibold">
                  Use Template
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {templates.slice(0, 6).map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setSelected(idx)}
              className={`w-full flex items-center gap-3 glass rounded-xl p-3 transition ${
                selected === idx ? "ring-2 ring-[--india-green]" : ""
              }`}
            >
              {t.type === "image" ? (
                <div
                  className="w-16 h-16 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.src})` }}
                />
              ) : (
                <video
                  src={t.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}

              <div className="text-left">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">
                  Click to preview
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}