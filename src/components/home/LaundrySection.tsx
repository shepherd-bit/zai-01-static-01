import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FreshLabVisual } from './FreshLabVisual';

export const LaundrySection: React.FC = () => {
  const [pickupEnabled, setPickupEnabled] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  const handleSelectDropoff = () => {
    setPickupEnabled(false);
    setTapCount((prev) => prev + 1);
  };

  const handleSelectPickup = () => {
    setPickupEnabled(true);
    setTapCount((prev) => prev + 1);
  };

  return (
    <section id="laundry" className="relative bg-[#0E0E0F] py-14 md:py-32 overflow-hidden text-white">
      {/* Background Neon Halo */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[680px] h-[680px] bg-[#D9FF66]/[0.08] rounded-full blur-[90px] pointer-events-none"
      />

      <div className="mx-auto max-w-[1600px] px-4 md:px-10 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
          
          {/* Left Service Menu & Expanded Price Grid */}
          <div>
            <div className="flex gap-4 md:gap-6">
              <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
                03 / LAUNDRY
              </div>
              <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[38px] md:text-[92px]">
                ZAI
                <br />
                <span className="text-[#D9FF66]">LAUNDRY</span>
              </h2>
            </div>

            <p className="mt-4 md:mt-6 max-w-[520px] text-[14px] md:text-[18px] leading-[1.4] text-white/60">
              Professional fabric care. Duvets, everyday wear, dry cleaning, and specialized pieces. 24hr turnaround with premium finishes.
            </p>

            {/* Interactive Mode Toggle */}
            <div className="mt-5 md:mt-8 inline-flex items-center gap-2 md:gap-3 rounded-full bg-white/[0.06] border border-white/10 p-1 md:p-1.5">
              <button
                type="button"
                onClick={handleSelectDropoff}
                aria-pressed={!pickupEnabled}
                className={`h-[30px] md:h-[36px] px-3 md:px-5 rounded-full text-[10px] md:text-[12px] font-bold transition ${
                  !pickupEnabled ? 'bg-[#F5F1EB] text-[#0E0E0F]' : 'text-white/60 hover:text-white'
                }`}
              >
                Drop-off {!pickupEnabled ? '• Active' : ''}
              </button>

              <button
                type="button"
                onClick={handleSelectPickup}
                aria-pressed={pickupEnabled}
                className={`h-[30px] md:h-[36px] px-3 md:px-5 rounded-full text-[10px] md:text-[12px] font-bold transition flex items-center gap-1.5 md:gap-2 ${
                  pickupEnabled ? 'bg-[#D9FF66] text-[#0E0E0F]' : 'text-white/60 hover:text-white'
                }`}
              >
                <span>Pickup &amp; Delivery</span>
                <span className="text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded bg-black/10">
                  +200 KES {pickupEnabled ? '• Active' : ''}
                </span>
              </button>
            </div>

            {/* Mode helper feedback */}
            <div className="mt-2 md:mt-3 text-[9px] md:text-[11px] font-bold tracking-wide opacity-70 flex items-center gap-1.5 md:gap-2">
              <span>
                {pickupEnabled
                  ? '✓ Pickup enabled — driver collects within 10km (+200 KES)'
                  : '✓ Drop-off mode — bring to designated station'}
              </span>
              <span className="px-1.5 py-0.5 md:px-2 rounded-full bg-white/10 text-[8px] md:text-[10px]">
                {tapCount} taps
              </span>
            </div>

            {/* Expanded Multi-Column Price List Container */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              
              {/* Category 1: Duvets & Ironing Only */}
              <div className="rounded-[20px] bg-[#151515] border border-white/[0.07] p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#D9FF66] uppercase mb-3">
                    Duvets &amp; Ironing
                  </div>
                  <div className="space-y-3 text-[13px]">
                    <div className="border-b border-white/5 pb-2">
                      <div className="font-bold">Duvets (All Sizes)</div>
                      <div className="text-[#D9FF66] font-extrabold text-[15px]">Ksh. 400</div>
                    </div>
                    <div className="text-[11px] font-bold opacity-40 uppercase tracking-widest pt-1">Ironing Only</div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Suits</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Kanzu</span><span className="font-bold">@ 50</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Shirt</span><span className="font-bold">@ 30</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Trousers</span><span className="font-bold">@ 50</span></div>
                  </div>
                </div>
              </div>

              {/* Category 2: General Wash & Special Pieces */}
              <div className="rounded-[20px] bg-[#151515] border border-white/[0.07] p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#D9FF66] uppercase mb-3">
                    Laundry &amp; Care
                  </div>
                  <div className="space-y-3 text-[13px]">
                    <div className="border-b border-white/5 pb-2">
                      <div className="font-bold">Wash &amp; Fold</div>
                      <div className="text-[#D9FF66] font-extrabold text-[15px]">@ 80 Per Kg</div>
                      <div className="text-[10px] opacity-50">Starts from 3KG</div>
                    </div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Steaming</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Laundry bag</span><span className="font-bold">@ 50</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Lint removal</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Stain removal</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Wedding Gown</span><span className="font-bold">@ 500</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Graduation gown</span><span className="font-bold">@ 350</span></div>
                  </div>
                </div>
              </div>

              {/* Category 3: Price Per Piece */}
              <div className="rounded-[20px] bg-[#151515] border border-white/[0.07] p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#D9FF66] uppercase mb-3">
                    Price Per Piece
                  </div>
                  <div className="space-y-2 text-[12px]">
                    <div className="flex justify-between items-center"><span className="opacity-80">Suits</span><span className="font-bold">@ 400</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Jackets / Jumpers</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Shoes (pair)</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Pillow (2 pcs)</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Shirt / Trouser / Dress</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Bed covers</span><span className="font-bold">@ 150</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Bath Robe / Coat</span><span className="font-bold">@ 200</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Trench coats</span><span className="font-bold">@ 200</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Curtains (per kg)</span><span className="font-bold">@ 100</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-80">Dolls</span><span className="font-bold">@ 100</span></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quality Standard Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#2E3A2F] border border-white/10 text-[11px] font-bold tracking-wide">
                ECO DETERGENT • NO BLEACH
              </span>
              <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold tracking-wide">
                EXPERT PRESSING &amp; CARE
              </span>
            </div>
          </div>

          {/* Right Visual Component (Fresh Lab Drum) */}
          <div className="sticky top-10">
            <FreshLabVisual pickupEnabled={pickupEnabled} />
          </div>

        </div>
      </div>
    </section>
  );
};