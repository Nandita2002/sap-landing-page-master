import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riseinfotech.in"),
  title: "SAP Training | Rise Infotech",
  description: "SAP training with live demos...",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  keywords: [
    "SAP Training",
    "SAP Course",
    "SAP MM Training",
    "SAP FICO Training",
    "SAP ABAP Training",
    "SAP Classes India",
  ],
  authors: [{ name: "Rise Infotech" }],
  openGraph: {
    title: "SAP Training | Rise Infotech",
    description:
      "Learn SAP MM, FICO & ABAP with live demos and real-time projects.",
    url: "https://riseinfotech.in/sap-training",
    siteName: "Rise Infotech",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Training | Rise Infotech",
    description:
      "Join SAP training with live demos and real-time projects.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "h_wMlj2sGLGXcaBLGLlsHqCMa2C--zLd30kJMTOAHPA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        
        {/* Main App */}
        {children}

        {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919110455125?text=Hi,%20I%E2%80%99m%20interested%20in%20SAP%20training%20at%20Rise%20Infotech.%20Please%20share%20course%20details,%20fees,%20and%20upcoming%20batch%20timings."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed right-5 bottom-24 md:bottom-28 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 rounded-full shadow-lg z-[999] flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-white"
  >
    <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.74 6.42L3.2 28.8l6.56-1.72c1.88 1.03 4.01 1.57 6.24 1.57h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.8-12.8-12.8zm0 23.04h-.01c-2.01 0-3.98-.54-5.7-1.56l-.41-.24-3.89 1.02 1.04-3.8-.27-.39a10.34 10.34 0 01-1.59-5.5c0-5.73 4.66-10.39 10.39-10.39 2.77 0 5.38 1.08 7.34 3.05a10.33 10.33 0 013.05 7.34c0 5.73-4.66 10.38-10.39 10.38zm5.7-7.78c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.69.15-.2.3-.79 1-.97 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.59-.35z"/>
  </svg>
</a>

      </body>
    </html>
  );
}