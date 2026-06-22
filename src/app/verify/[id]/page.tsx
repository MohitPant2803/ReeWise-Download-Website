"use client";

import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Copy, Check, AlertCircle } from "lucide-react";
import Link from "next/link";

interface CertificateData {
  id: string;
  name: string;
  org: string;
  role: string;
  duration: string;
  status: string;
  issueDate: string;
  issuedBy: string;
  issuedByTitle: string;
}

const CERTIFICATES_DB: Record<string, CertificateData> = {
  "RW-INT-2026-001": {
    id: "RW-INT-2026-001",
    name: "Komal Godara",
    org: "ReeWise",
    role: "Product Management Intern",
    duration: "10 May 2026 – 18 June 2026",
    status: "Verified",
    issueDate: "22 June 2026",
    issuedBy: "Mohit",
    issuedByTitle: "Founder, ReeWise"
  }
};

// Ambient blob shape helper
function WatercolorBlob({ index }: { index: number }) {
  const animateParams = [
    { x: [0, 15, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.1, 0.9, 1] },
    { x: [0, -20, 20, 0], y: [0, 15, -20, 0], scale: [1, 0.95, 1.05, 1] }
  ][index % 2];

  const gradientClass = index % 2 === 0 
    ? "from-[#8B5CF6]/10 to-transparent" 
    : "from-[#A78BFA]/10 to-transparent";

  return (
    <motion.div
      animate={animateParams}
      transition={{
        duration: 12 + index * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr ${gradientClass} blur-[60px] pointer-events-none -z-10`}
      style={{
        left: index % 2 === 0 ? "-15%" : "auto",
        right: index % 2 !== 0 ? "-15%" : "auto",
        top: index === 0 ? "10%" : "55%"
      }}
    />
  );
}

export default function CertificateVerificationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [copied, setCopied] = useState(false);

  const certData = CERTIFICATES_DB[id];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-calm-ivory font-sans antialiased selection:bg-brand-lavender/30 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-md bg-[#FAF9F5] doodle-bg text-[#2D2727] min-h-screen flex flex-col justify-between border-x border-[#EADEC9]/40 shadow-xs relative">
        
        {/* Ambient decorative blobs */}
        <WatercolorBlob index={0} />
        <WatercolorBlob index={1} />

        <div>
          {/* Header */}
          <div className="pt-8 pb-4 px-6 flex items-center justify-between border-b border-[#EADEC9]/25">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 4 }}
                src="/assets/icon213.png" 
                alt="ReeWise Logo" 
                className="w-7 h-7 rounded-lg object-cover shadow-sm border border-black/5"
              />
              <span className="font-extrabold text-sm tracking-tight text-[#2D2727] group-hover:text-[#8B5CF6] transition-colors">
                ReeWise
              </span>
            </Link>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/5 px-2 py-0.5 rounded-full border border-[#8B5CF6]/15">
              <ShieldCheck className="w-3 h-3" />
              SECURED
            </div>
          </div>

          {/* Page Content */}
          <div className="px-6 py-8">
            {certData ? (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Status Section */}
                <div className="text-center space-y-2 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                    className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-xs"
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </motion.div>
                  <div className="space-y-0.5">
                    <h2 className="text-xl font-black tracking-tight text-[#2D2727]">
                      Internship Verified
                    </h2>
                    <p className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">
                      Official ReeWise Record
                    </p>
                  </div>
                </div>

                {/* Certificate Details Card */}
                <div className="bg-white/75 backdrop-blur-xs border border-[#EADEC9]/40 rounded-3xl p-5 shadow-xs space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.02] rounded-full blur-xl pointer-events-none" />
                  
                  {/* Decorative corner borders */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#EADEC9]" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#EADEC9]" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#EADEC9]" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#EADEC9]" />

                  <div className="space-y-3.5 divide-y divide-[#EADEC9]/20 text-[11px]">
                    
                    <div className="flex justify-between items-start pt-0">
                      <span className="font-semibold opacity-60">Certificate ID</span>
                      <span className="font-mono font-bold text-right text-[#8B5CF6]">{certData.id}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Issued To</span>
                      <span className="font-extrabold text-right">{certData.name}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Organization</span>
                      <span className="font-bold text-right">{certData.org}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Role</span>
                      <span className="font-extrabold text-right text-[#8B5CF6]">{certData.role}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Duration</span>
                      <span className="font-bold text-right">{certData.duration}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Issue Date</span>
                      <span className="font-bold text-right">{certData.issueDate}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Status</span>
                      <span className="font-bold text-right text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        {certData.status}
                      </span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="font-semibold opacity-60">Issued By</span>
                      <div className="text-right">
                        <div className="font-extrabold">{certData.issuedBy}</div>
                        <div className="text-[9px] opacity-60">{certData.issuedByTitle}</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCopyLink}
                    className="w-full py-3 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied Link!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Verification Link
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-[10px] text-center opacity-50 leading-relaxed max-w-[280px] mx-auto pt-2">
                  This document serves as secure digital verification that the recipient successfully completed their internship.
                </p>

              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 pt-10"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center border border-red-500/20 mx-auto">
                  <AlertCircle className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-black tracking-tight text-[#2D2727]">
                    Certificate Not Found
                  </h2>
                  <p className="text-xs opacity-65 leading-relaxed max-w-[240px] mx-auto">
                    The requested Certificate ID is invalid or does not exist in our verification database.
                  </p>
                </div>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] hover:opacity-85 transition-all bg-[#8B5CF6]/5 px-4 py-2.5 rounded-xl border border-[#8B5CF6]/15"
                >
                  Go to Homepage
                </Link>
              </motion.div>
            )}
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
