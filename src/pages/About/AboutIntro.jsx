import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <motion.h2 
      className="text-4xl font-bold mb-2"
      style={{ color: 'var(--text-primary)' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h2>
    <motion.p 
      className="text-lg"
      style={{ color: 'var(--text-secondary)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
)

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const value = typeof end === 'string' && end.includes('+')
        ? Math.floor(progress * parseInt(end))
        : progress * parseFloat(end)
      
      setCount(value)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  if (typeof end === 'string' && end.includes('+')) {
    return <>{Math.floor(count)}+</>
  }
  if (typeof end === 'string' && end.includes('/')) {
    return <>{count.toFixed(1)}/5</>
  }
  if (typeof end === 'string' && end.includes('%')) {
    return <>{count.toFixed(1)}%</>
  }
  return <>{count}</>
}

export default function AboutIntro() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isGifHovered, setIsGifHovered] = useState(false)
  
  const features = [
    { title: 'Design-first', icon: '✨', desc: 'Beautiful by default' },
    { title: 'Lightning fast', icon: '⚡', desc: 'Optimized performance' },
    { title: 'Privacy-friendly', icon: '🔒', desc: 'Your data, protected' },
    { title: 'Made with care', icon: '❤️', desc: 'Crafted with love' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="About Elite Digital Cards" subtitle="Crafting premium experiences" />

      {/* Hero: About section with GIF */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="mt-6 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Copy column with parallax effect */}
        <motion.div 
          variants={containerVariants}
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold tracking-tight" 
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Elite Cards: Your brand, made effortless
          </motion.h2>
          <motion.p 
            className="mt-3 text-sm md:text-base" 
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We craft modern, premium digital business cards that make every introduction smooth. Tap, share,
            and follow-up—backed by reliable tech, polished UI, and fast performance.
          </motion.p>
          <motion.ul 
            className="mt-4 space-y-2 text-sm" 
            style={{ color: 'var(--text-secondary)' }}
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              'Instant NFC sharing with beautiful landing pages',
              'Theme-consistent visuals and calm, premium motion',
              'Privacy-conscious, optimized, and easy to manage'
            ].map((item, i) => (
              <motion.li 
                key={i}
                variants={itemVariants}
                whileHover={{ x: 5, color: 'var(--mango-green)' }}
                className="flex items-center gap-2 transition-colors cursor-default"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--mango-green)' }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Reduced GIF column with enhanced effects */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl border bg-[#0B0F1A] p-4 flex items-center justify-center h-56 md:h-72 max-w-md md:max-w-lg mx-auto"
          style={{ borderColor: 'var(--dark-jungle-green)' }}
          onHoverStart={() => setIsGifHovered(true)}
          onHoverEnd={() => setIsGifHovered(false)}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          {/* Animated border gradient */}
          <motion.div 
            className="absolute inset-0 opacity-20 rounded-2xl"
            style={{
             
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Reduced size GIF fits container */}
          <motion.img
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a2c5ZHZ6M2YxbTV0aXNwZmJodTJsbmV1aHgzY2RucGQ2YjByMGI5MyZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/kc6hQCcsDJpcWFGoYU/giphy.gif"
            alt="NFC tap animation"
            loading="lazy"
            className="w-full h-full object-contain rounded-2xl"
            style={{ 
              filter: isGifHovered ? 'saturate(1.2) contrast(1.05) brightness(1.1)' : 'saturate(1.05) contrast(1.02)'
            }}
            animate={{ 
              y: [0, -6, 0],
              scale: isGifHovered ? 1.05 : 1
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.3 }
            }}
          />
          
          {/* Hover overlay with pulse effect */}
          <AnimatePresence>
            {isGifHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="text-white text-sm font-medium px-4 py-2 rounded-full"
                  style={{ background: 'var(--mango-green)' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Tap to Connect
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Feature badges with active state */}
      <motion.div
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="glass rounded-xl px-4 py-3 border transition cursor-pointer"
            style={{ 
              borderColor: activeFeature === index ? 'var(--mango-green)' : 'var(--dark-jungle-green)',
              background: activeFeature === index ? 'rgba(178, 236, 93, 0.05)' : 'transparent'
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            onClick={() => setActiveFeature(index)}
          >
            <div className="flex items-center gap-2">
              <motion.span 
                className="text-lg"
                animate={{ rotate: activeFeature === index ? [0, 10, -10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.span>
              <div className="flex-1">
                <span className="text-sm font-medium block" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </span>
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.span 
                      className="text-xs block"
                      style={{ color: 'var(--text-secondary)' }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {feature.desc}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats with count-up animation */}
      <motion.div
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerVariants}
      >
        {[
          { k: 'Years', v: '8+' },
          { k: 'Cards Issued', v: '1000+' },
          { k: 'Uptime', v: '99.9%' },
          { k: 'Avg. Rating', v: '4.9/5' },
        ].map(({ k, v }) => (
          <motion.div
            key={k}
            variants={itemVariants}
            className="rounded-2xl p-5 border bg-[#0B0F1A]/60 backdrop-blur-md transition cursor-pointer group"
            style={{ borderColor: 'var(--dark-jungle-green)' }}
            whileHover={{ 
              y: -4, 
              borderColor: 'var(--mango-green)',
              boxShadow: '0 20px 40px rgba(178, 236, 93, 0.1)'
            }}
          >
            <motion.div 
              className="text-3xl md:text-4xl font-bold" 
              style={{ color: 'var(--mango-green)' }}
              whileInView={{ scale: [0.8, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CountUp end={v} />
            </motion.div>
            <div className="mt-1 text-sm group-hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
              {k}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Value section with enhanced interactions */}
      <motion.div
        className="mt-12 grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="rounded-2xl p-6 border bg-[#0B0F1A]/70 backdrop-blur-md group"
          style={{ borderColor: 'var(--dark-jungle-green)' }}
          whileHover={{ 
            scale: 1.02,
            borderColor: 'var(--mango-green)',
            boxShadow: '0 10px 30px rgba(178, 236, 93, 0.1)'
          }}
        >
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Built for people, powered by craft
          </h3>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            We design with intention. Every motion, hover, and micro-interaction is tuned to feel calm, premium,
            and responsive—so your brand leaves the right first impression.
          </p>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {[
              'Accessible and fast across modern devices',
              'Thoughtful visual hierarchy, refined typography',
              'Sustainable performance with minimal overhead'
            ].map((item, i) => (
              <motion.li 
                key={i}
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--mango-green)' }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="rounded-2xl p-6 border bg-[#0B0F1A]/70 backdrop-blur-md group"
          style={{ borderColor: 'var(--dark-jungle-green)' }}
          whileHover={{ 
            scale: 1.02,
            borderColor: 'var(--mango-green)',
            boxShadow: '0 10px 30px rgba(178, 236, 93, 0.1)'
          }}
        >
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Premium by default
          </h3>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            From materials to motion, we aim for a premium look and feel that scales—with consistent theming,
            gradients, and interaction design patterns.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Consistent theming', 'Granular controls', 'Clear CTAs', 'Calm motion'].map((chip) => (
              <motion.span
                key={chip}
                className="px-3 py-1 rounded-full text-xs border transition cursor-pointer"
                style={{ borderColor: 'var(--dark-jungle-green)', color: 'var(--text-secondary)' }}
                whileHover={{ 
                  y: -2,
                  borderColor: 'var(--mango-green)',
                  color: 'var(--mango-green)',
                  scale: 1.05
                }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}