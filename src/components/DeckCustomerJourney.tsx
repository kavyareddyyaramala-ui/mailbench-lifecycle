/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserMinus, UserCheck, ShoppingBag, RefreshCw, Trophy, LineChart, ShieldAlert } from 'lucide-react';

interface DeckCustomerJourneyProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckCustomerJourney({ isDark, onNext, onPrev }: DeckCustomerJourneyProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(2); // Default to Customer

  const transitionSteps = [
    {
      title: 'Visitor',
      subtitle: 'The Entrance Cohort',
      desc: 'Browsing products, studying brand credibility elements, sizing up return policies, and evaluating lifestyle alignments.',
      conversionGoal: 'Acquire high-value email & phone subscriber consent before site leave.',
      tactics: ['Minimalist bottom-right sweep forms', 'Exit intent boutique curation guides', 'Direct low-frequency SMS pre-consent popups'],
      stats: '100% Volume Baseline',
      icon: UserMinus
    },
    {
      title: 'Subscriber',
      subtitle: 'The Warm Engager',
      desc: 'A consumer who consented to communication but hasn\'t experienced the product. High visual intent, looking for a strong initial trigger.',
      conversionGoal: 'Establish emotional brand immersion & convert first order in 7 days.',
      tactics: ['Welcome flow (Founder values letter)', 'Ingredient biology/material quality spotlight', '15% new insider welcome access credit'],
      stats: '8% to 15% Opt-in Rates',
      icon: UserCheck
    },
    {
      title: 'Customer',
      subtitle: 'The First Experience',
      desc: 'The product lies on their sensory vanity shelf. High likelihood of post-purchase anxiety or routine confusion.',
      conversionGoal: 'Build brand affinity & guide secure layering routines to secure first repeat buy.',
      tactics: ['Sensory How-To-Use ritual guide email', 'Bespoke customer service checking', 'Day 14 replenishment recommendation'],
      stats: '30% Repeat Opportunity',
      icon: ShoppingBag
    },
    {
      title: 'Repeat Customer',
      subtitle: 'The Multi-Buyer',
      desc: 'Has made 2-3 purchases. High emotional familiarity. They trust correct active performance but need consistent communication.',
      conversionGoal: 'Automate programmatic replenishment loops & grow adjacent category share.',
      tactics: ['Subscription auto-refill triggers', 'Predictive season-wide collection early-look drops', 'Cross-sell routines matching their skin needs'],
      stats: '150% LTV Expansion',
      icon: RefreshCw
    },
    {
      title: 'VIP Customer',
      subtitle: 'The Brand Advocate',
      desc: 'The ultimate 5% cohort that drives 35% of company cash flow. Deep brand advocate and word-of-mouth force.',
      conversionGoal: 'Deepen emotional retention & unlock direct 2-way white-glove communication.',
      tactics: ['2-way SMS white-glove concierge access', 'Limited pre-launch color/edition allocations', 'Private zoom masterclass sessions with founders'],
      stats: '5x Average Asset Value',
      icon: Trophy
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-[#8F7A5D] uppercase font-semibold">
          08 // PORTFOLIO SPECIFICATIONS
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          SAMPLE CUSTOMER JOURNEY MAP
        </span>
      </div>

      <div className="my-auto flex flex-col gap-8 md:gap-10 py-2">
        <div className="max-w-xl">
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
            RETENTION SYSTEM ACCENSION PIPELINE
          </p>
          <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100">
            From Casual Visitor to Lifetime Sovereign
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mt-2">
            Most brands treat customers as flat statistics, sending identical blasts at every stage. We build a progressive retention journey that adapts automatically to their real-time engagement lifecycle.
          </p>
        </div>

        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 select-none relative z-10">
          {transitionSteps.map((step, idx) => {
            const isSelected = idx === selectedStepIndex;
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                onClick={() => setSelectedStepIndex(idx)}
                className={`flex flex-col p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative group ${
                  isSelected
                    ? 'bg-neutral-900 text-neutral-100 border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-750 shadow-md scale-102 font-medium z-10'
                    : 'bg-white/40 dark:bg-neutral-900/10 border-neutral-200 dark:border-neutral-850 text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-750'
                }`}
              >
                {/* Horizontal flow arrow connector line */}
                {idx < transitionSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-[1px] bg-neutral-200 dark:bg-neutral-800 z-0" />
                )}

                <div className="flex justify-between items-center mb-4">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-luxury-gold/25 text-luxury-gold' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-500 group-hover:text-luxury-gold'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-luxury-gold">STEP 0{idx+1}</span>
                </div>

                <h4 className="font-serif text-base text-neutral-800 dark:text-neutral-200 font-semibold group-hover:text-luxury-gold leading-tight">
                  {step.title}
                </h4>
                <p className="font-mono text-[9px] text-[#A38A5F] mt-1 tracking-wider uppercase font-medium">
                  {step.stats}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Multi-Step Analysis Frame */}
        <div className="border border-neutral-150 dark:border-neutral-850 p-6 rounded-2xl bg-[#FAF8F5]/80 dark:bg-neutral-900/10 backdrop-blur-sm shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStepIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Textual Description */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <span className="font-mono text-[9px] text-[#A38A5F] uppercase font-bold tracking-widest">
                    STAGE OVERVIEW
                  </span>
                  <h4 className="font-serif text-2xl font-light text-neutral-900 dark:text-neutral-100 mt-1">
                    {transitionSteps[selectedStepIndex].title} &mdash; <span className="font-light italic text-luxury-gold">{transitionSteps[selectedStepIndex].subtitle}</span>
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mt-3">
                    {transitionSteps[selectedStepIndex].desc}
                  </p>
                </div>

                <div className="p-4 border border-[#C5A880]/15 bg-[#C5A880]/5 rounded-xl flex gap-3">
                  <LineChart className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs font-semibold text-neutral-800 dark:text-neutral-200">The Ultimate Transition Goal</h5>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans mt-1">
                      {transitionSteps[selectedStepIndex].conversionGoal}
                    </p>
                  </div>
                </div>
              </div>

              {/* Concrete Tactics Grid */}
              <div className="md:col-span-6 space-y-3.5">
                <span className="font-mono text-[9px] text-[#A38A5F] uppercase font-bold tracking-widest block mb-1">
                  RETENTION TACTICS TRIGGERED AT POINT_
                </span>
                
                {transitionSteps[selectedStepIndex].tactics.map((tactic, tIdx) => (
                  <div key={tIdx} className="p-3.5 rounded-xl border border-neutral-150 dark:border-neutral-850 flex items-center gap-3.5 bg-white dark:bg-[#121211] hover:border-luxury-gold/45 transition-colors">
                    <div className="h-5 w-5 rounded-full bg-luxury-gold/15 flex items-center justify-center font-mono text-[10px] text-luxury-gold font-bold shrink-0">
                      {tIdx + 1}
                    </div>
                    <span className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-snug">
                      {tactic}
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
          ← Slide 07 / VIP SMS channels
        </button>
        <span>
          PAGE 08 OF 10
        </span>
        <button
          onClick={onNext}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 09 / Client Onboarding →
        </button>
      </div>
    </div>
  );
}
