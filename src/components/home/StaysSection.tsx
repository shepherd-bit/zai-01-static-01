import React from 'react';
import { motion } from 'motion/react';

export const StaysSection: React.FC = () => {
  return (
    <section id="stays" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:justify-between md:items-end">
          <div className="flex gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
              02 / STAYS
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[36px] md:text-[84px]">
              STAYS THAT
              <br />
              FEEL LIKE <span className="text-[#FF5A2C]">HOME</span>
            </h2>
          </div>

          <div className="max-w-[420px] text-[13px] md:text-[15px] leading-[1.5] opacity-70">
            Curated Airbnbs. Self check-in, fast WiFi, full kitchens. Perfect for layovers, project stays, or soft landings. Make inquiries via WhatsApp (Instant reply).
          </div>
        </div>

        {/* Main Content Grid: Left Card / Right Gallery & WhatsApp CTA */}
        <div className="mt-8 md:mt-14 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Single Listing Card (Zai Homes) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 group relative rounded-[20px] md:rounded-[28px] bg-white border border-black/[0.06] p-3 md:p-5 overflow-hidden shadow-sm"
          >
            {/* Visual Thumbnail Area with Empty Img Container */}
            <div className="relative aspect-[1.6/1] rounded-[14px] md:rounded-[20px] overflow-hidden bg-[#0E0E0F]">
              <img
                src="./stays/1.avif"
                alt="Zai Homes Main Space"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))]"
              />

              {/* Top Badges */}
              <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 flex gap-1.5 md:gap-2 z-10">
                <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[9px] md:text-[11px] font-bold tracking-wide">
                  Superhost
                </span>
                <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/90 text-[#0E0E0F] text-[9px] md:text-[11px] font-bold">
                  ★ 5.0 Stars
                </span>
              </div>

              {/* Bottom Overlay Title Info */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end z-10">
                <div className="text-white">
                  <div className="text-[10px] md:text-[13px] opacity-70 tracking-wide">1 BR • 2 guests</div>
                  <div className="text-[14px] md:text-[18px] font-black tracking-tight leading-none mt-0.5 md:mt-1">
                    Zai Homes
                  </div>
                </div>
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white text-black grid place-items-center font-bold text-[10px] md:text-[12px]">
                  ↗
                </div>
              </div>
            </div>

            {/* Card Meta & Nightly Rate */}
            <div className="px-1 md:px-2 pt-3 md:pt-4 pb-1 md:pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <div className="text-[10px] md:text-[12px] opacity-50 tracking-wide">Watamu, Kilifi, KE</div>
                <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1 md:gap-2 text-[8px] md:text-[10px] font-bold tracking-wide">
                  {['Wifi', 'Dedicated Workspace', 'Washing machine', 'Exterior CCTV surveillance cams', 'AC – split-type', 'Kitchen'].map((amenity) => (
                    <span
                      key={amenity}
                      className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-black/[0.06] text-[#0E0E0F]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                <div>
                  <div className="text-[9px] md:text-[11px] uppercase tracking-widest opacity-40 font-bold">
                    From
                  </div>
                  <div className="font-black text-[16px] md:text-[20px] tracking-tight">
                    KES 3,941
                    <span className="text-[9px] md:text-[11px] font-bold opacity-40">/night</span>
                  </div>
                </div>
                <a
                  href="https://www.airbnb.co.uk/rooms/1399000730116693144?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0 sm:mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 h-[30px] md:h-[36px] px-3 md:px-4 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[9px] md:text-[11px] font-bold tracking-wide hover:bg-black transition"
                >
                  Book on Airbnb
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[8px] md:text-[10px]">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tiny Images of Other Spaces + WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="text-[11px] md:text-[13px] font-black uppercase tracking-wider opacity-60 mb-3">
                Property Spaces & Angles
              </div>
              
              {/* 2x2 Grid of Tiny Image Containers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-black/10 border border-black/10">
                  <img src="./stays/2.PNG" alt="Space detail 1" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-black/10 border border-black/10">
                  <img src="./stays/3.avif" alt="Space detail 2" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-black/10 border border-black/10">
                  <img src="./stays/4.avif" alt="Space detail 3" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-black/10 border border-black/10">
                  <img src="./stays/5.PNG" alt="Space detail 4" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* WhatsApp Call To Action Box */}
            <div className="rounded-[20px] bg-white border border-black/[0.06] p-6 shadow-sm flex flex-col gap-4 text-center">
              <div className="text-[14px] md:text-[16px] font-black">
                Have questions about this stay?
              </div>
              <a
                href={`https://wa.me/254729115021?text=${encodeURIComponent(
                  'Hi Zai Limited, I would like to make more inquiries regarding Zai Homes in Watamu.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[46px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[13px] tracking-wide inline-flex items-center justify-center gap-2.5 transition shadow-md"
              >
                <span>Make more inquiries on WhatsApp</span>
                <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center text-xs">💬</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 items-start md:items-center md:justify-between">
          <div className="text-[10px] md:text-[12px] tracking-wide opacity-60 max-w-[600px]">
            All listings are Airbnb Superhost track, verified by Zai team. Instant book • Self
            check-in • M-Pesa accepted • Invoice available.
          </div>
        </div>
      </div>
    </section>
  );
};