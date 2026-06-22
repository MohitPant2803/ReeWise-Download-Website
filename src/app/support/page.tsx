"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle, Mail, MessageSquare, ChevronDown } from "lucide-react";
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
    question: "Who can I contact for partnerships or suggestions?",
    answer: "We welcome suggestions for new study decks or feature updates. You can reach out directly via email at reewisesupport@gmail.com or fill out our feedback forms on the home screen."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <HelpCircle className="w-3.5 h-3.5 text-[#8B5CF6]" />
            Support Center
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/assets/icon213.png" alt="ReeWise Logo" className="w-12 h-12 rounded-xl object-cover border border-black/5" />
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none">Support & Help</h1>
            <p className="text-[10px] font-semibold opacity-60 mt-1">Get assistance, view FAQs, or contact us</p>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a 
            href="mailto:reewisesupport@gmail.com?subject=ReeWise%20App%20Support%20Request"
            className="p-5 bg-white border border-[#EADEC9]/30 rounded-2xl flex flex-col justify-between hover:shadow-xs hover:border-[#8B5CF6]/20 transition-all text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-3">
              <Mail className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="text-xs font-black tracking-tight text-[#2D2727] mb-1">Email Support</h3>
              <p className="text-[10px] opacity-60 leading-normal mb-3">
                Send a ticket directly to our support inbox. We reply within 24 hours.
              </p>
              <span className="text-[11px] font-bold text-[#8B5CF6] group-hover:underline">
                reewisesupport@gmail.com
              </span>
            </div>
          </a>

          <Link
            href="/delete-account"
            className="p-5 bg-white border border-[#EADEC9]/30 rounded-2xl flex flex-col justify-between hover:shadow-xs hover:border-[#8B5CF6]/20 transition-all text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mb-3">
              <MessageSquare className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <h3 className="text-xs font-black tracking-tight text-[#2D2727] mb-1">Data & Deletion</h3>
              <p className="text-[10px] opacity-60 leading-normal mb-3">
                Need to delete your account or download your personal data records?
              </p>
              <span className="text-[11px] font-bold text-red-500 group-hover:underline">
                Manage Data &rarr;
              </span>
            </div>
          </Link>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-lg font-black tracking-tight text-[#8B5CF6] mb-3">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#EADEC9]/30 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center font-bold text-xs hover:bg-[#F5F3EF]/20 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#8B5CF6] transition-transform duration-200 shrink-0 ml-2 ${
                      openIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-xs opacity-75 border-t border-[#EADEC9]/10 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#EADEC9]/20 pt-4 mt-8 text-center text-[10px] opacity-50 font-semibold">
          © {new Date().getFullYear()} ReeWise. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
