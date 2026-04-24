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

const inputBase =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition placeholder:text-slate-400";

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-xs font-medium text-slate-600 mb-1">
    {children}
  </label>
);

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
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: `${countryCode}${form.phone}`,
          source: "sticky_form",
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message);

      if (data.status === "success") {
        setToast({
          type: "success",
          message:
            "You're all set! Our team will contact you shortly to guide you further.",
        });

        setForm({ name: "", email: "", phone: "", message: "" });
        setCountryCode("+91");
        setOpen(false);
      } else {
        setToast({
          type: "error",
          message: data.message || "Something went wrong",
        });
      }

      setTimeout(() => setToast(null), 3000);
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
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
            className={`bg-white border border-slate-200 shadow-xl ${
              isMobile
                ? "fixed bottom-0 left-0 right-0 rounded-t-2xl"
                : "w-[340px] rounded-2xl"
            }`}
          >
            {/* Header */}
            <div className="bg-blue-600 px-5 py-3.5 flex justify-between items-center">
              <p className="text-white text-sm font-semibold">
                Book your free demo
              </p>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Form */}
            <div className="p-4 flex flex-col gap-3">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputBase}
              />

              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={inputBase}
              />

              <PhoneInput
                country={"in"}
                value={form.phone}
                onChange={(phone) => setForm({ ...form, phone })}
                inputClass="!w-full !h-[42px] !rounded-xl !border !border-slate-200"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className={inputBase}
              />

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2.5 rounded-xl"
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
            className="bg-blue-600 text-white px-5 py-3 rounded-full"
          >
            Enquire now
          </button>

          
        )
        }

       
      </div>
    </>
  );
};

export default StickyEnquiry;