"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this SAP course suitable for beginners?",
    answer:
      "Yes, this course is designed for absolute beginners as well as professionals looking to switch into SAP. We start from fundamentals and gradually move to advanced real-time scenarios.",
  },
  {
    question: "Which SAP module will I learn in this training?",
    answer:
      "This training focuses on SAP S/4HANA MM (Materials Management), covering procurement, inventory management, and real-time business processes used in companies.",
  },
  {
    question: "Will I get hands-on experience on SAP system?",
    answer:
      "Yes, you will get practical exposure through live system access, real-time case studies, and assignments to ensure you gain industry-level experience.",
  },
  {
    question: "Is certification included in this SAP course?",
    answer:
      "Yes, you will receive a course completion certificate. We also guide you on how to prepare for official SAP certification exams if required.",
  },
  {
    question: "What are the career opportunities after SAP MM?",
    answer:
      "After completing this course, you can apply for roles like SAP MM Consultant, SAP Analyst, Procurement Specialist, and Supply Chain Executive in top MNCs.",
  },
  {
    question: "Will I get placement assistance?",
    answer:
      "Yes, we provide end-to-end placement support including resume building, mock interviews, and referrals to hiring partners.",
  },
];
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition hover:shadow-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800"
                >
                  {faq.question}

                  <ChevronDown
                    className={`transition-transform text-blue-600 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-72 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;