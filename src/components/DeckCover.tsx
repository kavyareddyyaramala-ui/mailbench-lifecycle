/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers, Mail, MessageSquare } from 'lucide-react';

interface DeckCoverProps {
  isDark: boolean;
  onNext: () => void;
}

export default function DeckCover({ isDark, onNext }: DeckCoverProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-16 overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-neutral-200 dark:border-neutral-800 opacity-20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-luxury-gold/5 blur-3xl pointer-events-none" />
      
      {/* Top Header Row */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-luxury-gold flex items-center justify-center font-serif text-sm font-bold text-luxury-gold">
            M
          </div>
          <span className="font-serif tracking-[0.25em] text-xs font-semibold uppercase text-luxury-gold">
            MailBench
          </span>
        </div>
        <div className="text-right">
          <span className="font-mono text-[10px] tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
            EST. 2021 — PORTFOLIO SERIES
          </span>
        </div>
      </div>

      {/* Main Hero Wordmark */}
      <div className="my-auto max-w-4xl z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-luxury-gold font-medium uppercase">
            Aesthetic Lifecycle Architectures
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-neutral-900 dark:text-neutral-100 font-extralight"
        >
          Mail<span className="font-light italic text-luxury-gold">Bench</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-luxury-gold my-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-3xl sm:text-4xl text-neutral-800 dark:text-neutral-300 font-light tracking-wide leading-snug"
        >
          Sophisticated Email &amp; SMS Systems Built for Beauty, Wellness, &amp; Luxury Fashion Brands.
        </motion.h2>

        {/* Focus Disciplines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-8 text-neutral-500 dark:text-neutral-400 border-t border-neutral-150 dark:border-neutral-850 pt-8 w-full max-w-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/40 text-luxury-gold">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider font-semibold text-neutral-400">01 / EMAIL</p>
              <p className="font-serif text-sm font-medium text-neutral-800 dark:text-neutral-200">Lifecycle Narrative Flows</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/40 text-luxury-gold">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider font-semibold text-neutral-400">02 / SMS</p>
              <p className="font-serif text-sm font-medium text-neutral-800 dark:text-neutral-200">2-Way Concierge Texting</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/40 text-luxury-gold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider font-semibold text-neutral-400">03 / RETENTION</p>
              <p className="font-serif text-sm font-medium text-neutral-800 dark:text-neutral-200">Predictive LTV Optimization</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-neutral-200 dark:border-neutral-800 pt-6 z-10 gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            TARGET INDUSTRIES: BEAUTY • SKINCARE • WELLNESS • HIGH FASHION • LIFESTYLE
          </p>
        </div>
        <motion.button
          onClick={onNext}
          whileHover={{ x: 5 }}
          className="group flex items-center gap-3 px-6 py-3 rounded-full bg-luxury-gold hover:bg-luxury-gold-dark text-neutral-900 font-mono text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer"
        >
          Enter Portfolio
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </div>
  );
}
