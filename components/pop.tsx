"use client";

import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

const SocialRow = () => (
  <div className="flex justify-center items-center gap-2 mt-2">
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/rise_infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md 
      bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
    >
      <FaInstagram size={14} className="text-white" />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1877F2]"
    >
      <FaFacebookF size={14} className="text-white" />
    </a>

    {/* X */}
    <a
      href="https://x.com/RiseInfotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-black"
    >
      <FaXTwitter size={14} className="text-white" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/rise-infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A66C2]"
    >
      <FaLinkedinIn size={14} className="text-white" />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@rise_infotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FF0000]"
    >
      <FaYoutube size={14} className="text-white" />
    </a>

  </div>
);

const Popup = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (loading) return;

    const cleanPhone = form.phone.replace(/\D/g, "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      alert("Enter your name");
      return;
    }

    if (!emailRegex.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    if (cleanPhone.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: cleanPhone,
          message: form.message.trim(),
          source: "popup",
        }),
      });

      // 🔥 important (Google Script safe parsing)
      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response");
      }

      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });

        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), 2500);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={(e) => {
        if (success) return;
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">

        {/* Header */}
        <div className="bg-slate-50 border-b px-6 py-5 flex justify-between">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase mb-1">
              Admissions Open · May 2026
            </p>
            <h2 className="text-[17px] font-semibold">
              Get 25% off all SAP courses
            </h2>
          </div>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {success ? (
            <div className="text-center py-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">
                🚀 First step done!
              </h3>
              <p className="text-sm text-gray-600">
                We&apos;ll contact you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              <input
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />

              <PhoneInput
                country={"in"}
                value={form.phone}
                onChange={(phone) => setForm({ ...form, phone })}
                enableSearch
                countryCodeEditable={false}
                containerClass="w-full"
                inputClass="!w-full !h-[44px] !rounded-xl !border !border-slate-200 !pl-14 !text-sm"
              />

              <textarea
                rows={3}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit enquiry →"}
              </button>

              <div className="pt-3 border-t">
                <p className="text-xs text-gray-400 text-center mb-2">
                  Follow us
                </p>
                <SocialRow />
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;