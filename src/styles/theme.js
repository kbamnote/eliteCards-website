export const theme = {
  colors: {
    primary: '#7C3AED',
    secondary: '#06B6D4',
    background: '#0B0F1A',
    surface: '#111827',
    accent: '#22D3EE',
    textPrimary: '#E5E7EB',
    textSecondary: '#9CA3AF',
  },
  typography: {
    fontFamily: `'Inter', 'Poppins', 'Montserrat', system-ui, -apple-system`,
    h1: { size: '3rem', weight: 700 },
    h2: { size: '2rem', weight: 600 },
    body: { size: '1rem', weight: 400 },
  },
  shadows: {
    soft: '0 10px 30px rgba(124, 58, 237, 0.25)',
    glow: '0 0 30px rgba(34, 211, 238, 0.35)',
    glass: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.35)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
    dark: 'linear-gradient(135deg, #0B0F1A 0%, #111827 100%)',
  },
  lighting: {
    ambient: 0.4,
    directional: { intensity: 1.2, color: '#ffffff' },
    point: { intensity: 0.8, color: '#7C3AED' },
    rim: { intensity: 0.6, color: '#22D3EE' },
  },
};

export const motion = {
  easing: {
    easeOut: [0.17, 0.55, 0.55, 1],
    smooth: [0.22, 1, 0.36, 1],
  },
  duration: {
    fast: 0.25,
    base: 0.6,
    slow: 1.2,
  },
  spring: {
    soft: { type: 'spring', stiffness: 120, damping: 20 },
    firm: { type: 'spring', stiffness: 220, damping: 24 },
  },
};