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
  "Supply Chain Professionals","Procurement Managers","Inventory Managers",
  "Production Planners","SAP Consultants","Finance Professionals",
  "Career Changers","Students & Graduates",
];

const currItems = [
  "SAP ERP Overview",
  "SAP Architecture",
  "SAP Functional and Technical modules overview",
  "Supply Chain Management and Logistics Overview",
  "Purchasing and Procurement process",
  "SAP System landscape",
  "Enterprise Structure",
  "List of Master data with configurations",
  "Standard Business Process with configurations",
  "Pricing Procedure",
  "Special procurements Business Process",
  "Outline Agreements with configurations",
  "MRP (Material Requirements Planning) Overview",
  "Physical Inventory",
  "Batch Management Process",
  "Stock Transport Order (STO)",
  "Automatic Account Determination (MM-FI)",
  "PO Output Determination",
  "SAP S/4 HANA and Fiori Application",
  "SAP ECC vs SAP S/4 HANA",
  "SPRO Path Vs Easy Access Path",
  "Real time Project Topics",
  "List of SAP Projects overview and Introduction",
  "Activate Methodology",
  "SAP S/4 HANA (On-Premises & Cloud Edition) Overview",
  "TR movements",
  "Different types of Testing",
  "Prepare and Execute Test Scripts",
  "Data Migration",
  "RICEFW Custom Elements",
  "Technical terminologies",
  "Templates-BPML, KDS, FIT-Gap, FSD and User Manuals",
  "Support Project"
];
export default function SAPMMPage() {
  return (
    <div className="bg-white font-sans">

  <Navbar />

  <div className="max-w-6xl mx-auto px-4 py-12 space-y-14 sm:px-6 lg:px-8 mt-8">

    {/* About + Image */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          What is <SAP /> MM?
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {highlightSAP(
            "SAP Materials Management (MM) is a core module of the SAP ERP system, also known as SAP S/4 HANA - Sourcing and Procurement."
          )}
          <br /><br />
          It manages procurement, inventory control, goods receipt, and invoice verification while integrating with Finance (FI), Controlling (CO), Production Planning (PP), and Sales & Distribution (SD).
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md relative">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
          alt="SAP MM"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

    </div>

    {/* Who Can Learn */}
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-100 pb-2">
        Who can learn?
      </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {whoItems.map((item, i) => (
    <div
      key={i}
      className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 
      text-base md:text-lg text-gray-700 shadow-sm"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
      
      <p className="leading-relaxed">
        {highlightSAP(item)}
      </p>
    </div>
  ))}
</div>
    </div>

    {/* Curriculum */}
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-100 pb-2">
        What you will learn
      </h2>

      {/* ✅ Clean vertical list */}
      <div className="space-y-3 mt-6">
        {currItems.map((item, i) => (
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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 md:p-12 text-center text-white shadow-xl">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-2xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Start your <span className="text-blue-100">SAP</span> MM career
        </h2>

        <p className="text-white/80 text-base md:text-lg mb-6">
          Learn from industry experts, work on real-time projects, and get job-ready faster.
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