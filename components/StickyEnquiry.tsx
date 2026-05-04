"use client";

import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FormType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FieldName = keyof FormType;

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

const inputBase =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition placeholder:text-slate-400";

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-xs font-medium text-slate-600 mb-1">
    {children}
  </label>
);

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

const StickyEnquiry: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openEnquiry", handler);
    return () => window.removeEventListener("openEnquiry", handler);
  }, []);

  useEffect(() => {
    const hideOnMobileMenuOpen = () => {
      if (window.innerWidth < 768) setOpen(false);
    };
    window.addEventListener("mobileMenuToggle", hideOnMobileMenuOpen);
    return () => window.removeEventListener("mobileMenuToggle", hideOnMobileMenuOpen);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as FieldName;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

 const handleSubmit = async () => {
  if (loading) return;

  setLoading(true);

  try {
    const cleanPhone = form.phone.replace(/\D/g, "");

    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      // ❌ NO headers
      body: JSON.stringify({
        ...form,
        phone: `${countryCode}${cleanPhone}`,
        source: "sticky_form",
      }),
    });

    // ✅ SAFE PARSE
    const text = await res.text();
    const data = JSON.parse(text);

    if (data.status === "success") {
      setToast({
        type: "success",
        message:
          "You're all set! Our team will contact you shortly.",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
      setCountryCode("+91");
      setOpen(false);
    } else {
      setToast({
        type: "error",
        message: "Something went wrong",
      });
    }

    setTimeout(() => setToast(null), 3000);

  } catch (err) {
    setToast({
      type: "error",
      message: "Network error. Try again.",
    });

    setTimeout(() => setToast(null), 3000);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {open && isMobile && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}

      {toast && (
        <div className="fixed top-5 right-5 z-[99999]">
          <div
            className={`px-4 py-3 rounded-xl shadow-lg text-sm flex gap-2 ${
              toast.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3">
  {open && (
    <div
      className={`bg-white border border-slate-100 shadow-2xl ${
        isMobile
          ? "fixed bottom-0 left-0 right-0 rounded-t-3xl"
          : "w-[340px] rounded-2xl"
      }`}
    >
      {/* Header */}
      <div className="bg-blue-600 px-5 py-4 flex justify-between items-center rounded-t-2xl">
        <p className="text-white text-sm font-semibold tracking-wide">
          Book your free demo
        </p>
        <button
          onClick={() => setOpen(false)}
          className="text-white text-lg hover:opacity-80 transition"
        >
          ✕
        </button>
      </div>

      {/* Form */}
      <div className="p-5 flex flex-col gap-3">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full h-[42px] px-3 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full h-[42px] px-3 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <PhoneInput
          country={"in"}
          value={form.phone}
          onChange={(phone) => {
            const clean = phone.replace(/\D/g, "");
            setForm({ ...form, phone: clean });
          }}
          inputClass="!w-full !h-[42px] !rounded-xl !border !border-slate-200 focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 !outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full min-h-[80px] px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 active:scale-[0.98] transition"
        >
          Submit
        </button>

        <SocialRow />
      </div>
    </div>
  )}

  {!open && (
    <button
      onClick={() => setOpen(true)}
      className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 active:scale-95 transition"
    >
      Enquire now
    </button>
  )}
</div>
    </>
  );
};

export default StickyEnquiry;
