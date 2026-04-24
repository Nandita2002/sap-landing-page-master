"use client";

import React from "react";

const sessions = [
  {
    title: "SAP MM Demo",
    time: "7:00 PM",
    day: "Today",
    type: "Weekday",
    highlight: true,
  },
  {
    title: "SAP ABAP Demo",
    time: "11:00 AM",
    day: "Saturday",
    type: "Weekend",
  },
  {
    title: "SAP FICO Demo",
    time: "6:00 PM",
    day: "Wednesday",
    type: "Weekday",
  },
];

const DemoSessions = () => {
  return (
    <section id="demo" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Upcoming SAP Demo Sessions
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Join live demo sessions and experience real-time SAP training before enrolling.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition ${
                session.highlight ? "border-orange-500" : ""
              }`}
            >
              
              {/* Title */}
              <h3 className="text-xl font-semibold">
                {session.title}
              </h3>

              {/* Live Badge */}
              {session.highlight && (
                <span className="inline-block mt-2 text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
                  Live Today
                </span>
              )}

              {/* Time */}
              <p className="mt-4 text-gray-600">
                🕒 {session.time}
              </p>

              {/* Day */}
              <p className="text-gray-600">
                📅 {session.day} ({session.type})
              </p>

              {/* CTA */}
              <button onClick={() => window.open("https://wa.me/916361589943", "_blank")} className="mt-4 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300 w-full sm:w-auto">
                Join Now
              </button>

              <p className="text-sm text-red-500 mt-2">
  Limited seats available
</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DemoSessions;