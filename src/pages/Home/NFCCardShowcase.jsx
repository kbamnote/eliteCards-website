import React, { useRef, useState, useEffect } from 'react';
import { Camera, Zap, Shield, Wifi } from 'lucide-react';
import * as THREE from 'three';
import { theme } from '../../styles/theme';

function NFCCardShowcase() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Card geometry
    const cardGeometry = new THREE.BoxGeometry(2.5, 1.6, 0.08);
    const cardMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color(0xffd700), // brighter gold
  metalness: 1.0,                   // fully metallic
  roughness: 0.05,                  // smoother for shine
  clearcoat: 1.0,                   // extra glossy top coat
  clearcoatRoughness: 0.1,
  reflectivity: 1.0,
  envMapIntensity: 1.5,             // makes reflections stronger
});

    const card = new THREE.Mesh(cardGeometry, cardMaterial);
    // Removed external environment textures to avoid loading errors.
    // Rely on lights and material parameters for metallic appearance.

    scene.add(card);

    // Name label (front side)
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 512;
    labelCanvas.height = 128;
    const ctx = labelCanvas.getContext('2d');
    ctx.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
    ctx.font = 'bold 64px sans-serif';
    ctx.fillStyle = theme.colors.textPrimary;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('M A Siddiqui', labelCanvas.width / 2, labelCanvas.height / 2);

    const labelTexture = new THREE.CanvasTexture(labelCanvas);
    labelTexture.encoding = THREE.sRGBEncoding;
    const labelMaterial = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true });
    const labelPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.35), labelMaterial);
    labelPlane.position.set(0, 0.0, 0.051); // slightly above front face
    card.add(labelPlane);

    // Holographic strip
    const stripGeometry = new THREE.BoxGeometry(2.4, 0.3, 0.09);
    const stripMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(theme.colors.mangoGreen),
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color('#D4AF37'),
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const strip = new THREE.Mesh(stripGeometry, stripMaterial);
    strip.position.y = 0.4;
    card.add(strip);

    // NFC chip
    const chipGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.05);
    const chipMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(theme.colors.indiaGreen),
      metalness: 1,
      roughness: 0.2,
      emissive: new THREE.Color(theme.colors.indiaGreen),
      emissiveIntensity: 0.3,
    });
    const chip = new THREE.Mesh(chipGeometry, chipMaterial);
    chip.position.set(-0.8, -0.3, 0.05);
    card.add(chip);

    // Chip circuits
    const circuitGeometry = new THREE.TorusGeometry(0.25, 0.02, 16, 32);
    const circuitMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4AF37'),
      transparent: true,
      opacity: 0.35,
    });
    const circuit = new THREE.Mesh(circuitGeometry, circuitMaterial);
    circuit.position.copy(chip.position);
    circuit.rotation.x = Math.PI / 2;
    card.add(circuit);

    // Accent lines
    for (let i = 0; i < 3; i++) {
      const lineGeometry = new THREE.BoxGeometry(1.5, 0.02, 0.09);
      const lineMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(theme.colors.yellowGreen),
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.set(0.3, -0.5 + i * 0.15, 0.05);
      card.add(line);
    }

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight('#fff1d0', 0.6);
    fillLight.position.set(-5, 0, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight('#fff4d6', 0.7);
    rimLight.position.set(0, -5, -5);
    scene.add(rimLight);

    camera.position.z = 5;

    sceneRef.current = { scene, camera, renderer, card, particles, strip, circuit };

    let animationId;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      card.position.y = Math.sin(time * 0.8) * 0.1;
      
      if (isHoveredRef.current) {
        card.rotation.y += 0.02;
        card.rotation.x = Math.sin(time) * 0.1;
      } else {
        card.rotation.y += 0.005;
        card.rotation.x = Math.sin(time * 0.5) * 0.05;
      }

      particles.rotation.y += 0.001;
      
      strip.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.3;
      circuit.rotation.z += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Transfer",
      description: "Lightning-fast NFC technology enables contactless payments and data exchange in milliseconds."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Advanced encryption and tokenization keep your sensitive information protected at all times."
    },
    {
      icon: Wifi,
      title: "Universal Compatibility",
      description: "Works seamlessly with all NFC-enabled devices and payment terminals worldwide."
    },
    {
      icon: Camera,
      title: "Smart Integration",
      description: "Connect with digital wallets, access control systems, and IoT devices effortlessly."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[var(--rich-black)] via-[var(--dark-jungle-green)] to-[var(--rich-black)] px-6 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--india-green)]/20" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--yellow-green)]/20" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--india-green)]/15 to-[var(--yellow-green)]/15 border border-[var(--india-green)]/30 text-[var(--yellow-green)] text-sm font-medium">
              Next-Gen Payment Technology
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[var(--mango-green)] via-[var(--yellow-green)] to-[var(--india-green)] bg-clip-text text-transparent">
              Smart NFC Card
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Experience the future of secure, contactless transactions with cutting-edge NFC technology
          </p>
        </div>

        {/* Spline design showcase removed per request */}

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[var(--dark-jungle-green)]/80 to-[var(--rich-black)]/80 backdrop-blur-xl rounded-2xl p-2 border" style={{ borderColor: 'var(--text-secondary)' }}>
              <canvas
                ref={canvasRef}
                style={{ height: '480px', width: '100%', cursor: 'pointer' }}
                onMouseEnter={() => { setIsHovered(true); isHoveredRef.current = true; }}
                onMouseLeave={() => { setIsHovered(false); isHoveredRef.current = false; }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Interactive 3D Experience
              </h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Hover over the card to explore its premium design. Watch as the holographic elements shimmer, 
                the NFC chip pulses with energy, and particles dance around this masterpiece of modern technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--india-green)]/10 to-[var(--yellow-green)]/10 border" style={{ borderColor: 'var(--india-green)' }}>
                <div className="text-2xl font-bold text-[var(--yellow-green)]">13.56 MHz</div>
                <div className="text-sm text-[var(--text-secondary)]">Frequency</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--mango-green)]/10 to-[var(--yellow-green)]/10 border" style={{ borderColor: 'var(--yellow-green)' }}>
                <div className="text-2xl font-bold text-[var(--mango-green)]">{'<100ms>'}</div>
                <div className="text-sm text-[var(--text-secondary)]">Response Time</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--india-green)]/10 to-[var(--mango-green)]/10 border" style={{ borderColor: 'var(--india-green)' }}>
                <div className="text-2xl font-bold text-[var(--india-green)]">10cm</div>
                <div className="text-sm text-[var(--text-secondary)]">Max Range</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Powerful Features</h3>
            <p className="text-[var(--text-secondary)]">Everything you need for seamless contactless interactions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-[var(--dark-jungle-green)]/50 to-[var(--rich-black)]/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms`, borderColor: 'var(--dark-jungle-green)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--india-green)]/0 to-[var(--yellow-green)]/0 group-hover:from-[var(--india-green)]/10 group-hover:to-[var(--yellow-green)]/10 rounded-xl transition-all duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--india-green)] to-[var(--yellow-green)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[var(--text-primary)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--yellow-green)] to-[var(--india-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-[var(--rich-black)] font-semibold text-lg flex items-center gap-2">
              Get Your Smart Card
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--rich-black)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NFCCardShowcase;