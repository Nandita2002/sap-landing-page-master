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
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT */}
        {/* LEFT */}
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">

  {/* Image */}
  <div className="relative w-full max-w-[240px] sm:max-w-[280px]">

    <div className="absolute top-4 left-4 right-[-12px] bottom-[-12px] bg-blue-50 border border-blue-200 rounded-2xl" />

    <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-xl">
      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50">
        <Image
          src="/instructor.png"
          alt="Kumaresh Bidari - SAP Instructor"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white border border-blue-200 rounded-md px-3 py-1 text-xs shadow">
        SAP S/4HANA MM Expert
      </div>
    </div>
  </div>

  {/* 👇 ADDED (balance fix — no removal from right) */}
  <div>
    <h3 className="text-lg sm:text-xl font-bold text-[#0a1628]">
      Kumaresh Bidari
    </h3>
    <p className="text-blue-600 text-xs sm:text-sm">
      Founder · SAP S/4HANA Consultant
    </p>
  </div>

  {/* 👇 ADDED (social balance) */}
  <div className="flex gap-2">
    <a
      href="https://www.linkedin.com/in/kumaresh-bidari074/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A66C2]"
    >
      <FaLinkedinIn size={12} color="white" />
    </a>

    <a
      href="https://www.instagram.com/kumaresh.bidari/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
    >
      <FaInstagram size={14} color="white" />
    </a>
  </div>

</div>

          {/* RIGHT */}
        <div className="flex flex-col gap-5">

  {/* DESCRIPTION (short + impactful) */}
  <p className="text-gray-600 leading-relaxed text-sm">
    Founder of Rise Infotech with 10+ years of hands-on SAP S/4HANA experience across TCS, IBM, and NTT Data. 
    Has helped 1000+ students successfully transition into high-paying SAP careers.
  </p>

  {/* QUICK HIGHLIGHTS (better than long paragraph) */}
  <ul className="text-sm text-gray-600 space-y-1">
    <li>✔ SAP S/4HANA implementation expert</li>
    <li>✔ Experience with global enterprise projects</li>
    <li>✔ Career-focused, practical training approach</li>
  </ul>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-3">
    {[
      { val: "1000+", label: "Students" },
      { val: "10+", label: "Experience" },
      { val: "4+", label: "Training" },
      { val: "Top MNCs", label: "Worked With" },
    ].map((s) => (
      <div
        key={s.label}
        className="bg-white border border-gray-100 rounded-lg p-3 text-center shadow-sm"
      >
        <div className="text-base font-bold text-blue-600">{s.val}</div>
        <div className="text-xs text-gray-500">{s.label}</div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="flex flex-col sm:flex-row gap-2">
    <button
      onClick={handleEnquiry}
      className="w-full px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm"
    >
      Get Free Consultation
    </button>

    <button
      onClick={scrollToCourses}
      className="w-full px-5 py-2.5 rounded-lg border border-blue-200 text-blue-600 font-semibold text-sm"
    >
      View Courses
    </button>
  </div>

  {/* Closing Line */}
  <p className="text-xs sm:text-sm font-semibold text-blue-600">
    Learn directly from industry — not just theory.
  </p>

</div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;