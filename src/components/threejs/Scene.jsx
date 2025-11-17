import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import Lighting from './Lighting'
import Controls from './Controls'
import NFCCard3D from './NFCCard3D'
import SilverCard3D from './SilverCard3D'

function Scene({ height = 420, variant = 'gold' }) {
  const [showFullScene, setShowFullScene] = useState(false)
  
  // Progressive loading - show basic scene first, then add complex elements
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullScene(true)
    }, 100) // Small delay to allow initial render
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="w-full" style={{ height }}>
      <Canvas 
        shadows 
        dpr={[1, 1.5]} // Reduced DPR for better performance
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance" // Optimize for performance
        }}
      >
        {/* Updated background color to match brand theme */}
        <color attach="background" args={[variant === 'silver' ? '#0A0E17' : '#010B12']} />
        
        <Suspense fallback={null}>
          <Lighting />
          
          {/* Show stars immediately for visual feedback */}
          <Stars 
            radius={50} 
            depth={60} 
            count={500} // Reduced count for better performance
            factor={4} 
            fade 
            speed={1} 
          />
          
          {/* Progressive loading of complex elements */}
          {showFullScene && (
            <>
              {/* Load environment map after initial render */}
              <Environment preset="city" />
              
              {/* Main card - load after initial scene */}
              {variant === 'silver' ? <SilverCard3D /> : <NFCCard3D />}
              
              <EffectComposer>
                <Bloom 
                  luminanceThreshold={0.25} 
                  luminanceSmoothing={0.5} 
                  intensity={variant === 'silver' ? 0.4 : 0.6} // Reduced intensity for performance
                />
                <Vignette 
                  eskil={false} 
                  offset={0.1} 
                  darkness={0.5} // Reduced darkness for better performance
                />
              </EffectComposer>
            </>
          )}
        </Suspense>
        
        <Controls />
      </Canvas>
      
      {/* Loading indicator for better UX */}
      {!showFullScene && (
        <div className="absolute inset-0 flex items-center justify-center bg-(--rich-black)/50 rounded-2xl">
          <div className="w-8 h-8 border-4 border-(--mango-green) border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

export default Scene