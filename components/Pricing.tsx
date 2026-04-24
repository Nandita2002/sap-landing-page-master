"use client";

import { useEffect, useState } from "react";

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔥 Listen for Hero button click
  useEffect(() => {
    const open = () => setIsOpen(true);

    window.addEventListener("openEnquiry", open);
    return () => window.removeEventListener("openEnquiry", open);
  }, []);

  // ❌ Prevent background scroll when popup open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...form,
            phone: `${form.countryCode}${form.phone}`,
          }),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", countryCode: "+91" });

        // auto close after success
        setTimeout(() => {
          setIsOpen(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-lg font-bold mb-1">
          Get Free Career Consultation
        </h2>

        <p className="text-xs text-gray-400 mb-4">
          Talk to an expert & get your SAP roadmap
        </p>

        {success ? (
          <div className="text-center py-6">
            <h3 className="text-green-600 font-semibold text-lg mb-2">
              🚀 You&quot;re one step closer!
            </h3>
            <p className="text-sm text-gray-600">
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 flex border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <select
                  value={form.countryCode}
                  onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                  className="px-2.5 py-2 text-sm text-gray-700 border-r bg-gray-100 outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Get Free Consultation →"}
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default FloatingWidget;