import { useState, useEffect } from 'react'

// Hook to preload 3D assets and show loading progress
export const use3DPreloader = (assets = []) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (assets.length === 0) {
      setLoading(false)
      return
    }
    
    let loadedCount = 0
    const totalAssets = assets.length
    
    const updateProgress = () => {
      loadedCount++
      const newProgress = Math.round((loadedCount / totalAssets) * 100)
      setProgress(newProgress)
      
      if (loadedCount === totalAssets) {
        // Small delay to ensure smooth transition
        setTimeout(() => setLoading(false), 150)
      }
    }
    
    // Simulate asset loading (in a real app, you would load actual assets)
    const timers = assets.map(() => {
      return setTimeout(updateProgress, Math.random() * 300 + 100)
    })
    
    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [assets])
  
  return { loading, progress }
}