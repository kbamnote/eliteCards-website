import React from 'react'
import { theme } from '../../styles/theme'

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={0.9} color={theme.colors.accent} />
    </>
  )
}

export default Lighting