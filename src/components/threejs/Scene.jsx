import React, { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import Lighting from './Lighting'
import Controls from './Controls'

const NFCCard3D = lazy(() => import('./NFCCard3D'))
const SilverCard3D = lazy(() => import('./SilverCard3D'))

function Scene({ height = 420, variant = 'gold' }) {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={[variant === 'silver' ? '#0A0E17' : '#0B0F1A']} />
        
        <Suspense fallback={null}>
          <Lighting />
          {/* Provide a robust HDR environment for metallic reflections */}
          <Environment preset="city" />
          <Stars 
            radius={50} 
            depth={60} 
            count={1500} 
            factor={4} 
            fade 
            speed={1} 
          />
          
          {variant === 'silver' ? <SilverCard3D /> : <NFCCard3D />}
          
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.22} 
              luminanceSmoothing={0.4} 
              intensity={variant === 'silver' ? 0.45 : 0.8} 
            />
            <Vignette 
              eskil={false} 
              offset={0.1} 
              darkness={0.6} 
            />
          </EffectComposer>
        </Suspense>
        
        <Controls />
      </Canvas>
    </div>
  )
}

export default Scene