import type { Metadata } from "next";
import "./globals.css";
import { PHProvider } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://reewise-download-website.vercel.app"),
  title: "ReeWise — Calm Revision",
  description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app to make placement & internship prep feel lighter.",
  keywords: ["ReeWise", "Placement Prep", "Internship Prep", "DSA Reels", "Calm Revision", "Active Recall"],
  authors: [{ name: "ReeWise" }],
  icons: {
    icon: [
      { url: "/og-image.png", type: "image/png" },
    ],
    apple: "/og-image.png",
    shortcut: "/og-image.png",
  },
  openGraph: {
    title: "ReeWise — Calm Revision",
    description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app to make placement & internship prep feel lighter.",
    type: "website",
    url: "https://reewise-download-website.vercel.app",
    siteName: "ReeWise",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 1080,
        alt: "ReeWise — Calm Revision App",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ReeWise — Calm Revision",
    description: "Stop restarting. Start revisiting. ReeWise is a calm, scrollable revision app to make placement & internship prep feel lighter.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <PHProvider>
        <body className="min-h-full flex flex-col font-sans">{children}</body>
      </PHProvider>
    </html>
  );
}

