import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export default function useScrollAnimation() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return controls
}