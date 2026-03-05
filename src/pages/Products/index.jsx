import React from 'react'
import ProductShowcase from './ProductShowcase.jsx'
import ProductFeatures from './ProductFeatures.jsx'
import ProductPricing from './ProductPricing.jsx'
import NFCCard from './NFCCard.jsx'
import MetallicCard from './MetallicCard.jsx'
import VipCard from './VipCard.jsx'



export default function ProductsPage() {
  return (
    <>
      <ProductShowcase />
      <ProductFeatures />
      <ProductPricing />
      <VipCard/>
      <NFCCard/>
      <MetallicCard/>
      
    </>
  )
}