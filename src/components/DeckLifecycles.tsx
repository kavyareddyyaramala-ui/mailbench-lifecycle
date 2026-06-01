/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Play, HelpCircle, Clock, CheckCircle2, Split } from 'lucide-react';
import { lifecycleFlows } from '../data';
import { LifecycleFlow } from '../types';

interface DeckLifecyclesProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckLifecycles({ isDark, onNext, onPrev }: DeckLifecyclesProps) {
  const [selectedFlowId, setSelectedFlowId] = useState<string>('welcome');
  const activeFlow = lifecycleFlows.find((f) => f.id === selectedFlowId) || lifecycleFlows[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          03 // RETENTION AUTOMATIONS & NARRATIVES
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          FEATURED LIFECYCLE SYSTEMS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 grow items-stretch py-2">
        {/* Left Column: Sub-navigation menu */}
        <div className="lg:col-span-3 flex flex-col gap-2 border-r border-neutral-150 dark:border-neutral-850 pr-4">
          <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3">
            SELECT FLOW SYSTEM
          </p>
          {lifecycleFlows.map((flow) => {
            const isActive = flow.id === selectedFlowId;
            return (
              <button
                key={flow.id}
                onClick={() => setSelectedFlowId(flow.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                  isActive
                    ? 'bg-neutral-900 text-neutral-100 border-neutral-850 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-750'
                    : 'border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900/50 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-medium tracking-wide">
                    {flow.title.split(' (')[0]}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-400 group-hover:text-luxury-gold mt-0.5">
                    {flow.id === 'sms-campaign' ? 'SMS Only' : 'Omnichannel System'}
                  </span>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-luxury-gold' : 'bg-transparent'}`} />
              </button>
            );
          })}

          <div className="mt-auto hidden lg:block p-4 rounded-xl bg-luxury-gold/5 border border-luxury-gold/10">
            <h5 className="font-serif text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              The Retention Philosophy
            </h5>
            <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 leading-relaxed">
              Every system is custom programmed under strict A/B guidelines to secure the highest CTR before scaling.
            </p>
          </div>
        </div>

        {/* Right Column: Flow details & simulation */}
        <div className="lg:col-span-9 flex flex-col h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlow.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 grow overflow-y-auto"
            >
              {/* Central Information Block */}
              <div className="md:col-span-6 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-luxury-gold mb-1">
                    <span className="font-mono text-xs font-medium uppercase tracking-widest">{activeFlow.title}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                    Architectural Strategy Blueprint
                  </h3>

                  <div className="space-y-4">
                    <div className="p-3.5 bg-[#C5A880]/5 border border-[#C5A880]/20 rounded-xl">
                      <span className="font-mono text-[8px] text-[#8F7A5D] tracking-widest uppercase font-bold block">
                        SAMPLE LIFECYCLE ARCHITECTURE
                      </span>
                      <p className="text-[10px] text-[#8F7A5D] leading-relaxed font-sans mt-0.5">
                        This is a demonstration portfolio layout modeling automated event triggers and visual syncing.
                      </p>
                    </div>

                    <div className="p-4 border border-neutral-150 dark:border-neutral-850 rounded-xl">
                      <p className="font-mono text-[9px] uppercase text-neutral-400 tracking-wider font-bold mb-1">OBJECTIVE_</p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                        {activeFlow.objective}
                      </p>
                    </div>

                    <div className="p-4 border border-neutral-150 dark:border-neutral-850 rounded-xl">
                      <p className="font-mono text-[9px] uppercase text-neutral-400 tracking-wider font-bold mb-1">THE RETENTION STRATEGY_</p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                        {activeFlow.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Automation Journey Node Map */}
                <div className="border border-neutral-150 dark:border-neutral-850 rounded-2xl p-4 bg-neutral-50/40 dark:bg-neutral-900/5">
                  <p className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase font-bold mb-3">
                    AUTOMATED RETENTION SYSTEM DIAGRAM
                  </p>
                  
                  {/* Visual Node Connector Track */}
                  <div className="flex flex-wrap items-center gap-2">
                    {activeFlow.journeyVisualSteps.map((node, nIdx) => {
                      const isTrigger = node.type === 'trigger';
                      const isDelay = node.type === 'delay';
                      const isMessage = node.type === 'message';
                      const isConditional = node.type === 'conditional';
                      return (
                        <div key={nIdx} className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 ${
                            node.active 
                              ? 'bg-neutral-900 text-neutral-150 border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 font-medium'
                              : 'bg-transparent text-neutral-400 border-neutral-200 dark:border-neutral-800'
                          }`}>
                            {isTrigger && <Play className="w-3 h-3 text-emerald-500 animate-pulse" />}
                            {isDelay && <Clock className="w-3 h-3 text-luxury-gold" />}
                            {isMessage && <Mail className="w-3 h-3 text-sky-400" />}
                            {isConditional && <Split className="w-3 h-3 text-purple-400" />}
                            <div className="flex flex-col line-clamp-1">
                              <span className="font-mono tracking-widest text-[8px] uppercase text-neutral-400">{node.step}</span>
                              <span className="text-[10px] leading-tight font-serif whitespace-nowrap">{node.label}</span>
                            </div>
                          </div>
                          {nIdx < activeFlow.journeyVisualSteps.length - 1 && (
                            <span className="text-neutral-300 dark:text-neutral-800 text-xs font-mono">→</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* High-Fidelity Mockup Frame Preview of EMAIL / SMS */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <div className="border border-neutral-150 dark:border-neutral-850 rounded-2xl overflow-hidden bg-white dark:bg-[#121211] shadow-lg flex flex-col max-h-[300px] sm:max-h-[360px]">
                  {/* Email Header Frame Mock */}
                  <div className="border-b border-neutral-150 dark:border-neutral-850 p-3 bg-neutral-50 dark:bg-[#181817] flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-[9px] font-mono text-neutral-400 lowercase tracking-wider">
                      {activeFlow.emailDesignTitle}
                    </span>
                    <div className="w-2" />
                  </div>

                  <div className="p-4 overflow-y-auto text-neutral-800 flex flex-col items-center select-text">
                    <div className="w-full max-w-md border border-neutral-100 dark:border-neutral-900 rounded-lg p-5 bg-[#FAF8F5] text-[#16120E] text-center shadow-inner">
                      {/* Brand Wordmark inside email */}
                      <p className="font-serif tracking-[0.25em] text-[10px] font-light uppercase border-b border-neutral-105 pb-2 mb-4">
                        M A I L B E N C H
                      </p>
                      
                      <p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase mb-1">
                        SUBJECT: {activeFlow.emailCopySubject}
                      </p>
                      
                      <h4 className="font-serif text-base font-light text-neutral-800 leading-snug my-2">
                        {activeFlow.emailDesignTitle}
                      </h4>

                      <div className="space-y-2 mt-4 text-[11px] text-neutral-600 leading-relaxed font-sans text-left max-h-[110px] overflow-y-auto">
                        {activeFlow.emailCopyBody.map((par, pIdx) => (
                          <p key={pIdx}>{par}</p>
                        ))}
                      </div>

                      {/* Micro Call To Action Block */}
                      <button className="mt-5 px-6 py-2.5 bg-neutral-950 text-neutral-50 text-[10px] uppercase font-mono tracking-widest hover:bg-neutral-850 transition-colors rounded">
                        {activeFlow.emailCopyCTA}
                      </button>
                    </div>
                  </div>
                </div>

                {/* SMS Mockup Frame */}
                <div className="border border-neutral-150 dark:border-neutral-850 rounded-2xl overflow-hidden bg-white dark:bg-[#121211] shadow-lg flex flex-col">
                  {/* Phone Display Toolbar */}
                  <div className="border-b border-neutral-150 dark:border-neutral-850 px-4 py-2 bg-neutral-50 dark:bg-[#181817] flex justify-between items-center text-xs">
                    <span className="font-mono text-[10px] text-neutral-400">MAILBENCH CONCIERGE</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="p-4 bg-neutral-50/50 dark:bg-[#070707] flex flex-col select-text">
                    <div className="p-3 bg-neutral-900 text-neutral-100 dark:bg-neutral-850 dark:text-neutral-100 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm self-start">
                      <p className="text-[11px] leading-relaxed font-sans font-light">
                        {activeFlow.smsCopyText}
                      </p>
                      <span className="text-[8px] font-mono text-neutral-400 mt-1 block">
                        9:04 AM • Delivered
                      </span>
                    </div>
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
          ← Slide 04 / Portfolio Projects
        </button>
        <span className="font-mono text-[10px] text-neutral-400">
          PAGE 05 OF 10
        </span>
        <button
          onClick={onNext}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 06 / Example Campaigns →
        </button>
      </div>
    </div>
  );
}
