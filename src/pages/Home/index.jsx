import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import NFCCardShowcase from './NFCCardShowcase'
import WhyNfc from './WhyNfc'
import HowItWorks from './HowItWorks'
import CTASection from './CTASection'
import Comparison from './Comparison'

function Home() {
  return (
    <>
      <HeroSection />
      <NFCCardShowcase />
      <Features />
      <Comparison />
      <WhyNfc />
      <HowItWorks />
      <CTASection />
    </>
  )
}

export default Home