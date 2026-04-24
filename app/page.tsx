
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Popup from "@/components/pop";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/navbar";
import StickyEnquiry from "@/components/StickyEnquiry";
import Consultation from "@/components/consultation";
import CoursesPage from "./courses/page";
export const metadata = {
  title: "SAP Training in India | SAP MM, FICO, ABAP Course",
  description:
    "Join SAP training with live demo sessions. Learn SAP MM, FICO, ABAP with real-time projects, certification, and placement support.",
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "SAP Training",
            description:
              "SAP training covering MM, FICO, and ABAP with real-time projects.",
            provider: {
              "@type": "Organization",
              name: "Rise Infotech",
              sameAs: "https://riseinfotech.in",
            },
          }),
        }}
      />

      <Popup />

      {/* ✅ FIXED NAVBAR */}
      <Navbar />

      {/* ✅ CONTENT WRAPPER (IMPORTANT) */}
      <main className="pt-16">
        <TopBanner />
        <Hero />
        {/* <Consultation /> */}
        <CoursesPage />
        <Instructor />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
      <StickyEnquiry />
     
    </>
  );
}
