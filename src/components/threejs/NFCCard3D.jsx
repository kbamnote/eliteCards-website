import React, { useRef, useState } from 'react'
import { RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { theme } from '../../styles/theme'

function NFCCard3D() {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    ref.current.rotation.x = Math.sin(t / 2) * 0.06
    ref.current.rotation.y += hovered ? 0.015 : 0.006
    ref.current.position.y = Math.sin(t) * 0.04
  })

  return (
    <group>
      <RoundedBox
        ref={ref}
        args={[1.6, 1, 0.08]}
        radius={0.08}
        smoothness={6}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshPhysicalMaterial
          color={theme.colors.primary}
          roughness={0.15}
          metalness={0.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>
    </group>
  )
}

export default NFCCard3D