"use client";

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

export default function SAPFICOPage() {
  return (
    <div className="bg-white font-sans">

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 mt-8 sm:px-6 lg:px-8">

        {/* ABOUT + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
              What is <SAP /> FICO?
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              <SAP /> Financial Accounting and Controlling (FICO) is a core <SAP /> ERP module designed to manage financial transactions and cost control. 
              Accounts Payable handles vendor payments, Accounts Receivable manages customer billing, and Controlling (CO) supports budgeting and profitability analysis.
              <br /><br />
              <SAP /> FICO integrates with:
              <br />• FI–MM: Procurement & inventory postings
              <br />• FI–SD: Revenue & receivables
              <br />• FI–PP: Production cost tracking
            </p>
          </div>

          <div className="rounded-2xl shadow-lg w-full h-64 md:h-full relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
              alt="SAP FICO"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* WHO CAN LEARN */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Who Can Learn?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Finance Professionals",
              "SAP Consultants",
              "Business Analysts",
              "Students & Graduates",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded-xl p-4 text-base md:text-lg text-gray-700 transition"
              >
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

       {/* CURRICULUM */}
<div>
  <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
    What You Will Learn
  </h2>

  <div className="space-y-3 mt-6">
    {[
      "SAP ERP Overview",
      "SAP Architecture",
      "SAP Functional and Technical modules overview",
      "SAP -FICO Introduction",
      "SAP System landscape",
      "Enterprise Structure",
      "General Ledger (GL) Accounting",
      "Accounts Payable (AP) and Accounts receivable (AR)",
      "Asset Accounting/Bank Accounting",
      "Cost Element Accounting/ Cost Centre Accounting/ Profit Centre Accounting",
      "Product Cost Controlling/ Profitability Analysis (CO-PA)",
      "Cross functional Module integration with MM, SD, PP, PM, EWM",
      "SAP S/4 HANA and Fiori Application Overview",
      "Real time Project Topics",
      "List of SAP Projects overview and Introduction",
      "Activate Methodology",
      "SAP S/4 HANA (On-Premises & Cloud Edition) Overview",
      "TR movements",
      "Different types of Testing",
      "Prepare and Execute Test Scripts",
      "Data Migration",
      "Enhancements",
      "Technical terminologies",
      "Templates-BPML, KDS, FIT-Gap, FSD and User Manuals",
      "Support Project"
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-3">

        {/* Number */}
        <span className="text-sm font-semibold text-blue-600 min-w-[28px]">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {highlightSAP(item)}
        </p>

      </div>
    ))}
  </div>
</div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center text-white shadow-xl">

          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            Build your <SAP /> Finance Career
          </h2>

          <p className="text-sm md:text-base opacity-90 mb-6">
            Master financial accounting with real-time projects
          </p>

          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5 text-sm font-medium">
            Enroll Now →
          </Button>
        </div>

      </div>

      <Footer />

    </div>
  );
}