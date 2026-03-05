import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, GraduationCap, Send } from "lucide-react";
import { submitEnrollmentForm } from "../utils/Api";

const INITIAL_FORM = {
  fullName: "",
  phoneNo: "",
  email: "",
  qualification: "",
  age: "",
  gender: "",
  message: "",
  productCompany: "Cards",
};

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phoneNo.trim()) newErrors.phoneNo = "Contact number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.qualification) newErrors.qualification = "Education level is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await submitEnrollmentForm({
        productCompany: formData.productCompany,
        phoneNo: formData.phoneNo,
        fullName: formData.fullName,
        email: formData.email,
      });
      setFormData(INITIAL_FORM);
      onClose();
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-3 text-sm bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition ${
      errors[field] ? "border-red-500" : "border-white"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md bg-black border border-white rounded-2xl shadow-xl flex flex-col max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white shrink-0">
              <h2 className="text-xl font-bold text-white">Enroll Now</h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1">
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    <User className="inline mr-1.5" size={15} /> Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={inputClass("fullName")}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    <Phone className="inline mr-1.5" size={15} /> Contact Number
                  </label>
                  <input
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className={inputClass("phoneNo")}
                    placeholder="10-digit number"
                  />
                  {errors.phoneNo && <p className="text-red-400 text-xs mt-1">{errors.phoneNo}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    <Mail className="inline mr-1.5" size={15} /> Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass("email")}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white">Age</label>
                    <input
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={inputClass("age")}
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={inputClass("gender")}
                    >
                      <option value="" className="text-black">Select</option>
                      <option value="male" className="text-black">Male</option>
                      <option value="female" className="text-black">Female</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <label className="text-sm text-white mb-1 block">
                    <GraduationCap className="inline mr-1.5" size={15} /> Education Level
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className={inputClass("qualification")}
                  >
                    <option value="" className="text-black">Select Education</option>
                    <option value="high-school" className="text-black">High School</option>
                    <option value="diploma" className="text-black">Diploma</option>
                    <option value="bachelors" className="text-black">Bachelor's</option>
                    <option value="masters" className="text-black">Master's</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-white">Message (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-white rounded-lg bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                    placeholder="Anything you'd like us to know..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-3 rounded-lg flex justify-center items-center gap-2 font-semibold hover:bg-gray-200 transition disabled:opacity-60"
                >
                  <Send size={17} />
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;