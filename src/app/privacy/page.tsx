"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-calm-ivory font-sans antialiased selection:bg-brand-lavender/30 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-md bg-[#FAF9F5] doodle-bg text-[#2D2727] min-h-screen flex flex-col justify-between border-x border-[#EADEC9]/40 shadow-xs relative">
        
        {/* Ambient blobs */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent blur-[60px] top-[10%] left-[-10%] pointer-events-none -z-10" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#A78BFA]/5 to-transparent blur-[60px] bottom-[20%] right-[-10%] pointer-events-none -z-10" />

        <div>
          {/* Header */}
          <div className="pt-10 pb-4 px-6 flex items-center justify-between border-b border-[#EADEC9]/20">
            <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] hover:opacity-85 transition-all">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <span className="text-[10px] font-bold opacity-60">PRIVACY POLICY</span>
          </div>

          {/* Title block */}
          <div className="pt-8 pb-4 px-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tighter">Privacy Policy</h1>
            <p className="text-[10px] font-semibold opacity-60">Last Updated: June 22, 2026</p>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-6 text-xs leading-relaxed text-[#2D2727]/90">
            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">1. Overview</h2>
              <p>
                At ReeWise, we are committed to providing a calm, focused learning environment for computer science revision. We believe in transparency and data minimalization. This Privacy Policy explains what data we collect, how it is stored and synced, and how you can exercise full control over your personal information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">2. Data Collection & Syncing</h2>
              <p>
                ReeWise operates on a Local-First hybrid architecture. This means the majority of your study progress is saved directly on your device. However, to synchronize your library and streak metrics across platforms, we transmit and store specific data points:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Google Sign-In:</strong> Your unique Google ID, email, name, and profile picture URL to handle user authentication.</li>
                <li><strong>App Activity & Telemetry:</strong> Aggregated numbers of card swipes, scrolls, and streak counts to display revision statistics.</li>
                <li><strong>Custom Library Data:</strong> Playlists, folders, or custom decks you build, synchronized securely to survive app reinstalls.</li>
                <li><strong>Push Notification Tokens:</strong> Expo/Firebase notification tokens to send streak reminders.</li>
                <li><strong>Device Identifiers:</strong> A locally generated UUID to resolve merge updates and prevent session collisions.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">3. Security & Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information with third parties. All traffic is encrypted in transit using Secure Sockets Layer (SSL/HTTPS).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">4. Account Deletion Rights</h2>
              <p>
                You can delete your account and delete all stored data at any time:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>In-App:</strong> Under settings in the mobile application, select "Delete Account" and confirm. All records are instantly and permanently purged.</li>
                <li><strong>Web-based Request:</strong> Submit a request via our <Link href="/delete-account" className="text-[#8B5CF6] font-bold hover:underline">Deletion Page</Link> or email us at <a href="mailto:reewisesupport@gmail.com" className="text-[#8B5CF6] font-bold hover:underline">reewisesupport@gmail.com</a>.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">5. Contact Information</h2>
              <p>
                If you have questions regarding your data, reach out directly:
              </p>
              <p className="font-bold mt-1 text-[#8B5CF6]">
                reewisesupport@gmail.com
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-[#EADEC9]/40 bg-[#F5F3FF]/30 text-center space-y-2">
          <div className="flex justify-center items-center gap-2">
            <img src="/assets/icon213.png" alt="ReeWise Logo" className="w-5 h-5 rounded-lg object-cover border border-black/5" />
            <span className="font-bold text-[11px]">ReeWise</span>
          </div>
          <div className="text-[9px] opacity-40">
            &copy; {new Date().getFullYear()} ReeWise. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}
