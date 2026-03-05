import React from "react";
import { MapPin, Navigation } from "lucide-react";
import SectionTitle from "../../components/ui/SectionTitle.jsx";

export default function MapSection() {
  const address =
    "Mohota Complex, Katol Rd, Chhaoni, Nagpur, Maharashtra 440013";
  const encodedAddress = encodeURIComponent(address);

  const mapSource = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        title="Our Location"
        subtitle="Visit our office at Mohota Complex"
      />

      <div className="relative rounded-2xl overflow-hidden border border-black shadow-xl">
        {/* MAP */}
        <iframe
          title="Elite Associate Location"
          src={mapSource}
          width="100%"
          height="450"
          className="w-full grayscale-[0.2] contrast-110"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* LOCATION PIN ICON (CENTER) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-red-500/30 animate-ping"></span>

            {/* Pin */}
            <div className="relative bg-red-600 p-3 rounded-full shadow-xl">
              <MapPin className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        {/* BOTTOM INFO BAR */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20">
          <div className="flex items-start gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Mohota Complex</p>
              <p className="text-sm text-gray-300">
                Above SBI, Katol Road, Chhaoni, Nagpur – 440013
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}