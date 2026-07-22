import React, { useState } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle, AlertTriangle, Eye } from 'lucide-react';

interface VisualDiffSliderProps {
  url?: string;
  score?: number;
}

export const VisualDiffSlider: React.FC<VisualDiffSliderProps> = ({
  url = "https://example.com",
  score = 92,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showHighlight, setShowHighlight] = useState(true);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 text-white border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              Visual Difference Engine
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Target: {url}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Baseline Reference vs. Rendered DOM Capture
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={showHighlight}
              onChange={(e) => setShowHighlight(e.target.checked)}
              className="rounded bg-slate-900 border-slate-600 text-blue-500 focus:ring-blue-500"
            />
            <span>Highlight Diffs (Red)</span>
          </label>
          <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Similarity: {score}%</span>
          </div>
        </div>
      </div>

      {/* Interactive Visual Comparison Stage */}
      <div
        className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-700/80 bg-slate-950"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Layer 1: Baseline Image (Left Side) */}
        <div className="absolute inset-0 bg-slate-900 p-6 flex flex-col justify-between">
          <div className="w-full h-12 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-mono">Baseline (Figma Design Spec)</span>
            </div>
            <span className="px-2 py-0.5 bg-blue-600/30 text-blue-300 text-[11px] font-bold rounded">
              Design Standard
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 my-auto">
            <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2">
              <div className="w-12 h-12 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                UI
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md inline-block">
                  Primary CTA
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2">
              <div className="w-12 h-12 rounded-lg bg-emerald-600/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                UX
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-md inline-block">
                  Standard Grid
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2">
              <div className="w-12 h-12 rounded-lg bg-indigo-600/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                WCAG
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-md inline-block">
                  Pass 4.5:1
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-10 bg-slate-800/60 rounded-lg flex items-center justify-between px-4 text-xs text-slate-400">
            <span>© 2026 UI/UX Test Standard</span>
            <span className="text-emerald-400 font-medium">100% Match Target</span>
          </div>
        </div>

        {/* Layer 2: Rendered Target Image (Clipped by Slider) */}
        <div
          className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between overflow-hidden"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <div className="w-full h-12 bg-blue-950/40 rounded-lg border border-blue-800/60 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-blue-300 ml-2 font-mono">Rendered DOM Screen Capture</span>
            </div>
            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[11px] font-bold rounded flex items-center gap-1 border border-amber-500/30">
              <AlertTriangle className="w-3 h-3" />
              2 Minor Diffs
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 my-auto">
            <div className={`p-4 bg-slate-900 rounded-xl border space-y-2 relative ${showHighlight ? 'border-red-500/80 bg-red-950/20' : 'border-slate-800'}`}>
              {showHighlight && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow">
                  DIFF +4px Padding
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                UI
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md inline-block">
                  Primary CTA
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="w-12 h-12 rounded-lg bg-emerald-600/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                UX
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-md inline-block">
                  Standard Grid
                </div>
              </div>
            </div>

            <div className={`p-4 bg-slate-900 rounded-xl border space-y-2 relative ${showHighlight ? 'border-amber-500/80 bg-amber-950/20' : 'border-slate-800'}`}>
              {showHighlight && (
                <div className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow">
                  DIFF Contrast 4.2:1
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-indigo-600/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                WCAG
              </div>
              <div className="h-4 bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-700/60 rounded w-1/2" />
              <div className="pt-2">
                <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-md inline-block">
                  Pass 4.5:1
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-10 bg-slate-900 rounded-lg flex items-center justify-between px-4 text-xs text-slate-400 border border-slate-800">
            <span>Rendered DOM Capture</span>
            <span className="text-blue-400 font-medium">92% Match Score</span>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Floating Labels */}
        <div className="absolute bottom-3 left-4 bg-slate-900/90 text-slate-200 border border-slate-700 px-3 py-1 rounded-md text-xs font-bold backdrop-blur pointer-events-none z-10">
          ← Baseline
        </div>
        <div className="absolute bottom-3 right-4 bg-slate-900/90 text-blue-300 border border-blue-800 px-3 py-1 rounded-md text-xs font-bold backdrop-blur pointer-events-none z-10">
          Rendered Screen →
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <p className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-blue-400" />
          <span>Drag the central vertical slider left or right to inspect baseline design vs live DOM layout differences.</span>
        </p>
        <div className="flex items-center gap-4 font-medium">
          <span className="flex items-center gap-1 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" /> Baseline
          </span>
          <span className="flex items-center gap-1 text-red-400">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Detected Diff
          </span>
        </div>
      </div>
    </div>
  );
};
