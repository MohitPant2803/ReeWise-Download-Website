import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReeWise — Calm Revision for IIT Kharagpur",
  description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app built by a KGPian for KGPians to make placement & internship prep feel lighter.",
  keywords: ["ReeWise", "IIT Kharagpur", "KGP", "CDC Preparation", "DSA Reels", "Calm Revision", "Active Recall"],
  authors: [{ name: "KGPian" }],
  openGraph: {
    title: "ReeWise — Calm Revision for IIT Kharagpur",
    description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app built by a KGPian for KGPians to make placement & internship prep feel lighter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

