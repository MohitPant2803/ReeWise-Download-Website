"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    title: "Because interviews aren't chapter-wise.",
    desc: "Random DSA, OS, CN and DBMS cards shunted into a shuffler feed help train recall under uncertainty.",
    src: "/assets/Screenshot_2026-06-03-23-28-40-99_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Everything important. One calm place.",
    desc: "DSA, Operating Systems, Computer Networks, DBMS, and System Design together.",
    src: "/assets/Screenshot_2026-06-04-02-41-15-23_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Active recall under uncertainty.",
    desc: "Practice high-yield DSA questions with instant tags and difficulty levels.",
    src: "/assets/Screenshot_2026-06-04-02-41-46-26_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "High-yield solutions.",
    desc: "Tap once to reveal code blocks, clean examples, and optimized C++ solutions.",
    src: "/assets/Screenshot_2026-06-04-02-41-55-39_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Customized to your needs.",
    desc: "Filter concepts, C++ code, or choose test vs explanation mode instantly.",
    src: "/assets/Screenshot_2026-06-04-02-42-08-65_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Build your own revision playlist.",
    desc: "Pin and save the exact questions you swear you'll forget right before exams or interviews.",
    src: "/assets/Screenshot_2026-06-04-02-42-21-51_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Make it yours.",
    desc: "Switch dynamically between Sunny, Zen, Matcha, Sunset, and Midnight themes to calm your eyes.",
    src: "/assets/Screenshot_2026-06-04-02-43-24-36_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  }
];

// Dynamic pulsing background watercolor shape
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
        duration: 10 + index * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr ${gradientClass} blur-[80px] pointer-events-none -z-10`}
      style={{
        left: index % 2 === 0 ? "-20%" : "auto",
        right: index % 2 !== 0 ? "-20%" : "auto",
        top: index === 0 ? "6%" : index === 1 ? "32%" : index === 2 ? "58%" : "80%"
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-calm-ivory font-sans antialiased selection:bg-brand-lavender/30 flex justify-center overflow-x-hidden">
      
      {/* 
        COZY MOBILE-FIRST CONTAINER:
        Visually designed to mirror the purple ReeWise app theme.
      */}
      <div className="w-full max-w-md bg-[#FAF9F5] text-[#2D2727] min-h-screen flex flex-col justify-between border-x border-[#EADEC9]/40 shadow-xs relative transition-all duration-300 overflow-hidden">
        
        {/* Ambient decorative glowing blobs */}
        <WatercolorBlob index={0} />
        <WatercolorBlob index={1} />
        <WatercolorBlob index={2} />
        <WatercolorBlob index={3} />

        {/* SECTION 1 — HERO */}
        <section className="pt-16 pb-6 px-6 text-center space-y-6 flex flex-col items-center">
          <motion.img 
            whileHover={{ scale: 1.05, rotate: 4 }}
            src="/assets/icon213.png" 
            alt="ReeWise App Icon" 
            className="w-18 h-18 rounded-[22px] object-cover shadow-lg border border-black/5"
          />
          <div className="space-y-2">
            <span className="font-extrabold text-lg tracking-tight block">ReeWise</span>
            <h1 className="text-4xl xs:text-5xl font-black tracking-tighter leading-[1.06] text-balance">
              Built for revisiting, not just studying.
            </h1>
            <p className="text-xs font-semibold opacity-70">
              A calm, scrollable revision app.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 w-full max-w-[280px] pt-1">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10"
            >
              Download APK
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#demo"
              className="w-full py-3 bg-black/5 hover:bg-black/10 text-[#2D2727] text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-[#2D2727]" />
              Watch Demo
            </motion.a>
          </div>
        </section>

        {/* SECTION 2 — APP STORE STYLE SHOWCASE (Positioned directly under Hero buttons) */}
        <section className="pb-10">
          {/* Snap scrolling gallery */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 py-2">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="w-[84%] shrink-0 snap-center bg-white border border-[#EADEC9]/30 rounded-3xl p-5 shadow-xs flex flex-col justify-between space-y-4 transition-all duration-300"
              >
                <div className="relative w-full aspect-[9/18.5] bg-[#0c1017] rounded-[30px] p-2 shadow-sm border border-black/5 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-white relative">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover select-none pointer-events-none" 
                    />
                  </div>
                </div>

                <div className="space-y-1 min-h-[58px]">
                  <h3 className="text-xs font-extrabold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] opacity-60 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — WHY DOES REVISION FEEL HEAVY? */}
        <section className="py-12 px-6 space-y-4 relative">
          <div className="space-y-1.5">
            <h2 className="text-3xl font-black tracking-tighter leading-[1.08] text-balance">
              Revision is important, but it often feels too heavy to start.
            </h2>
          </div>
          
          <div className="space-y-4 text-xs leading-relaxed text-[#2D2727] opacity-90 text-balance">
            <p>
              The mental load of opening massive PDFs or starting a long study block keeps us from reviewing what we already know. ReeWise exists to reduce that friction.
            </p>
            <p>
              By turning key concepts into a quick, scrollable feed, revision becomes something you can do in short, frictionless sessions — anywhere, anytime.
            </p>
          </div>
        </section>

        {/* SECTION 4 — VIDEO DEMO */}
        <section id="demo" className="py-12 px-6 space-y-6 text-center">
          <h2 className="text-xl font-bold tracking-tight">See ReeWise in action.</h2>
          
          <div className="w-full max-w-[380px] aspect-video mx-auto rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-black">
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

        {/* SECTION 5 — WHY REEWISE EXISTS */}
        <section className="py-12 px-6 space-y-5 relative">
          <div className="space-y-1.5">
            <h2 className="text-3xl font-black tracking-tighter leading-[1.08] text-balance">
              Why ReeWise Exists
            </h2>
          </div>
          
          <div className="space-y-3.5 text-xs leading-relaxed text-[#2D2727] opacity-90 text-balance">
            <p>Revision shouldn&apos;t feel like a task.</p>
            <p>It should feel like opening your phone.</p>
            <p>A few questions.</p>
            <p>A few concepts.</p>
            <p>A quick memory check.</p>
            <p>Five minutes while waiting for food.</p>
            <p>Ten minutes before class.</p>
            <p>A quick scroll before an interview.</p>
            <p>That&apos;s the idea behind ReeWise.</p>
            <p>Making revision convenient enough that you&apos;ll actually do it.</p>
          </div>


        </section>

        {/* SECTION 6 — COMMUNITY */}
        <section id="community" className="py-12 px-6 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-base font-extrabold tracking-tight">Help other students</h2>
            <p className="text-xs opacity-60 leading-normal">Keep cards verified and up-to-date.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-[#EADEC9]/30 rounded-2xl flex flex-col justify-between min-h-[130px] shadow-2xs hover:shadow-xs transition-all text-left"
            >
              <span className="text-xs font-bold leading-snug block">Suggest Material &rarr;</span>
              <p className="text-[9.5px] opacity-50 leading-normal mt-2">Have a great summary or sheet? Send it here.</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-[#EADEC9]/30 rounded-2xl flex flex-col justify-between min-h-[130px] shadow-2xs hover:shadow-xs transition-all text-left"
            >
              <span className="text-xs font-bold leading-snug block">Submit Advice &rarr;</span>
              <p className="text-[9.5px] opacity-50 leading-normal mt-2">Share tips and questions you were asked.</p>
            </motion.a>
          </div>
        </section>

        {/* SECTION 7 — DOWNLOAD CTA */}
        <section className="px-6 py-12">
          <div className="bg-gradient-to-tr from-[#7C3AED] via-[#8B5CF6] to-[#A78BFA] text-white rounded-3xl p-8 text-center space-y-6 shadow-xl shadow-purple-500/15 overflow-hidden relative">
            <div className="absolute top-[-30px] left-[-30px] w-36 h-36 bg-white/10 rounded-full blur-[30px] pointer-events-none" />
            
            <div className="space-y-2 relative z-10">
              <h2 className="text-2xl font-black tracking-tighter leading-none">
                Built for revisiting.
              </h2>
              <p className="text-sm opacity-90 font-medium">Download ReeWise.</p>
            </div>

            <div className="pt-2 relative z-10">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-[#8B5CF6] hover:bg-[#FAF9F5] text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-black/10"
              >
                Download APK
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-10 border-t border-[#EADEC9]/40 bg-[#F5F3FF]/30 text-center space-y-3 transition-all duration-300">
          <div className="flex justify-center items-center gap-2.5">
            <img 
              src="/assets/icon213.png" 
              alt="ReeWise Logo" 
              className="w-6 h-6 rounded-lg object-cover shadow-xs"
            />
            <span className="font-bold text-xs">ReeWise</span>
          </div>
          <p className="text-[10px] opacity-60 leading-relaxed">
            Made by a kgpian for kgpians.
          </p>
          <div className="text-[9px] opacity-40">
            &copy; {new Date().getFullYear()} ReeWise. Free & Open Source.
          </div>
        </footer>

      </div>
    </div>
  );
}
