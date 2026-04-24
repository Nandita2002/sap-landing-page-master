"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const SAP = () => <span className="text-blue-600 font-semibold">SAP</span>;

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

export default function SAPABAPPage() {
  return (
    <div className="bg-white font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 sm:px-6 lg:px-8 mt-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              What is <SAP />-ABAP?
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="SAP ABAP course module illustration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-100 pb-2">
            Who can learn?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {whoItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-xl px-4 py-3 text-sm text-gray-700 transition"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-2">
            What will you learn?
          </h2>
          <p className="text-sm text-gray-500 mb-5">Course module illustration</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {learnItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-4 py-3 text-sm text-gray-700 transition"
              >
                <span className="text-[11px] font-medium text-blue-600 bg-blue-100 rounded px-1.5 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 md:p-12 text-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Start your <span className="text-blue-100">SAP</span> ABAP career
            </h2>

            <p className="text-white/80 text-sm md:text-base mb-6">
              Build job-ready ABAP development skills with practical,
              real-world implementation scenarios.
            </p>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5 text-sm font-medium shadow-md">
              Enroll Now →
            </Button>

            <p className="text-xs text-white/60 mt-4">
              Limited seats • Next batch filling fast
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
