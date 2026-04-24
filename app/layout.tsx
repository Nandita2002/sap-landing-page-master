import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import PremiumCursor from "@/components/PremiumCursor";
 
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
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <PremiumCursor />
        {children}
      </body>
    </html>
  );
}
