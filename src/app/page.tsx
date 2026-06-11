"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    title: "Interview randomness.",
    desc: "Random DSA, Guesstimates, Case Studies, and Tech cards shunted into a shuffler feed help train recall under uncertainty.",
    src: "/assets/Screenshot_2026-06-03-23-28-40-99_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Everything important. One calm place.",
    desc: "DSA, System Design, Guesstimates, Case Studies, Product Sense, and Data Science together.",
    src: "/assets/Screenshot_2026-06-04-02-41-15-23_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Active recall under uncertainty.",
    desc: "Practice high-yield Guesstimates, Case Studies, DSA, and Product problems with instant tags.",
    src: "/assets/Screenshot_2026-06-04-02-41-46-26_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "High-yield solutions.",
    desc: "Swipe once to reveal code blocks, step-by-step case frameworks, and optimized solutions.",
    src: "/assets/Screenshot_2026-06-04-02-41-55-39_7bac7bd5d063bbad144b7a4a677790c4.jpg"
  },
  {
    title: "Customized to your needs.",
    desc: "Choose exactly what enters your shuffler feed to face the interview randomness on your own terms.",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-calm-ivory font-sans antialiased selection:bg-brand-lavender/30 flex justify-center overflow-x-hidden">
      
      {/* 
        COZY MOBILE-FIRST CONTAINER:
        Visually designed to mirror the purple ReeWise app theme.
      */}
      <div className="w-full max-w-md bg-[#FAF9F5] doodle-bg text-[#2D2727] min-h-screen flex flex-col justify-between border-x border-[#EADEC9]/40 shadow-xs relative transition-all duration-300 overflow-hidden">
        
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
            <h1 className="text-4xl xs:text-5xl font-black tracking-tighter leading-[1.06] text-balance">
              ReeWise
            </h1>
            <p className="text-xs font-semibold opacity-70">
              Making revision convinient...
            </p>
          </div>

          <div className="flex flex-col gap-2.5 w-full max-w-[280px] pt-1">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10 cursor-pointer"
            >
              Download APK
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
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

        {/* SECTION 3 — ELEGANT FEATURES FLOW */}
        <section className="py-14 px-6 space-y-9 relative border-t border-[#EADEC9]/20">
          <div className="space-y-1.5 pb-2">
            <h2 className="text-3xl font-black tracking-tighter leading-[1.08] text-balance">
              Built for Convenience
            </h2>
          </div>
          <div className="space-y-9">
            {[
              {
                title: "Revise Whenever You Feel Like It",
                desc: "Sometimes you have 5 minutes. Sometimes 15. ReeWise is built for those small revision sessions that usually never happen."
              },
              {
                title: "Choose What Shows Up",
                desc: "Pick the subjects you want to revise and get a feed built around them."
              },
              {
                title: "Keep the Questions Worth Revisiting",
                desc: "Whenever you come across something good, save it and come back to it later."
              },
              {
                title: "Ask GPT Instantly",
                desc: "If a solution doesn't make sense, one tap copies all the required context and takes you straight to your ChatGPT."
              },
              {
                title: "Make Revision a Habit",
                desc: "The easier revision becomes, the more likely you are to actually do it."
              }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-1 text-balance">
                <h3 className="text-sm font-black tracking-tight text-[#2D2727]">
                  {feature.title}
                </h3>
                <p className="text-[11.5px] opacity-65 leading-relaxed text-[#2D2727]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — VIDEO DEMO */}
        <section id="demo" className="py-12 px-6 space-y-6 text-center">
          <h2 className="text-xl font-bold tracking-tight">See ReeWise in action.</h2>
          
          <div className="w-full max-w-[260px] aspect-[9/16] mx-auto rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Nb5D9XhwYlM"
              title="ReeWise Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>



        {/* SECTION 6 — COMMUNITY */}
        <section id="community" className="py-16 px-6 space-y-8 border-t border-[#EADEC9]/20">
          <div className="space-y-2 text-balance">
            <h2 className="text-3xl font-black tracking-tighter leading-[1.08] text-[#2D2727]">
              Community Support
            </h2>
            <p className="text-xs opacity-70 leading-relaxed text-[#2D2727]">
              The goal isn&apos;t to fill ReeWise with everything. It&apos;s to fill it with what actually helps.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0tHl9LdrZi1qoy2cAV6A4O8wKSBsTINfdH3fsc8ekNajSlA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-[#EADEC9]/30 rounded-3xl flex flex-col justify-between min-h-[255px] shadow-2xs hover:shadow-xs hover:border-[#8B5CF6]/20 transition-all text-left relative overflow-hidden group"
            >
              {/* Illustration background */}
              <div className="absolute right-[-15px] top-[-15px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
                <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8B5CF6]">
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-black tracking-tight text-[#2D2727] leading-snug">
                  Request Something
                </h3>
                <p className="text-[10.5px] opacity-60 leading-relaxed">
                  Missing a topic? Want a specific sheet, resource, or set of questions added? Tell me what would make ReeWise more useful.
                </p>
              </div>

              <div className="pt-2 text-[11px] font-black tracking-tight text-[#8B5CF6] flex items-center gap-0.5 mt-auto">
                Suggest Material &rarr;
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://docs.google.com/forms/d/e/1FAIpQLScl_RVg22fPMEJh3zQ0ofG9W1fC1fhCaAlBtIygovb0q3CMjA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-[#EADEC9]/30 rounded-3xl flex flex-col justify-between min-h-[255px] shadow-2xs hover:shadow-xs hover:border-[#8B5CF6]/20 transition-all text-left relative overflow-hidden group"
            >
              {/* Illustration background */}
              <div className="absolute right-[-15px] top-[-15px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
                <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8B5CF6]">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-black tracking-tight text-[#2D2727] leading-snug">
                  What Would You Tell Your Younger Self?
                </h3>
                <p className="text-[10.5px] opacity-60 leading-relaxed">
                  If you&apos;ve spent a few years at KGP, gone through CDC season, internships, placements, or just learned things the hard way, what would you tell your younger self?
                </p>
              </div>

              <div className="pt-2 text-[11px] font-black tracking-tight text-[#8B5CF6] flex items-center gap-0.5 mt-auto">
                Leave a Message &rarr;
              </div>
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
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-white text-[#8B5CF6] hover:bg-[#FAF9F5] text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-black/10 cursor-pointer"
              >
                Download APK
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
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
          <div className="text-[9.5px] opacity-60">
            Contact: <a href="mailto:mohit.pant1828@gmail.com" className="hover:text-[#8B5CF6] transition-colors underline font-semibold">mohit.pant1828@gmail.com</a>
          </div>
          <div className="text-[9px] opacity-40">
            &copy; {new Date().getFullYear()} ReeWise. Free & Open Source.
          </div>
        </footer>

        {/* Modal Overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[3px] flex items-center justify-center p-6 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-[#FAF9F5] border border-[#EADEC9]/30 rounded-3xl p-6 w-full max-w-[280px] text-center space-y-5 shadow-xl relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-[#2D2727] opacity-40 hover:opacity-75 p-1 transition-opacity cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="space-y-1.5 pt-2">
                  <h3 className="text-base font-black tracking-tight text-[#2D2727]">
                    Beta Preview
                  </h3>
                  <p className="text-[11px] opacity-65 leading-relaxed">
                    The complete ReeWise experience is coming soon. Try the beta for a sneak peek.
                  </p>
                </div>

                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="https://github.com/MohitPant2803/DSA-REVISON-frontend/releases/download/ReeWise7/app-arm64-v8a-release.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/10"
                >
                  Download Beta Version
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
//ff