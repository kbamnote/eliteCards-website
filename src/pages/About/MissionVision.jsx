import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, PresentationControls, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import LazyInView from '../../components/ui/LazyInView'
import * as THREE from 'three'

function createCardTexture({ title = 'Elite Cards', subtitle = 'Tap • Share • Connect', centerTextLines, footer }) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 640 // ~1.6:1 ratio like a card
  const ctx = canvas.getContext('2d')

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  grad.addColorStop(0, '#0B0F1A')
  grad.addColorStop(1, '#11161C')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Subtle border
  ctx.strokeStyle = 'rgba(178, 236, 93, 0.2)'
  ctx.lineWidth = 8
  ctx.strokeRect(26, 26, canvas.width - 52, canvas.height - 52)

  // Accent bar and left-aligned title/subtitle when not centering
  if (!centerTextLines) {
    const accentGrad = ctx.createLinearGradient(0, 0, canvas.width, 0)
    accentGrad.addColorStop(0, 'rgba(178, 236, 93, 0.20)')
    accentGrad.addColorStop(1, 'rgba(178, 236, 93, 0.05)')
    ctx.fillStyle = accentGrad
    ctx.fillRect(26, 120, canvas.width - 52, 10)

    // Title
    ctx.fillStyle = '#E6EAF2'
    ctx.font = 'bold 72px Poppins, Inter, sans-serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'alphabetic'
    ctx.fillText(title, 60, 280)

    // Subtitle
    ctx.fillStyle = '#A3A9B3'
    ctx.font = '600 34px Inter, sans-serif'
    ctx.fillText(subtitle, 60, 340)

    // Optional footer (bottom-right)
    if (footer) {
      ctx.fillStyle = '#A3A9B3'
      let fontSize = 28
      const fontWeight = '500'
      const fontFamily = 'Inter, sans-serif'
      ctx.textAlign = 'right'
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
      const maxWidth = canvas.width - 160
      let measured = ctx.measureText(footer).width
      while (measured > maxWidth && fontSize > 18) {
        fontSize -= 2
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
        measured = ctx.measureText(footer).width
      }
      ctx.fillText(footer, canvas.width - 60, canvas.height - 90)
    }
  } else {
    const cx = canvas.width / 2
    const cy = canvas.height / 2
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const lineHeight = 72
    centerTextLines.forEach((line, i) => {
      const isPrimary = i === 0
      ctx.fillStyle = isPrimary ? '#E6EAF2' : '#A3A9B3'
      let fontSize = isPrimary ? 68 : 40
      const fontWeight = isPrimary ? 'bold' : '600'
      const fontFamily = 'Poppins, Inter, sans-serif'
      const maxWidth = canvas.width - 120
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
      let measured = ctx.measureText(line).width
      while (measured > maxWidth && fontSize > 24) {
        fontSize -= 2
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
        measured = ctx.measureText(line).width
      }
      const y = cy + (i - (centerTextLines.length - 1) / 2) * lineHeight
      ctx.fillText(line, cx, y)
    })
  }

  // NFC icon (simple waves)
  ctx.strokeStyle = 'rgba(178, 236, 93, 0.45)'
  ctx.lineWidth = 4
  const cx = canvas.width - 120
  const cy = 120
  for (let r = 16; r <= 48; r += 16) {
    ctx.beginPath()
    ctx.arc(cx, cy, r, -Math.PI / 3, Math.PI / 3)
    ctx.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.encoding = THREE.sRGBEncoding
  tex.anisotropy = 4
  tex.generateMipmaps = true
  return tex
}

function PremiumCard3D() {
  const group = useRef()
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(true)

  const frontTex = useMemo(() => createCardTexture({ title: 'Elite Cards', subtitle: 'Tap • Share • Connect', footer: 'NFC • QR • Smart Sharing' }), [])
  const backTex = useMemo(() => createCardTexture({ centerTextLines: ['Elite Cards Make Elite Connections'] }), [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    const targetY = flipped ? Math.PI : 0
    // Smoothly interpolate to target flip rotation
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY + (hovered ? 0 : Math.sin(t * 0.35) * 0.35), 0.08)
    // Gentle idle motion when not hovered
    if (!hovered) {
      group.current.rotation.x = Math.sin(t * 0.25) * 0.15
      group.current.position.y = Math.sin(t * 0.8) * 0.06
    }
  })

  return (
    <group ref={group} rotation-y={Math.PI} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={() => setFlipped((f) => !f)}>
      {/* Card */}
      <mesh castShadow receiveShadow>
        {/* 85.6 x 53.98 mm approx ratio */}
        <boxGeometry args={[1.8, 1.12, 0.04]} />
        {/* Front */}
        <meshPhysicalMaterial attach="material-0" map={frontTex} roughness={0.35} metalness={0.25} clearcoat={0.4} clearcoatRoughness={0.3} envMapIntensity={0.35} />
        <meshPhysicalMaterial attach="material-1" color="#11161C" roughness={0.6} metalness={0.1} />
        {/* Edge */}
        <meshPhysicalMaterial attach="material-2" color="#1A2028" roughness={0.7} metalness={0.2} />
        <meshPhysicalMaterial attach="material-3" color="#1A2028" roughness={0.7} metalness={0.2} />
        <meshPhysicalMaterial attach="material-4" color="#1A2028" roughness={0.7} metalness={0.2} />
        {/* Back */}
        <meshPhysicalMaterial attach="material-5" map={backTex} roughness={0.45} metalness={0.15} clearcoat={0.25} clearcoatRoughness={0.4} envMapIntensity={0.25} />
      </mesh>

      {/* Soft glow ring */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.68, 0]}>
        <ringGeometry args={[0.7, 1.3, 64]} />
        <meshBasicMaterial color="#B2EC5D" transparent opacity={0.08} />
      </mesh>
      {/* Premium shimmer */}
      <Sparkles count={40} scale={[2.4, 2.4, 2.4]} size={1.5} speed={0.2} opacity={0.25} color="#B2EC5D" />
    </group>
  )
}

function NFCWaves() {
  const rings = [useRef(), useRef(), useRef()]
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    rings.forEach((ref, i) => {
      const s = (t * 0.6 + i * 0.4) % 1
      if (!ref.current) return
      ref.current.scale.set(1 + s * 1.6, 1 + s * 1.6, 1)
      ref.current.material.opacity = 0.25 * (1 - s)
    })
  })
  const pos = [0.7, 0.55, 0] // top-right emission point near card
  return (
    <group>
      <mesh ref={rings[0]} position={pos} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.05, 0.09, 40]} />
        <meshBasicMaterial color="#B2EC5D" transparent opacity={0.2} />
      </mesh>
      <mesh ref={rings[1]} position={pos} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.05, 0.09, 40]} />
        <meshBasicMaterial color="#B2EC5D" transparent opacity={0.2} />
      </mesh>
      <mesh ref={rings[2]} position={pos} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.05, 0.09, 40]} />
        <meshBasicMaterial color="#B2EC5D" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Copy */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Mission & Vision</h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
            Our mission is to make meaningful connections effortless. We build modern, premium digital card
            experiences that are fast, reliable, and delightful—so your brand feels elevated at every touchpoint.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 border bg-[#0B0F1A]/70 backdrop-blur-md" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Design-first</div>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Calm motion, refined typography, and consistent theming that scales.
              </p>
            </div>
            <div className="rounded-2xl p-5 border bg-[#0B0F1A]/70 backdrop-blur-md" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Performance</div>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Built with efficiency, accessible by default, optimized across modern devices.
              </p>
            </div>
            <div className="rounded-2xl p-5 border bg-[#0B0F1A]/70 backdrop-blur-md" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Privacy</div>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Respectful data handling with clear controls and minimal tracking.
              </p>
            </div>
            <div className="rounded-2xl p-5 border bg-[#0B0F1A]/70 backdrop-blur-md" style={{ borderColor: 'var(--dark-jungle-green)' }}>
              <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Care</div>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                We iterate with intention and ship details that feel premium.
              </p>
            </div>
          </div>
        </div>

        {/* 3D element */}
        <LazyInView className="aspect-square rounded-2xl border" style={{ borderColor: 'var(--dark-jungle-green)' }}>
          <Canvas
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 0.8, 3.2], fov: 50 }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
          >
            <color attach="background" args={["#0B0F1A"]} />
            <ambientLight intensity={0.45} />
            <directionalLight position={[4, 5, 3]} intensity={1.2} castShadow />
            <directionalLight position={[-4, -3, -2]} intensity={0.5} />

            <PresentationControls global polar={[0, Math.PI / 6]} azimuth={[-Math.PI / 6, Math.PI / 6]} snap={true} speed={1.2}>
              <Suspense fallback={null}>
                <Environment preset="city" />
                <PremiumCard3D />
                <NFCWaves />
              </Suspense>
            </PresentationControls>

            <ContactShadows position={[0, -0.9, 0]} opacity={0.35} blur={2.5} far={3} />
            {/* Subtle postprocessing for premium finish */}
            <EffectComposer disableNormalPass>
              <Bloom intensity={0.25} luminanceThreshold={0.2} luminanceSaturation={0.9} mipmapBlur />
              <ChromaticAberration offset={[0.0008, 0.0008]} radialModulation={true} modulationOffset={0.5} />
              <Vignette eskil={false} offset={0.35} darkness={0.3} />
            </EffectComposer>
          </Canvas>
        </LazyInView>
      </div>
    </section>
  )
}