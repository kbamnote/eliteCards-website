import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function SilverCard3D() {
  const groupRef = useRef()
  const glowRef = useRef()
  const sheenRef = useRef()
  const stripRef = useRef()
  const labelRef = useRef()
  const nfcOuterRef = useRef()
  const nfcInnerRef = useRef()
  const orbitLightRef = useRef()
  const flipRef = useRef(0)
  const [hovered, setHovered] = useState(false)

  // Environment reflections for metallic look
  // Environment is provided by Scene via <Environment preset="city" />

  // Procedural brushed metal texture (subtle horizontal lines)
  const brushedTex = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#c9cbcf'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for (let y = 0; y < canvas.height; y += 2) {
      const alpha = 0.06 + Math.sin(y * 0.05) * 0.04
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.fillRect(0, y, canvas.width, 1)
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.wrapS = THREE.RepeatWrapping
    tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(6, 6)
    tex.anisotropy = 8
    tex.needsUpdate = true
    return tex
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return

    const px = state.pointer.x
    const py = state.pointer.y

    // pointer-driven tilt with hover boost
    const targetRotX = py * 0.35 + (hovered ? Math.sin(t) * 0.06 : Math.sin(t * 0.4) * 0.03)
    const targetRotY = px * 0.45
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.12)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.12)
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06 + (hovered ? 0.03 : 0)

    // click flip impulse
    if (flipRef.current > 0) {
      groupRef.current.rotation.y += 0.25
      flipRef.current -= 0.25
    }

    // hover scale ease
    const targetScale = hovered ? 1.02 : 1
    groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, 1.15 * targetScale, 0.1)
    groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, 1 * targetScale, 0.1)

    // subtle pulsing of backdrop glow
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 1.6) * 0.025
      glowRef.current.scale.setScalar(s)
    }

    // sheen swipe across the card
    if (sheenRef.current) {
      sheenRef.current.position.x = Math.sin(t * 0.9) * 0.7
      sheenRef.current.rotation.z = Math.sin(t * 0.8) * 0.15
      sheenRef.current.material.opacity = hovered ? 0.08 : 0.06
    }

    // accent strip glint & parallax label
    if (stripRef.current) {
      stripRef.current.material.emissiveIntensity = 0.04 + Math.max(0, Math.sin(t * 2)) * 0.08
    }
    if (labelRef.current) {
      labelRef.current.position.x = THREE.MathUtils.lerp(labelRef.current.position.x, px * 0.12, 0.1)
      labelRef.current.position.y = THREE.MathUtils.lerp(labelRef.current.position.y, py * 0.08, 0.1)
    }

    // NFC icon micro motion
    if (nfcOuterRef.current) nfcOuterRef.current.rotation.z = Math.sin(t * 1.2) * 0.2
    if (nfcInnerRef.current) nfcInnerRef.current.rotation.z = -Math.sin(t * 1.3) * 0.25

    // orbiting sparkle light
    if (orbitLightRef.current) {
      orbitLightRef.current.position.x = Math.cos(t) * 1.5
      orbitLightRef.current.position.y = Math.sin(t * 1.2) * 1
      orbitLightRef.current.position.z = 0.6
      orbitLightRef.current.intensity = hovered ? 1 : 0.6
    }
  })

  return (
    <group ref={groupRef} scale={[1.15, 1, 1]} onPointerDown={() => { flipRef.current = Math.PI * 2 }}>
      {/* orbiting sparkle */}
      <pointLight ref={orbitLightRef} color="#cdd8ff" intensity={0.7} distance={4} />
      {/* cool backdrop glow */}
      <mesh ref={glowRef} position={[0, 0, -0.015]}>
        <boxGeometry args={[1.72, 1.08, 0.02]} />
        <meshBasicMaterial color="#9bb0ff" transparent opacity={0.18} />
      </mesh>

      {/* main silver card */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.6, 1, 0.08]} />
        <meshPhysicalMaterial
          color="#c4c6c9"
          roughness={0.22}
          metalness={1}
          reflectivity={0.95}
          clearcoat={0.9}
          clearcoatRoughness={0.18}
          envMapIntensity={1.1}
          map={brushedTex}
        />
      </mesh>

      {/* brushed accent strip */}
      <mesh position={[0, 0.34, 0.042]} castShadow ref={stripRef}>
        <boxGeometry args={[1.6, 0.14, 0.001]} />
        <meshPhysicalMaterial
          color="#d9d9d9"
          roughness={0.2}
          metalness={1}
          clearcoat={0.6}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* brand text */}
      <Text
        ref={labelRef}
        position={[0, 0.08, 0.042]}
        fontSize={0.12}
        color="#101317"
        anchorX="center"
        anchorY="middle"
      >
        Elite Cards
      </Text>

      {/* subtle NFC icon in cool gray */}
      <mesh position={[-0.5, -0.25, 0.041]} ref={nfcOuterRef}>
        <torusGeometry args={[0.09, 0.01, 16, 32]} />
        <meshBasicMaterial color="#8ca0b3" />
      </mesh>
      <mesh position={[-0.5, -0.25, 0.041]} ref={nfcInnerRef}>
        <torusGeometry args={[0.05, 0.01, 16, 32]} />
        <meshBasicMaterial color="#8ca0b3" />
      </mesh>

      {/* number blocks */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.1 + i * 0.15, -0.3, 0.041]}>
          <boxGeometry args={[0.1, 0.025, 0.001]} />
          <meshBasicMaterial color="#6b7280" />
        </mesh>
      ))}

      {/* moving sheen overlay */}
      <mesh ref={sheenRef} position={[0, 0, 0.043]}>
        <planeGeometry args={[0.7, 0.95]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </group>
  )
}

export default SilverCard3D