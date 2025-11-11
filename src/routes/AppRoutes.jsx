import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/Home/index.jsx'))
const AboutPage = lazy(() => import('../pages/About/index.jsx'))
const TemplatesPage = lazy(() => import('../pages/Templates/index.jsx'))
const ProductsPage = lazy(() => import('../pages/Products/index.jsx'))
const ContactPage = lazy(() => import('../pages/Contact/index.jsx'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/templates" element={<TemplatesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}