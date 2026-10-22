import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MarqueeTicker } from './MarqueeTicker';
import { CONTACT_INFO } from '../../data/navigation';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      className="relative h-[calc(100svh-56px)] md:h-[calc(100vh-56px)] flex flex-col justify-between overflow-hidden bg-[#0E0E0F]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A2C]/[0.06] rounded-full blur-[180px] pointer-events-none" />

      {/* Main Centered Hero Container */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 pb-2 flex-1 flex flex-col items-center justify-between text-center overflow-hidden"
      >
        {/* Header Typography: Single Line ZAI LIMITED */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-center w-full mt-2"
        >
          <div className="flex items-baseline font-black tracking-[-0.04em] leading-none text-white select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] whitespace-nowrap">
            <span className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-black uppercase text-[#F5F1EB]">
              ZAI
            </span>
            <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-[#FF5A2C] mx-2 sm:mx-3 md:mx-4 -translate-y-1 sm:-translate-y-2 inline-block shadow-lg shadow-[#FF5A2C]/60 shrink-0" />
            <span className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-black uppercase text-white/90">
              LIMITED
            </span>
          </div>
        </motion.div>

        {/* Center Visual: Evenly Spread Cards Grid (Same Plane) */}
        <div className="w-full max-w-[1000px] select-none my-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full">
            
            {/* Card 1: Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="w-full sm:w-1/3 max-w-[280px] h-[200px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-[#241a15]/95 via-[#161210]/90 to-[#0b0908]/98 border border-[#FF5A2C]/25 p-4 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase">
                  01 / TRANSPORT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C] animate-pulse" />
              </div>
              <div className="my-auto py-1 flex items-center justify-center opacity-60">
                <svg viewBox="0 0 120 120" className="w-10 sm:w-14 h-10 sm:h-14 stroke-white/35 fill-none">
                  <circle cx="60" cy="60" r="48" strokeDasharray="3 3" strokeWidth="1" />
                  <circle cx="60" cy="60" r="30" strokeWidth="1" stroke="#FF5A2C" strokeOpacity="0.5" />
                  <circle cx="60" cy="60" r="6" fill="#FF5A2C" />
                </svg>
              </div>
              <div className="border-t border-white/[0.08] pt-2">
                <div className="text-[10px] sm:text-[12px] font-bold text-white/95">
                  PRIVATE <span className="text-[#FF5A2C]">TRANSPORT</span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/45 uppercase tracking-wider mt-0.5">
                  JKIA • SGR • Coastal
                </div>
              </div>
            </motion.div>

            {/* Card 2: Stays */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="w-full sm:w-1/3 max-w-[280px] h-[200px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-[#23242b]/95 via-[#16171d]/90 to-[#0c0d11]/98 border border-white/20 p-4 sm:p-5 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase">
                  02 / STAYS
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-white text-[7px] sm:text-[8px] font-bold">
                  LIVE
                </span>
              </div>
              <div className="my-auto py-1 flex items-center justify-center opacity-70">
                <div className="w-full border border-white/15 rounded-lg p-2 bg-black/30 text-[8px] sm:text-[9px] font-mono text-white/60">
                  <div className="flex justify-between">
                    <span>VILLA 04</span>
                    <span>KILIFI</span>
                  </div>
                  <div className="mt-1 h-1 bg-white/15 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#FF5A2C]" />
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.1] pt-2">
                <div className="text-[10px] sm:text-[12px] font-bold text-white flex justify-between">
                  <span>Curated Stays</span>
                  <span className="text-[#FF5A2C]">★ 4.98</span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider mt-0.5">
                  Coast Stays
                </div>
              </div>
            </motion.div>

            {/* Card 3: Laundry */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="w-full sm:w-1/3 max-w-[280px] h-[200px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-[#181d22]/95 via-[#101418]/90 to-[#080b0e]/98 border border-white/20 p-4 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase">
                  03 / LAUNDRY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C]" />
              </div>
              <div className="my-auto py-1 flex items-center justify-center opacity-60">
                <svg viewBox="0 0 120 120" className="w-10 sm:w-14 h-10 sm:h-14 stroke-white/35 fill-none">
                  <path d="M10 40 Q 35 20, 60 40 T 110 40" strokeWidth="1.5" stroke="#FF5A2C" />
                  <path d="M10 60 Q 35 40, 60 60 T 110 60" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="border-t border-white/[0.08] pt-2">
                <div className="text-[10px] sm:text-[12px] font-bold text-white/95">
                  Crisp Care
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/45 uppercase tracking-wider mt-0.5">
                  Wash • Fold • Same-Day
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Copy & Value Proposition */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[14px] sm:text-[17px] leading-relaxed text-white/80 max-w-[560px] font-normal"
          >
            One call. Three solutions. Transport, stays, laundry — sorted.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-1.5 text-[10px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white/45 uppercase"
          >
            WE RUN THE ERRANDS. YOU RUN THE TRIP.
          </motion.p>
        </div>

        {/* Bottom Location & Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full pt-4 pb-1 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 items-center gap-2 text-[10px] sm:text-[11.5px] tracking-[0.18em] uppercase font-semibold text-white/60"
        >
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="w-4 h-4 rounded-full border border-white/25 grid place-items-center text-[8px] font-black text-white/80 shrink-0">
              N
            </span>
            <span className="text-white/80">— BASED IN KILIFI</span>
          </div>

          <div className="flex items-center justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hi Zai Limited, I would like to make an inquiry.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-white/80 group-hover:text-white transition">WHATSAPP 24/7</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C] animate-pulse" />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-2 text-white/50">
            <span>KILIFI</span>
            <span className="text-white/30">•</span>
            <span>MOMBASA</span>
            <span className="text-white/30">•</span>
            <span>LAMU</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Ticker anchored at bottom edge */}
      <div className="w-full shrink-0">
        <MarqueeTicker />
      </div>
    </section>
  );
};