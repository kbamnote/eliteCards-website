import React, { Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
// Import the logo
import logo from './assets/logo.png'

function App() {
  const location = useLocation()

  // Removed Lenis smooth scrolling to prevent scroll issues.

  useEffect(() => {
    // Scroll to top of page when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant scrolling for better SPA experience
    })
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
          <Suspense fallback={
            <div className="p-10 text-center flex flex-col items-center justify-center min-h-screen bg-[#010B12]">
              <img src={logo} alt="Elite Cards Logo" className="h-16 w-auto mb-4" loading="eager" />
              <span className="text-xl font-bold tracking-tight text-[#E0E0E0]">
                Elite<span style={{ color: '#9CFF00' }}>Cards</span>
              </span>
            </div>
          }>
            <AppRoutes />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default App