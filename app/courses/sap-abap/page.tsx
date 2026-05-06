"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const SAP = () => (
  <span className="text-blue-600 font-semibold">SAP</span>
);

const highlightSAP = (text: string) =>
  text.split("SAP").map((part, i, arr) => (
    <span key={i}>
      {part}
      {i < arr.length - 1 && <SAP />}
    </span>
  ));

const whoItems = [
  "Software Developers",
  "SAP Consultants",
  "Business Analysts",
  "Students and Graduates",
];

const learnItems = [
  "Development Environment",
  "Data Dictionary",
  "Programming Constructs",
  "Enhancements and Modifications",
  "Forms and Outputs",
  "Object-Oriented Programming (OOP)",
  "Database Access",
  "Integration and Communication",
  "Debugging and Testing",
];

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

export default function SAPABAPPage() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const [brochureForm, setBrochureForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "SAP ABAP",
  });

  const [brochureErrors, setBrochureErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const [brochureLoading, setBrochureLoading] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  const validate = (data: typeof brochureForm) => {
    const newErrors: typeof brochureErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter valid email";
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!data.phone) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    return newErrors;
  };

  const handleBrochureChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBrochureForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setBrochureErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    if (brochureSuccess) {
      setBrochureSuccess(false);
    }
  };

  const handleBrochureSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const nextErrors = validate(brochureForm);

    setBrochureErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setBrochureLoading(true);

    try {
      const cleanPhone = brochureForm.phone.replace(/\D/g, "");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          ...brochureForm,
          phone: `${brochureForm.countryCode}${cleanPhone}`,
          goal: "SAP ABAP syllabus download",
          source: "popup",
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setBrochureSuccess(true);

        const link = document.createElement("a");
        link.href = "/SAP_ABAP_syllabus_RiseInfotech.pdf";
link.download = "SAP_ABAP_syllabus_RiseInfotech.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setBrochureForm({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "SAP ABAP",
        });

        setTimeout(() => {
          setBrochureOpen(false);
          setBrochureSuccess(false);
        }, 1200);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setBrochureLoading(false);
    }
  };

  return (
    <div className="bg-white font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 sm:px-6 lg:px-8 mt-8">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              What is <SAP />-ABAP?
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              <SAP /> ABAP (Advanced Business Application Programming) is a
              high-level programming language created by <SAP /> SE for
              developing applications on the <SAP /> platform. ABAP is the
              primary language used for programming the <SAP /> R/3 system,
              which includes modules such as Financial Accounting (FI), Sales
              and Distribution (SD), and Materials Management (MM).
              <br />
              <br />
              It allows developers to create custom reports, interfaces, forms,
              workflows, and enhancements tailored to the specific needs of an
              organization.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md relative">
            <Image
              src="/sapabap.jpg"
              alt="SAP ABAP course module illustration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* WHO CAN LEARN */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-100 pb-2">
            Who can learn?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {whoItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-xl px-4 py-3 text-sm md:text-base text-gray-700 transition"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WILL YOU LEARN */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-2">
            What will you learn?
          </h2>

          <p className="text-sm text-gray-500 mb-5">
            Course module illustration
          </p>

          <div className="space-y-3 mt-6">
            {learnItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">

                <span className="text-sm font-semibold text-blue-600 min-w-[28px]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {highlightSAP(item)}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 md:p-12 text-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Download <span className="text-blue-100">SAP</span> ABAP
              Syllabus
            </h2>

            <p className="text-white/80 text-sm md:text-base mb-6">
              Get the complete syllabus, module breakdown, tools covered,
              project structure, and career roadmap instantly.
            </p>

            <Button
              onClick={() => setBrochureOpen(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5 text-sm font-medium shadow-md"
            >
              Download Syllabus →
            </Button>

            <p className="text-xs text-white/60 mt-4">
              PDF syllabus • Updated curriculum • Industry-focused modules
            </p>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {brochureOpen && (
        <div
          className="fixed inset-0 z-[12000] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => {
            if (!brochureLoading) {
              setBrochureOpen(false);
            }
          }}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
               <h3 className="text-2xl font-bold text-slate-900">
                  Download Syllabus
                </h3>

                <p className="text-xs text-slate-500 mt-0.5">
                  Submit details to download instantly
                </p>
              </div>

              <button
                onClick={() => setBrochureOpen(false)}
                className="h-8 w-8 rounded-full text-slate-500 hover:bg-slate-100 transition"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {brochureSuccess && (
                <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
                  Submitted successfully! Your syllabus download has started.
                </div>
              )}

            <form
  onSubmit={handleBrochureSubmit}
  className="space-y-4"
>
  <input
    name="name"
    placeholder="Enter your full name"
    value={brochureForm.name}
    onChange={handleBrochureChange}
    className="w-full h-[52px] rounded-xl border border-slate-200 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    name="email"
    type="email"
    placeholder="Enter your email"
    value={brochureForm.email}
    onChange={handleBrochureChange}
    className="w-full h-[52px] rounded-xl border border-slate-200 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
  />

  <div className="flex gap-2 items-center">
    <select
      name="countryCode"
      aria-label="Select country code"
      value={brochureForm.countryCode}
      onChange={handleBrochureChange}
      className="w-[34%] h-[52px] rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    >
      <option value="+91">+91 (IN)</option>
      <option value="+1">+1 (US)</option>
      <option value="+44">+44 (UK)</option>
      <option value="+61">+61 (AU)</option>
      <option value="+65">+65 (SG)</option>
      <option value="+971">+971 (UAE)</option>
    </select>

    <input
      name="phone"
      type="tel"
      maxLength={10}
      value={brochureForm.phone}
      onChange={handleBrochureChange}
      placeholder="Enter phone number"
      className="w-[66%] h-[52px] rounded-xl border border-slate-200 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {brochureErrors.name && (
    <p className="text-red-500 text-xs -mt-2">
      {brochureErrors.name}
    </p>
  )}

  {brochureErrors.email && (
    <p className="text-red-500 text-xs -mt-2">
      {brochureErrors.email}
    </p>
  )}

  {brochureErrors.phone && (
    <p className="text-red-500 text-xs -mt-2">
      {brochureErrors.phone}
    </p>
  )}

  <button
    type="submit"
    disabled={brochureLoading}
    className="w-full h-[54px] rounded-xl text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
  >
    {brochureLoading
      ? "Submitting..."
      : "Submit & Download Syllabus"}
  </button>
</form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}