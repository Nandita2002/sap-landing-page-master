"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  review: string;
};

const testimonials: Testimonial[] = [
  { name: "Teja Dommaraju", role: "Google Review", review: "Training is very practical and industry-oriented with real-time examples and hands-on experience." },
  { name: "Purnima", role: "Google Review", review: "Concepts are explained clearly using real-time scenarios and system demonstrations." },
  { name: "Snehal Pargaonkar", role: "Google Review", review: "Helped me transition into SAP consulting with structured learning and clear guidance." },
  { name: "Shilpa Basari", role: "Google Review", review: "Very informative training. Concepts were explained clearly and worth the experience." },
  { name: "Soumya K", role: "Google Review", review: "They don't just teach SAP—they teach you how to think like a consultant." },
  { name: "Hareesha RH", role: "Google Review", review: "Excellent institute with knowledgeable trainers and strong practical exposure." },
  { name: "Preethi Gowda", role: "Google Review", review: "Supportive trainers and clear explanations from basics to project-level learning." },
  { name: "Manjunath Goudar", role: "Google Review", review: "Covered fundamentals to mock interviews with great clarity and support." },
  { name: "Vadiraj Kulkarni", role: "Google Review", review: "Highly experienced trainers with real-time industry examples." },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const allTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        slider.scrollLeft += 1;

        const center = slider.scrollLeft + slider.offsetWidth / 2;
        const cards = slider.querySelectorAll<HTMLElement>(".t-card");
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
          const cx = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(center - cx);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setIsPaused(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto px-5">
        <h2 className="text-[clamp(24px,4vw,38px)] font-semibold text-[#0a1628] leading-tight">
          Trusted by <span className="text-blue-600">1000+ students</span>
        </h2>

        <div className="mt-4 inline-flex items-center gap-2 border border-blue-100 rounded-full px-4 py-2 bg-white shadow-sm">
          <Image
            src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
            alt="Google"
            width={16}
            height={16}
          />
          <span className="text-amber-400 text-sm tracking-wide">★★★★★</span>
          <span className="text-sm font-medium text-[#0a1628]">4.9 / 5 Google rating</span>
        </div>

        <p className="mt-3 text-sm text-gray-500">
          Real reviews from professionals who transitioned into SAP careers.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="absolute left-0 top-0 h-full w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto px-5 sm:px-20 pb-6 pt-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {allTestimonials.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className={`t-card flex-shrink-0 transition-all duration-300 ${
                  isActive ? "sm:scale-[1.03] opacity-100" : "sm:scale-[0.94] opacity-75"
                }`}
              >
                <div
                  className={`bg-white rounded-2xl p-5 sm:p-6 flex flex-col gap-4 w-[85vw] max-w-[320px] sm:w-[300px] md:w-[320px] min-h-[240px] transition-all duration-300 ${
                    isActive
                      ? "border border-blue-200 shadow-[0_10px_28px_rgba(37,99,235,0.14)]"
                      : "border border-gray-100 shadow-sm"
                  }`}
                >
                <div className="flex gap-1">
  {Array.from({ length: 5 }).map((_, j) => (
    <svg
      key={j}
      className="w-5 h-5 text-amber-400 drop-shadow-sm"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.025 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.959z" />
    </svg>
  ))}
</div>

                  <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-4">
                    &quot;{item.review}&quot;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 text-xs font-medium flex items-center justify-center flex-shrink-0">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0a1628]">{item.name}</p>
                      <p className="text-xs text-blue-500 mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 text-center px-5">
        <a
          href="https://www.google.com/search?sca_esv=81978db0d0913d93&rlz=1C1YTUH_enIN1060IN1060&sxsrf=ANbL-n7os2l-0uk3ejOKgDSBaJQIjKdvw:1776073334264&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZxCFEPkTRWInxxXkfUhG9fyS5WBE_VsfODKz4VXXcICT4ibXqZKceNQWCESWxiBtd8xv-VD0nYopIM2aKHc74-qEyty&q=Rise+Infotech+Reviews&sa=X&ved=2ahUKEwjXhLzhxOqTAxUKU2wGHRMnBvQQ0bkNegQINxAH&biw=1536&bih=730&dpr=1.25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-7 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 shadow-[0_10px_24px_rgba(37,99,235,0.2)]"
        >
          View more reviews
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className="text-xs text-gray-400 mt-2">
          See what our students are saying
        </p>
      </div>

    </section>
  );
}