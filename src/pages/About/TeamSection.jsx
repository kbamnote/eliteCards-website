import React, { useMemo, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import LazyInView from '../../components/ui/LazyInView'
import { theme } from '../../styles/theme'

function createFaceTexture(member) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1024
  const ctx = canvas.getContext('2d')

  // Background: soft matte with subtle gradient aligned to theme
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
  grad.addColorStop(0, '#0B0F1A')
  grad.addColorStop(1, '#101317')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Border accent
  ctx.strokeStyle = theme.colors.mangoGreen
  ctx.lineWidth = 10
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60)

  // Profile image circle
  const centerX = canvas.width / 2
  const topY = 300
  const radius = 140
  // Circle backdrop
  ctx.fillStyle = '#1f2937'
  ctx.beginPath()
  ctx.arc(centerX, topY, radius, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()

  // Draw image if provided
  if (member?.image) {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      // Clip to circle
      ctx.save()
      ctx.beginPath()
      ctx.arc(centerX, topY, radius, 0, Math.PI * 2)
      ctx.closePath()
      ctx.clip()
      const size = radius * 2
      ctx.drawImage(img, centerX - radius, topY - radius, size, size)
      ctx.restore()
      tex.needsUpdate = true
    }
    img.src = member.image
  }

  // Name
  ctx.fillStyle = theme.colors.textPrimary
  ctx.font = 'bold 64px Poppins, Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(member?.name || 'Team Member', centerX, 560)

  // Role
  ctx.fillStyle = theme.colors.mangoGreen
  ctx.font = '600 36px Inter, sans-serif'
  ctx.fillText(member?.role || 'Role', centerX, 620)

  // Description
  ctx.fillStyle = theme.colors.textSecondary
  ctx.font = '28px Inter, sans-serif'
  const text = (member?.description || 'Experienced professional focused on design, tech, and customer success.').slice(0, 180)
  // Wrap simple
  const lines = []
  const words = text.split(' ')
  let line = ''
  for (const w of words) {
    const test = `${line}${w} `
    if (ctx.measureText(test).width < canvas.width - 160) {
      line = test
    } else {
      lines.push(line.trim())
      line = `${w} `
    }
  }
  if (line) lines.push(line.trim())
  lines.slice(0, 4).forEach((l, i) => {
    ctx.fillText(l, centerX, 700 + i * 40)
  })

  const tex = new THREE.CanvasTexture(canvas)
  tex.encoding = THREE.sRGBEncoding
  tex.anisotropy = 4
  tex.generateMipmaps = true
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  return tex
}

function RotatingCube({ team = [] }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  const materials = useMemo(() => {
    const faces = Array.from({ length: 6 }).map((_, i) => createFaceTexture(team[i % team.length] || {}))
    return faces.map((mapTex) => new THREE.MeshPhysicalMaterial({
      map: mapTex,
      roughness: 0.45,
      metalness: 0.2,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
      envMapIntensity: 0.25,
    }))
  }, [team])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    if (!hovered) {
      groupRef.current.rotation.y = t * 0.35
      groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.2
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        {materials.map((m, i) => (
          <meshPhysicalMaterial key={i} attach={`material-${i}`} {...m} />
        ))}
      </mesh>
    </group>
  )
}

export default function TeamSection({ team }) {
  const sampleTeam = [
    { name: 'Ava Martins', role: 'Founder & CEO', description: '12+ years building brands and digital experiences.' },
    { name: 'Liam Patel', role: 'CTO', description: 'Performance-first engineering and creative 3D interactions.' },
    { name: 'Noah Khan', role: 'Design Lead', description: 'Design systems, motion, and premium UI polish.' },
    { name: 'Mia Gupta', role: 'Product', description: 'Customer journeys and data-driven improvements.' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Our Team</h2>
      <p className="mt-2 text-center text-[var(--text-secondary)]">Premium rotating cube showcasing key members</p>
      <div className="mt-8 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <LazyInView className="aspect-square rounded-2xl border" style={{ borderColor: 'var(--dark-jungle-green)' }}>
            <Canvas
              shadows
              dpr={[1, 1.5]}
              camera={{ position: [0, 0, 4], fov: 50 }}
              gl={{ antialias: true, powerPreference: 'high-performance' }}
            >
              <color attach="background" args={["#0B0F1A"]} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1.1} castShadow />
              <directionalLight position={[-5, -3, -2]} intensity={0.6} />

              <Suspense fallback={null}>
                <Environment preset="city" />
                <RotatingCube team={team?.length ? team : sampleTeam} />
              </Suspense>
            </Canvas>
          </LazyInView>
        </div>
      </div>
    </section>
  )
}