import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import NFCCardShowcase from './NFCCardShowcase'
import CTASection from './CTASection'

function Home() {
  return (
    <>
      <HeroSection />
      <NFCCardShowcase />
      <Features />
      <CTASection />
    </>
  )
}

export default Home