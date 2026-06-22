"use client";

import React, { use, useState } from "react";
import { ShieldCheck, Copy, Check, AlertCircle } from "lucide-react";
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

// Ambient static blob shape helper (no animation)
function WatercolorBlob({ index }: { index: number }) {
  const gradientClass = index % 2 === 0 
    ? "from-[#8B5CF6]/10 to-transparent" 
    : "from-[#A78BFA]/10 to-transparent";

  return (
    <div
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
        
        {/* Ambient decorative blobs (static) */}
        <WatercolorBlob index={0} />
        <WatercolorBlob index={1} />

        <div>
          {/* Header */}
          <div className="pt-10 pb-4 px-6 flex items-center justify-between border-b border-[#EADEC9]/25">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <img 
                src="/assets/icon213.png" 
                alt="ReeWise Logo" 
                className="w-6.5 h-6.5 rounded-lg object-cover shadow-xs border border-black/5"
              />
              <span className="font-extrabold text-xs tracking-tight text-[#2D2727] group-hover:text-[#8B5CF6] transition-colors">
                ReeWise
              </span>
            </Link>
            <span className="text-[10px] font-extrabold opacity-60 tracking-wider">VERIFICATION</span>
          </div>

          {/* Page Content */}
          <div className="px-6 py-8">
            {certData ? (
              <div className="space-y-8">
                {/* Title / Verification Status */}
                <div className="space-y-1.5 pb-2">
                  <h1 className="text-3xl font-black tracking-tighter leading-[1.08] text-balance">
                    Internship Verified
                  </h1>
                  <div className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase flex items-center gap-1.5 pt-0.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    Official ReeWise Record
                  </div>
                </div>

                {/* Details list styled like Homepage Features flow */}
                <div className="space-y-7 pt-2">
                  
                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Certificate ID
                    </div>
                    <div className="text-sm font-bold font-mono text-[#8B5CF6]">
                      {certData.id}
                    </div>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Issued To
                    </div>
                    <h3 className="text-base font-black tracking-tight text-[#2D2727]">
                      {certData.name}
                    </h3>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Organization
                    </div>
                    <p className="text-sm font-black tracking-tight text-[#2D2727]">
                      {certData.org}
                    </p>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Role
                    </div>
                    <p className="text-sm font-black tracking-tight text-[#8B5CF6]">
                      {certData.role}
                    </p>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Internship Duration
                    </div>
                    <p className="text-sm font-black tracking-tight text-[#2D2727]">
                      {certData.duration}
                    </p>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Issue Date
                    </div>
                    <p className="text-sm font-black tracking-tight text-[#2D2727]">
                      {certData.issueDate}
                    </p>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Status
                    </div>
                    <div className="text-sm font-black tracking-tight text-emerald-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {certData.status}
                    </div>
                  </div>

                  <div className="space-y-1 text-balance">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider opacity-50">
                      Issued By
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-black tracking-tight text-[#2D2727]">
                        {certData.issuedBy}
                      </h3>
                      <p className="text-[10px] opacity-60 leading-relaxed font-semibold">
                        {certData.issuedByTitle}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5 pt-4">
                  <button
                    onClick={handleCopyLink}
                    className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10 cursor-pointer"
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
                  </button>
                </div>

                <p className="text-[10px] text-center opacity-50 leading-relaxed max-w-[260px] mx-auto pt-2">
                  This document serves as secure digital verification that the recipient successfully completed their internship.
                </p>

              </div>
            ) : (
              <div className="text-center space-y-6 pt-10">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] hover:opacity-85 transition-all bg-[#8B5CF6]/5 px-4 py-2.5 rounded-xl border border-[#8B5CF6]/15 cursor-pointer"
                >
                  Go to Homepage
                </Link>
              </div>
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
