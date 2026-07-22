import React, { useState } from 'react';
import { Palette, CheckCircle2, XCircle, Sparkles, RefreshCw } from 'lucide-react';

// Helper to convert hex to RGB
function hexToRgb(hex: string) {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6) return null;
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return { r, g, b };
}

// Helper to calculate luminance
function getLuminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Calculate contrast ratio
function calculateContrast(fgHex: string, bgHex: string) {
  const fg = hexToRgb(fgHex);
  const bg = hexToRgb(bgHex);
  if (!fg || !bg) return 1;

  const lum1 = getLuminance(fg.r, fg.g, fg.b);
  const lum2 = getLuminance(bg.r, bg.g, bg.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export const WcagContrastChecker: React.FC = () => {
  const [fgColor, setFgColor] = useState('#1E40AF'); // Crisp Blue
  const [bgColor, setBgColor] = useState('#F8FAFC'); // Light Slate Canvas

  const ratio = calculateContrast(fgColor, bgColor);
  const passAaNormal = ratio >= 4.5;
  const passAaLarge = ratio >= 3.0;
  const passAaaNormal = ratio >= 7.0;

  const presets = [
    { name: 'Brand Primary', fg: '#1E40AF', bg: '#F8FAFC' },
    { name: 'Dark Theme Card', fg: '#38BDF8', bg: '#0F172A' },
    { name: 'White Text on Blue CTA', fg: '#FFFFFF', bg: '#2563EB' },
    { name: 'Low Contrast Warning', fg: '#94A3B8', bg: '#FFFFFF' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg transition-all">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Interactive WCAG 2.1 Contrast Simulator
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live ratio calculation for accessibility compliance
            </p>
          </div>
        </div>
        <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-full">
          WCAG 2.1
        </span>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Try Presets:
        </span>
        {presets.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              setFgColor(p.fg);
              setBgColor(p.bg);
            }}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700"
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Inputs & Live Card Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Text Color (Foreground)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-slate-300 dark:border-slate-700 p-0.5 bg-transparent"
              />
              <input
                type="text"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="flex-1 px-3 py-2 text-sm font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white uppercase font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Container Background
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-slate-300 dark:border-slate-700 p-0.5 bg-transparent"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="flex-1 px-3 py-2 text-sm font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white uppercase font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Live Preview Box */}
        <div
          className="rounded-xl p-6 border transition-all duration-200 shadow-inner min-h-[160px] flex flex-col justify-between"
          style={{ backgroundColor: bgColor, color: fgColor, borderColor: fgColor + '30' }}
        >
          <div>
            <p className="text-xs uppercase font-bold tracking-widest opacity-80 mb-1">
              Live Preview Box
            </p>
            <h5 className="text-xl font-extrabold leading-tight">
              Sample Heading Text
            </h5>
            <p className="text-sm mt-1 leading-relaxed opacity-90">
              The quick brown fox jumps over the lazy dog. Visual contrast ensures maximum readability.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-xs font-semibold">
            <span>Computed Ratio:</span>
            <span className="text-lg font-black font-mono">
              {ratio.toFixed(2)}:1
            </span>
          </div>
        </div>
      </div>

      {/* Compliance Results Badges */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <div className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 ${passAaNormal ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'}`}>
          <div className="flex items-center gap-1">
            {passAaNormal ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            <span>WCAG AA Body Text (4.5:1)</span>
          </div>
          <span className="text-[11px] opacity-80 font-normal">
            {passAaNormal ? 'PASS - High Readability' : 'FAIL - Low Contrast'}
          </span>
        </div>

        <div className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 ${passAaLarge ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'}`}>
          <div className="flex items-center gap-1">
            {passAaLarge ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            <span>WCAG AA Large Text (3.0:1)</span>
          </div>
          <span className="text-[11px] opacity-80 font-normal">
            {passAaLarge ? 'PASS - Headings & Buttons' : 'FAIL - Insufficient Size'}
          </span>
        </div>

        <div className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 ${passAaaNormal ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'}`}>
          <div className="flex items-center gap-1">
            {passAaaNormal ? <CheckCircle2 className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            <span>WCAG AAA Enhanced (7.0:1)</span>
          </div>
          <span className="text-[11px] opacity-80 font-normal">
            {passAaaNormal ? 'PASS - Gold Standard' : 'AA Pass / Below AAA'}
          </span>
        </div>
      </div>
    </div>
  );
};
