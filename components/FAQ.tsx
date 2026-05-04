"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can join SAP MM course?",
    answer:
      "Freshers, working professionals, and SAP end users can join this course. No prior SAP knowledge is required. You will be trained from basic to expert level to transition into SAP MM Consultant roles.",
  },
  {
    question: "Do I need coding knowledge for SAP MM?",
    answer:
      "No. SAP MM is a functional module focused on business operations. Coding or programming knowledge is not required.",
  },
  {
    question: "Do you provide real-time projects?",
    answer:
      "Yes. You will work on end-to-end SAP S/4HANA projects including implementation, rollout, testing, data migration, and support using real-time scenarios.",
  },
  {
    question: "What tools will I learn?",
    answer:
      "You will learn SAP ECC R/3, SAP S/4HANA (On-Premise & Cloud), Fiori Apps, and tools like Jira and ServiceNow used in real-time projects.",
  },
  {
    question: "Is placement assistance provided?",
    answer:
      "Yes. We provide 100% placement assistance including resume building, Naukri and LinkedIn profile optimization, mock interviews, and job referrals.",
  },
  {
    question: "What salary can I expect?",
    answer:
      "Freshers can expect ₹3–6 LPA, while candidates with 3+ years of experience can earn ₹12–14 LPA depending on skills and performance.",
  },
  {
    question: "Can AI replace SAP MM Consultants?",
    answer:
      "No. AI can automate repetitive tasks, but SAP MM consultants are required for business decisions, system configuration, and client requirements. It remains a stable long-term career.",
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
       <div className="text-center max-w-2xl mx-auto">
  
  {/* Badge */}
  <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase mb-3">
    FAQs
  </span>

  {/* Main Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
    SAP S/4HANA MM Course FAQs
  </h2>

  {/* Subtext */}
  <p className="mt-3 text-slate-600 text-sm sm:text-base">
    Get clear answers about course eligibility, tools, placements, and career opportunities.
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