import React, { Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  const location = useLocation()

  // Removed Lenis smooth scrolling to prevent scroll issues.

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
