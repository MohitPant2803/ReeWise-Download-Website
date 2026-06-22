"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2, ShieldAlert, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWebDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Trigger mailto client as standard compliant flow
    const subject = encodeURIComponent("ReeWise Account Deletion Request");
    const body = encodeURIComponent(
      `Hi ReeWise Support,\n\nI would like to request the permanent deletion of my ReeWise account and all associated study data.\n\nRegistered Email Address: ${email}\n\nThank you.`
    );
    window.location.href = `mailto:reewisesupport@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] font-sans antialiased text-[#2D2727] flex justify-center py-10 px-4 relative overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-red-500/5 to-transparent blur-[90px] top-[10%] left-[-10%] pointer-events-none -z-10" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent blur-[90px] bottom-[10%] right-[-10%] pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#FAF9F5] border border-[#EADEC9]/40 rounded-3xl p-6 sm:p-8 shadow-xs relative"
      >
        {/* Navigation Header */}
        <div className="flex items-center justify-between border-b border-[#EADEC9]/20 pb-4 mb-6">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] hover:opacity-85 transition-all">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-1.5 opacity-60 text-xs font-semibold">
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
            Delete Account
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/assets/icon213.png" alt="ReeWise Logo" className="w-12 h-12 rounded-xl object-cover border border-black/5" />
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none">Account Deletion</h1>
            <p className="text-[10px] font-semibold opacity-60 mt-1">Data Ownership & Control Center</p>
          </div>
        </div>

        {/* Informational Alert Box */}
        <div className="bg-red-50 border border-red-200/50 rounded-2xl p-4 mb-6 flex gap-3 text-xs text-red-900">
          <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Permanent Action:</span> Deleting your account will completely purge your user profile, active streaks, custom playlist decks, and study logs from our systems. This action is instantaneous and cannot be undone.
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-sm leading-relaxed text-[#2D2727]/90">
          <section className="space-y-3">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">Option 1: In-App Deletion (Instant & Automated)</h2>
            <p>
              If you still have the ReeWise mobile application installed on your device, we highly recommend deleting your account from within the app:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs">
              <li>Open the <strong>ReeWise</strong> app and ensure you are logged in.</li>
              <li>Tap the <strong>Settings (Gear)</strong> icon on the home screen.</li>
              <li>Under the <strong>Account</strong> section, tap the <strong className="text-red-500">Delete Account</strong> button.</li>
              <li>Confirm the deletion inside the pop-up warning dialog.</li>
            </ol>
            <p className="text-xs opacity-75">
              This method communicates directly with our backend database to perform an immediate cascading purge of all your user records.
            </p>
          </section>

          <hr className="border-[#EADEC9]/20" />

          <section className="space-y-3">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">Option 2: Web Deletion Request (If App is Uninstalled)</h2>
            <p>
              If you have already uninstalled the application, you can submit an account deletion request using the form below. Once initiated, our support team will verify and process your deletion within 24 hours.
            </p>

            {submitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200/50 rounded-2xl p-5 text-center text-xs text-green-950 space-y-2"
              >
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" />
                <p className="font-bold text-sm">Request Prepared!</p>
                <p>We've launched your mail client. Please click "Send" to deliver the request to <strong>reewisesupport@gmail.com</strong>.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="mt-2 text-xs text-[#8B5CF6] font-bold underline cursor-pointer"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleWebDelete} className="space-y-3 mt-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your registered Google email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#F5F3EF] border border-[#EADEC9] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] text-[#2D2727]"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    Generate Deletion Request
                  </button>
                </div>
                <p className="text-[10px] opacity-60">
                  Clicking the button will open your default email client pre-filled with the deletion request.
                </p>
              </form>
            )}
          </section>

          <hr className="border-[#EADEC9]/20" />

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">What Data is Purged?</h2>
            <p>
              To satisfy our privacy standards, the deletion operation executes a comprehensive backend clean up of the following data segments:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li><strong>User Account Details:</strong> Name, email, Google-linked profile photo.</li>
              <li><strong>Study Streaks & Metrics:</strong> Swipes, scroll counts, cards active status, daily check-in streaks.</li>
              <li><strong>Personalized Playlists:</strong> Any custom lists and folders created for active recall.</li>
              <li><strong>Device Telemetry:</strong> Push notification tokens and device installation UUIDs.</li>
            </ul>
            <p className="text-xs font-semibold mt-2">
              Retention period: <strong>0 days (immediate, permanent deletion)</strong>. There is no recovery window.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-[#EADEC9]/20 pt-4 mt-8 text-center text-[10px] opacity-50 font-semibold">
          © {new Date().getFullYear()} ReeWise. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
