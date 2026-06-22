"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
            <span className="text-[10px] font-bold opacity-60">TERMS OF SERVICE</span>
          </div>

          {/* Title block */}
          <div className="pt-8 pb-4 px-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tighter">Terms of Service</h1>
            <p className="text-[10px] font-semibold opacity-60">Last Updated: June 22, 2026</p>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-6 text-xs leading-relaxed text-[#2D2727]/90">
            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">1. Agreement to Terms</h2>
              <p>
                By downloading, accessing, or using the ReeWise mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">2. Educational Use</h2>
              <p>
                ReeWise provides study aids, algorithms, and revision cards specifically designed for computer science and data structures/algorithms. These resources are intended solely for educational and self-study purposes. We do not guarantee employment, academic grading success, or specific testing results.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">3. Account Safety</h2>
              <p>
                You are responsible for maintaining the confidentiality of your Google Authentication login credentials linked to the app. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">4. Prohibited Activities</h2>
              <p>
                You agree not to copy, distribute, or disclose any part of the service in any medium (including automated scraping), interfere with server transmissions, or create user profiles containing offensive or copyright-violating content.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">5. Disclaimer of Warranties & Liability</h2>
              <p>
                ReeWise is provided on an "as is" and "as available" basis. To the full extent permissible by applicable law, we disclaim all warranties, express or implied. We will not be liable for any damages of any kind arising from the use of ReeWise.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">6. Contact</h2>
              <p>
                For any questions regarding these Terms, please contact us at:
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
