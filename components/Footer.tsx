"use client";

import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 py-14 px-4 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold tracking-wide">Rise Infotech</h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Providing industry-ready SAP training with real-time projects, mentorship,
            and career-focused guidance to help you succeed.
          </p>

          <div className="flex gap-4 mt-5 items-center">
            <a
              href="https://www.instagram.com/rise_infotech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rise Infotech Instagram"
              className="text-slate-500 hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rise Infotech Facebook"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://x.com/RiseInfotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rise Infotech X"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/rise-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rise Infotech LinkedIn"
              className="text-slate-500 hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.youtube.com/@rise_infotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rise Infotech YouTube"
              className="text-slate-500 hover:text-red-500 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Quick Links</h3>
          <ul className="text-slate-600 text-sm space-y-2">
            <li><a href="#courses" className="hover:text-slate-900 transition">Courses</a></li>
            <li><a href="#consultation" className="hover:text-slate-900 transition">Book Demo</a></li>
            <li><a href="#instructor" className="hover:text-slate-900 transition">Instructor</a></li>
            <li><a href="#faq" className="hover:text-slate-900 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Contact</h3>

          <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
            <FaPhoneAlt size={14} className="text-blue-600" />
            <a href="tel:+919110455125" className="hover:text-slate-900 transition">+91-9110455125</a>
          </div>

          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <FaEnvelope size={14} className="text-blue-600" />
            <a href="mailto:info@riseinfotech.in" className="hover:text-slate-900 transition">info@riseinfotech.in</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6 text-center pb-24 md:pb-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Rise Infotech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;