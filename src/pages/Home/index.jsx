import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import NFCCardShowcase from './NFCCardShowcase'
import WhyNfc from './WhyNfc'
import HowItWorks from './HowItWorks'
import CTASection from './CTASection'
import Comparison from './Comparison'
import Pricing from './Pricing'

function Home() {
  return (
    <>
      <HeroSection />
      <NFCCardShowcase />
      <Features />
      <Comparison />
      <WhyNfc />
      <Pricing/>
      <HowItWorks />
      <CTASection />
    </>
  )
}

export default Home
