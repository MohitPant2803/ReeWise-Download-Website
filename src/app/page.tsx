"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
    title: "Daily Shuffled Feed",
    caption: "Swipe random OS, DSA, DBMS, and CN reels. Conditioning recall under uncertainty for placement tests."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-29-00-88_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Tap-to-Reveal recall",
    caption: "Recall the card in your head first, then tap to check the high-yield note. Avoids lazy passive reading."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-29-43-11_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Revision Playlists",
    caption: "Pin tricky concepts or compile last-minute checklists (e.g. OOPs Cheat Sheet) for CDC morning."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-30-03-46_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Context-Aware GPT Tutor",
    caption: "AI doubt solver that already knows the card you are studying, so you don't need to copy-paste code snippets."
  },
  {
    src: "/assets/Screenshot_2026-06-03-23-30-24-08_7bac7bd5d063bbad144b7a4a677790c4.jpg",
    title: "Offline SQLite Storage",
    caption: "Revision works completely offline. Built to study inside LBS corridors or mess halls without network signals."
  }
];

// Curated deck of typical KGP CDC questions with multiple slides per card
// Curated decks of typical KGP CDC questions divided by subject (3 subjects, 3 cards each, 3 steps each)
const CARD_DECKS = [
  {
    subject: "DSA • Graphs & Lists",
    cards: [
      {
        category: "Graphs Cycle",
        steps: [
          {
            label: "Question",
            content: "How do you detect a cycle in a directed graph using DFS?",
            subtext: "Think about the active recursion path. A simple visited array is not enough."
          },
          {
            label: "Recall Hint",
            content: "Track the nodes currently in the call stack.",
            subtext: "If you run DFS and hit a node that is still active in the current path, what does that mean?"
          },
          {
            label: "Core Answer",
            content: "Use an in-stack boolean tracking array.",
            subtext: "If DFS visits a node already marked true in in-stack, a cycle is present. Toggle it off when backtracking."
          }
        ]
      },
      {
        category: "Topological Sort",
        steps: [
          {
            label: "Question",
            content: "What is Topological Sort and when is it possible?",
            subtext: "Think about dependency resolution order. What happens if there's a cycle?"
          },
          {
            label: "Recall Hint",
            content: "Linear ordering of vertices in a Directed Acyclic Graph (DAG).",
            subtext: "u must appear before v for every directed edge u -> v."
          },
          {
            label: "Core Answer",
            content: "A linear ordering of vertices. It is only possible for DAGs.",
            subtext: "Can be implemented using Kahn's BFS algorithm (indegree count) or DFS with a stack."
          }
        ]
      },
      {
        category: "Linked Lists Loop",
        steps: [
          {
            label: "Question",
            content: "How do you find the start of a cycle in a Linked List?",
            subtext: "Think about space complexity constraints: O(1) auxiliary space."
          },
          {
            label: "Recall Hint",
            content: "Use two pointers moving at different speeds.",
            subtext: "Floyd's Cycle-Finding Algorithm. What happens once they meet?"
          },
          {
            label: "Core Answer",
            content: "Use slow and fast pointers. Once they meet, reset slow to head and move both at speed 1.",
            subtext: "The node where they meet again is the start of the loop cycle."
          }
        ]
      }
    ]
  },
  {
    subject: "Operating Systems",
    cards: [
      {
        category: "Processes & Threads",
        steps: [
          {
            label: "Question",
            content: "What is the key difference between a process and a thread?",
            subtext: "Think about address space, context switching overhead, and resource sharing."
          },
          {
            label: "Recall Hint",
            content: "Which one has its own memory map, and which one shares memory?",
            subtext: "Think about thread communication vs. IPC."
          },
          {
            label: "Core Answer",
            content: "Process has independent address space; Thread shares memory within the process.",
            subtext: "A process has isolated memory allocated by the OS. A thread shares memory space with sibling threads."
          }
        ]
      },
      {
        category: "Memory Management",
        steps: [
          {
            label: "Question",
            content: "What is Page Fault and what is Thrashing?",
            subtext: "Think about virtual memory paging and CPU scheduling performance."
          },
          {
            label: "Recall Hint",
            content: "What happens when the CPU requests a page not present in RAM?",
            subtext: "What happens when the system spends more time swapping pages than executing code?"
          },
          {
            label: "Core Answer",
            content: "Page Fault: Requested page is not in RAM. Thrashing: High page faults lead to constant disk swapping.",
            subtext: "Thrashing causes CPU utilization to drop to zero as the OS is frozen in swapping cycles."
          }
        ]
      },
      {
        category: "Concurrency",
        steps: [
          {
            label: "Question",
            content: "What is the difference between Mutex and Semaphore?",
            subtext: "Think about locking vs signalling, and ownership of locks."
          },
          {
            label: "Recall Hint",
            content: "Can a thread unlock a lock acquired by another thread?",
            subtext: "Think about counting vs binary flags."
          },
          {
            label: "Core Answer",
            content: "Mutex has ownership (only locking thread can unlock); Semaphore is signal-based (any thread can post/signal).",
            subtext: "Mutex is a locking mechanism. Semaphore is a signaling mechanism using integer counters."
          }
        ]
      }
    ]
  },
  {
    subject: "Computer Networks",
    cards: [
      {
        category: "TCP Protocol",
        steps: [
          {
            label: "Question",
            content: "Why does TCP use a 3-way handshake?",
            subtext: "What if old, duplicate packets from a previous connection arrive late?"
          },
          {
            label: "Recall Hint",
            content: "Sequence numbers and duplicate SYN packets.",
            subtext: "Think about both ends confirming the connection is actively live."
          },
          {
            label: "Core Answer",
            content: "It synchronizes starting Sequence Numbers and prevents historical duplicate connection errors.",
            subtext: "Ensures both client and server verify they can transmit and receive before allocating socket resources."
          }
        ]
      },
      {
        category: "DNS System",
        steps: [
          {
            label: "Question",
            content: "How does recursive DNS resolution work?",
            subtext: "What happens from the moment you type a domain to resolving its IP?"
          },
          {
            label: "Recall Hint",
            content: "Root, TLD, and Authoritative nameservers.",
            subtext: "Think about the hierarchical lookup steps."
          },
          {
            label: "Core Answer",
            content: "Resolver queries Root server -> TLD server (.com) -> Authoritative Nameserver (domain) -> returns IP.",
            subtext: "Results are cached locally at the client resolver to avoid repeated roundtrip lookup delays."
          }
        ]
      },
      {
        category: "HTTPS & Security",
        steps: [
          {
            label: "Question",
            content: "How does SSL/TLS establish a secure HTTPS connection?",
            subtext: "How are symmetric and asymmetric encryption combined?"
          },
          {
            label: "Recall Hint",
            content: "Public-key cryptography vs shared secrets.",
            subtext: "Think about exchange vs session transfer."
          },
          {
            label: "Core Answer",
            content: "Asymmetric encryption verifies identity & exchanges a symmetric session key; symmetric encrypts communication.",
            subtext: "Handshake uses CA certificates and public keys to securely establish a temporary session key."
          }
        ]
      }
    ]
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

interface CardStackProps {
  deck: typeof CARD_DECKS[0];
  palette: typeof PALETTES["zen"];
}

function CardStack({ deck, palette }: CardStackProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [slideIndices, setSlideIndices] = useState([0, 0, 0]);

  const x = useMotionValue(0);

  const currentSlide = slideIndices[activeCard] || 0;

  // Active card style offsets derived from x
  const activeVisualXOffset = useTransform(x, (val) => {
    // Parent shifts right by `val`. Child shifts left by `-val` to stay at 0.
    if (val > 0 && currentSlide === 0 && activeCard > 0) return -val;
    return 0;
  });
  const activeVisualRotate = useTransform(x, (val) => {
    if (val > 0 && currentSlide === 0 && activeCard > 0) return 0;
    return val / 18;
  });
  const activeVisualOpacity = useTransform(x, (val) => {
    if (val > 0 && currentSlide === 0 && activeCard > 0) return 1;
    return Math.max(0.6, 1 - Math.abs(val) / 400);
  });

  // Previous card styles derived from x
  const prevCardX = useTransform(x, (val) => {
    if (val > 0 && currentSlide === 0 && activeCard > 0) return Math.min(0, -450 + val);
    return -500;
  });
  const prevCardRotate = useTransform(x, (val) => {
    if (val > 0 && currentSlide === 0 && activeCard > 0) return Math.min(0, -10 + (val / 350) * 10);
    return -10;
  });
  const prevCardOpacity = useTransform(x, (val) => {
    if (val > 0 && currentSlide === 0 && activeCard > 0) return Math.min(1, val / 150);
    return 0;
  });

  // Next card styles derived from x
  const nextCardScale = useTransform(x, (val) => {
    return Math.min(1, 0.96 + (Math.abs(val) / 400) * 0.04);
  });
  const nextCardOpacity = useTransform(x, (val) => {
    return Math.min(1, 0.35 + (Math.abs(val) / 400) * 0.65);
  });
  const nextCardRotate = useTransform(x, (val) => {
    return 3 - (Math.abs(val) / 400) * 3;
  });

  // Third card styles derived from x
  const thirdCardRotate = useTransform(x, (val) => {
    return -3 + (Math.abs(val) / 400) * 6;
  });

  const handlePrevSlide = (cardIdx: number) => {
    setSlideIndices(prev => {
      const next = [...prev];
      next[cardIdx] = Math.max(0, next[cardIdx] - 1);
      return next;
    });
  };

  const handleNextSlide = (cardIdx: number) => {
    setSlideIndices(prev => {
      const next = [...prev];
      next[cardIdx] = Math.min(2, next[cardIdx] + 1);
      return next;
    });
  };

  return (
    <div className="snap-center shrink-0 w-full h-[270px] flex flex-col justify-between pb-2">
      {/* Stacked Draggable Card Deck Container */}
      <div className="relative w-full h-[220px] flex items-center justify-center">
        {deck.cards.map((card, cardIdx) => {
          const currentSlide = slideIndices[cardIdx];
          const activeStep = card.steps[currentSlide];

          // Declare variables first to avoid hoisting ReferenceError
          let isCardDraggable = false;
          let outerStyle: React.ComponentProps<typeof motion.div>["style"] = {};
          let innerStyle: React.ComponentProps<typeof motion.div>["style"] = {};
          let cardAnimate: React.ComponentProps<typeof motion.div>["animate"] = {};

          if (cardIdx === activeCard) {
            isCardDraggable = true;
            outerStyle = {
              zIndex: 10,
              x: x, // bind drag target directly to writable motion value x
              touchAction: "pan-y"
            };
            innerStyle = {
              x: activeVisualXOffset,
              rotate: activeVisualRotate,
              opacity: activeVisualOpacity,
              scale: 1,
              y: 0
            };
          } else if (cardIdx === activeCard - 1) {
            outerStyle = {
              zIndex: 20,
              x: 0,
              touchAction: "auto"
            };
            innerStyle = {
              x: prevCardX,
              rotate: prevCardRotate,
              opacity: prevCardOpacity,
              scale: 1,
              y: 0
            };
          } else if (cardIdx === activeCard + 1) {
            outerStyle = {
              zIndex: 5,
              x: 0,
              touchAction: "auto"
            };
            innerStyle = {
              x: 0,
              y: 12,
              rotate: nextCardRotate,
              scale: nextCardScale,
              opacity: nextCardOpacity
            };
          } else if (cardIdx === activeCard + 2) {
            outerStyle = {
              zIndex: 3,
              x: 0,
              touchAction: "auto"
            };
            innerStyle = {
              x: 0,
              y: 20,
              rotate: thirdCardRotate,
              scale: 0.92,
              opacity: 0.15
            };
          } else {
            outerStyle = {
              zIndex: 0,
              x: 0,
              touchAction: "auto"
            };
            cardAnimate = {
              x: cardIdx < activeCard ? -500 : 0,
              y: cardIdx < activeCard ? 0 : 24,
              rotate: cardIdx < activeCard ? -15 : 0,
              scale: 0.88,
              opacity: 0
            };
          }

          return (
            <motion.div
              key={cardIdx}
              drag={isCardDraggable ? "x" : false}
              dragConstraints={{ left: -400, right: 400 }}
              dragElastic={0.65}
              onDragEnd={(event, info) => {
                if (isCardDraggable) {
                  const swipeThreshold = 80;
                  const velocityThreshold = 300;
                  if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                    // Swipe Left -> Next Slide or Next Card
                    if (currentSlide < 2) {
                      handleNextSlide(cardIdx);
                    } else if (activeCard < deck.cards.length - 1) {
                      setActiveCard(prev => prev + 1);
                    }
                  } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                    // Swipe Right -> Prev Slide or Prev Card
                    if (currentSlide > 0) {
                      handlePrevSlide(cardIdx);
                    } else if (activeCard > 0) {
                      setActiveCard(prev => prev - 1);
                      setSlideIndices(prev => {
                        const next = [...prev];
                        next[activeCard - 1] = 2; // set to last slide of prev card
                        return next;
                      });
                    }
                  }
                  animate(x, 0, { type: "spring", stiffness: 300, damping: 26 });
                }
              }}
              style={outerStyle}
              className={`absolute w-full h-full ${
                isCardDraggable ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <motion.div
                animate={
                  cardIdx === activeCard ||
                  cardIdx === activeCard - 1 ||
                  cardIdx === activeCard + 1 ||
                  cardIdx === activeCard + 2
                    ? undefined
                    : cardAnimate
                }
                style={innerStyle}
                className={`${palette.surface} rounded-xl border ${palette.border} p-4 flex flex-col justify-between select-none shadow-xs w-full h-full ${
                  isCardDraggable ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"
                }`}
              >
                {/* Card Header Info */}
                <div className={`flex justify-between items-center text-[9px] font-bold ${palette.textMuted} pb-2 border-b ${palette.divider}`}>
                  <span>{card.category}</span>
                  <span className={palette.accentText}>
                    Card {cardIdx + 1} of 3 • {activeStep.label}
                  </span>
                </div>

                {/* Active Step Content Area */}
                <div className="flex-1 flex items-center py-4 min-h-[100px] pointer-events-none">
                  <div className="w-full space-y-1.5 text-left">
                    <p className="text-xs font-bold leading-relaxed">
                      {activeStep.content}
                    </p>
                    {activeStep.subtext && (
                      <p className={`text-[9.5px] ${palette.textSecondary} leading-normal italic`}>
                        {activeStep.subtext}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer Controls */}
                <div className={`pt-2.5 border-t ${palette.divider} flex justify-between items-center`}>
                  {/* Step Indicator Dots */}
                  <div className="flex gap-1.5">
                    {card.steps.map((_, dotIdx) => (
                      <div 
                        key={dotIdx}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          dotIdx === currentSlide ? palette.dotColor : `${palette.borderBg} opacity-50`
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation buttons inside card */}
                  <div className="flex gap-1.5 pointer-events-auto">
                    <button
                      disabled={currentSlide === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevSlide(cardIdx);
                      }}
                      className={`px-2.5 py-1 text-[9px] font-bold rounded bg-white border ${palette.border} disabled:opacity-40 disabled:pointer-events-none hover:bg-calm-beige/35 text-text-calm-charcoal`}
                    >
                      Back
                    </button>
                    
                    {currentSlide < 2 ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextSlide(cardIdx);
                        }}
                        className={`px-2.5 py-1 text-[9px] font-bold rounded ${palette.buttonBg}`}
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        disabled={cardIdx === deck.cards.length - 1}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCard(cardIdx + 1);
                        }}
                        className={`px-2.5 py-1 text-[9px] font-bold rounded bg-white border ${palette.border} disabled:opacity-40 disabled:pointer-events-none hover:bg-calm-beige/35 flex items-center gap-0.5 text-text-calm-charcoal`}
                      >
                        Next Card →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Card Index Indicator and Navigation Arrows */}
      <div className="flex justify-between items-center px-1 pt-1 text-xs">
        <span className={`text-[10px] ${palette.textSecondary} font-medium`}>
          Swipe left/right or use:
        </span>
        
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.94 }}
            disabled={activeCard === 0}
            onClick={() => {
              setActiveCard(activeCard - 1);
            }}
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg ${palette.surface} border ${palette.border} disabled:opacity-40 disabled:pointer-events-none`}
            title="Slide Back"
          >
            ← Slide Back
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.94 }}
            disabled={activeCard === deck.cards.length - 1}
            onClick={() => {
              setActiveCard(activeCard + 1);
            }}
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg ${palette.surface} border ${palette.border} disabled:opacity-40 disabled:pointer-events-none`}
            title="Slide Next"
          >
            Next Card →
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [activeStack, setActiveStack] = useState(0);

  // App vibe palette state
  const [paletteId, setPaletteId] = useState<keyof typeof PALETTES>("zen");
  const palette = PALETTES[paletteId];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToStack = (sIdx: number) => {
    if (scrollContainerRef.current) {
      const height = scrollContainerRef.current.clientHeight;
      scrollContainerRef.current.scrollTo({
        top: sIdx * height,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const height = e.currentTarget.clientHeight;
    const newActiveStack = Math.round(scrollTop / height);
    if (newActiveStack !== activeStack && newActiveStack >= 0 && newActiveStack < 3) {
      setActiveStack(newActiveStack);
    }
  };

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
          
          {/* THEME SELECTOR: Tap to switch app presets and match vibe */}
          <section className={`p-4 ${palette.surface} rounded-2xl border ${palette.border} space-y-3 shadow-xs transition-all duration-300`}>
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-text-calm-charcoal/40">
              <Palette className="w-3.5 h-3.5" />
              <span>Preview App Theme Preset</span>
            </div>
            
            <div className="flex justify-between items-center gap-2">
              <span className="text-[10px] font-medium leading-none">
                Vibe: <span className="font-bold">{palette.name}</span>
              </span>
              
              <div className="flex gap-1.5">
                {/* Zen Button */}
                <button
                  onClick={() => setPaletteId("zen")}
                  className={`w-5 h-5 rounded-full bg-[#FAF6F0] border-2 ${
                    paletteId === "zen" ? "border-text-calm-charcoal" : "border-[#EADEC9]"
                  } shadow-xs`}
                  title="Zen Garden"
                />
                {/* Matcha Button */}
                <button
                  onClick={() => setPaletteId("matcha")}
                  className={`w-5 h-5 rounded-full bg-[#F1F5E9] border-2 ${
                    paletteId === "matcha" ? "border-text-calm-charcoal" : "border-[#DFE8D9]"
                  } shadow-xs`}
                  title="Matcha Calm"
                />
                {/* Sunset Button */}
                <button
                  onClick={() => setPaletteId("sunset")}
                  className={`w-5 h-5 rounded-full bg-[#FFF3EE] border-2 ${
                    paletteId === "sunset" ? "border-text-calm-charcoal" : "border-[#F6E1D7]"
                  } shadow-xs`}
                  title="Crimson Sunset"
                />
                {/* Midnight Button */}
                <button
                  onClick={() => setPaletteId("midnight")}
                  className={`w-5 h-5 rounded-full bg-[#030509] border-2 ${
                    paletteId === "midnight" ? "border-white" : "border-[#263352]"
                  } shadow-xs`}
                  title="Midnight Focus"
                />
                {/* Classic Button */}
                <button
                  onClick={() => setPaletteId("default")}
                  className={`w-5 h-5 rounded-full bg-[#F8FAFC] border-2 ${
                    paletteId === "default" ? "border-text-calm-charcoal" : "border-[#E2E8F0]"
                  } shadow-xs`}
                  title="Classic Modern"
                />
              </div>
            </div>
          </section>

          {/* HERO SECTION: Cozy Letter */}
          <section className="space-y-4 pt-1">

            <h1 className="text-3xl font-bold tracking-tight leading-tight">
              Built for <span className={`underline decoration-brand-lavender decoration-3 underline-offset-2`}>revisiting</span>, not just studying.
            </h1>

            <p className="text-xs leading-relaxed font-semibold">
              Hey KGPian,
            </p>

            <p className="text-xs leading-relaxed opacity-90">
              We already spend semesters sitting in libraries, attending classes, and writing code. We study hard. The real problem isn&apos;t learning—it&apos;s **recalling it all when it actually matters.**
            </p>

            <p className="text-xs leading-relaxed opacity-90">
              ReeWise is a calm, scrollable app built during placement preparation nights. It runs offline on your phone to make revision feel lighter, training your recall under uncertainty.
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
                Download Android APK (Free)
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#demo"
                className={`w-full py-3 ${palette.accentBg} ${palette.accentText} text-xs font-semibold rounded-xl hover:opacity-85 transition-all flex items-center justify-center gap-1.5`}
              >
                <Play className="w-3 h-3 fill-current text-current" />
                Watch 2 Min Walkthrough
              </motion.a>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* ACTIVE CONCEPT TRIAL: Horizontal Card Decks with Drag & Swipe Physics */}
          <section className={`space-y-4 ${palette.accentBg} p-5 rounded-2xl border border-calm-beige/10 transition-all duration-300`}>
            <div className="space-y-1">
              <span className={`text-[8.5px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2 py-0.5 rounded`}>
                Midnight Corridor Prep
              </span>
              <h3 className="text-sm font-bold pt-1.5">Interactive Recall Decks</h3>
              <p className={`text-[10px] ${palette.textSecondary} leading-relaxed`}>
                Scroll horizontally to switch subjects. Swipe cards left/right within a stack to discard/rewind.
              </p>
            </div>

            {/* Subject Tabs */}
            <div className="flex gap-2 border-b border-calm-beige/10 pb-2 overflow-x-auto no-scrollbar">
              {CARD_DECKS.map((deck, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStack(idx);
                    scrollToStack(idx);
                  }}
                  className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all shrink-0 ${
                    activeStack === idx
                      ? palette.buttonBg
                      : `bg-white border ${palette.border} ${palette.textSecondary} hover:bg-calm-beige/20`
                  }`}
                >
                  {deck.subject.split(" • ")[1] || deck.subject}
                </button>
              ))}
            </div>

            {/* Scrollable Container for Card Stacks (swiping up/down changes the subject topic) */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="w-full h-[270px] overflow-y-auto no-scrollbar flex flex-col snap-y snap-mandatory px-0.5"
            >
              {CARD_DECKS.map((deck, stackIdx) => (
                <CardStack 
                  key={stackIdx}
                  deck={deck}
                  palette={palette}
                />
              ))}
            </div>
          </section>

          <hr className={palette.divider} />

          {/* THE REAL PROBLEM */}
          <section id="problem" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              The Placement Mess
            </span>
            <h2 className="text-lg font-bold">Why does revision feel so heavy?</h2>
            
            <p className="text-xs opacity-90 leading-relaxed">
              When CDC tests or placement slots approach, you aren&apos;t short of materials. You are buried in them:
            </p>

            <div className="space-y-3 pt-1">
              {/* Point 1 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold">The Telegram PDF Graveyard</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Buried inside a chat with 5,000 messages is a link to a &quot;DBMS normalization sheet.&quot; Trying to find it at 2 AM is a mental headache.
                  </p>
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold">The 80 Open Browser Tabs</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Keeping 40 LeetCode tabs and 20 articles open because &quot;I need to review this tree pattern before slot 1.&quot; It crashes your browser and your peace of mind.
                  </p>
                </div>
              </motion.div>

              {/* Point 3 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className={`p-3 ${palette.surface} rounded-xl border ${palette.border} flex items-start gap-3 shadow-xs`}
              >
                <div className={`w-6 h-6 rounded ${palette.accentBg} ${palette.accentText} flex items-center justify-center shrink-0 text-xs font-bold`}>
                  03
                </div>
                <div>
                  <h4 className="text-xs font-bold">Locked &quot;Request Access&quot; Folders</h4>
                  <p className={`text-[10px] ${palette.textSecondary} leading-normal mt-0.5`}>
                    Clicking a legendary senior drive folder link only to see &quot;Request Access&quot; when your test starts in two hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* THE PHILOSOPHY */}
          <section id="philosophy" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              The Philosophy
            </span>
            <h2 className="text-lg font-bold">&quot;Because interviews aren&apos;t chapter-wise.&quot;</h2>
            
            <p className="text-xs opacity-90 leading-relaxed">
              When you revise a sheet chapter-by-chapter, your mind cheats. You know that the next problem uses a Binary Search Tree because the chapter title says so.
            </p>
            
            <p className="text-xs opacity-90 leading-relaxed">
              But in an interview, the interviewer swings from a Dijkstra complexity directly to TCP headers, and then to a B+ tree query. 
            </p>

            <div className={`p-3 ${palette.accentBg} border ${palette.border} rounded-xl space-y-1.5`}>
              <span className={`text-[10px] font-bold ${palette.accentText} block flex items-center gap-1.5`}>
                <Shuffle className="w-3.5 h-3.5" /> Random Reels Feed
              </span>
              <p className="text-[10.5px] opacity-90 leading-relaxed">
                By shuffling DSA, OS, CN, and System Design cards in an unpredictable, scrollable feed, ReeWise builds recall under uncertainty—exactly like placement season.
              </p>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* APP SHOWCASE */}
          <section id="showcase" className="space-y-4">
            <div className="space-y-1">
              <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
                App Showcase
              </span>
              <h2 className="text-lg font-bold pt-2">How ReeWise works</h2>
              <p className={`text-xs ${palette.textSecondary} leading-normal`}>
                Scroll right to see real screenshots from the application:
              </p>
            </div>

            {/* Horizontal Snap scroll window */}
            <div className="w-full overflow-x-auto no-scrollbar flex gap-5 pb-4 snap-x snap-mandatory">
              {SCREENSHOTS.map((screen, idx) => (
                <div key={idx} className="snap-center shrink-0 w-[240px] space-y-2.5">
                  
                  {/* Simulated Clean phone shell */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className={`relative w-full aspect-[9/18.5] bg-[#0c1017] rounded-[28px] p-2.5 shadow-md overflow-hidden flex items-center justify-center border border-calm-beige/10`}
                  >
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#000] rounded-full z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111] absolute left-2" />
                    </div>
                    
                    <div className="w-full h-full rounded-[20px] overflow-hidden bg-white relative">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="text-left px-1 space-y-1">
                    <span className={`text-[10px] font-bold ${palette.accentText} block`}>{screen.title}</span>
                    <p className={`text-[10px] ${palette.textSecondary} leading-normal`}>{screen.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className={palette.divider} />

          {/* SPECIFIC FEATURES */}
          <section className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Product details
            </span>
            <h2 className="text-lg font-bold">Made for last-minute checklists</h2>

            <div className="space-y-3 text-xs opacity-90">
              <div className="flex gap-2">
                <CheckCircle className={`w-4 h-4 ${palette.accentText} shrink-0 mt-0.5`} />
                <p>
                  <strong>Custom Playlists:</strong> Build a custom checklist of tricky cards (e.g., &quot;Pre-CDC Night Check&quot;) and revise them in order.
                </p>
              </div>

              <div className="flex gap-2">
                <CheckCircle className={`w-4 h-4 ${palette.accentText} shrink-0 mt-0.5`} />
                <p>
                  <strong>Contextual GPT Helper:</strong> Ask doubts directly from the revision card. The AI automatically knows the topic and code you are studying.
                </p>
              </div>

              <div className="flex gap-2">
                <CheckCircle className={`w-4 h-4 ${palette.accentText} shrink-0 mt-0.5`} />
                <p>
                  <strong>100% Offline SQLite:</strong> Your revision is saved on your device. Works inside LBS corridors or mess halls without internet signals.
                </p>
              </div>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* YOUTUBE VIDEO SECTION */}
          <section id="demo" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              Walkthrough Video
            </span>
            <h2 className="text-lg font-bold">Watch us use the app</h2>
            <p className="text-xs opacity-90 leading-relaxed">
              Here is a quick 2-minute walkthrough showing how to use lists, flip cards, and ask context-aware queries.
            </p>

            <div className={`w-full aspect-video rounded-xl ${palette.surface} border ${palette.border} overflow-hidden relative group flex items-center justify-center shadow-xs transition-all duration-300`}>
              {!isPlayingDemo ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-lavender/10 to-accent-amber/10 opacity-70 pointer-events-none" />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer p-4"
                    onClick={() => setIsPlayingDemo(true)}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full ${palette.buttonBg} flex items-center justify-center transition-all shadow-xs`}
                    >
                      <Play className="w-4 h-4 fill-current translate-x-[1px]" />
                    </motion.div>
                    <span className="font-semibold text-xs opacity-80">Play Demonstration (2 mins)</span>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="ReeWise Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </section>

          <hr className={palette.divider} />

          {/* COMMUNITY CONTRIBUTIONS */}
          <section id="community" className="space-y-4">
            <span className={`text-[9px] uppercase tracking-wider font-bold ${palette.badgeBg} px-2.5 py-1 rounded`}>
              KGP Repository
            </span>
            <h2 className="text-lg font-bold">Contribute to ReeWise</h2>
            <p className="text-xs opacity-90 leading-relaxed">
              The cards inside the repository are verified and suggested by seniors who cleared CDC tests. Help us keep it up-to-date:
            </p>

            <div className="grid grid-cols-1 gap-3.5 pt-1">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${palette.surface} rounded-xl border ${palette.border} hover:opacity-85 transition-all flex flex-col gap-1.5 shadow-xs`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Submit Materials & Sheets</span>
                  <ExternalLink className={`w-3.5 h-3.5 ${palette.textMuted}`} />
                </div>
                <p className={`text-[10px] ${palette.textSecondary} leading-normal`}>
                  Have a great PDF summary, a LeetCode sheet, or a list of OS/CN interview notes? Upload here so we can format it.
                </p>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${palette.surface} rounded-xl border ${palette.border} hover:opacity-85 transition-all flex flex-col gap-1.5 shadow-xs`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Submit Placement Interview Tips</span>
                  <ExternalLink className={`w-3.5 h-3.5 ${palette.textMuted}`} />
                </div>
                <p className={`text-[10px] ${palette.textSecondary} leading-normal`}>
                  Just finished placements or CDC? Submit key questions you were asked, along with tips for juniors.
                </p>
              </motion.a>
            </div>
          </section>

          <hr className={palette.divider} />

          {/* FINAL CTA */}
          <section className={`bg-[#0c1017] text-[#FAF8F5] rounded-2xl p-6 text-center space-y-4 overflow-hidden relative`}>
            <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-brand-lavender/25 rounded-full blur-[40px] pointer-events-none" />
            
            <h2 className="text-xl font-bold tracking-tight">
              Stop restarting.<br />Start revisiting.
            </h2>
            
            <p className="text-[11px] text-[#FAF8F5]/80 leading-relaxed max-w-xs mx-auto">
              Put down the heavy Drive sheets and unorganized Telegram links. Open ReeWise in your corridor, swipe cards, and revision will feel a little lighter.
            </p>

            <div className="pt-2">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#FAF8F5] text-[#0c1017] hover:bg-brand-lavender hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Download APK for Android
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
            Written by a student during hostel nights at LBS Hall of Residence.
          </p>
          <div className={`text-[9px] ${palette.textMuted}`}>
            &copy; {new Date().getFullYear()} ReeWise. Free & Open Source.
          </div>
        </footer>

      </div>
    </div>
  );
}
