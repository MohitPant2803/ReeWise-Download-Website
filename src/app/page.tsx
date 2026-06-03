"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shuffle,
  CheckCircle,
  ArrowRight,
  Play,
  ExternalLink,
  Palette
} from "lucide-react";

// Real screenshots loaded from the public/assets directory
const SCREENSHOTS = [
  {
    src: "/assets/Screenshot_2026-06-03-23-28-40-99_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Random, fast cards",
    caption: "A scrollable feed of DSA, OS, and CN cards that shuffle unpredictably to condition your memory for unexpected interview questions."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-29-00-88_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Tap-to-reveal answers",
    caption: "Test yourself instead of just lazy reading. Try to recall the answer first, then tap to check the high-yield note."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-29-43-11_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Build your own playlist",
    caption: "Pin the exact questions you swear you'll forget right before your slot and revise them in sequence."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-30-03-46_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Ask when you're stuck",
    caption: "Tap once to ask GPT. No copying code, no pasting text, and no explaining the context all over again."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-30-24-08_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Revise anywhere, offline",
    caption: "Revision works completely offline. Open it while walking to LBS mess or sitting inside network-dead corridors."
  }
];



// App native theme palettes to match app vibe exactly
const PALETTES = {
  zen: {
    id: "zen",
    name: "Zen Garden (Ivory)",
    bg: "bg-[#FAF6F0]",
    surface: "bg-[#FFFDF9]",
    border: "border-[#EADEC9]",
    borderBg: "bg-[#EADEC9]",
    textPrimary: "text-[#3E3431]",
    textSecondary: "text-[#6C5F5B]",
    textMuted: "text-[#9E8E89]",
    accent: "text-[#8C6A5C]",
    accentBg: "bg-[#F1ECE6]",
    accentText: "text-[#8C6A5C]",
    badgeBg: "bg-[#F1ECE6] text-[#8C6A5C]",
    buttonBg: "bg-[#8C6A5C] text-[#FAF6F0] hover:bg-[#725246]",
    divider: "border-[#EADEC9]/60",
    dotColor: "bg-[#8C6A5C]",
    rawBg: "#FAF6F0"
  },
  matcha: {
    id: "matcha",
    name: "Matcha Calm (Green)",
    bg: "bg-[#F1F5E9]",
    surface: "bg-[#FCFEFC]",
    border: "border-[#DFE8D9]",
    borderBg: "bg-[#DFE8D9]",
    textPrimary: "text-[#2D3B2E]",
    textSecondary: "text-[#5A6E5C]",
    textMuted: "text-[#8BA18D]",
    accent: "text-[#4A704C]",
    accentBg: "bg-[#EDF4EB]",
    accentText: "text-[#4A704C]",
    badgeBg: "bg-[#EDF4EB] text-[#4A704C]",
    buttonBg: "bg-[#4A704C] text-[#F1F5E9] hover:bg-[#365238]",
    divider: "border-[#DFE8D9]/60",
    dotColor: "bg-[#4A704C]",
    rawBg: "#F1F5E9"
  },
  sunset: {
    id: "sunset",
    name: "Crimson Sunset (Peach)",
    bg: "bg-[#FFF3EE]",
    surface: "bg-[#FFFEFD]",
    border: "border-[#F6E1D7]",
    borderBg: "bg-[#F6E1D7]",
    textPrimary: "text-[#4D2A20]",
    textSecondary: "text-[#7D574E]",
    textMuted: "text-[#B28E84]",
    accent: "text-[#E05A47]",
    accentBg: "bg-[#FFF1ED]",
    accentText: "text-[#E05A47]",
    badgeBg: "bg-[#FFF1ED] text-[#E05A47]",
    buttonBg: "bg-[#E05A47] text-[#FFF3EE] hover:bg-[#C24332]",
    divider: "border-[#F6E1D7]/60",
    dotColor: "bg-[#E05A47]",
    rawBg: "#FFF3EE"
  },
  midnight: {
    id: "midnight",
    name: "Midnight Focus (Dark)",
    bg: "bg-[#030509]",
    surface: "bg-[#0F1524]",
    border: "border-[#263352]",
    borderBg: "bg-[#263352]",
    textPrimary: "text-[#F8FAFC]",
    textSecondary: "text-[#94A3B8]",
    textMuted: "text-[#64748B]",
    accent: "text-[#818CF8]",
    accentBg: "bg-[#101430]",
    accentText: "text-[#818CF8]",
    badgeBg: "bg-[#101430] text-[#818CF8]",
    buttonBg: "bg-[#818CF8] text-[#030509] hover:bg-[#6366F1]",
    divider: "border-[#263352]/60",
    dotColor: "bg-[#818CF8]",
    rawBg: "#030509"
  },
  default: {
    id: "default",
    name: "Classic Slate",
    bg: "bg-[#F8FAFC]",
    surface: "bg-[#FFFFFF]",
    border: "border-[#E2E8F0]",
    borderBg: "bg-[#E2E8F0]",
    textPrimary: "text-[#0F172A]",
    textSecondary: "text-[#64748B]",
    textMuted: "text-[#94A3B8]",
    accent: "text-[#8B5CF6]",
    accentBg: "bg-[#F5F3FF]",
    accentText: "text-[#8B5CF6]",
    badgeBg: "bg-[#F5F3FF] text-[#8B5CF6]",
    buttonBg: "bg-[#8B5CF6] text-[#F8FAFC] hover:bg-[#7c3aed]",
    divider: "border-[#E2E8F0]/60",
    dotColor: "bg-[#8B5CF6]",
    rawBg: "#F8FAFC"
  }
};

export default function Home() {

  // App vibe palette state
  const [paletteId, setPaletteId] = useState<keyof typeof PALETTES>("zen");
  const palette = PALETTES[paletteId];

  // Auto-advancing screenshots carousel for Hero mockup
  const carouselScreens = [
    {
      src: "/assets/Screenshot_2026-06-03-23-29-00-88_7bac7bd5d063bbad144b7a4a677790c4.jpg",
      title: "Onboarding recall",
      badge: "Onboarding"
    },
    {
      src: "/assets/Screenshot_2026-06-03-23-30-24-08_7bac7bd5d063bbad144b7a4a677790c4.jpg",
      title: "Offline Home Page",
      badge: "Home Page"
    },
    {
      src: "/assets/Screenshot_2026-06-03-23-28-40-99_7bac7bd5d063bbad144b7a4a677790c4.jpg",
      title: "Daily Shuffled Feed",
      badge: "Reel Screen"
    },
    {
      src: "/assets/Screenshot_2026-06-03-23-29-43-11_7bac7bd5d063bbad144b7a4a677790c4.jpg",
      title: "Revision Playlists",
      badge: "My Space"
    }
  ];

  const [screenIdx, setScreenIdx] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setScreenIdx((prev) => (prev + 1) % carouselScreens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselScreens.length]);

  return (
    <div className={`min-h-screen bg-calm-ivory font-sans antialiased selection:bg-brand-lavender/30 flex justify-center overflow-x-hidden`}>
      
      {/* 
        COZY MOBILE-FIRST CONTAINER:
        Now dynamically colored based on the active theme switcher, 
        mirroring the app's real appearance and presets.
      */}
      <div className={`w-full max-w-md ${palette.bg} ${palette.textPrimary} min-h-screen flex flex-col justify-between border-x ${palette.border} shadow-xs relative transition-all duration-300`}>
        
        {/* Soft, Slow-Breathing Background Aura Glows */}
        <motion.div
          animate={{
            opacity: paletteId === "midnight" ? [0.1, 0.25, 0.1] : [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[12%] left-[-25%] w-[220px] h-[220px] bg-brand-lavender/10 rounded-full blur-[60px] pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            opacity: paletteId === "midnight" ? [0.1, 0.2, 0.1] : [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[25%] right-[-25%] w-[200px] h-[200px] bg-brand-sage/25 rounded-full blur-[60px] pointer-events-none -z-10"
        />

        {/* Header */}
        <header className={`px-6 py-5 flex justify-between items-center border-b ${palette.border} sticky top-0 ${palette.bg}/95 backdrop-blur-md z-30 transition-all duration-300`}>
          <div className="flex items-center gap-2.5">
            <motion.img 
              whileHover={{ rotate: 8 }}
              src="/assets/icon213.png" 
              alt="ReeWise App Icon" 
              className="w-8 h-8 rounded-xl object-cover shadow-xs border border-calm-beige/10"
            />
            <div>
              <span className="font-bold text-sm tracking-tight block">ReeWise</span>
              <span className={`text-[9px] ${palette.textSecondary} block -mt-1`}>calm revision for KGP</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 ${palette.buttonBg} text-[9px] font-bold rounded-full transition-all`}
            >
              Get APK
            </motion.a>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-5 py-6 space-y-12">
          


          {/* HERO SECTION: Cozy Letter */}
          <section className="space-y-4 pt-1">

            <h1 className="text-3xl font-bold tracking-tight leading-tight text-center">
              Built for <span className={`underline decoration-brand-lavender decoration-3 underline-offset-2`}>revisiting</span>, not just studying.
            </h1>

            {/* FLOATING PHONE MOCKUP WITH AUTO-ADVANCING CAROUSEL */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full max-w-[220px] mx-auto py-4 relative z-10"
            >
              {/* Simulated Clean phone shell */}
              <div className={`relative w-full aspect-[9/18.5] bg-[#0c1017] rounded-[28px] p-2 shadow-lg overflow-hidden flex items-center justify-center border border-calm-beige/15`}>
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-[#000] rounded-full z-20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#111] absolute left-2" />
                </div>
                
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-white relative">
                  {/* Screen Content */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={screenIdx}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      src={carouselScreens[screenIdx].src}
                      alt={carouselScreens[screenIdx].title}
                      className="w-full h-full object-cover absolute inset-0 select-none pointer-events-none"
                    />
                  </AnimatePresence>
                  
                  {/* Floating badge for active screen name */}
                  <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/80 text-[8px] font-bold text-white rounded-full tracking-wider shadow-xs border border-white/10 z-10 backdrop-blur-xs whitespace-nowrap">
                    {carouselScreens[screenIdx].badge}
                  </div>
                </div>
              </div>

              {/* Page Indicator dots for carousel */}
              <div className="flex justify-center gap-1.5 pt-3">
                {carouselScreens.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === screenIdx ? palette.dotColor : `${palette.borderBg} opacity-40`
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            <h2 className="text-sm font-semibold text-center leading-snug px-2 text-balance">
              A calm revision app built by a KGPian for KGPians.
            </h2>

            <p className={`text-xs ${palette.textSecondary} text-center leading-relaxed px-4 text-balance`}>
              DSA, OS, CN, DBMS, playlists, active recall and instant GPT help—all in one scrollable place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 ${palette.buttonBg} text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm`}
              >
                Get APK
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#demo"
                className={`w-full py-3 ${palette.accentBg} ${palette.accentText} text-xs font-semibold rounded-xl hover:opacity-85 transition-all flex items-center justify-center gap-1.5`}
              >
                <Play className="w-3 h-3 fill-current text-current" />
                Watch Demo
              </motion.a>
            </div>
          </section>          <hr className={palette.divider} />

          {/* VIDEO DEMO SECTION */}
          <section id="demo" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              1-Min Walkthrough
            </span>
            <h2 className="text-lg font-bold">See ReeWise in 1 minute</h2>
            
            <div className={`w-full aspect-video rounded-2xl ${palette.surface} border ${palette.border} overflow-hidden shadow-xs relative transition-all duration-300`}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="ReeWise Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>

          <hr className={palette.divider} />

          {/* A 10-MINUTE REVISION RITUAL */}
          <section id="ritual" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              The Ritual
            </span>
            <h2 className="text-lg font-bold">A 10 minute revision ritual</h2>
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              No heavy study blocks. No files searching. Just a calm habit:
            </p>
            <div className={`p-4 ${palette.surface} rounded-xl border ${palette.border} space-y-3.5 shadow-xs`}>
              <ol className="space-y-3 text-xs leading-normal">
                <li className="flex gap-2.5 items-start">
                  <span className={`w-5 h-5 rounded-full ${palette.accentBg} ${palette.accentText} font-bold flex items-center justify-center shrink-0 text-[10px]`}>1</span>
                  <span><strong>Open ReeWise</strong> on your phone while walking to LBS mess or waiting for tea.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className={`w-5 h-5 rounded-full ${palette.accentBg} ${palette.accentText} font-bold flex items-center justify-center shrink-0 text-[10px]`}>2</span>
                  <span><strong>Scroll random cards</strong> to condition your recall under uncertainty.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className={`w-5 h-5 rounded-full ${palette.accentBg} ${palette.accentText} font-bold flex items-center justify-center shrink-0 text-[10px]`}>3</span>
                  <span><strong>Save tricky questions</strong> that you know your brain might trick you on.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className={`w-5 h-5 rounded-full ${palette.accentBg} ${palette.accentText} font-bold flex items-center justify-center shrink-0 text-[10px]`}>4</span>
                  <span><strong>Tap once to ask GPT</strong> if you get stuck, without copying code.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className={`w-5 h-5 rounded-full ${palette.accentBg} ${palette.accentText} font-bold flex items-center justify-center shrink-0 text-[10px]`}>5</span>
                  <span><strong>Revisit your checklist</strong> minutes before walking into your slot tests.</span>
                </li>
              </ol>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: THE PROBLEM */}
          <section id="problem" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              The Reality
            </span>
            <h2 className="text-lg font-bold">You already have the notes.</h2>
            
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              The problem isn&apos;t finding resources anymore. You already have a hundred PDFs, folders, and shared LeetCode bookmarks. The problem is remembering where everything is when you&apos;re exhausted at 2 AM. Revision shouldn&apos;t feel like a treasure hunt.
            </p>

            <div className="space-y-3 pt-1">
              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3.5 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold">The PDF you swear you&apos;ll revise tomorrow</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Sitting in your browser bookmarks or WhatsApp starred messages, building up guilt instead of memory.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3.5 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold">That one legendary Drive link everyone forwards</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Requesting permission or sorting through 80 different unorganized folders at 2 AM is a massive mental load.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3.5 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  03
                </div>
                <div>
                  <h4 className="text-xs font-bold">The OS notes in Downloads since 2nd year</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Buried inside your hard drive alongside hundreds of random files, completely lost when tests actually start.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3.5 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  04
                </div>
                <div>
                  <h4 className="text-xs font-bold">The playlist you&apos;ll open the night before slot one</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Frantically trying to read thousands of lines of slides will fail under panic. Revision needs a system.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: THE REVEAL */}
          <section id="reveal" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Introduce ReeWise
            </span>
            <h2 className="text-lg font-bold">What if revision felt as easy as scrolling?</h2>
            
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              ReeWise shuffles your best notes, DSA patterns, and core concepts into a calm, scrollable feed on your phone. You don&apos;t need another heavy study block. Just open the app, scroll for 10 minutes, and test your memory randomly. Works completely offline—even in the network-dead corridors of LBS.
            </p>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: RANDOMNESS */}
          <section id="randomness" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Unpredictable Recall
            </span>
            <h2 className="text-lg font-bold">Because interviews aren&apos;t chapter-wise.</h2>
            
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              When you revise a sheet chapter-by-chapter, your brain cheats. You know that the next problem uses a Binary Search Tree because the chapter title says so.
            </p>
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              But in an interview, the interviewer swings from a Dijkstra complexity directly to TCP headers, and then to a B+ tree query. ReeWise shuffles topics unpredictably, so your brain learns to switch context instantly under pressure.
            </p>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: PLAYLISTS */}
          <section id="playlists" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Personal Checklists
            </span>
            <h2 className="text-lg font-bold">Build your own pre-CDC ritual.</h2>
            
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              That list of questions you always revisit before interviews? Give it a home. Pin the trickiest concepts, compile your personal &quot;morning check&quot; playlist, and run through them in order right before walking into slot one. No more frantic searching through old bookmarks.
            </p>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: GPT */}
          <section id="gpt" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Contextual Help
            </span>
            <h2 className="text-lg font-bold">No more re-explaining yourself.</h2>
            
            <p className={`text-xs ${palette.textSecondary} leading-relaxed`}>
              Ever copied an entire question into ChatGPT just to ask one doubt? With ReeWise, just tap once when you&apos;re stuck on a card. The helper knows exactly what code or concept you are looking at. No copying. No pasting. No explaining context again.
            </p>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: REEWISE IS / IS NOT */}
          <section className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Vibe Check
            </span>
            
            <div className={`p-4.5 ${palette.surface} rounded-xl border ${palette.border} space-y-4 shadow-xs`}>
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
                  ReeWise is not
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">❌</span>
                    <span className="opacity-95 text-balance">Another productivity app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">❌</span>
                    <span className="opacity-95 text-balance">Another AI wrapper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">❌</span>
                    <span className="opacity-95 text-balance">Another course platform</span>
                  </li>
                </ul>
              </div>

              <div className={`border-t border-dashed ${palette.border} pt-4 space-y-2`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-green-600 flex items-center gap-1">
                  ReeWise is
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">✅</span>
                    <span className="opacity-95 text-balance">A place to revisit what you&apos;ve already learned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">✅</span>
                    <span className="opacity-95 text-balance">A place to keep your best questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-[10px]">✅</span>
                    <span className="opacity-95 text-balance">A place to prepare calmly before interviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* SECTION: CREATOR STORY (Why I built ReeWise) */}
          <section id="why-built" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Vulnerable & Authentic
            </span>
            <h2 className="text-lg font-bold">Why I built ReeWise</h2>
            
            <div className={`p-4.5 ${palette.surface} rounded-xl border ${palette.border} space-y-4 shadow-xs`}>
              <div className={`space-y-3.5 text-xs ${palette.textSecondary} leading-relaxed`}>
                <p>
                  I wasn&apos;t short on resources. I had too many.
                </p>
                <p>
                  Every senior had a Drive folder. Every WhatsApp group had PDFs. Every topic had ten different versions of notes floating around LBS.
                </p>
                <p>
                  When placement season came around, revision felt harder than studying. I was spending more time digging through files than reinforcing my memory.
                </p>
                <p>
                  So I built something I wished existed. A clean, offline way to test my active recall during LBS corridor walks or while waiting for tea. No startup pitches, no user-acquisition goals. Just a KGPian sharing something useful with friends.
                </p>
              </div>

              <div className={`pt-3.5 border-t border-dashed ${palette.border} flex items-center gap-2.5`}>
                <div className={`w-8 h-8 rounded-full ${palette.accentBg} flex items-center justify-center font-bold ${palette.accentText} text-xs shadow-xs`}>
                  KG
                </div>
                <div>
                  <span className="block text-[10.5px] font-bold">KGPian Creator</span>
                  <span className={`block text-[8px] ${palette.textSecondary}`}>Hostel Room, LBS Hall of Residence</span>
                </div>
              </div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* SOCIAL PROOF */}
          <section className="space-y-3">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Used by peers
            </span>
            <h2 className="text-lg font-bold pt-1">Already used by KGPians for</h2>
            
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className={`p-3 ${palette.surface} rounded-xl border ${palette.border} text-center font-bold text-[11px] shadow-2xs`}>
                🎯 CDC revision
              </div>
              <div className={`p-3 ${palette.surface} rounded-xl border ${palette.border} text-center font-bold text-[11px] shadow-2xs`}>
                💻 DSA prep
              </div>
              <div className={`p-3 ${palette.surface} rounded-xl border ${palette.border} text-center font-bold text-[11px] shadow-2xs`}>
                📂 OS revision
              </div>
              <div className={`p-3 ${palette.surface} rounded-xl border ${palette.border} text-center font-bold text-[11px] shadow-2xs`}>
                ⚡ Last-minute reviews
              </div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* MAKE IT YOURS */}
          <section className={`p-3.5 ${palette.surface} rounded-xl border ${palette.border} flex items-center justify-between gap-3 shadow-xs transition-all duration-300`}>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" /> Preset Switcher
              </h4>
              <p className={`text-[9.5px] ${palette.textSecondary}`}>Match your study mood:</p>
            </div>
            
            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={() => setPaletteId("zen")}
                className={`w-5 h-5 rounded-full bg-[#FAF6F0] border-2 ${
                  paletteId === "zen" ? "border-text-calm-charcoal" : "border-[#EADEC9]"
                } shadow-xs`}
                title="Zen Garden"
              />
              <button
                onClick={() => setPaletteId("matcha")}
                className={`w-5 h-5 rounded-full bg-[#F1F5E9] border-2 ${
                  paletteId === "matcha" ? "border-text-calm-charcoal" : "border-[#DFE8D9]"
                } shadow-xs`}
                title="Matcha Calm"
              />
              <button
                onClick={() => setPaletteId("sunset")}
                className={`w-5 h-5 rounded-full bg-[#FFF3EE] border-2 ${
                  paletteId === "sunset" ? "border-text-calm-charcoal" : "border-[#F6E1D7]"
                } shadow-xs`}
                title="Crimson Sunset"
              />
              <button
                onClick={() => setPaletteId("midnight")}
                className={`w-5 h-5 rounded-full bg-[#030509] border-2 ${
                  paletteId === "midnight" ? "border-white" : "border-[#263352]"
                } shadow-xs`}
                title="Midnight Focus"
              />
              <button
                onClick={() => setPaletteId("default")}
                className={`w-5 h-5 rounded-full bg-[#F8FAFC] border-2 ${
                  paletteId === "default" ? "border-text-calm-charcoal" : "border-[#E2E8F0]"
                } shadow-xs`}
              />
            </div>
          </section>

          <hr className={palette.divider} />

          {/* FINAL CTA */}
          <section className={`bg-[#0c1017] text-[#FAF8F5] rounded-2xl p-6 text-center space-y-5 overflow-hidden relative`}>
            <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-brand-lavender/25 rounded-full blur-[40px] pointer-events-none" />
            
            <h2 className="text-[15px] font-bold tracking-tight leading-snug text-balance">
              If ReeWise helps even one KGPian walk into a CDC interview feeling a little more prepared, it has done its job.
            </h2>
            
            <p className="text-[11.5px] text-[#FAF8F5]/85 font-medium -mt-2">
              That&apos;s why I built it.
            </p>

            <div className="pt-1.5">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#FAF8F5] text-[#0c1017] hover:bg-brand-lavender hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Download APK
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between text-[8px] text-white/40 font-mono">
              <span>MIT License</span>
              <span>Offline First</span>
              <span>Made for KGPians</span>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className={`px-6 py-8 border-t ${palette.border} ${palette.accentBg} text-center space-y-3 transition-all duration-300`}>
          <div className="flex justify-center items-center gap-2.5">
            <img 
              src="/assets/icon213.png" 
              alt="ReeWise Logo" 
              className="w-6 h-6 rounded-lg object-cover shadow-xs"
            />
            <span className="font-bold text-xs">ReeWise</span>
          </div>
          <p className={`text-[10px] ${palette.textSecondary} leading-relaxed`}>
            Made by a KGPian during hostel nights at LBS Hall of Residence.
          </p>
          <div className={`text-[9px] ${palette.textMuted}`}>
            &copy; {new Date().getFullYear()} ReeWise. Free & Open Source.
          </div>
        </footer>

      </div>
    </div>
  );
}
