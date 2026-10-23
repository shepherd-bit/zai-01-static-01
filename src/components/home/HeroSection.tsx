import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MarqueeTicker } from './MarqueeTicker';
import { CONTACT_INFO } from '../../data/navigation';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  // Center the middle card (Stays) on initial mount for mobile screens
  useEffect(() => {
    const track = cardsTrackRef.current;
    if (track && window.innerWidth < 640) {
      const middleCard = track.children[1] as HTMLElement;
      if (middleCard) {
        const scrollLeft =
          middleCard.offsetLeft - track.clientWidth / 2 + middleCard.clientWidth / 2;
        track.scrollLeft = scrollLeft;
      }
    }
  }, []);

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
        className="mx-auto max-w-[1400px] w-full px-2 sm:px-6 md:px-10 pt-2 sm:pt-6 pb-2 flex-1 flex flex-col items-center justify-between text-center overflow-hidden"
      >
        {/* Header Typography: Single Line ZAI LIMITED */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-center w-full mt-2"
        >
          <div className="flex items-baseline font-black tracking-[-0.04em] leading-none text-white select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] whitespace-nowrap">
            <span className="text-[32px] xs:text-[42px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-black uppercase text-[#F5F1EB]">
              ZAI
            </span>
            <span className="w-1.5 h-1.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-[#FF5A2C] mx-1.5 sm:mx-3 md:mx-4 -translate-y-0.5 sm:-translate-y-2 inline-block shadow-lg shadow-[#FF5A2C]/60 shrink-0" />
            <span className="text-[32px] xs:text-[42px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-black uppercase text-white/90">
              LIMITED
            </span>
          </div>
        </motion.div>

        {/* Center Visual: Horizontal Carousel (Middle card focused on mobile) */}
        <div className="w-full max-w-[1000px] select-none my-auto">
          <div
            ref={cardsTrackRef}
            className="flex flex-row items-center justify-start sm:justify-center gap-3 sm:gap-6 md:gap-8 w-full overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth py-2 px-[15vw] sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Card 1: Transport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative w-[70vw] sm:w-1/3 max-w-[280px] h-[190px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] border border-[#FF5A2C]/40 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden text-left group shrink-0 snap-center"
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px] sm:rounded-[26px]">
                <img
                  src="./hero-images/tours.jpg"
                  alt="Transport Background"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#241a15]/60 via-[#161210]/50 to-[#0b0908]/75" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase drop-shadow truncate">
                  01 / TRANSPORT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C] animate-pulse shrink-0 ml-1" />
              </div>

              <div className="relative z-10 my-auto py-0.5 flex items-center justify-center opacity-70">
                <svg viewBox="0 0 120 120" className="w-8 sm:w-14 h-8 sm:h-14 stroke-white/50 fill-none drop-shadow">
                  <circle cx="60" cy="60" r="48" strokeDasharray="3 3" strokeWidth="1" />
                  <circle cx="60" cy="60" r="30" strokeWidth="1" stroke="#FF5A2C" strokeOpacity="0.7" />
                  <circle cx="60" cy="60" r="6" fill="#FF5A2C" />
                </svg>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-1.5 sm:pt-2 backdrop-blur-[2px]">
                <div className="text-[9px] sm:text-[12px] font-bold text-white drop-shadow truncate">
                  PRIVATE <span className="text-[#FF5A2C]">TRANSPORT</span>
                </div>
                <div className="text-[7.5px] sm:text-[9px] text-white/70 uppercase tracking-wider mt-0.5 font-medium truncate">
                  JKIA • SGR • Coastal
                </div>
              </div>
            </motion.div>

            {/* Card 2: Stays (Middle Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative w-[70vw] sm:w-1/3 max-w-[280px] h-[190px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] border border-white/30 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden text-left group shrink-0 snap-center"
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px] sm:rounded-[26px]">
                <img
                  src="./hero-images/stays.jpg"
                  alt="Stays Background"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#23242b]/60 via-[#16171d]/50 to-[#0c0d11]/75" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase drop-shadow truncate">
                  02 / STAYS
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[7px] sm:text-[8px] font-bold shrink-0 ml-1">
                  LIVE
                </span>
              </div>

              <div className="relative z-10 my-auto py-0.5 flex items-center justify-center opacity-80">
                <div className="w-full border border-white/25 rounded-md sm:rounded-lg p-1.5 sm:p-2 bg-black/50 backdrop-blur-sm text-[7.5px] sm:text-[9px] font-mono text-white/80">
                  <div className="flex justify-between">
                    <span>VILLA 04</span>
                    <span>KILIFI</span>
                  </div>
                  <div className="mt-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#FF5A2C]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-1.5 sm:pt-2 backdrop-blur-[2px]">
                <div className="text-[9px] sm:text-[12px] font-bold text-white flex justify-between drop-shadow truncate">
                  <span>Curated Stays</span>
                  <span className="text-[#FF5A2C] ml-1">★ 4.98</span>
                </div>
                <div className="text-[7.5px] sm:text-[9px] text-white/70 uppercase tracking-wider mt-0.5 font-medium truncate">
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
              className="relative w-[70vw] sm:w-1/3 max-w-[280px] h-[190px] sm:h-[240px] md:h-[270px] rounded-[20px] sm:rounded-[26px] border border-white/30 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden text-left group shrink-0 snap-center"
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px] sm:rounded-[26px]">
                <img
                  src="./hero-images/laundry.jpg"
                  alt="Laundry Background"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#181d22]/60 via-[#101418]/50 to-[#080b0e]/75" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.18em] text-[#FF5A2C] uppercase drop-shadow truncate">
                  03 / LAUNDRY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C] shrink-0 ml-1" />
              </div>

              <div className="relative z-10 my-auto py-0.5 flex items-center justify-center opacity-70">
                <svg viewBox="0 0 120 120" className="w-8 sm:w-14 h-8 sm:h-14 stroke-white/50 fill-none drop-shadow">
                  <path d="M10 40 Q 35 20, 60 40 T 110 40" strokeWidth="1.5" stroke="#FF5A2C" />
                  <path d="M10 60 Q 35 40, 60 60 T 110 60" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-1.5 sm:pt-2 backdrop-blur-[2px]">
                <div className="text-[9px] sm:text-[12px] font-bold text-white drop-shadow truncate">
                  Crisp Care
                </div>
                <div className="text-[7.5px] sm:text-[9px] text-white/70 uppercase tracking-wider mt-0.5 font-medium truncate">
                  Wash • Fold • Same-Day
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copy & Value Proposition */}
        <div className="flex flex-col items-center my-2 sm:my-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[12px] xs:text-[14px] sm:text-[17px] leading-snug text-white max-w-[560px] font-medium drop-shadow"
          >
            One call. Three solutions. Transport, stays, laundry — sorted.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-1 text-[8.5px] xs:text-[10px] sm:text-[11.5px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-white/60 uppercase"
          >
            WE RUN THE ERRANDS. YOU RUN THE TRIP.
          </motion.p>
        </div>

        {/* Bottom Location & Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full pt-2 sm:pt-4 pb-1 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11.5px] tracking-[0.15em] sm:tracking-[0.18em] uppercase font-semibold text-white/60"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-white/25 grid place-items-center text-[7px] sm:text-[8px] font-black text-white/80 shrink-0">
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

      {/* Marquee Ticker */}
      <div className="w-full shrink-0">
        <MarqueeTicker speedMultiplier={0.5} duration={40} />
      </div>
    </section>
  );
};