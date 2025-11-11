import React from 'react'
import Scene from '../../components/threejs/Scene'

function NFCCardShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="glass rounded-2xl p-4">
          <Scene height={360} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Interactive NFC Card</h3>
          <p className="mt-3 text-gray-300">
            Hover to rotate, subtle floating, and cinematic lighting. Designed for a modern tech brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NFCCardShowcase