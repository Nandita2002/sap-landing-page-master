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

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

export default function SAPSDPage() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const [brochureForm, setBrochureForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "SAP SD",
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
          goal: "SAP SD syllabus download",
          source: "popup",
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setBrochureSuccess(true);

        const link = document.createElement("a");

        link.href = "/SAP-SD_syllabus_RiseInfotech.pdf";
        link.download = "SAP-SD_syllabus_RiseInfotech.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setBrochureForm({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          course: "SAP SD",
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
    <div className="bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 mt-8 sm:px-6 lg:px-8">

        {/* ABOUT + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What is <SAP /> SD?
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              <SAP /> Sales and Distribution (SD) manages the complete
              order-to-cash cycle including sales, shipping, billing,
              and customer management within an organization.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg w-full h-64 md:h-full relative overflow-hidden">
            <Image
              src="/sapsd.jpg"
              alt="SAP SD"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* WHO CAN LEARN */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Who Can Learn?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Sales and Marketing Professionals",
              "Distribution Managers",
              "SAP Consultants",
              "Finance Professionals",
              "Students & Graduates",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base md:text-lg text-gray-700 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <p>{highlightSAP(item)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CURRICULUM */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-100 pb-2">
            What You Will Learn
          </h2>

          <div className="space-y-3 mt-6">
            {[
              "SAP ERP Overview",
              "SAP -SD module Introduction",
              "SAP System landscape",
              "SAP Architecture",
              "SAP Functional and Technical modules overview",
              "SAP-SD Enterprise Structure",
              "List of Master data with configurations",
              "Standard Business Process with configurations",
              "Special Business Process with configurations",
              "Sales documents and controls",
              "Pricing Procedure",
              "Basic functions",
              "Credit management",
              "Output determinations",
              "Copy controls",
              "Cross functional module integration with MM, FICO and PP modules",
              "Real time Project Topics",
              "List of SAP Projects overview and Introduction",
              "SAP-SD Configurations",
              "Activate Methodology",
              "SAP S/4 HANA (On-Premises & Cloud Edition) Overview",
              "TR movements",
              "Different types of Testing",
              "Prepare and Execute Test Scripts",
              "Data Migration",
              "Enhancements",
              "RICEFW Custom Elements",
              "SAP S/4 HANA and Fiori app overview",
              "Technical terminologies",
              "Templates-BPML, KDS, FIT-Gap, FSD and User Manuals",
              "Support Project",
            ].map((item, i) => (
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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center text-white shadow-xl">

          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Download <span className="text-blue-100">SAP</span> SD Syllabus
          </h2>

          <p className="text-base md:text-lg opacity-90 mb-6">
            Get the complete syllabus, module breakdown,
            real-time projects and implementation roadmap instantly.
          </p>

          <Button
            onClick={() => setBrochureOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5"
          >
            Download Syllabus →
          </Button>

          <p className="text-xs text-white/70 mt-4">
            PDF syllabus • Updated curriculum • Industry-focused modules
          </p>
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
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Download Syllabus
                </h3>

                <p className="text-sm text-slate-500 mt-1">
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