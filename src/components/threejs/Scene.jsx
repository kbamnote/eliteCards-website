import React, { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing'
import Lighting from './Lighting'
import Controls from './Controls'

const NFCCard3D = lazy(() => import('./NFCCard3D'))

function Scene({ height = 420 }) {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 3.2], fov: 55 }}>
        <color attach="background" args={["#0B0F1A"]} />
        <Suspense fallback={null}>
          <Lighting />
          <Stars radius={50} depth={60} count={1200} factor={4} fade speed={1} />
          <NFCCard3D />
          <EffectComposer>
            <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.4} intensity={0.6} />
            <DepthOfField focusDistance={0.015} focalLength={0.02} bokehScale={2.4} />
            <Vignette eskil={false} offset={0.08} darkness={0.8} />
          </EffectComposer>
        </Suspense>
        <Controls />
      </Canvas>
    </div>
  )
}

export default Scene