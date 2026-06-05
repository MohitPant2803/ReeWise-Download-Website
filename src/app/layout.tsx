import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReeWise — Calm Revision",
  description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app to make placement & internship prep feel lighter.",
  keywords: ["ReeWise", "Placement Prep", "Internship Prep", "DSA Reels", "Calm Revision", "Active Recall"],
  authors: [{ name: "ReeWise" }],
  openGraph: {
    title: "ReeWise — Calm Revision",
    description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app to make placement & internship prep feel lighter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

