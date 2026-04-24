"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  course: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  course: "",
};

export default function Hero() {
  const [consultationForm, setConsultationForm] = useState<FormData>(EMPTY_FORM);
  const [consultationErrors, setConsultationErrors] = useState<FormErrors>({});
  const [consultationLoading, setConsultationLoading] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState<FormData>(EMPTY_FORM);
  const [brochureErrors, setBrochureErrors] = useState<FormErrors>({});
  const [brochureLoading, setBrochureLoading] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  const validate = (data: FormData) => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(data.email)) newErrors.email = "Enter a valid email";

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!data.phone) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(data.phone)) newErrors.phone = "Enter valid 10-digit number";

    return newErrors;
  };

  const handleConsultationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setConsultationForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setConsultationErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    if (consultationSuccess) setConsultationSuccess(false);
  };

  const handleBrochureChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBrochureForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBrochureErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    if (brochureSuccess) setBrochureSuccess(false);
  };

  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(consultationForm);
    setConsultationErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setConsultationLoading(true);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...consultationForm,
          phone: `${consultationForm.countryCode} ${consultationForm.phone}`,
          goal: "Consultation requested via hero form",
          source: "consultation",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }

      if (data.status === "success") {
        setConsultationSuccess(true);
        setConsultationForm(EMPTY_FORM);
      } else {
        alert("Error: " + (data.message || "Please try again."));
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setConsultationLoading(false);
    }
  };

  const handleBrochureSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(brochureForm);
    setBrochureErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setBrochureLoading(true);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...brochureForm,
          phone: `${brochureForm.countryCode} ${brochureForm.phone}`,
          goal: "Brochure download requested via hero popup",
          source: "popup",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }

      if (data.status === "success") {
        setBrochureSuccess(true);
        const brochureLink = document.createElement("a");
        brochureLink.href = "/brochure.pdf";
        brochureLink.download = "Rise-Infotech-SAP-Brochure.pdf";
        document.body.appendChild(brochureLink);
        brochureLink.click();
        document.body.removeChild(brochureLink);
        setBrochureForm(EMPTY_FORM);
        setTimeout(() => {
          setBrochureOpen(false);
          setBrochureSuccess(false);
        }, 1000);
      } else {
        alert("Error: " + (data.message || "Please try again."));
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setBrochureLoading(false);
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pt-6 md:pb-24 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-start">
          <div className="text-center lg:text-left">
            <div className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm backdrop-blur mb-4 sm:mb-5">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              SAP Training · May 2026 Cohort
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3rem] xl:text-[3.2rem] font-extrabold tracking-tight text-slate-900 leading-tight mb-5 sm:mb-6">
              Build a High-Value{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
                SAP Career
              </span>{" "}
              with Real Project Experience
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-3xl mx-auto lg:mx-0">
              Master SAP S/4HANA modules with expert-led sessions, live
              implementation scenarios, and interview-focused mentorship designed
              for beginners and working professionals.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-[520px] mx-auto lg:mx-0 mb-6 sm:mb-7">
              <button
                onClick={() => setBrochureOpen(true)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-white font-semibold text-sm shadow-[0_16px_32px_rgba(37,99,235,0.25)] bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 active:scale-95 transition-all duration-200"
              >
                Download Brochure
              </button>

              <button
                onClick={scrollToCourses}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-blue-600 bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 active:scale-95 transition"
              >
                View Courses
              </button>
            </div>

            <p className="text-sm text-slate-500 mb-6">Limited slots available this month</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-3xl mx-auto lg:mx-0">
              {[
                "1000+ Students Trained",
                "Placement & Interview Support",
                "Mentors from Top MNCs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_14px_34px_rgba(15,23,42,0.08)] p-5 md:p-6 lg:p-7 border border-slate-200">
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Get Free Consultation
              </h2>
              <p className="text-slate-600 mt-1 text-sm">
                Talk to SAP experts and get a career roadmap.
              </p>
            </div>

            {consultationSuccess && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
                Submitted successfully! Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleConsultationSubmit} className="grid grid-cols-1 gap-3">
              <div>
                <label htmlFor="hero-name" className="text-sm font-medium text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  id="hero-name"
                  name="name"
                  value={consultationForm.name}
                  onChange={handleConsultationChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {consultationErrors.name && <p className="text-red-500 text-xs mt-1">{consultationErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="hero-email" className="text-sm font-medium text-gray-600 mb-1 block">
                  Email Address
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  value={consultationForm.email}
                  onChange={handleConsultationChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {consultationErrors.email && <p className="text-red-500 text-xs mt-1">{consultationErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="hero-phone" className="text-sm font-medium text-gray-600 mb-1 block">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={consultationForm.countryCode}
                    onChange={handleConsultationChange}
                    className="w-[34%] border border-gray-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+971">+971 (UAE)</option>
                  </select>
                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    maxLength={10}
                    value={consultationForm.phone}
                    onChange={handleConsultationChange}
                    placeholder="Enter phone number"
                    required
                    className="w-[66%] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                {consultationErrors.phone && <p className="text-red-500 text-xs mt-1">{consultationErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="hero-course" className="text-sm font-medium text-gray-600 mb-1 block">
                  Course
                </label>
                <select
                  id="hero-course"
                  name="course"
                  value={consultationForm.course}
                  onChange={handleConsultationChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="">Select Course</option>
                  <option>SAP MM</option>
                  <option>SAP FICO</option>
                  <option>SAP SD</option>
                  <option>SAP ABAP</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={consultationLoading}
                className="mt-1 w-full py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
              >
                {consultationLoading ? "Submitting..." : "Book Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>

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
                <h3 className="text-lg font-bold text-slate-900">Download Brochure</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Submit details to download instantly
                </p>
              </div>
              <button
                onClick={() => setBrochureOpen(false)}
                className="h-8 w-8 rounded-full text-slate-500 hover:bg-slate-100 transition"
                aria-label="Close brochure form"
              >
                ×
              </button>
            </div>

            <div className="p-5">
              {brochureSuccess && (
                <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
                  Submitted successfully! Your brochure download has started.
                </div>
              )}

              <form onSubmit={handleBrochureSubmit} className="grid grid-cols-1 gap-3">
                <div>
                  <label htmlFor="brochure-name" className="text-sm font-medium text-gray-600 mb-1 block">
                    Full Name
                  </label>
                  <input
                    id="brochure-name"
                    name="name"
                    value={brochureForm.name}
                    onChange={handleBrochureChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {brochureErrors.name && <p className="text-red-500 text-xs mt-1">{brochureErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="brochure-email" className="text-sm font-medium text-gray-600 mb-1 block">
                    Email Address
                  </label>
                  <input
                    id="brochure-email"
                    name="email"
                    type="email"
                    value={brochureForm.email}
                    onChange={handleBrochureChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {brochureErrors.email && <p className="text-red-500 text-xs mt-1">{brochureErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="brochure-phone" className="text-sm font-medium text-gray-600 mb-1 block">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={brochureForm.countryCode}
                      onChange={handleBrochureChange}
                      className="w-[34%] border border-gray-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+971">+971 (UAE)</option>
                    </select>
                    <input
                      id="brochure-phone"
                      name="phone"
                      type="tel"
                      maxLength={10}
                      value={brochureForm.phone}
                      onChange={handleBrochureChange}
                      placeholder="Enter phone number"
                      required
                      className="w-[66%] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  {brochureErrors.phone && <p className="text-red-500 text-xs mt-1">{brochureErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="brochure-course" className="text-sm font-medium text-gray-600 mb-1 block">
                    Course
                  </label>
                  <select
                    id="brochure-course"
                    name="course"
                    value={brochureForm.course}
                    onChange={handleBrochureChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="">Select Course</option>
                    <option>SAP MM</option>
                    <option>SAP FICO</option>
                    <option>SAP SD</option>
                    <option>SAP ABAP</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={brochureLoading}
                  className="mt-1 w-full py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
                >
                  {brochureLoading ? "Submitting..." : "Submit & Download Brochure"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}