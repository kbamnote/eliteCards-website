import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an NFC Card?",
    answer:
      "An NFC (Near Field Communication) card is a smart digital card that allows you to share information instantly by tapping it on a smartphone. It can store and redirect users to your contact details, website, social media, or Google review page.",
  },
  {
    question: "Why should I choose an NFC card over a paper business card?",
    answer:
      "NFC cards are reusable, eco-friendly, and more professional. Unlike paper cards, they never run out, can be updated anytime, and leave a modern impression with just one tap.",
  },
  {
    question: "Do NFC cards work on all smartphones?",
    answer:
      "Yes. NFC cards work on most modern Android phones and iPhones. For phones without NFC support, a QR code can be used as a fallback.",
  },
  {
    question: "Is an app required to use an NFC card?",
    answer:
      "No app is required. The card works instantly through the phone’s built-in NFC feature and opens a browser link automatically.",
  },
];

const AboutNew = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Why Choose NFC Cards?
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Discover how NFC cards are transforming the way professionals share
          information and build connections.
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-black bg-black/80 backdrop-blur-md p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>

              <ChevronDown
                className={`text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutNew;