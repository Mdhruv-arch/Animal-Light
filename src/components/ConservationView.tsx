import React from 'react';
import {
  ArrowLeft,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Minus,
  AlertTriangle,
  HeartHandshake,
  CheckCircle,
  ExternalLink,
  Flame,
  Globe2,
  Share2
} from 'lucide-react';
import { AnimalProfile } from '../types/wildlife';
import { soundService } from '../services/soundService';

interface ConservationViewProps {
  animal: AnimalProfile;
  onBack: () => void;
}

export const ConservationView: React.FC<ConservationViewProps> = ({ animal, onBack }) => {
  const { conservation } = animal;

  const isDecreasing = conservation.populationTrend === 'Decreasing';
  const isIncreasing = conservation.populationTrend === 'Increasing';

  // Compute SVG sparkline path for population trend
  const dataPoints = conservation.trendData || [5000, 4200, 3500, 2900, 2600];
  const maxVal = Math.max(...dataPoints);
  const minVal = Math.min(...dataPoints);
  const range = maxVal - minVal || 1;

  const svgPoints = dataPoints
    .map((val, idx) => {
      const x = 30 + (idx / (dataPoints.length - 1)) * 340;
      const normalizedY = 1 - (val - minVal) / range;
      const y = 30 + normalizedY * 50;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            soundService.playClick();
            onBack();
          }}
          aria-label="Go back"
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-emerald-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h2 className="font-heading font-extrabold text-lg text-white">
          Conservation Status
        </h2>

        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lime-400">
          <ShieldAlert className="w-5 h-5" />
        </div>
      </div>

      {/* Main IUCN Red List Status Banner (Screen 7 IUCN Badge) */}
      <div className="rounded-3xl glass-panel-elevated p-5 border border-red-500/30 flex items-center gap-4 shadow-xl shadow-emerald-950/40">
        {/* IUCN Category Circle Badge */}
        <div className="relative shrink-0">
          <div className="w-18 h-18 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex flex-col items-center justify-center text-white font-extrabold shadow-lg shadow-rose-600/30">
            <span className="text-xl tracking-tight leading-none font-heading">{conservation.code}</span>
            <span className="text-[9px] uppercase tracking-wider opacity-85">IUCN</span>
          </div>
          <div className="absolute -inset-1 rounded-full bg-rose-500/20 blur-md -z-10 animate-pulse" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-[10px] font-bold text-rose-300 uppercase tracking-wide">
            Red List Category
          </div>
          <h3 className="text-xl font-heading font-extrabold text-white">
            {conservation.status}
          </h3>
          <p className="text-xs text-emerald-300/80">
            {conservation.source}
          </p>
        </div>
      </div>

      {/* Population Trend Section & Graph (Screen 7 Population Trend) */}
      <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Population Trend
          </h4>
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
              isDecreasing
                ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                : isIncreasing
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                : 'bg-emerald-900/60 text-emerald-300'
            }`}
          >
            {isDecreasing ? (
              <TrendingDown className="w-3.5 h-3.5" />
            ) : isIncreasing ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <Minus className="w-3.5 h-3.5" />
            )}
            <span>{conservation.populationTrend}</span>
          </span>
        </div>

        {/* SVG Population Trajectory Curve */}
        <div className="relative w-full h-24 rounded-xl bg-emerald-950/50 border border-emerald-800/40 p-2 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
            {/* Grid line */}
            <line x1="20" y1="50" x2="380" y2="50" stroke="#064e3b" strokeDasharray="3 3" />
            
            {/* Trend curve */}
            <polyline
              fill="none"
              stroke={isDecreasing ? '#f59e0b' : '#34d399'}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={svgPoints}
            />

            {/* Glowing marker on the current end point */}
            {dataPoints.length > 0 && (
              <circle
                cx={370}
                cy={30 + (1 - (dataPoints[dataPoints.length - 1] - minVal) / range) * 50}
                r="6"
                fill={isDecreasing ? '#f59e0b' : '#34d399'}
                className="animate-ping"
              />
            )}
          </svg>
        </div>

        <p className="text-xs text-emerald-200/80 leading-snug">
          {conservation.populationEstimate}
        </p>
      </div>

      {/* Major Threats Grid (Screen 7 Major Threats 4x Grid) */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/80 px-1">
          Major Threats
        </h4>
        <div className="grid grid-cols-2 gap-2.5">
          {conservation.threats.map((threat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl glass-panel border border-emerald-800/40 hover:border-rose-500/40 transition-colors space-y-1.5"
            >
              <div className="w-8 h-8 rounded-xl bg-red-950/70 border border-red-500/30 text-rose-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h5 className="font-heading font-bold text-xs text-white">
                {threat.title}
              </h5>
              <p className="text-[11px] text-emerald-300/70 leading-snug">
                {threat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How You Can Help Action Cards (Screen 7 How You Can Help) */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 px-1 flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5" />
          How You Can Help
        </h4>
        <div className="space-y-2">
          {conservation.actions.map((act, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl glass-panel border border-emerald-800/40 flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">{act.title}</h5>
                <p className="text-[11px] text-emerald-300/80 leading-snug">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Source Citation Footer */}
      <div className="text-center pt-2">
        <p className="text-[11px] text-emerald-400/60 font-medium">
          Source: {conservation.source}
        </p>
      </div>
    </div>
  );
};
