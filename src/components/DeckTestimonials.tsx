/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldAlert, BadgeInfo, CheckCircle, PackageOpen, Layout } from 'lucide-react';
import { portfolioProjects } from '../data';

interface DeckTestimonialsProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckTestimonials({ isDark, onNext, onPrev }: DeckTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProj = portfolioProjects[activeIndex] || portfolioProjects[0];

  const handleNextProject = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioProjects.length);
  };

  const handlePrevProject = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          04 // STRATEGIC ADVISORIES
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          PORTFOLIO PROJECTS
        </span>
      </div>

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-2 items-center">
        {/* Left Hand: Explanatory Context */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-luxury-gold mb-1.5 select-none">
            <Layout className="w-3.5 h-3.5" />
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Real-World Case Architectures</span>
          </div>
          
          <h3 className="font-serif text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100 font-light tracking-tight leading-snug">
            Demonstrated Client Frameworks
          </h3>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            We believe in complete transparency and strategic honesty. Every project is engineered directly under our founder's vision—never utilizing automated template copies.
          </p>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            These represent exact customer journeys, email/SMS sequences, and retention frameworks created specifically to elevate engagement for high-end beauty, fashion, and wellness brands.
          </p>

          {/* Quick Selection Dots */}
          <div className="flex gap-2 mt-6 select-none">
            {portfolioProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-luxury-gold' : 'w-2 bg-neutral-200 dark:bg-neutral-800'
                }`}
                title={`Project: ${proj.title}`}
              />
            ))}
          </div>
        </div>

        {/* Right Hand: Interactive Project Showcase Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-neutral-150 dark:border-neutral-850 rounded-2xl bg-white dark:bg-[#121211] shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-44 bg-neutral-100 overflow-hidden">
                <img
                  src={activeProj.imageUrl}
                  alt={activeProj.title}
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-neutral-950/0 flex justify-between items-end p-5 select-none hover:grayscale-0 transition-all duration-300">
                  <div>
                    <span className="font-mono text-[7px] text-white tracking-widest uppercase bg-luxury-gold/80 px-2 py-0.5 rounded font-bold">
                      PORTFOLIO SPECIFICATION
                    </span>
                    <h4 className="font-serif text-lg text-white mt-1">
                      {activeProj.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Text Specs */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Challenge aspect */}
                  <div className="p-3 bg-neutral-50/50 dark:bg-neutral-900/10 rounded-xl border border-neutral-100 dark:border-neutral-850">
                    <span className="font-mono text-[8px] text-red-500 font-bold uppercase tracking-widest block mb-1">
                      THE CHALLENGE
                    </span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                      {activeProj.challenge}
                    </p>
                  </div>

                  {/* Approach aspect */}
                  <div className="p-3 bg-neutral-50/50 dark:bg-neutral-900/10 rounded-xl border border-neutral-100 dark:border-neutral-850">
                    <span className="font-mono text-[8px] text-emerald-500 font-bold uppercase tracking-widest block mb-1">
                      OUR APPROACH
                    </span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                      {activeProj.approach}
                    </p>
                  </div>
                </div>

                {/* Deliverables tags row */}
                <div>
                  <span className="font-mono text-[8px] text-[#A38A5F] font-bold uppercase tracking-widest block mb-2 select-none">
                    LIFECYCLE DELIVERABLES
                  </span>
                  <div className="flex flex-wrap gap-2 select-none">
                    {activeProj.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-full text-[10px] font-mono font-semibold text-[#8F7A5D] capitalize"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Toggles Inside Card */}
              <div className="border-t border-neutral-150 dark:border-neutral-850 px-6 py-3 bg-neutral-50/50 dark:bg-[#181817] flex justify-between items-center select-none">
                <button
                  onClick={handlePrevProject}
                  className="font-mono text-[9px] text-neutral-400 hover:text-luxury-gold uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" /> Previous
                </button>
                <span className="font-mono text-[9px] text-neutral-400">
                  PROJECT 0{activeIndex + 1} OF 0{portfolioProjects.length}
                </span>
                <button
                  onClick={handleNextProject}
                  className="font-mono text-[9px] text-neutral-400 hover:text-luxury-gold uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Next <ArrowRight className="w-3 h-3" />
                </button>
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
          ← Slide 03 / How We Think
        </button>
        <span>
          PAGE 04 OF 10
        </span>
        <button
          onClick={onNext}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 05 / Active Sandbox →
        </button>
      </div>
    </div>
  );
}
