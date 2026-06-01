/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, Tag, Eye } from 'lucide-react';
import { campaignSamples } from '../data';
import { CampaignSample } from '../types';

interface DeckCampaignsProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckCampaigns({ isDark, onNext, onPrev }: DeckCampaignsProps) {
  const [selectedCampId, setSelectedCampId] = useState<string>('launch');
  const activeCamp = campaignSamples.find((c) => c.id === selectedCampId) || campaignSamples[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          04 // NARRATIVES & REVENUE DRIVERS
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          CAMPAIGN SAMPLES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 grow items-stretch py-2">
        {/* Left Hand: Campaign Selector Column */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
          <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            REVENUE-DRIVING ONE-OFFS
          </p>
          <h3 className="font-serif text-2xl lg:text-3xl text-neutral-900 dark:text-neutral-100 font-light tracking-tight mb-2">
            Beautifully Calibrated Broadcasts
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 font-sans">
            We program meticulously timed, highly aesthetic broadcast newsletters 2 to 3 times per week to complement background lifecycles. Zero template bloat, high emotional depth.
          </p>

          <div className="space-y-2">
            {campaignSamples.map((camp) => {
              const matches = camp.id === selectedCampId;
              return (
                <button
                  key={camp.id}
                  onClick={() => setSelectedCampId(camp.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    matches
                      ? 'bg-neutral-900 text-neutral-100 border-neutral-850 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-750'
                      : 'border-neutral-200/60 dark:border-neutral-850 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/30 text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-semibold tracking-wide">
                      {camp.title}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-400 group-hover:text-luxury-gold uppercase tracking-wider mt-0.5">
                      {camp.industry} • {camp.type.split(' / ')[0]}
                    </span>
                  </div>
                  <Tag className={`w-3.5 h-3.5 ${matches ? 'text-luxury-gold' : 'text-neutral-300 dark:text-neutral-700'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Hand: Deep Dive Previewer */}
        <div className="lg:col-span-8 flex flex-col h-full bg-neutral-50/50 dark:bg-neutral-900/10 p-6 rounded-2xl border border-neutral-150 dark:border-neutral-850 justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCamp.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Campaign Strategy Copy Details */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="p-3.5 bg-[#C5A880]/5 border border-[#C5A880]/20 rounded-xl">
                  <span className="font-mono text-[8px] text-[#8F7A5D] tracking-widest uppercase font-bold block">
                    EXAMPLE CAMPAIGN FRAMEWORK
                  </span>
                  <p className="text-[10px] text-[#8F7A5D] leading-relaxed font-sans mt-0.5">
                    This is a demonstration mockup representing clean editorial content copy blocks and typography rules.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/40">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                    SUBJECT LINE
                  </span>
                  <p className="font-serif text-sm font-medium italic text-neutral-800 dark:text-neutral-200">
                    &ldquo;{activeCamp.subject}&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/40">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                    PREVIEW TEXT
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                    {activeCamp.previewText}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/40">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                    LIFECYCLE SEGMENT_
                  </span>
                  <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-wider font-semibold">
                    {activeCamp.tagline}
                  </span>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans mt-1">
                    Delivered exclusively to active cohort lists under deep behavioral split testing.
                  </p>
                </div>
              </div>

              {/* Email Content Visual Presentation */}
              <div className="md:col-span-7 flex justify-center">
                <div className="w-full max-w-sm border border-neutral-150 dark:border-neutral-850 rounded-2xl overflow-hidden bg-white text-neutral-900 shadow-xl select-text flex flex-col">
                  {/* Browser Toolbar Bar */}
                  <div className="border-b border-neutral-150 p-3 bg-neutral-50 flex justify-between items-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[9px] font-mono text-neutral-400 lowercase tracking-widest">
                      {activeCamp.industry.toLowerCase()}-campaign-preview.html
                    </span>
                    <Eye className="w-3 h-3 text-neutral-400" />
                  </div>

                  {/* Inside Newsletter */}
                  <div className="p-5 flex flex-col items-center bg-[#FDFBF7] max-h-[300px] overflow-y-auto">
                    {/* Editorial Logo */}
                    <p className="font-serif tracking-[0.3em] text-[9px] font-semibold text-[#16120E] uppercase border-b border-neutral-105 pb-1 mb-3 text-center">
                      M A I L B E N C H
                    </p>

                    {/* Editorial Image Mock */}
                    <div className="relative w-full h-32 rounded-lg overflow-hidden bg-neutral-200 mb-4 group shadow-sm">
                      <img
                        src={activeCamp.imageUrl}
                        alt={activeCamp.title}
                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-2.5">
                        <span className="font-mono text-[7px] text-white tracking-widest uppercase bg-black/40 px-2 py-0.5 rounded">
                          {activeCamp.industry}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-[7px] tracking-widest text-[#8F7A5D] uppercase mb-1">
                      {activeCamp.tagline}
                    </span>

                    <h4 className="font-serif text-lg font-light tracking-tight text-[#16120E] text-center mb-2 leading-tight">
                      {activeCamp.headline}
                    </h4>

                    <p className="text-[10px] text-neutral-600 leading-relaxed text-center font-sans max-w-[240px] mb-4">
                      {activeCamp.bodyText}
                    </p>

                    {activeCamp.offerText && (
                      <div className="border border-dashed border-[#C5A880]/30 bg-[#C5A880]/5 px-3 py-1.5 rounded mb-4">
                        <p className="font-mono text-[8px] text-[#A38A5F] tracking-wide uppercase font-semibold text-center">
                          {activeCamp.offerText}
                        </p>
                      </div>
                    )}

                    <button className="mt-1 px-8 py-2 bg-neutral-950 text-neutral-50 text-[9px] uppercase font-mono tracking-widest hover:bg-neutral-900 transition-colors rounded">
                      {activeCamp.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t border-neutral-150 dark:border-neutral-850 pt-4 mt-4 select-none">
        <button
          onClick={onPrev}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          ← Slide 05 / Active Sandbox
        </button>
        <span className="font-mono text-[10px] text-neutral-400">
          PAGE 06 OF 10
        </span>
        <button
          onClick={onNext}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 07 / SMS Marketing →
        </button>
      </div>
    </div>
  );
}
