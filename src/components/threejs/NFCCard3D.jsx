import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function NFCCard3D() {
  const groupRef = useRef()
  const glowRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Memoize geometry creation to prevent recreation on each render
  const geometries = useMemo(() => ({
    card: new THREE.BoxGeometry(1.6, 1, 0.08),
    glow: new THREE.BoxGeometry(1.7, 1.05, 0.02),
    strip: new THREE.BoxGeometry(1.6, 0.15, 0.001),
    text: new THREE.BoxGeometry(0.15, 0.05, 0.001),
    smallText: new THREE.BoxGeometry(0.04, 0.05, 0.001),
    nfcRing: new THREE.TorusGeometry(0.09, 0.01, 16, 32), // Reduced segments for performance
    nfcInnerRing: new THREE.TorusGeometry(0.05, 0.01, 16, 32), // Reduced segments for performance
    nfcWave: new THREE.BoxGeometry(0.03, 0.08, 0.001),
    subtitle: new THREE.BoxGeometry(0.8, 0.03, 0.001),
    dot: new THREE.BoxGeometry(0.1, 0.025, 0.001),
    plane: new THREE.PlaneGeometry(1.5, 0.9),
    magnetic: new THREE.BoxGeometry(1.4, 0.14, 0.001)
  }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return
    
    // Optimize animation calculations
    const sinT = Math.sin(t * 0.3)
    const sinT2 = Math.sin(t * 0.8)
    const sinT3 = Math.sin(t * 2)
    
    groupRef.current.rotation.x = sinT * 0.08
    groupRef.current.rotation.y += hovered ? 0.018 : 0.008
    groupRef.current.position.y = sinT2 * 0.05
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + sinT3 * 0.03)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Glowing background layer with brand colors */}
      <mesh ref={glowRef} position={[0, 0, -0.01]}>
        <primitive object={geometries.glow} />
        <meshBasicMaterial
          color="#0C8900"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Main card body with brand theme */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={geometries.card} />
        <meshStandardMaterial
          color="#1E1F21"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Elite accent strip with brand accent color */}
      <mesh position={[0, 0.35, 0.041]} castShadow>
        <primitive object={geometries.strip} />
        <meshStandardMaterial
          color="#9CFF00"
          metalness={0.9}
          roughness={0.1}
          emissive="#9CFF00"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* "ELITE" text with brand colors */}
      <mesh position={[-0.35, 0.35, 0.042]}>
        <primitive object={geometries.text} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      <mesh position={[-0.15, 0.35, 0.042]}>
        <primitive object={geometries.smallText} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      <mesh position={[0, 0.35, 0.042]}>
        <primitive object={geometries.smallText} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      <mesh position={[0.15, 0.35, 0.042]}>
        <primitive object={geometries.smallText} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      <mesh position={[0.3, 0.35, 0.042]}>
        <primitive object={geometries.text} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>

      {/* NFC Logo with brand accent color */}
      <mesh position={[-0.5, -0.25, 0.041]} rotation={[0, 0, 0]}>
        <primitive object={geometries.nfcRing} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      {/* NFC Logo - inner ring */}
      <mesh position={[-0.5, -0.25, 0.041]} rotation={[0, 0, 0]}>
        <primitive object={geometries.nfcInnerRing} />
        <meshBasicMaterial color="#9CFF00" />
      </mesh>
      
      {/* NFC waves with brand accent */}
      <mesh position={[-0.36, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <primitive object={geometries.nfcWave} />
        <meshBasicMaterial color="#9CFF00" transparent opacity={0.7} />
      </mesh>
      <mesh position={[-0.32, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <primitive object={geometries.nfcWave} />
        <meshBasicMaterial color="#9CFF00" transparent opacity={0.5} />
      </mesh>
      <mesh position={[-0.28, -0.25, 0.041]} rotation={[0, 0, Math.PI / 4]}>
        <primitive object={geometries.nfcWave} />
        <meshBasicMaterial color="#9CFF00" transparent opacity={0.3} />
      </mesh>

      {/* Card title - Elite Cards with brand colors */}
      <Text
        position={[0, 0.1, 0.042]}
        fontSize={0.12}
        color="#E0E0E0"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#010B12"
      >
        Elite Cards
      </Text>

      {/* Subtitle bar with brand secondary color */}
      <mesh position={[0, -0.05, 0.041]}>
        <primitive object={geometries.subtitle} />
        <meshBasicMaterial color="#2BC20E" />
      </mesh>

      {/* Card number dots with brand text secondary */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.1 + i * 0.15, -0.3, 0.041]}>
          <primitive object={geometries.dot} />
          <meshBasicMaterial color="#A0A0A0" />
        </mesh>
      ))}

      {/* Holographic shine overlay with brand accent */}
      <mesh position={[0, 0, 0.042]}>
        <primitive object={geometries.plane} />
        <meshBasicMaterial
          transparent
          opacity={0.15}
          color="#9CFF00"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back side visuals - simple */}
      {/* Magnetic strip */}
      <mesh position={[0, 0.28, -0.042]} castShadow>
        <primitive object={geometries.magnetic} />
        <meshStandardMaterial color="#010B12" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Minimal label */}
      <Text
        position={[0, -0.30, -0.042]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.06}
        color="#A0A0A0"
        anchorX="center"
        anchorY="middle"
      >
        Elite Cards
      </Text>
    </group>
  )
}

export default NFCCard3D