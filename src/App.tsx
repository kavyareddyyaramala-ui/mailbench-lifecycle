/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Mail, MessageSquare, Menu, X, Sliders, Eye, FileText, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

// Import subcomponents
import DeckCover from './components/DeckCover';
import DeckAbout from './components/DeckAbout';
import DeckLifecycles from './components/DeckLifecycles';
import DeckCampaigns from './components/DeckCampaigns';
import DeckSMSConversations from './components/DeckSMSConversations';
import DeckCustomerJourney from './components/DeckCustomerJourney';
import DeckDashboard from './components/DeckDashboard';
import DeckTestimonials from './components/DeckTestimonials';
import DeckWhyOpenArc from './components/DeckWhyOpenArc';
import DeckFinalPage from './components/DeckFinalPage';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'deck' | 'editorial'>('deck');

  const totalSlides = 10;

  // Keyboard navigation for presentation slide deck
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'deck') return;
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  // Slide navigation handlers
  const handleNext = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setViewMode('deck');
  };

  const slideTitles = [
    'Cover Page',
    'Meet Kavya',
    'How We Think',
    'Portfolio Projects',
    'Automated Lifecycles',
    'Example Campaigns',
    'VIP SMS Channels',
    'Customer Journey Map',
    'Client Onboarding',
    'Book Discovery Call'
  ];

  const renderActiveSlide = () => {
    switch (currentSlide) {
      case 0:
        return <DeckCover isDark={isDark} onNext={handleNext} />;
      case 1:
        return <DeckAbout isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <DeckWhyOpenArc isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <DeckTestimonials isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <DeckLifecycles isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 5:
        return <DeckCampaigns isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 6:
        return <DeckSMSConversations isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 7:
        return <DeckCustomerJourney isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 8:
        return <DeckDashboard isDark={isDark} onNext={handleNext} onPrev={handlePrev} />;
      case 9:
        return <DeckFinalPage isDark={isDark} onPrev={handlePrev} />;
      default:
        return <DeckCover isDark={isDark} onNext={handleNext} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      isDark ? 'bg-obsidian-bg text-obsidian-text dark' : 'bg-alabaster-bg text-alabaster-text'
    }`}>
      {/* Absolute top background structural texture overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] z-0" />

      {/* Main Responsive Header bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/60 dark:border-neutral-850/60 bg-alabaster-bg/85 dark:bg-obsidian-bg/85 backdrop-blur-md px-6 py-4.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo element */}
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => goToSlide(0)}>
            <div className="w-7 h-7 rounded-full border border-luxury-gold flex items-center justify-center font-serif text-xs font-bold text-luxury-gold">
              M
            </div>
            <span className="font-serif tracking-[0.25em] text-xs font-bold uppercase text-luxury-gold">
              MailBench
            </span>
          </div>

          {/* Controls Hub Ribbon */}
          <div className="flex items-center gap-3 select-none">
            {/* View switch toggler */}
            <div className="rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 p-1 border border-neutral-200/40 dark:border-neutral-850 flex items-center gap-1">
              <button
                onClick={() => setViewMode('deck')}
                className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'deck'
                    ? 'bg-neutral-905 text-neutral-50 dark:bg-neutral-800 dark:text-neutral-100'
                    : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                }`}
                title="Widescreen Presentation slides"
              >
                <Sliders className="w-3 h-3 text-luxury-gold" />
                <span className="hidden sm:inline">Presentation Deck</span>
              </button>
              <button
                onClick={() => setViewMode('editorial')}
                className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'editorial'
                    ? 'bg-neutral-905 text-neutral-50 dark:bg-neutral-800 dark:text-neutral-100'
                    : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                }`}
                title="Continuous magazine printout scroll"
              >
                <FileText className="w-3 h-3 text-luxury-gold" />
                <span className="hidden sm:inline">Editorial Scroll</span>
              </button>
            </div>

            {/* Custom Palette Mood Toggler */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full border border-neutral-200/50 dark:border-neutral-850 hover:bg-neutral-105/50 dark:hover:bg-neutral-905 text-luxury-gold cursor-pointer"
              title={isDark ? 'Alabaster Warm Light Mode' : 'Obsidian Dark Mode'}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container Wrapper */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 min-h-[calc(100vh-90px)] flex flex-col justify-center">
        {viewMode === 'deck' ? (
          /* Presentation Slide Deck Card Frame Layout */
          <div className="w-full flex flex-col gap-6 ">
            {/* Nav Bullets Progressive Tracker */}
            <div className="flex justify-between items-center gap-1 px-1 select-none overflow-x-auto scroller-hidden">
              {slideTitles.map((title, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className="flex-1 min-w-[20px] h-2.5 relative group transition-all duration-300 cursor-pointer"
                  >
                    <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] transition-all duration-300 ${
                      isActive
                        ? 'bg-luxury-gold h-[3px]'
                        : 'bg-neutral-200 dark:bg-neutral-850 group-hover:bg-luxury-gold/50'
                    }`} />
                    
                    {/* Hover tooltip segment naming */}
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-neutral-900 text-[#FAF8F5] dark:bg-neutral-800 dark:text-neutral-100 text-[9px] font-mono whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-30">
                      0{idx+1} — {title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Deck Frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] min-h-[500px] sm:min-h-[550px] border border-neutral-150 dark:border-neutral-850 rounded-[28px] overflow-hidden bg-white dark:bg-[#121211] shadow-2xl flex flex-col transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  {renderActiveSlide()}
                </motion.div>
              </AnimatePresence>

              {/* Floating slide controller tabs */}
              <div className="absolute right-6 bottom-4 md:bottom-6 flex gap-2 select-none z-20">
                <button
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className={`p-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-850 bg-white/80 dark:bg-neutral-950/80 backdrop-blur transition-all cursor-pointer ${
                    currentSlide === 0 ? 'opacity-30 pointer-events-none' : 'hover:border-luxury-gold'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 text-luxury-gold" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === totalSlides - 1}
                  className={`p-2.5 rounded-full border border-neutral-200/50 dark:border-neutral-850 bg-white/80 dark:bg-neutral-950/80 backdrop-blur transition-all cursor-pointer ${
                    currentSlide === totalSlides - 1 ? 'opacity-30 pointer-events-none' : 'hover:border-luxury-gold'
                  }`}
                >
                  <ChevronRight className="w-4 h-4 text-luxury-gold" />
                </button>
              </div>
            </div>
            
            {/* Quick Helper Hotkey Guide */}
            <div className="flex justify-center items-center gap-4 text-neutral-400 dark:text-neutral-500 select-none">
              <span className="font-mono text-[9px] uppercase tracking-wider">
                Tip: Press the left / right arrow keys to glide through slide presentation boards
              </span>
            </div>
          </div>
        ) : (
          /* Magazine Editorial Continuous Page-Scroll Layout */
          <div className="w-full flex grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative pb-16">
            {/* Sticky Scroll Progress Sidebar menu tracker */}
            <div className="lg:col-span-3 sticky top-24 hidden lg:flex flex-col gap-3 select-none">
              <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-wider font-bold mb-2">
                PORTFOLIO SECTIONS
              </span>
              <div className="space-y-1">
                {slideTitles.map((title, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className="w-full text-left p-3 rounded-xl border border-transparent hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 text-xs font-serif text-neutral-550 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="truncate group-hover:text-luxury-gold">
                      0{idx+1} &mdash; {title}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-350 opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW SLIDE →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Continuous Stack of Segment Boards */}
            <div className="lg:col-span-9 space-y-16">
              {slideTitles.map((title, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Visual Title Ribbon Indicator */}
                  <div className="flex items-center justify-between border-b border-luxury-gold/20 pb-2">
                    <span className="font-mono text-[9px] text-luxury-gold font-bold tracking-widest uppercase">
                      SECTION 0{idx+1} // {title.toUpperCase()}
                    </span>
                    <button
                      onClick={() => goToSlide(idx)}
                      className="font-mono text-[8px] text-[#A38A5F] border border-[#C5A880]/20 hover:bg-[#C5A880]/5 px-2 py-0.5 rounded cursor-pointer transition-colors"
                    >
                      OPEN INTERACTIVE VIEW
                    </button>
                  </div>
                  
                  {/* Render the full corresponding component */}
                  <div className="border border-neutral-150 dark:border-neutral-850 rounded-[28px] overflow-hidden bg-white dark:bg-[#121211] shadow-lg aspect-[5/3] md:aspect-[16/9] min-h-[480px]">
                    {idx === 0 && <DeckCover isDark={isDark} onNext={handleNext} />}
                    {idx === 1 && <DeckAbout isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 2 && <DeckWhyOpenArc isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 3 && <DeckTestimonials isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 4 && <DeckLifecycles isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 5 && <DeckCampaigns isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 6 && <DeckSMSConversations isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 7 && <DeckCustomerJourney isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 8 && <DeckDashboard isDark={isDark} onNext={handleNext} onPrev={handlePrev} />}
                    {idx === 9 && <DeckFinalPage isDark={isDark} onPrev={handlePrev} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
