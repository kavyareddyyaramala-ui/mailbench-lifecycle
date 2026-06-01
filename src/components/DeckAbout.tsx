/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, HeartPulse, Sparkles, Star, Users, Award, ShieldCheck } from 'lucide-react';

interface DeckAboutProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckAbout({ isDark, onNext, onPrev }: DeckAboutProps) {
  const focusAreas = [
    { title: 'Customer Retention', desc: 'Keeping customers engaged beyond the first purchase.' },
    { title: 'Customer Engagement', desc: 'Creating communication customers actually want to receive.' },
    { title: 'Repeat Purchases', desc: 'Turning one-time buyers into loyal brand advocates.' },
    { title: 'Customer Lifetime Value', desc: 'Building systems that increase long-term customer value.' },
    { title: 'Better Customer Experiences', desc: 'Thoughtful lifecycle journeys matching user psychology.' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          02 // THE FOUNDER'S MISSION
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          MEET KAVYA
        </span>
      </div>

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-3 items-center">
        {/* Left Postcard Frame Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-luxury-gold mb-1.5 select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Specialist &amp; Founder</span>
          </div>
          
          <h3 className="font-serif text-3xl sm:text-5xl text-neutral-900 dark:text-neutral-100 font-extralight tracking-tight leading-none mb-6">
            Meet <span className="font-normal italic text-luxury-gold">Kavya</span>
          </h3>

          <div className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-serif font-light leading-relaxed max-w-2xl">
            <p className="text-lg text-neutral-800 dark:text-neutral-200 italic font-normal tracking-wide text-left pl-4 border-l-2 border-luxury-gold">
              &ldquo;I started MailBench with a simple belief: Customers shouldn't forget a brand after their first purchase.&rdquo;
            </p>
            <p className="font-sans text-xs sm:text-sm text-neutral-550 dark:text-neutral-450">
              After spending years studying customer behavior, customer journeys, email marketing, SMS marketing, and retention systems, I became fascinated by one question:
            </p>
            <p className="font-sans text-xs sm:text-sm text-neutral-550 dark:text-neutral-450 italic text-shadow-sm font-medium text-neutral-800 dark:text-neutral-200">
              Why do some brands become part of a customer's routine while others get forgotten?
            </p>
            <p className="font-sans text-xs sm:text-sm text-neutral-550 dark:text-neutral-450">
              Today I help ecommerce brands build stronger customer relationships through thoughtful lifecycle marketing and retention systems.
            </p>
          </div>
        </div>

        {/* Right Pillars/Focus Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-mono text-[9px] text-[#A38A5F] uppercase tracking-widest font-bold mb-3 select-none">
            OUR SPECIALIZED STRATEGIC FOCUS_
          </span>
          <div className="space-y-3">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-50/60 dark:bg-[#151515]/40 rounded-xl border border-neutral-150 dark:border-neutral-850 hover:border-luxury-gold/30 transition-all duration-300 flex items-start gap-3 shadow-none"
              >
                <div className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold shrink-0 mt-0.5 select-none font-mono text-[9px] font-bold">
                  0{idx+1}
                </div>
                <div>
                  <h4 className="font-serif text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide">
                    {area.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-sans mt-0.5 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t border-neutral-150 dark:border-neutral-850 pt-4 mt-4 select-none">
        <button
          onClick={onPrev}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          ← Slide 01 / Cover
        </button>
        <span className="font-mono text-[10px] text-neutral-400">
          PAGE 02 OF 10
        </span>
        <button
          onClick={onNext}
          className="font-mono text-[10px] tracking-widest text-[#9c8465] hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 03 / How We Think →
        </button>
      </div>
    </div>
  );
}
