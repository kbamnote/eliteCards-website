import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function NFCCard3D() {
  const groupRef = useRef()
  const glowRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return
    
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.08
    groupRef.current.rotation.y += hovered ? 0.018 : 0.008
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.03)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Glowing background layer */}
      <mesh ref={glowRef} position={[0, 0, -0.01]}>
        <boxGeometry args={[1.7, 1.05, 0.02]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Main card body */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.6, 1, 0.08]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.15}
          metalness={1}
        />
      </mesh>

      {/* Elite gold accent strip */}
      <mesh position={[0, 0.35, 0.041]} castShadow>
        <boxGeometry args={[1.6, 0.15, 0.001]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.1}
          emissive="#d4af37"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* "ELITE" text */}
      <mesh position={[-0.35, 0.35, 0.042]}>
        <boxGeometry args={[0.15, 0.05, 0.001]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.15, 0.35, 0.042]}>
        <boxGeometry args={[0.04, 0.05, 0.001]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0, 0.35, 0.042]}>
        <boxGeometry args={[0.05, 0.05, 0.001]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.35, 0.042]}>
        <boxGeometry args={[0.04, 0.05, 0.001]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, 0.35, 0.042]}>
        <boxGeometry args={[0.15, 0.05, 0.001]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* NFC Logo - outer ring */}
      <mesh position={[-0.5, -0.25, 0.041]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.09, 0.01, 16, 32]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      {/* NFC Logo - inner ring */}
      <mesh position={[-0.5, -0.25, 0.041]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.05, 0.01, 16, 32]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      
      {/* NFC waves */}
      <mesh position={[-0.36, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.03, 0.08, 0.001]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-0.32, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.03, 0.08, 0.001]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.45} />
      </mesh>
      <mesh position={[-0.28, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.03, 0.08, 0.001]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>

      {/* Card title - Elite Cards */}
      <Text
        position={[0, 0.1, 0.042]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        Elite Cards
      </Text>

      {/* Subtitle bar */}
      <mesh position={[0, -0.05, 0.041]}>
        <boxGeometry args={[0.8, 0.03, 0.001]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>

      {/* Card number dots */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.1 + i * 0.15, -0.3, 0.041]}>
          <boxGeometry args={[0.1, 0.025, 0.001]} />
          <meshBasicMaterial color="#6b7280" />
        </mesh>
      ))}

      {/* Holographic shine overlay */}
      <mesh position={[0, 0, 0.042]}>
        <planeGeometry args={[1.5, 0.9]} />
        <meshBasicMaterial
          transparent
          opacity={0.1}
          color="#8b5cf6"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back side visuals - simple */}
      {/* Magnetic strip */}
      <mesh position={[0, 0.28, -0.042]} castShadow>
        <boxGeometry args={[1.4, 0.14, 0.001]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Minimal label */}
      <Text
        position={[0, -0.30, -0.042]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.06}
        color="#6b7280"
        anchorX="center"
        anchorY="middle"
      >
        Elite Cards
      </Text>
    </group>
  )
}

export default NFCCard3D