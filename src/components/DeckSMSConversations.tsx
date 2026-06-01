/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, ShieldCheck, Check, Send } from 'lucide-react';
import { smsConversations } from '../data';
import { SmsConversation } from '../types';

interface DeckSMSConversationsProps {
  isDark: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function DeckSMSConversations({ isDark, onNext, onPrev }: DeckSMSConversationsProps) {
  const [selectedConvId, setSelectedConvId] = useState<string>('beauty-conv');
  const activeConv = smsConversations.find((c) => c.id === selectedConvId) || smsConversations[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          05 // CONVERSATIONAL MOBILE ACQUISITIONS
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          SMS MARKETING SAMPLES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 grow items-center py-2">
        {/* Left Hand: Explanatory Context */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-serif italic text-luxury-gold text-lg mb-1 block">Conversational Concierge</span>
          <h3 className="font-serif text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100 font-light tracking-tight leading-snug">
            Two-Way, Human SMS Channels
          </h3>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Most brands spam subscribers with bulk marketing links, destroying lists and triggering 5%+ unsubscribe rates. 
          </p>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            We architect automated <strong>Conversational Sequences</strong> that feel like custom texting lines. By configuring intelligent 2-way routing, customer questions are answered instantaneously, yielding high-loyalty conversions.
          </p>

          {/* Quick Stats Ribbon */}
          <div className="mt-6 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/10 grid grid-cols-2 gap-4">
            <div>
              <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-bold">AVG_REPLY_RATE</p>
              <p className="font-serif text-2xl font-semibold text-luxury-gold mt-1">28.4%</p>
            </div>
            <div>
              <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-bold">UNSUBSCRIBE_RATE</p>
              <p className="font-serif text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mt-1">&lt;0.4%</p>
            </div>
          </div>

          {/* Portfolio Sample tag */}
          <div className="mt-4 p-3 bg-[#C5A880]/5 border border-[#C5A880]/20 rounded-xl">
            <span className="font-mono text-[8px] text-[#8F7A5D] tracking-widest uppercase font-bold block">
              DEMONSTRATION SMS CONVERSATIONS
            </span>
            <p className="text-[10px] text-[#8F7A5D] leading-relaxed font-sans mt-0.5">
              Simulated mobile concierge messaging models highlighting automated answer logic and responsive SMS touchpoints.
            </p>
          </div>

          {/* Conversation Selector Tabs */}
          <div className="flex gap-2.5 mt-6 flex-wrap select-none">
            {smsConversations.map((conv) => {
              const matches = conv.id === selectedConvId;
              return (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConvId(conv.id)}
                  className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase rounded-xl border transition-all duration-300 cursor-pointer ${
                    matches
                      ? 'bg-neutral-900 text-[#FAF8F5] border-neutral-800 dark:bg-neutral-800 dark:text-[#F4EFEB] dark:border-neutral-700'
                      : 'border-neutral-200/80 dark:border-neutral-850 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/40'
                  }`}
                >
                  {conv.industry.split(' & ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Hand: High Fidelity Phone Visualization Frame */}
        <div className="lg:col-span-7 flex justify-center bg-transparent relative">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-luxury-gold/5 blur-3xl pointer-events-none" />
          
          {/* Smartphone Shell */}
          <div className="relative w-full max-w-[340px] h-[520px] rounded-[40px] border-[10px] border-neutral-950 dark:border-neutral-800 bg-[#FAF8F5] dark:bg-[#070707] shadow-2xl flex flex-col overflow-hidden">
            {/* Speaker & Sensor Notch Slot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-950 dark:bg-neutral-800 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-10 h-1 rounded-full bg-neutral-800 dark:bg-neutral-750 mb-1" />
            </div>

            {/* Simulated Phone UI Header */}
            <div className="border-b border-neutral-150 dark:border-neutral-900 bg-white/70 dark:bg-neutral-950/70 p-4 pt-8 flex items-center gap-3 select-none backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 flex items-center justify-center font-serif text-sm font-bold text-luxury-gold">
                {activeConv.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-200 truncate">
                  {activeConv.brandName}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-mono text-[9px] text-neutral-400 capitalize">Verified VIP Concierge</span>
                </div>
              </div>
              <Phone className="w-4 h-4 text-neutral-400" />
            </div>

            {/* Scrollable Conversation Bubbles */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 flex flex-col justify-end bg-neutral-100/50 dark:bg-neutral-950/30">
              <span className="font-mono text-[8px] text-neutral-400 text-center tracking-widest uppercase block my-2 select-none">
                {activeConv.campaignTitle}
              </span>
              
              <AnimatePresence mode="popLayout animate">
                {activeConv.messages.map((message, mIdx) => {
                  const isBrand = message.sender === 'brand';
                  return (
                    <motion.div
                      key={mIdx}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 25, delay: mIdx * 0.1 }}
                      className={`relative max-w-[85%] rounded-2xl p-3.5 text-xs shadow-sm flex flex-col select-text ${
                        isBrand
                          ? 'bg-neutral-900 border border-neutral-850 dark:bg-neutral-900 dark:border-neutral-800 text-neutral-100 self-start rounded-tl-none'
                          : 'bg-luxury-gold text-neutral-950 self-end rounded-tr-none font-medium'
                      }`}
                    >
                      <p className="leading-relaxed font-sans">{message.text}</p>
                      <div className="flex items-center gap-1 justify-end mt-1.5 select-none opacity-60">
                        <span className="text-[7px] font-mono lowercase">
                          {message.time}
                        </span>
                        {!isBrand && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Simulated Keyboard Text Input */}
            <div className="border-t border-neutral-150 dark:border-neutral-900 p-3 bg-white dark:bg-[#121211] flex items-center gap-2 select-none">
              <div className="flex-1 p-2 bg-neutral-100 dark:bg-neutral-900 rounded-full flex justify-between items-center px-4">
                <span className="text-[11px] text-neutral-400 font-sans">Message concierge...</span>
                <Send className="w-3.5 h-3.5 text-neutral-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t border-neutral-150 dark:border-neutral-850 pt-4 mt-4 select-none">
        <button
          onClick={onPrev}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          ← Slide 06 / Example Campaigns
        </button>
        <span className="font-mono text-[10px] text-neutral-400">
          PAGE 07 OF 10
        </span>
        <button
          onClick={onNext}
          className="font-mono text-[10px] tracking-widest text-neutral-400 hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          Slide 08 / Customer Journey →
        </button>
      </div>
    </div>
  );
}
