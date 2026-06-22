"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
            <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
            Terms of Service
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
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">1. Agreement to Terms</h2>
            <p>
              By downloading, accessing, or using the ReeWise mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">2. Educational Use</h2>
            <p>
              ReeWise provides study aids, algorithms, and revision cards specifically designed for computer science and data structures/algorithms. These resources are intended solely for educational and self-study purposes. We do not guarantee employment, academic grading success, or specific testing results.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">3. Account Registration & Safety</h2>
            <p>
              You are responsible for maintaining the confidentiality of your Google Authentication login credentials linked to the app. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">4. Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Copying, distributing, or disclosing any part of the service in any medium, including by any automated or non-automated "scraping".</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
              <li>Taking any action that imposes, or may impose at our sole discretion, an unreasonable or disproportionately large load on our infrastructure.</li>
              <li>Creating user profiles or custom study decks containing offensive, abusive, or copyright-violating content.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">5. Disclaimer of Warranties & Liability</h2>
            <p>
              ReeWise is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the service, or the information, content, or materials included therein.
            </p>
            <p>
              To the full extent permissible by applicable law, we disclaim all warranties, express or implied. We will not be liable for any damages of any kind arising from the use of ReeWise, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate the date of the latest update at the top of this document.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black tracking-tight text-[#8B5CF6]">7. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at:
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
