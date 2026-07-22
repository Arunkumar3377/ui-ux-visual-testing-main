import React from 'react';
import { Page } from '../types';
import { Eye, ShieldCheck, Github, ExternalLink, Heart, Layers, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Eye className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                UI/UX <span className="text-blue-400">Visual Test</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated evaluation system for website UI design consistency, usability, WCAG accessibility, and responsive viewports.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-blue-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>College Final-Year QA Project</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              System Modules
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About UI/UX Testing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-blue-400 transition-colors">
                  Feature Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('visual-testing')} className="hover:text-blue-400 transition-colors">
                  Run Visual Test
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('test-report')} className="hover:text-blue-400 transition-colors">
                  Test Reports
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Feature Badges */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Testing Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>UI Grid & Spacing Alignment</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>UX Friction Evaluation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>WCAG 2.1 AA Contrast Scan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Mobile/Tablet Responsive Diffs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Automated Executive PDF Reports</span>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              System Architecture
            </h4>
            <div className="space-y-3">
              <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700/80">
                <p className="text-xs text-slate-400 font-medium">Stack Engine:</p>
                <p className="text-xs font-semibold text-slate-200 mt-0.5">
                  React 19 + TypeScript + Express + Tailwind CSS
                </p>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700/80">
                <p className="text-xs text-slate-400 font-medium">AI Audit Model:</p>
                <p className="text-xs font-semibold text-blue-300 mt-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gemini AI Visual Auditor
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} UI/UX Visual Testing System. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with precision for <span className="text-slate-300 font-semibold">College Final-Year Project</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
