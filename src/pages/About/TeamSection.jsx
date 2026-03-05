import React, { useMemo, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import LazyInView from '../../components/ui/LazyInView'
import { theme } from '../../styles/theme'

function createFaceTexture(member, isLogoFace = false) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1024
  const ctx = canvas.getContext('2d')

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
  grad.addColorStop(0, '#0B0F1A')
  grad.addColorStop(1, '#101317')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Border accent
  ctx.strokeStyle = theme.colors.mangoGreen || '#4ade80'
  ctx.lineWidth = 20
  ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80)

  const centerX = canvas.width / 2

  if (isLogoFace) {
    // Branding for Top/Bottom faces
    ctx.fillStyle = theme.colors.mangoGreen || '#4ade80'
    ctx.font = 'bold 120px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('ELITE', centerX, 500)
    ctx.fillStyle = '#ffffff'
    ctx.font = '60px sans-serif'
    ctx.fillText('ASSOCIATES', centerX, 600)
  } else {
    // Team Member Details
    const topY = 320
    const radius = 160
    ctx.fillStyle = '#1f2937'
    ctx.beginPath()
    ctx.arc(centerX, topY, radius, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 72px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(member?.name || '', centerX, 600)

    ctx.fillStyle = theme.colors.mangoGreen || '#4ade80'
    ctx.font = '600 42px sans-serif'
    ctx.fillText(member?.role || '', centerX, 670)

    ctx.fillStyle = '#9ca3af'
    ctx.font = '32px sans-serif'
    const text = member?.description || ''
    const words = text.split(' ')
    let line = ''
    let y = 760
    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' '
      if (ctx.measureText(testLine).width > 800 && n > 0) {
        ctx.fillText(line, centerX, y)
        line = words[n] + ' '
        y += 45
      } else {
        line = testLine
      }
    }
    ctx.fillText(line, centerX, y)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function RotatingCube({ team = [] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  const materials = useMemo(() => {
    // A Cube has 6 faces. We map your 4 members to the side faces.
    // Order in Three.js BoxGeometry: [Right, Left, Top, Bottom, Front, Back]
    return Array.from({ length: 6 }).map((_, i) => {
      let member = null;
      let isLogo = false;

      // Assigning members to the 4 vertical sides
      if (i === 0) member = team[0]; // Right
      else if (i === 1) member = team[1]; // Left
      else if (i === 4) member = team[2]; // Front
      else if (i === 5) member = team[3]; // Back
      else isLogo = true; // Top (2) and Bottom (3)

      const texture = createFaceTexture(member, isLogo)
      
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 1,
      })
    })
  }, [team])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    if (!hovered) {
      meshRef.current.rotation.y = t * 0.4
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.15
    }
  })

  return (
    <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <boxGeometry args={[2.2, 2.2, 2.2]} />
      {materials.map((mat, i) => (
        <primitive key={i} object={mat} attach={`material-${i}`} />
      ))}
    </mesh>
  )
}

export default function TeamSection({ team }) {
  const sampleTeam = [
    { name: 'Kunal Bamnote', role: 'Senior Frontend Developer', description: 'Design systems, motion, and premium UI polish.' },
    { name: 'Riya Pathak', role: 'HR Head', description: 'Customer journeys and data-driven improvements.' },
    { name: 'M. A. Siddique', role: 'Director & CEO', description: '12+ years building brands and digital experiences.' },
    { name: 'Himanshu Thakre', role: 'Senior Backend Developer', description: 'Performance-first engineering and creative 3D interactions.' },
  ]

  const finalTeam = team?.length ? team : sampleTeam

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-[#0B0F1A]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Our Team</h2>
        <div className="mt-4 h-1 w-20 bg-[#4ade80] mx-auto rounded-full"></div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl aspect-square relative">
          <LazyInView className="w-full h-full">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
              <ambientLight intensity={0.6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
              
              <Suspense fallback={null}>
                <Environment preset="city" />
                <RotatingCube team={finalTeam} />
                <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={10} blur={2.5} />
              </Suspense>
            </Canvas>
          </LazyInView>
        </div>
      </div>
    </section>
  )
} 