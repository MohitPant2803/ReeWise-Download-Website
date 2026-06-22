"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is ReeWise?",
    answer: "ReeWise is an active recall revision application designed for all students or working professionals preparing for internship, placement or job switching."
  },
  {
    question: "How do I download the application?",
    answer: "ReeWise is currently preparing for release on the official Google Play Store. You can download the latest official version directly from the Play Store once the public release is completed. Raw APK updates are no longer distributed directly to ensure compliance with security and play store guidelines."
  },
  {
    question: "How can I request account deletion?",
    answer: "You can delete your account instantly in the app under Settings > Account > Delete Account. If you have already uninstalled the app, you can submit a request on our Delete Account page, or email us at reewisesupport@gmail.com."
  },
  {
    question: "Is my study progress stored in the cloud?",
    answer: "Yes. While ReeWise is designed with a local-first philosophy, your study streak, card completions, custom folders, and playlists are securely synced to our cloud databases so you don't lose them when switching devices."
  },
  {
    question: "Who can I contact for feedback or suggestions?",
    answer: "We welcome suggestions for new study decks or feature updates. You can reach out directly via email at reewisesupport@gmail.com or fill out our feedback forms on the home screen."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <span className="text-[10px] font-bold opacity-60">SUPPORT CENTER</span>
          </div>

          {/* Title block */}
          <div className="pt-8 pb-4 px-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tighter">Support & Help</h1>
            <p className="text-[10px] font-semibold opacity-60">Get assistance and view FAQs</p>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-6 text-xs leading-relaxed text-[#2D2727]/90">
            
            {/* Contact Support */}
            <section className="space-y-2">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">Contact Us</h2>
              <p>
                Have a question, feedback, or need help with sync errors? Send us a ticket and we will get back to you within 24 hours.
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:reewisesupport@gmail.com?subject=ReeWise%20App%20Support%20Request"
                  className="inline-block py-2.5 px-5 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold rounded-xl transition-all cursor-pointer text-center"
                >
                  Email Support (reewisesupport@gmail.com)
                </a>
              </div>
            </section>

            <hr className="border-[#EADEC9]/20" />

            {/* FAQs */}
            <section className="space-y-3">
              <h2 className="text-sm font-black tracking-tight text-[#8B5CF6]">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {FAQS.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-[#EADEC9]/20 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 py-3 text-left flex justify-between items-center font-bold text-xs hover:bg-[#F5F3EF]/20 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 text-[#8B5CF6] transition-transform duration-200 shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-3 text-xs opacity-75 border-t border-[#EADEC9]/10 pt-2 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
