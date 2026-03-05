import React, { useState } from "react";
import { motion } from "framer-motion";
import EnrollmentModal from "../../modal/EnrollmentModal";

function CTASection() {
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setShowEnrollmentModal(true);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div
          className="rounded-2xl p-10 md:p-14 bg-gradient-to-r from-[var(--mango-green)]/30 to-[var(--india-green)]/30 border shadow-xl"
          style={{ borderColor: "var(--yellow-green)" }}
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]"
          >
            Ready to build your premium NFC experience?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-3 text-[var(--text-secondary)] text-base md:text-lg"
          >
            Start with templates or craft a bespoke design with interactive 3D.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button
              onClick={handleGetStartedClick}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--mango-green)] to-[var(--india-green)] 
              text-[var(--rich-black)] font-semibold shadow-lg 
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <EnrollmentModal
        isOpen={showEnrollmentModal}
        onClose={() => setShowEnrollmentModal(false)}
      />
    </>
  );
}

export default CTASection;