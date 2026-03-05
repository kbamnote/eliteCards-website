import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnquiryForm } from "../utils/Api";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await submitEnquiryForm(formData);
      console.log("Enquiry Response:", response);

      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      setError(err?.message || "Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl bg-black p-6 shadow-xl border border-white"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Enquiry Form
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-1 hover:bg-white/10 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Alerts */}
            {error && (
              <p className="mb-3 text-sm text-red-400">{error}</p>
            )}
            {success && (
              <p className="mb-3 text-sm text-green-400">
                Enquiry submitted successfully!
              </p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-white bg-transparent px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-white py-2 font-semibold text-black hover:bg-gray-200 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;