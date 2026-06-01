/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Search, FileText, CheckSquare, BarChart } from 'lucide-react';

interface DeckDashboardProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckDashboard({ isDark, onNext, onPrev }: DeckDashboardProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const stepsList = [
    {
      id: 'step1',
      title: 'Discovery Call',
      subtitle: 'Complimentary Retention Audit',
      description: 'A complimentary 30-minute session to trace leaky funnel drops and highlight strategic value pools. Zero sales pitching, zero pressure.',
      icon: PhoneCall,
      timeframe: 'Day 1 — Real-Time Session',
      bullets: [
        'Detailed visual walkthrough of current trigger drops.',
        'Analyzing subscriber opt-in velocity boundaries.',
        'Identifying quick-win opportunities to capture lost carts.',
        'Direct alignment on actual retention timelines.'
      ]
    },
    {
      id: 'step2',
      title: 'Customer Journey Audit',
      subtitle: 'In-Depth Pipeline Inspection',
      description: 'An exhaustive investigation of unsubscribe behaviors, Klaviyo activity logs, SMS configuration rules, and recipient metrics of past campaigns.',
      icon: Search,
      timeframe: 'Weeks 1 to 2 — Exhaustive Audit',
      bullets: [
        'Deep-dive isolation of welcome flow unsubscribe spikes.',
        'Auditing conditional filter splits to eliminate message fatigue.',
        'Investigating opt-out rates and carrier compliant status limits.',
        'Complete analytical reporting on current cohort health indices.'
      ]
    },
    {
      id: 'step3',
      title: 'Strategy & Recommendations',
      subtitle: 'Custom Strategic Blueprints',
      description: 'Bespoke playbook designs built to honor the product\'s specific lifecycle physics rather than repeating standard generic agency templates.',
      icon: FileText,
      timeframe: 'Week 2 — Strategic Delivery',
      bullets: [
        'Delivery of customized retention narrative flows and SMS copy guidelines.',
        'Defining target segments and custom product layering cycles.',
        'Detailed plan proposing copy tests and delay optimization targets.',
        'A comprehensive map of cross-channel notifications.'
      ]
    },
    {
      id: 'step4',
      title: 'Implementation',
      subtitle: 'Bespoke Creative Engineering',
      description: 'Professional copy development, minimalist editorial design layouts, multi-channel synchronization, and strict end-to-end sandbox QA testing.',
      icon: CheckSquare,
      timeframe: 'Weeks 3 to 4 — Active Buildout',
      bullets: [
        'Sleek, brand-aligned visual email styling using clean structures.',
        'Writing compelling, high-converting SMS and email copy blocks.',
        'Setting up advanced Klaviyo segments and sequence filters.',
        'Pre-release testing on major mobile and web views.'
      ]
    },
    {
      id: 'step5',
      title: 'Optimization',
      subtitle: 'Programmatic Cohort Refinements',
      description: 'Constant state monitoring, programmatic analysis, and multivariable split-testing of time-lag thresholds to continuously capture incremental revenue drops.',
      icon: BarChart,
      timeframe: 'Ongoing Retention Mandates',
      bullets: [
        'A/B testing email send times (e.g., 30 mins vs. 60 mins cart bounce).',
        'Optimizing SMS word lengths and visual media placements.',
        'Tracking long-term cohort value growth and frequency shifts.',
        'Deploying re-engagement hooks to capture cold subscriber groups.'
      ]
    }
  ];

  const activeStep = stepsList[selectedStepIndex] || stepsList[0];
  const StepIcon = activeStep.icon;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          09 // COLLABORATION STRUCTURES
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          WHAT WORKING TOGETHER LOOKS LIKE
        </span>
      </div>

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
        {/* Left Interactive Pipeline */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <span className="font-mono text-[9px] text-[#A38A5F] uppercase tracking-widest font-bold block mb-1">Our Onboarding Pipeline</span>
            <h3 className="font-serif text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-snug">
              Boutique Collaboration Channels
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed mt-2">
              Every brand we advise receives direct personal focus. We do not transfer your accounts to junior account managers—our specialized founder handles everything.
            </p>
          </div>

          <div className="space-y-1.5 select-none font-sans">
            {stepsList.map((step, idx) => {
              const matches = idx === selectedStepIndex;
              const StepSmallIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${
                    matches
                      ? 'bg-neutral-900 text-neutral-50 border-neutral-850 dark:bg-neutral-850 dark:border-neutral-750'
                      : 'border-neutral-150 dark:border-neutral-850 text-neutral-500 hover:bg-neutral-100/40 dark:hover:bg-[#131312]/30 hover:text-neutral-950 dark:hover:text-neutral-100'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${matches ? 'bg-[#C5A880]/20 text-luxury-gold' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'}`}>
                    <StepSmallIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide block leading-none">{step.title}</span>
                    <span className="font-mono text-[8px] text-[#A38A5F] block mt-1">STEP 0{idx + 1} &mdash; Details</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Active Step Details Dashboard card */}
        <div className="lg:col-span-7 h-full flex flex-col justify-center bg-neutral-50/50 dark:bg-neutral-900/10 p-6 rounded-2xl border border-neutral-150 dark:border-neutral-850">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div>
                <div className="flex justify-between items-center select-none mb-1">
                  <span className="font-mono text-[8px] text-luxury-gold tracking-widest uppercase font-bold">
                    MAILBENCH FLOW DIAGRAM &bull; {activeStep.timeframe.toUpperCase()}
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-light text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <StepIcon className="w-5 h-5 text-[#C5A880] shrink-0" />
                  {activeStep.title} &mdash; <span className="font-serif italic font-light text-luxury-gold">{activeStep.subtitle}</span>
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed mt-2 md:max-w-xl">
                  {activeStep.description}
                </p>
              </div>

              {/* Scope Action Grid */}
              <div className="space-y-2 select-none">
                <span className="font-mono text-[8px] text-[#A38A5F] uppercase tracking-widest font-bold block mb-1">
                  EXPECTED OPERATIONAL DELIVERABLES
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-3 bg-white dark:bg-[#121211] rounded-xl border border-neutral-100 dark:border-neutral-850 flex items-start gap-2.5 shadow-sm"
                    >
                      <span className="h-4 w-4 bg-[#C5A880]/15 text-[#8F7A5D] font-mono text-[9px] font-bold rounded flex items-center justify-center shrink-0 mt-0.5">
                        {bIdx + 1}
                      </span>
                      <span className="text-[11px] text-neutral-600 dark:text-neutral-350 leading-normal font-sans">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
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
          ← Slide 08 / Customer Journey
        </button>
        <span>
          PAGE 09 OF 10
        </span>
        <button
          onClick={onNext}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 10 / Book Audit →
        </button>
      </div>
    </div>
  );
}
