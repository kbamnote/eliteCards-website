import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import EnrollmentModal from "../../modal/EnrollmentModal";
import cardVideo from "../../assets/card_video.mp4";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const heroSectionRef = useRef(null);
  const hasShownModalRef = useRef(false);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setShowEnrollmentModal(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;

      const heroBottom = heroSectionRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY <= heroBottom) {
        hasShownModalRef.current = false;
      } else if (scrollY > heroBottom && !hasShownModalRef.current) {
        setShowEnrollmentModal(true);
        hasShownModalRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        src={cardVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= OVERLAYS ================= */}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--india-green)]/10 to-[var(--rich-black)] z-[2]" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--india-green)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--yellow-green)]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-[var(--yellow-green)] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[var(--mango-green)]">
              Elite Collection 2025
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-[var(--mango-green)] to-[var(--yellow-green)] bg-clip-text text-transparent">
            Modern Elite 3D NFC Cards
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            Interactive, premium, and optimized for performance. Elevate your
            brand with futuristic design and cutting-edge technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStartedClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] text-[var(--rich-black)] font-semibold shadow-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/templates")}
              className="px-8 py-4 rounded-xl border border-[var(--yellow-green)] text-white font-semibold backdrop-blur-sm hover:bg-white/10"
            >
              View Templates
            </motion.button>
          </div>

          <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">5K+</p>
              <p className="text-sm text-gray-400">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-sm text-gray-400">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9★</p>
              <p className="text-sm text-gray-400">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD VIDEO (UNCHANGED) */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--india-green)]/20 to-[var(--mango-green)]/20 rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl overflow-hidden">
            <video
              src={cardVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <p className="text-[var(--mango-green)] font-semibold">
                Premium NFC Experience
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>

      <EnrollmentModal
        isOpen={showEnrollmentModal}
        onClose={() => setShowEnrollmentModal(false)}
      />
    </section>
  );
}

export default HeroSection;