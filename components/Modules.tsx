"use client";

import React from "react";

const modules = [
  {
    name: "SAP MM",
    full: "Materials Management",
    description: "Learn procurement, inventory management & real-time operations.",
    duration: "45 Days",
    topics: ["Procurement", "Inventory", "Vendor Management"],
    status: "active",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "SAP FICO",
    full: "Finance & Controlling",
    description: "Master financial accounting and cost controlling systems.",
    duration: "45 Days",
    topics: ["GL Accounting", "Cost Centers", "Reporting"],
    status: "active",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v3M11 17v3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M2 11h3M17 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "SAP ABAP",
    full: "Application Programming",
    description: "Develop SAP applications, reports & custom programs.",
    duration: "45 Days",
    topics: ["Reports", "BAPIs", "Custom Programs"],
    status: "active",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polyline points="7,8 3,11 7,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="15,8 19,11 15,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="13" y1="5" x2="9" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "SAP SD",
    full: "Sales & Distribution",
    description: "Sales and distribution processes in SAP.",
    status: "coming",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h16l-1.5 9H4.5L3 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="8" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 2h2l.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "SAP EWM",
    full: "Extended Warehouse Mgmt",
    description: "Warehouse management and logistics handling.",
    status: "coming",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 9l9-7 9 7v10a1 1 0 01-1 1H3a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 20V12h6v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const Modules = () => {
  return (
    <section
      id="modules"
      className="relative py-24 px-4 bg-[#F5F7FA] overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .modules-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 5px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #1d4ed8;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          color: #0a1628;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .section-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: #4a5a75;
          font-size: 1rem;
          line-height: 1.75;
          max-width: 520px;
          margin: 14px auto 0;
        }
        .divider-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 40px 0 28px;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: #e0eaff;
        }
        .divider-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 99px;
          white-space: nowrap;
        }
        .divider-text.available {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1d4ed8;
        }
        .divider-text.soon {
          background: #fefce8;
          border: 1px solid #fde68a;
          color: #92400e;
        }

        /* Active card */
        .module-card {
          background: #fff;
          border: 1.5px solid #e0eaff;
          border-radius: 16px;
          padding: 28px 24px 24px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.05);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .module-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1d4ed8, #60a5fa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .module-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 10px 40px rgba(37,99,235,0.12);
          transform: translateY(-4px);
        }
        .module-card:hover::before {
          opacity: 1;
        }
        .card-icon-wrap {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4ed8;
          margin-bottom: 18px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .module-card:hover .card-icon-wrap {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border-color: transparent;
          color: #fff;
        }
        .card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #0a1628;
          letter-spacing: -0.01em;
        }
        .card-full {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 2px;
          font-weight: 400;
        }
        .card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: #4a5a75;
          line-height: 1.65;
          margin-top: 10px;
          flex: 1;
        }
        .card-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }
        .topic-tag {
          background: #f0f7ff;
          border: 1px solid #dbeafe;
          color: #2563eb;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 4px;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: #64748b;
        }
        .enroll-btn {
          margin-top: 20px;
          width: 100%;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 3px 12px rgba(37,99,235,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .enroll-btn:hover {
          box-shadow: 0 6px 22px rgba(37,99,235,0.38);
          transform: translateY(-1px);
          background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
        }

        /* Coming soon card */
        .module-card-soon {
          background: #fafbff;
          border: 1.5px dashed #c7d9f8;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .module-card-soon:hover {
          border-color: #93c5fd;
          background: #f5f9ff;
        }
        .soon-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fefce8;
          border: 1px solid #fde68a;
          border-radius: 99px;
          padding: 4px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: #92400e;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 14px;
          width: fit-content;
        }
        .soon-icon-wrap {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: #f1f5ff;
          border: 1px solid #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #93c5fd;
          margin-bottom: 18px;
        }
      `}</style>

      {/* BG grid */}
      <div className="modules-grid-bg" />

      {/* Soft blob */}
      <div style={{
        position: "absolute", top: -80, right: -80, width: 400, height: 400,
        background: "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Eyebrow + heading */}
        <div className="section-eyebrow">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3" fill="#2563eb"/>
          </svg>
          Curriculum
        </div>
        <h2 className="section-title">SAP Training Modules</h2>
        <p className="section-sub">
          Choose your specialization and start your SAP journey with industry-focused training.
        </p>

        {/* ── AVAILABLE ── */}
        <div className="divider-label">
          <div className="divider-line" />
          <span className="divider-text available">Available Now</span>
          <div className="divider-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {modules.filter(m => m.status === "active").map((module, i) => (
            <div className="module-card" key={i}>
              <div className="card-icon-wrap">{module.icon}</div>
              <div>
                <div className="card-name">{module.name}</div>
                <div className="card-full">{module.full}</div>
              </div>
              <p className="card-desc">{module.description}</p>
              {"topics" in module && module.topics && (
                <div className="card-topics">
                  {(module.topics as string[]).map((t) => (
                    <span className="topic-tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
              <div className="card-meta">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="#94a3b8" strokeWidth="1.2"/>
                  <path d="M6.5 3.5v3.5l2 2" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Duration: <strong style={{ color: "#1d4ed8" }}>{module.duration}</strong>
              </div>
              <button
                className="enroll-btn"
               onClick={() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("openEnquiry"));
    }
  }}
              >
                Enroll Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* ── COMING SOON ── */}
        <div className="divider-label">
          <div className="divider-line" />
          <span className="divider-text soon">Coming Soon</span>
          <div className="divider-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {modules.filter(m => m.status === "coming").map((module, i) => (
            <div className="module-card-soon" key={i}>
              <div className="soon-icon-wrap">{module.icon}</div>
              <div className="card-name" style={{ color: "#334155" }}>{module.name}</div>
              <div className="card-full">{module.full}</div>
              <p className="card-desc" style={{ marginTop: 10 }}>{module.description}</p>
              <div className="soon-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="3" fill="#f59e0b"/>
                </svg>
                Launching Soon
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Modules;