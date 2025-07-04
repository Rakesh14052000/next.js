"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md my-8 sm:my-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`${index < faqs.length - 1 ? 'border-b border-gray-200' : ''} py-3 sm:py-4`}>
            <div
              className="flex justify-between items-center cursor-pointer text-blue-600 hover:text-blue-800"
              onClick={() => handleToggle(index)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">{faq.question}</span>
              <span
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}