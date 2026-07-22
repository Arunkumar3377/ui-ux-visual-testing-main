import React, { useState } from 'react';
import { Page } from '../types';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Eye,
  BarChart3,
  Search,
  FileCheck2,
  Layers,
  Cpu,
  RefreshCw,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onQuickStartTest: (url: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onQuickStartTest }) => {
  const [inputUrl, setInputUrl] = useState('https://example.com');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onQuickStartTest(inputUrl.trim());
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 md:py-16 bg-gradient-to-b from-blue-50/80 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Automated UI/UX Quality Assurance & Visual Audit</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                UI/UX <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">Visual Testing</span> System
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                Analyze website design, usability, accessibility, and responsiveness.
              </p>

              {/* Quick URL Input Sandbox Form */}
              <form onSubmit={handleQuickSubmit} className="pt-2 max-w-xl">
                <div className="p-2 bg-white dark:bg-slate-800/90 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 text-slate-400 w-full sm:w-auto flex-1">
                    <Search className="w-5 h-5 text-blue-500" />
                    <input
                      type="url"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="Enter website URL (e.g. https://example.com)"
                      required
                      className="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    id="hero-start-testing-btn"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Start Testing</span>
                  </button>
                </div>
                <div className="mt-2.5 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pl-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Quick Test Presets:</span>
                  <button
                    type="button"
                    onClick={() => { setInputUrl('https://example.com'); onQuickStartTest('https://example.com'); }}
                    className="hover:text-blue-600 underline font-mono"
                  >
                    example.com
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => { setInputUrl('https://stripe.com'); onQuickStartTest('https://stripe.com'); }}
                    className="hover:text-blue-600 underline font-mono"
                  >
                    stripe.com
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => { setInputUrl('https://react.dev'); onQuickStartTest('https://react.dev'); }}
                    className="hover:text-blue-600 underline font-mono"
                  >
                    react.dev
                  </button>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('features')}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  <LayoutGrid className="w-4 h-4 text-blue-500" />
                  <span>Explore Features</span>
                </button>
                <button
                  onClick={() => onNavigate('test-report')}
                  className="px-5 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>View Sample Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Metrics Highlights Pill Row */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">99.4%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Diff Precision</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">WCAG 2.1</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">AA Compliance</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">Instant</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">PDF Reports</div>
                </div>
              </div>

            </div>

            {/* Right Hero Illustration Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-2 bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-400 shadow-2xl shadow-blue-500/25 group">
                
                {/* Browser Card Frame */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                  
                  {/* Top Window Dots */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/90" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-400 border border-slate-700/80">
                      uiux-visual-inspector://live
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Generated Illustration Asset */}
                  <div className="relative aspect-video sm:aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src="/src/assets/images/hero_uiux_testing_1784654374780.jpg"
                      alt="UI/UX Visual Testing System Dashboard Illustration"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Overlay Badge 1 */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur border border-blue-500/40 text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>UI Score: 92% Passed</span>
                    </div>

                    {/* Floating Overlay Badge 2 */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold">
                      <Smartphone className="w-4 h-4 text-sky-400" />
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Viewports</div>
                        <div className="text-xs font-bold text-slate-200">Desktop • Mobile</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-Step Testing Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Streamlined QA Audit
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Visual Testing System Works
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Automated 3-step evaluation engine designed for developers, designers, and college project benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Input Target Website URL
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Enter any URL or select a preset domain. Select target viewport modes like Desktop, Tablet, or Mobile.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              2. Run Automated Visual Audit
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our automated engine captures layout snapshots, calculates color contrast ratios, checks ARIA accessibility, and detects visual diffs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              3. Generate Executive Report
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Review detailed scores for UI, UX, Accessibility, and Responsive Design. Download or export a full PDF test report.
            </p>
          </div>

        </div>
      </section>

      {/* Core Audit Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                Full-Suite Quality Checklist
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Comprehensive Design & Usability Metrics
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Evaluates every aspect of web user experience from WCAG 2.1 AA color contrast compliance to modular typography hierarchy and mobile touch target dimensions.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('features')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore All 10 Features</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>UI Design Check</span>
                </div>
                <p className="text-xs text-slate-400">
                  Spacing uniformity, padding rules, and pixel-level grid alignment validation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>UX Usability Evaluation</span>
                </div>
                <p className="text-xs text-slate-400">
                  Cognitive load checks, task flow clarity, and click hit targets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>WCAG Color Contrast</span>
                </div>
                <p className="text-xs text-slate-400">
                  4.5:1 text-to-background contrast ratio validation for legibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Responsive Viewports</span>
                </div>
                <p className="text-xs text-slate-400">
                  Multi-device testing across Desktop, Tablet, and Mobile viewports.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* College Project Accreditation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-6 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Academic Software Quality Assurance Standard</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            This UI/UX Visual Testing System is structured as a professional software testing dashboard suitable for college final-year engineering projects and design QA benchmarks.
          </p>
        </div>
      </section>

    </div>
  );
};
