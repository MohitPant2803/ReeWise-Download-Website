"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWebDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("ReeWise Account Deletion Request");
    const body = encodeURIComponent(
      `Hi ReeWise Support,\n\nI would like to request the permanent deletion of my ReeWise account and all associated study data.\n\nRegistered Email Address: ${email}\n\nThank you.`
    );
    window.location.href = `mailto:reewisesupport@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            <span className="text-[10px] font-bold opacity-60">DELETE ACCOUNT</span>
          </div>

          {/* Title block */}
          <div className="pt-8 pb-4 px-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tighter">Delete Account</h1>
            <p className="text-[10px] font-semibold opacity-60">Data Ownership & Control</p>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-6 text-xs leading-relaxed text-[#2D2727]/90">
            
            {/* Warning Text */}
            <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl text-red-950/80 font-medium">
              <span className="font-extrabold text-red-800">Warning:</span> Deleting your account is permanent. It will instantly erase your streak metrics, customized study playlists, custom folders, and active progress logs from our sync servers.
            </div>

            {/* Option 1: In-App */}
            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">Option 1: Delete Instantly In-App</h2>
              <p>
                If you have the ReeWise mobile application installed, you can trigger an immediate automated purge:
              </p>
              <ol className="list-decimal pl-4 space-y-1.5 font-medium">
                <li>Ensure you are signed in.</li>
                <li>Tap the <strong>Settings (Gear)</strong> icon on the main feed screen.</li>
                <li>Tap <strong className="text-red-600">Delete Account</strong> in the Account section and confirm.</li>
              </ol>
            </section>

            <hr className="border-[#EADEC9]/20" />

            {/* Option 2: Web Form */}
            <section className="space-y-2.5">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">Option 2: Web Deletion Request</h2>
              <p>
                If you have already uninstalled the application, request a deletion below. Our support team will process your request within 24 hours.
              </p>

              {submitted ? (
                <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-2xl text-green-900/90 text-center font-bold space-y-1">
                  <p>Request Prepared!</p>
                  <p className="text-[10px] font-medium opacity-80">Please send the generated email in your mail client.</p>
                </div>
              ) : (
                <form onSubmit={handleWebDelete} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your registered Google email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#EADEC9] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] text-[#2D2727]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Send Deletion Request Email
                  </button>
                </form>
              )}
            </section>

            <hr className="border-[#EADEC9]/20" />

            {/* Data Purged */}
            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">What data is purged?</h2>
              <p>
                All account profile information, study streak logs, folders, playlists, active session queues, and push tokens. Data is permanently deleted with <strong>0-day retention</strong>.
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
