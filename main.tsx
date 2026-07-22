import React, { useState } from 'react';
import { FEATURES_LIST } from '../data/sampleData';
import { WcagContrastChecker } from './WcagContrastChecker';
import {
  Layout,
  UserCheck,
  Smartphone,
  Palette,
  Type,
  MousePointerClick,
  Eye,
  Image as ImageIcon,
  Sparkles,
  FileSpreadsheet,
  CheckCircle2,
  Filter,
  ArrowRight,
} from 'lucide-react';
import { Page } from '../types';

interface FeaturesPageProps {
  onNavigate: (page: Page) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES_LIST
    : FEATURES_LIST.filter(f => f.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Type': return <Type className="w-6 h-6" />;
      case 'MousePointerClick': return <MousePointerClick className="w-6 h-6" />;
      case 'EyeCheck': return <Eye className="w-6 h-6" />;
      case 'ImageCompare': return <ImageIcon className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
          System Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          System Features & Audit Modules
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Explore our 10 comprehensive visual testing modules engineered to guarantee visual polish, usability, and WCAG accessibility compliance.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2" id="feature-category-filters">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          All Features (10)
        </button>
        <button
          onClick={() => setActiveCategory('ui')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'ui'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          UI Design & Layout
        </button>
        <button
          onClick={() => setActiveCategory('ux')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'ux'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          UX Usability & Nav
        </button>
        <button
          onClick={() => setActiveCategory('responsive')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'responsive'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Responsive Breakpoints
        </button>
        <button
          onClick={() => setActiveCategory('accessibility')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'accessibility'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Accessibility & Contrast
        </button>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFeatures.map((feature, idx) => (
          <div
            key={feature.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            id={`feature-card-${feature.id}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {renderIcon(feature.iconName)}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase font-mono">
                  Module #{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Metrics Tags */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Audited Parameters:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {feature.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Result Banner */}
            <div className="bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 rounded-xl p-3 text-xs text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="font-semibold">{feature.sampleDiff}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Live WCAG Simulator Tool */}
      <section className="pt-8">
        <WcagContrastChecker />
      </section>

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-3xl p-8 text-center text-white space-y-4 border border-slate-800">
        <h3 className="text-2xl font-bold">Ready to Run a Live Visual Audit?</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Test any website URL or preset domain and receive instant scores for UI, UX, Accessibility, and Responsive Design.
        </p>
        <button
          onClick={() => onNavigate('visual-testing')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
        >
          <span>Launch Visual Testing Workspace</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
