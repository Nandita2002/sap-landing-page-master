"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const courses = [
  {
    title: "SAP MM",
    subtitle: "Materials Management",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    duration: "6–8 Weeks",
    level: "Beginner to Advanced",
    desc: "Procurement, inventory & supply chain processes",
    path: "/courses/sap-mm",
  },
  {
    title: "SAP SD",
    subtitle: "Sales & Distribution",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    duration: "6–8 Weeks",
    level: "Beginner to Advanced",
    desc: "Order-to-cash, sales & billing workflows",
    path: "/courses/sap-sd",
  },
  {
    title: "SAP FICO",
    subtitle: "Finance & Controlling",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    duration: "8–10 Weeks",
    level: "Intermediate to Advanced",
    desc: "Financial accounting & cost management",
    path: "/courses/sap-fico",
  },
  {
    title: "SAP ABAP",
    subtitle: "Advanced Business Application Programming",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    duration: "8–10 Weeks",
    level: "Beginner to Advanced",
    desc: "ABAP coding for reports, interfaces, forms & enhancements",
    path: "/courses/sap-abap",
  },
];

export default function CoursesPage() {
  const router = useRouter();

  return (
    <section
      id="courses"
      className="relative min-h-screen px-4 py-14 md:py-20 bg-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-60 w-60 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-blue-700 uppercase mb-4">
            Specialized SAP Modules
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            SAP ERP Courses
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Choose the right SAP module based on your career path and learn
            through hands-on implementation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 items-stretch">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => router.push(course.path)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.16)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="overflow-hidden relative aspect-[16/9] w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow text-center">
                <h3 className="text-[1.55rem] font-extrabold text-slate-900 leading-tight">
                  {course.title}
                </h3>
                <p className="text-[1.08rem] font-semibold text-slate-900 mt-2 min-h-[72px]">
                  ({course.subtitle})
                </p>
                <Button
                  variant="gradient"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(course.path);
                  }}
                  className="mt-auto w-full px-6 py-2.5 text-sm"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/courses/curriculum"
            className="text-blue-700 hover:text-blue-800 hover:underline font-semibold text-sm"
          >
            Explore complete course curriculum →
          </Link>
        </div>
      </div>
    </section>
  );
}