import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/globals.css'
import App from './App.jsx'

// Preload critical 3D assets for better performance
const preload3DAssets = () => {
  // Preload commonly used 3D components
  const preloadPromises = [
    import('./components/threejs/NFCCard3D'),
    import('./components/threejs/SilverCard3D'),
    import('./components/threejs/Lighting'),
    import('./components/threejs/Controls')
  ]
  
  // Don't wait for preload to complete, just start loading in background
  Promise.allSettled(preloadPromises).catch(() => {
    // Ignore preload errors as they're not critical
  })
}

// Call preload function
preload3DAssets()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)