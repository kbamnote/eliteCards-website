import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Import logo for loading state
import logo from '../assets/logo.png'

const HomePage = lazy(() => import('../pages/Home/index.jsx'))
const AboutPage = lazy(() => import('../pages/About/index.jsx'))
const TemplatesPage = lazy(() => import('../pages/Templates/index.jsx'))
const ProductsPage = lazy(() => import('../pages/Products/index.jsx'))
const ContactPage = lazy(() => import('../pages/Contact/index.jsx'))

// Centralized loading component
const PageLoader = () => (
  <div className="p-10 text-center flex flex-col items-center justify-center min-h-screen bg-[#010B12]">
    <img src={logo} alt="Elite Cards Logo" className="h-16 w-auto mb-4" />
    <span className="text-xl font-bold tracking-tight text-[#E0E0E0]">
      Elite<span style={{ color: '#9CFF00' }}>Cards</span>
    </span>
  </div>
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<PageLoader />}>
          <HomePage />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<PageLoader />}>
          <AboutPage />
        </Suspense>
      } />
      <Route path="/templates" element={
        <Suspense fallback={<PageLoader />}>
          <TemplatesPage />
        </Suspense>
      } />
      <Route path="/products" element={
        <Suspense fallback={<PageLoader />}>
          <ProductsPage />
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<PageLoader />}>
          <ContactPage />
        </Suspense>
      } />
    </Routes>
  )
}