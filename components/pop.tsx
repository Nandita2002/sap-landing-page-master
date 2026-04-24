"use client";

import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

// ✅ Social Icons (centered + clickable + brand colors)
const SocialRow = () => (
  <div className="flex justify-center items-center gap-5 mt-2">

    <a href="https://www.instagram.com/rise_infotech/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} color="#E4405F" />
    </a>

    <a href="https://www.facebook.com/people/Rise-Infotech/100089059015353/" target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={20} color="#1877F2" />
    </a>

    <a href="https://x.com/RiseInfotech" target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={20} color="#000000" />
    </a>

    <a href="https://www.linkedin.com/company/rise-infotech/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn size={20} color="#0A66C2" />
    </a>

    <a href="https://www.youtube.com/@rise_infotech" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={20} color="#FF0000" />
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
    pincode: "",
    message: "",
  });

  useEffect(() => {
    const openPopup = () => setOpen(true);
    const timer = setTimeout(openPopup, 3000);
    window.addEventListener("openEnquiry", openPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("openEnquiry", openPopup);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (loading) return;

    if (!form.name || !form.email || !form.phone || !form.pincode) {
      alert("Please fill all required fields");
      return;
    }

    if (form.pincode.length !== 6) {
      alert("Enter valid pincode");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", pincode: "", message: "" });

        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), 2500);
      } else {
        alert("Error: " + (data.message || "Try again"));
      }
    } catch (err) {
      alert("Network error");
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

              {/* Phone + Pincode */}
           <div className="flex gap-2 items-center">

  {/* Phone */}
  <div className="flex-1">
<div className="w-full">
  <PhoneInput
    country={"in"}
    value={form.phone}
    onChange={(phone) => setForm({ ...form, phone })}
    enableSearch={true}
    countryCodeEditable={false}
    containerClass="w-full"
    inputClass="!w-full !h-[44px] !rounded-xl !border !border-slate-200 !pl-14 !text-sm"
    buttonClass="!border-none !bg-transparent"
  />
</div>
  </div>



</div>
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
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
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