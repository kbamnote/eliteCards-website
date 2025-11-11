import React, { Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Layout from './components/layout/Layout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default App
