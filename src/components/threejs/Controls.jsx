import React from 'react'
import { OrbitControls } from '@react-three/drei'

function Controls() {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
    />
  )
}

export default Controls