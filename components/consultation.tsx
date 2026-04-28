"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

// Social Icons
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

const ConsultationForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    message: "",
  });

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

    // ✅ Correct phone formatting (safe)
    let formattedPhone = form.phone;
    if (form.phone.length > 10) {
      const dialCode = form.phone.slice(0, form.phone.length - 10);
      const number = form.phone.slice(-10);
      formattedPhone = `+${dialCode} ${number}`;
    }

    setLoading(true);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          phone: formattedPhone,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        alert("Submitted successfully");
        setForm({ name: "", email: "", phone: "", pincode: "", message: "" });
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
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow border border-slate-200">

      <h2 className="text-lg font-semibold mb-4 text-center">
        Book a Consultation
      </h2>

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

          <input
            placeholder="Pincode"
            value={form.pincode}
            onChange={(e) =>
              setForm({
                ...form,
                pincode: e.target.value.replace(/\D/g, "").slice(0, 6),
              })
            }
            maxLength={6}
            className={`${inputClass} max-w-[130px]`}
          />
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
    </div>
  );
};

export default ConsultationForm;
