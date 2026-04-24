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

export default function SAPSDPage() {
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

            <p className="text-gray-600 leading-relaxed">
              <SAP /> Sales and Distribution (SD) manages the complete
              order-to-cash cycle including sales, shipping, billing,
              and customer management within an organization.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg w-full h-64 md:h-full relative overflow-hidden">
            <Image
              src= "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
              alt="SAP SD"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* WHO CAN LEARN */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Who Can Learn?</h2>

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
                className="bg-gray-50 border rounded-xl p-4 text-sm hover:shadow-md transition"
              >
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

        {/* CURRICULUM */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
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
  "Support Project"
].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded-xl p-4 text-sm hover:shadow-md transition"
              >
                {highlightSAP(item)}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center text-white shadow-xl">
          
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Start your SAP SD Career
          </h2>

          <p className="text-sm opacity-90 mb-6">
            Learn sales & distribution with real-time projects
          </p>

          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5">
            Enroll Now →
          </Button>
        </div>

      </div>
      <Footer />
    </div>
  );
}