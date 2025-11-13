// Centralized palette per request
const palette = {
  richBlack: '#010B12',
  darkJungleGreen: '#1E1F21',
  indiaGreen: '#0C8900',
  yellowGreen: '#2BC20E',
  mangoGreen: '#9CFF00',
  neonGreen: '#39FF13',
  textPrimary: '#E0E0E0',
  textSecondary: '#A0A0A0',
};

export const theme = {
  colors: {
    // Named palette
    ...palette,
    // Legacy aliases for existing components
    primary: palette.indiaGreen,
    secondary: palette.yellowGreen,
    background: palette.richBlack,
    surface: palette.darkJungleGreen,
    accent: palette.mangoGreen,
    textPrimary: palette.textPrimary,
    textSecondary: palette.textSecondary,
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
    primary: `linear-gradient(135deg, ${palette.mangoGreen} 0%, ${palette.indiaGreen} 100%)`,
    dark: `linear-gradient(135deg, ${palette.richBlack} 0%, ${palette.darkJungleGreen} 100%)`,
  },
  lighting: {
    ambient: 0.4,
    directional: { intensity: 1.2, color: '#ffffff' },
    point: { intensity: 0.8, color: palette.indiaGreen },
    rim: { intensity: 0.6, color: palette.neonGreen },
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