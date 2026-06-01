/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Users2, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { howWeThinkItems } from '../data';

interface DeckWhyOpenArcProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckWhyOpenArc({ isDark, onNext, onPrev }: DeckWhyOpenArcProps) {
  const [activeId, setActiveId] = useState<string>('retention');
  const selectedItem = howWeThinkItems.find((item) => item.id === activeId) || howWeThinkItems[0];

  const iconMap: Record<string, any> = {
    retention: Target,
    engagement: Users2,
    ltv: DollarSign,
    lifecycle: Clock
  };

  const bulletsMap: Record<string, string[]> = {
    retention: [
      'Nurturing existing cohorts to prevent silent account drop-offs.',
      'Studying natural purchase-cycle lag intervals before triggers fire.',
      'Building thoughtful win-back pathways that value the user\'s inbox.',
      'Establishing long-term emotional loyalty instead of transactional discount noise.'
    ],
    engagement: [
      'Creating narrative welcome journeys that educate and build authentic trust.',
      'Developing beautiful curation editorials people genuinely look forward to reading.',
      'Aligning copy tone to the luxury aesthetics of premium brand clients.',
      'Treating every notification as an intimate, respectful conversation.'
    ],
    ltv: [
      'Designing VIP access queues and early-batch reserving mechanisms.',
      'Recommending complementary adjacent categories based on past buyer profiles.',
      'Improving customer lifetime frequency metrics naturally and systematically.',
      'Encouraging retention advocacy loops at critical post-purchase milestones.'
    ],
    lifecycle: [
      'Delivering the precise supportive message at the optimal time of day.',
      'Orchestrating seamless coordination across email, SMS, and desktop notifications.',
      'Meticulously testing delay thresholds (e.g., 30 mins vs. 60 mins cart bounce).',
      'Minimizing list fatigue while capturing every incremental micro-decision.'
    ]
  };

  const IconComp = iconMap[activeId] || Target;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          03 // OPERATIONAL PRINCIPLES
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          HOW WE THINK
        </span>
      </div>

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
        {/* Left Toggles Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div>
            <span className="font-mono text-[9px] text-luxury-gold uppercase tracking-widest font-bold block mb-1">Our Core Philosophy</span>
            <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-snug">
              Specialized Retention Mindset
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed mt-2">
              We look at retention from a structural psychological view. We believe beautiful communications lead directly to authentic, measurable brand growth.
            </p>
          </div>

          <div className="space-y-2 select-none">
            {howWeThinkItems.map((item, index) => {
              const matched = item.id === activeId;
              const ToggIcon = iconMap[item.id] || Target;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-4 transition-all duration-300 cursor-pointer group ${
                    matched
                      ? 'bg-neutral-905 border-neutral-850 text-neutral-100 dark:bg-neutral-850 dark:border-neutral-750'
                      : 'border-neutral-200/60 dark:border-neutral-850 text-neutral-500 hover:bg-neutral-100/40 dark:hover:bg-neutral-900/30 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${matched ? 'bg-luxury-gold/20 text-luxury-gold' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'}`}>
                    <ToggIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-serif text-sm font-semibold tracking-wide block">{item.title}</span>
                    <span className="font-mono text-[9px] text-[#A38A5F] group-hover:text-luxury-gold mt-0.5 block">0{index + 1} — View Strategy</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Panel */}
        <div className="lg:col-span-7 h-full flex flex-col justify-center bg-neutral-50/50 dark:bg-neutral-900/10 p-6 rounded-2xl border border-neutral-150 dark:border-neutral-850">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-5"
            >
              <div>
                <span className="font-mono text-[8px] text-[#A38A5F] uppercase tracking-widest font-bold">
                  PHILOSOPHER NOTE // {selectedItem.id.toUpperCase()}
                </span>
                <h4 className="font-serif text-2xl font-light text-neutral-800 dark:text-neutral-200 mt-1">
                  {selectedItem.title}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed mt-2.5">
                  {selectedItem.description}
                </p>
              </div>

              {/* Action Bullets */}
              <div className="space-y-3">
                <span className="font-mono text-[8px] text-[#A38A5F] uppercase tracking-widest font-bold block mb-1">
                  METHODOLOGICAL PROTOCOLS
                </span>
                {bulletsMap[activeId]?.map((bullet, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white dark:bg-[#121211] rounded-xl border border-neutral-150 dark:border-neutral-850 flex items-start gap-3 hover:border-luxury-gold/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5 select-none" />
                    <span className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t border-neutral-150 dark:border-neutral-850 pt-4 mt-4 select-none font-mono text-[10px] text-neutral-400">
        <button
          onClick={onPrev}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          ← Slide 02 / Meet Kavya
        </button>
        <span>
          PAGE 03 OF 10
        </span>
        <button
          onClick={onNext}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 04 / Portfolio Projects →
        </button>
      </div>
    </div>
  );
}
