import React from "react";
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
  { name: "Hair Dresser", src: hairDresserTemplate, type: "image" },
  { name: "Director", src: directorTemplate, type: "video" },
  { name: "Stud", src: studTemplate, type: "video" },
  { name: "Event Manager", src: eventManagerTemplate, type: "image" },
  { name: "Doctor", src: doctorTemplate, type: "image" },
  { name: "Developer", src: developerTemplate, type: "image" },
  { name: "Lawyer", src: lawyerTemplate, type: "image" },
  { name: "CEO", src: ceoTemplate, type: "image" },
  { name: "Musician", src: musicianTemplate, type: "image" },
  { name: "UI Designer", src: uiDesignerTemplate, type: "image" },
  { name: "Taxi Services", src: taxiServicesTemplate, type: "image" },
  { name: "Interior Designer", src: interiorDesignerTemplate, type: "image" },
  { name: "Handy Man", src: handyManTemplate, type: "image" },
];

export default function TemplateGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="Template Gallery"
        subtitle="Hover a card to preview with vertical pan / video"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((t) => (
          <div
            key={t.name}
            className="group glass rounded-2xl overflow-hidden relative h-[520px]"
          >
            {/* IMAGE */}
            {t.type === "image" && (
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-top transition-[background-position] duration-[6500ms] ease-linear group-hover:bg-bottom"
                style={{ backgroundImage: `url(${t.src})` }}
              />
            )}

            {/* VIDEO */}
            {t.type === "video" && (
              <video
                src={t.src}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            )}

            {/* TITLE OVERLAY */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-lg font-semibold tracking-wide">
                {t.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}