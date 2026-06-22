"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] font-sans antialiased text-[#2D2727] flex justify-center py-10 px-4 relative overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent blur-[90px] top-[10%] left-[-10%] pointer-events-none -z-10" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#A78BFA]/5 to-transparent blur-[90px] bottom-[10%] right-[-10%] pointer-events-none -z-10" />

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
            <Shield className="w-3.5 h-3.5 text-[#8B5CF6]" />
            Privacy Policy
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/assets/icon213.png" alt="ReeWise Logo" className="w-12 h-12 rounded-xl object-cover border border-black/5" />
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none">ReeWise</h1>
            <p className="text-[10px] font-semibold opacity-60 mt-1">Last Updated: June 22, 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-[#2D2727]/90">
          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">1. Overview</h2>
            <p>
              At ReeWise, we are committed to providing a calm, focused learning environment for computer science revision. We believe in transparency and data minimalization. This Privacy Policy explains what data we collect, how it is stored and synced, and how you can exercise full control over your personal information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">2. Data Collection & Transmission</h2>
            <p>
              ReeWise operates on a <strong>Local-First hybrid architecture</strong>. This means the majority of your study progress is saved directly on your device. However, to synchronize your library and streak metrics across multiple platforms, we transmit and store specific data points:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>
                <strong>Google Authentication Details:</strong> When you connect your Google Account, we receive your unique Google ID, email address, name, and profile photo URL. This information is required for secure account management and sync partitioning.
              </li>
              <li>
                <strong>App Activity & Telemetry:</strong> We collect aggregated numbers of card swipes, scrolls, and active recall loop completions. This is synced to update your study streak counts and display learning statistics.
              </li>
              <li>
                <strong>Custom Study Library Data:</strong> Any folders, custom revision decks, or playlist groups you create are securely synchronized and backed up on our server so they survive app reinstalls.
              </li>
              <li>
                <strong>Push Notification Tokens:</strong> If you opt-in for streak reminders, we store a secure Expo/Firebase push token to deliver local notifications.
              </li>
              <li>
                <strong>Installation & Device Identifiers:</strong> A locally generated UUID is sent during synchronization to resolve merge updates and prevent session collisions.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">3. Data Sharing & Security</h2>
            <p>
              We prioritize the security of your data. We do <strong>not</strong> sell, share, rent, or trade your personal information with third parties.
            </p>
            <p>
              All communication between the mobile application and our servers is encrypted in transit using <strong>Secure Sockets Layer (SSL/HTTPS)</strong>. User databases are stored in secure cloud nodes with strict access controls.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">4. User Rights & Account Deletion</h2>
            <p>
              We believe you should have complete ownership of your data. You can delete your account and clear all stored data at any time:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>
                <strong>In-App Deletion:</strong> Go to the settings screen in the mobile app, tap "Delete Account", and confirm. This triggers a cascading purge that instantly deletes your profile and all study history from our servers.
              </li>
              <li>
                <strong>Web-Based Deletion Request:</strong> If you have already uninstalled the application, you can submit a deletion request online via our dedicated portal: <Link href="/delete-account" className="text-[#8B5CF6] font-bold hover:underline">ree-wise-download-website.vercel.app/delete-account</Link> or email us directly at <a href="mailto:reewisesupport@gmail.com" className="text-[#8B5CF6] font-bold hover:underline">reewisesupport@gmail.com</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">5. Contact Information</h2>
            <p>
              If you have any questions, feedback, or concerns regarding your privacy or data safety on ReeWise, please reach out to us:
            </p>
            <p className="font-semibold text-xs mt-1">
              Email Support: <a href="mailto:reewisesupport@gmail.com" className="text-[#8B5CF6] hover:underline">reewisesupport@gmail.com</a>
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
