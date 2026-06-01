/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Ship, ArrowRight, CheckCircle2, Globe, Flame, Send } from 'lucide-react';

interface DeckFinalPageProps {
  isDark: boolean;
  onPrev: () => void;
}

export default function DeckFinalPage({ isDark, onPrev }: DeckFinalPageProps) {
  const [selectedDate, setSelectedDate] = useState<string>('June 3, 2026');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM EST');
  const [brandName, setBrandName] = useState<string>('');
  const [revenue, setRevenue] = useState<string>('');
  const [obstacle, setObstacle] = useState<string>('Welcome Flow Conversion');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const datesList = [
    { day: 'Tue', dateNum: '02', full: 'June 2, 2026' },
    { day: 'Wed', dateNum: '03', full: 'June 3, 2026' },
    { day: 'Thu', dateNum: '04', full: 'June 4, 2026' },
    { day: 'Fri', dateNum: '05', full: 'June 5, 2026' },
    { day: 'Mon', dateNum: '08', full: 'June 8, 2026' }
  ];

  const timesList = ['10:00 AM EST', '11:00 AM EST', '2:00 PM EST', '3:30 PM EST'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    // Smoothly open cal.com link in a new tab after 1.5 seconds to preserve full context
    setTimeout(() => {
      window.open('https://cal.com/kavya-lifecycle/30min', '_blank');
    }, 1500);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
      {/* Decorative Top Segment */}
      <div className="flex justify-between items-center border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-4 select-none">
        <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-semibold">
          10 // ACQUISITIONS & STRATEGY INTAKE
        </span>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          FINAL SLIDE / ENTERPRISE BOOKINGS
        </span>
      </div>

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-2 items-center">
        {/* Left Column: Call To Action Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-serif italic text-luxury-gold text-lg mb-1 block">Your Retention Engine Awaits</span>
          <h3 className="font-serif text-3xl lg:text-5xl text-neutral-900 dark:text-neutral-100 font-extralight tracking-tight leading-none">
            Unlock Hidden <span className="italic font-light block mt-1 text-luxury-gold">Cohort Revenue.</span>
          </h3>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Every day you delay optimizing your Welcome Flows, Abandoned Carts, and SMS systems, you lose valuable customer relationships to silent churn.
          </p>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Book a complimentary 30-minute retention audit with our director of lifecycle strategy. We will inspect your current Klaviyo/SMS configurations, trace your leaky funnel drops, and deliver 3 actionable growth loops. Zero sales pitching.
          </p>

          <div className="mt-6 flex flex-col gap-2 borer-l border-luxury-gold/50 pl-4 select-none">
            <div className="flex items-center gap-2 text-xs font-serif text-neutral-800 dark:text-neutral-200">
              <Flame className="w-4 h-4 text-luxury-gold" />
              <span>Only 4 discovery slots left for June 2026</span>
            </div>
            <p className="font-mono text-[9px] text-neutral-400 uppercase">
              RESERVED STRICLY FOR BRANDS CROSSING $50K+ MONTHLY REVENUE.
            </p>
          </div>
        </div>

        {/* Right Column: Custom Interactive Calendar Scheduler */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!isBooked ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="border border-neutral-150 dark:border-neutral-850 rounded-3xl p-6 bg-white dark:bg-[#121211] shadow-xl flex flex-col justify-between"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Step 1: Select Date */}
                  <div>
                    <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase font-bold block mb-2 select-none">
                      1. SELECT DISCOVERY DATE (EST)
                    </span>
                    <div className="flex gap-2 select-none">
                      {datesList.map((d) => {
                        const matches = d.full === selectedDate;
                        return (
                          <div
                            key={d.dateNum}
                            onClick={() => setSelectedDate(d.full)}
                            className={`flex flex-col items-center p-3 rounded-2xl border cursor-pointer transition-all duration-300 flex-1 ${
                              matches
                                ? 'bg-neutral-900 text-neutral-50 border-neutral-800 dark:bg-neutral-850 dark:border-neutral-750 dark:text-neutral-100'
                                : 'border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-[#090909] text-neutral-500 hover:border-neutral-300 dark:hover:border-neutral-700'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-mono">{d.day}</span>
                            <span className="font-serif text-lg font-bold mt-1">{d.dateNum}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  <div>
                    <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase font-bold block mb-2 select-none">
                      2. AVAILABLE TIMEFRAMES
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 select-none">
                      {timesList.map((t) => {
                        const matches = t === selectedTime;
                        return (
                          <div
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`p-2.5 rounded-xl border text-center text-xs cursor-pointer transition-all duration-300 ${
                              matches
                                ? 'bg-neutral-900 text-neutral-50 border-neutral-800 dark:bg-neutral-850 dark:border-neutral-750 dark:text-neutral-100'
                                : 'border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-[#090909] text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-750'
                            }`}
                          >
                            {t.split(' ')[0]} <span className="font-mono text-[9px]">{t.split(' ')[1]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Brand Form */}
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase font-bold block mb-1 select-none">
                      3. BRAND CREDENTIALS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          placeholder="Brand / Company Name"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          className="p-3 border border-neutral-150 dark:border-neutral-850 rounded-xl text-xs sm:text-xs bg-transparent text-neutral-800 dark:text-neutral-150 placeholder:text-neutral-400"
                        />
                      </div>
                      <div className="flex flex-col">
                        <select
                          required
                          value={revenue}
                          onChange={(e) => setRevenue(e.target.value)}
                          className="p-3 border border-neutral-150 dark:border-neutral-850 rounded-xl text-xs bg-transparent text-neutral-400 dark:text-neutral-500"
                        >
                          <option value="" disabled>Monthly Store Revenue</option>
                          <option value="under-50k">Under $50,000 / month</option>
                          <option value="50k-150k">$50,000 – $150,000 / mo</option>
                          <option value="150k-500k">$150,000 – $500,000 / mo</option>
                          <option value="500k-plus">$500,000+ / month</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <select
                        value={obstacle}
                        onChange={(e) => setObstacle(e.target.value)}
                        className="p-3 border border-neutral-150 dark:border-neutral-850 rounded-xl text-xs bg-transparent text-neutral-400 dark:text-neutral-500"
                      >
                        <option value="Welcome Flow Conversion">Main Obstacle: Welcome Flow Conversion</option>
                        <option value="Abandoned Carts Rescues">Main Obstacle: Abandoned Cart Recoveries</option>
                        <option value="Customer Re-order Frequency">Main Obstacle: Product Repeat Frequency (LTV)</option>
                        <option value="High SMS Opt Out Rates">Main Obstacle: SMS Compliancy / High Opt-Outs</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission and Cal link redirect warning banner */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-luxury-gold hover:bg-luxury-gold-dark text-neutral-950 font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                    >
                      Secure Slot &amp; Complete on Cal.com
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="font-mono text-[8px] text-neutral-400 text-center uppercase tracking-wider mt-3">
                      SECURE CONNECTION TO HTTPS://CAL.COM/KAVYA-LIFECYCLE/30MIN
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-neutral-150 dark:border-neutral-850 rounded-3xl p-8 bg-neutral-900 text-neutral-100 dark:bg-[#121211] shadow-2xl text-center space-y-6 flex flex-col items-center justify-center min-h-[360px]"
              >
                <div className="p-3.5 rounded-full bg-luxury-gold/10 text-luxury-gold animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#A38A5F] uppercase tracking-widest font-bold">
                    RESERVATION REQUEST DETECTED
                  </span>
                  <h4 className="font-serif text-3xl font-light text-neutral-50 dark:text-neutral-100">
                    Routing to official scheduler
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-md font-sans">
                    Slot reserved for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> for brand <strong>&ldquo;{brandName || 'Your Brand'}&rdquo;</strong>.
                  </p>
                  <p className="text-[11px] text-neutral-500 font-sans italic mt-2">
                    Opening Cal.com portal in a new viewport tab now...
                  </p>
                </div>

                <a
                  href="https://cal.com/kavya-lifecycle/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-luxury-gold rounded-xl text-neutral-950 font-mono text-[10px] tracking-widest uppercase font-semibold hover:bg-luxury-gold-dark transition-colors inline-flex items-center gap-2"
                >
                  Click Here if not redirected
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t border-neutral-150 dark:border-neutral-850 pt-4 mt-4 select-none font-mono text-[10px] text-neutral-400">
        <button
          onClick={onPrev}
          className="tracking-widest hover:text-luxury-gold uppercase transition-colors cursor-pointer"
        >
          ← Slide 09 / Why MailBench
        </button>
        <span>
          PAGE 10 OF 10
        </span>
        <div className="w-2" />
      </div>
    </div>
  );
}
