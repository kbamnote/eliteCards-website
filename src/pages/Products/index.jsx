import React from 'react'
import ProductShowcase from './ProductShowcase.jsx'
import ProductFeatures from './ProductFeatures.jsx'
import ProductPricing from './ProductPricing.jsx'

export default function ProductsPage() {
  return (
    <>
      <ProductShowcase />
      <ProductFeatures />
      <ProductPricing />
    </>
  )
}