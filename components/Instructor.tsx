"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

/* 🔥 SCROLL FUNCTION */
const scrollToCourses = () => {
  const el = document.getElementById("courses");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Instructor = () => {
  return (
    <section
      id="instructor"
      aria-labelledby="instructor-heading"
      className="relative py-24 px-4 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 mb-4 text-xs font-semibold text-blue-700 uppercase tracking-wide">
            ● Leadership Spotlight
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628]">
            Learn from{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            A visionary leader driving SAP innovation and career transformation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">

              <div className="absolute top-5 left-5 right-[-12px] bottom-[-12px] sm:right-[-20px] sm:bottom-[-20px] bg-blue-50 border border-blue-200 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-xl">
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50">
                  <Image
                    src="/instructor.png"
                    alt="Kumaresh Bidari - SAP Instructor"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white border border-blue-200 rounded-lg px-4 py-2 text-xs shadow-md">
                  SAP S/4HANA MM Expert
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div>
              <h3 className="text-2xl font-bold text-[#0a1628]">
                Kumaresh Bidari
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                Founder & CEO, Rise Infotech · SAP S/4HANA MM Consultant
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Kumaresh Bidari is the Founder & CEO of Rise Infotech, bringing over a decade of experience
              in delivering enterprise-grade SAP S/4HANA solutions across global organizations including
              TCS, IBM, and NTT Data. He has played a key role in transforming business processes
              through SAP implementations and has successfully guided professionals into high-growth SAP careers.
            </p>

             {/* 🔥 FOUNDER SOCIAL MEDIA */}
            <div className="mt-4 flex flex-col items-start gap-2">
              <p className="text-xs text-gray-500 font-medium">
                Connect with the Founder
              </p>

              <div className="flex gap-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kumaresh-bidari074/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Founder LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0A66C2] hover:scale-110 transition"
                >
                  <FaLinkedinIn size={14} color="white" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kumaresh.bidari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Founder Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition"
                >
                  <FaInstagram size={16} color="white" />
                </a>

              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "1000+", label: "Students Trained" },
                { val: "10+", label: "Years Experience" },
                { val: "4+", label: "Training Experience" },
                { val: "Top MNCs", label: "Placements" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-bold text-blue-600">{s.val}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-800">
                Key Achievements & Impact:
              </p>
              <ul className="space-y-1">
                <li>✔ Led multiple SAP S/4HANA enterprise implementations</li>
                <li>✔ Worked with top global MNCs across industries</li>
                <li>✔ Trained 1000+ professionals transitioning into SAP careers</li>
                <li>✔ Built Rise Infotech as a career-focused SAP training platform</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleEnquiry}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition text-center"
              >
                Get Free Career Consultation
              </button>

              <button
                onClick={scrollToCourses}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition text-center"
              >
                View Courses
              </button>
            </div>

            {/* Closing Line */}
            <p className="text-sm font-semibold text-blue-600">
              This is not just training — it’s a complete career transformation.
            </p>

           

          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;