"use client";

import React from "react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your SAP Journey?
        </h2>

        <p className="mt-4 text-sm text-blue-100">
          Join our live demo session and get a clear roadmap for your career.
        </p>

        <button
          onClick={handleEnquiry}
          className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Book Free Demo →
        </button>

      </div>
    </section>
  );
};

export default FinalCTA;