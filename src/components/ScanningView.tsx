import React, { useEffect, useState } from 'react';
import { Check, Loader2, X, Sparkles, ShieldAlert } from 'lucide-react';
import { soundService } from '../services/soundService';

interface ScanningViewProps {
  imagePreviewUrl: string;
  onCancel: () => void;
  onCompleted?: () => void;
  isProcessing: boolean;
  errorMessage?: string | null;
}

export const ScanningView: React.FC<ScanningViewProps> = ({
  imagePreviewUrl,
  onCancel,
  isProcessing,
  errorMessage
}) => {
  const [step, setStep] = useState<number>(1);

  // Periodic radar ping sound and step progress
  useEffect(() => {
    soundService.playRadarPing();
    const soundInterval = setInterval(() => {
      soundService.playRadarPing();
    }, 1100);

    const timer1 = setTimeout(() => setStep(2), 1200);
    const timer2 = setTimeout(() => setStep(3), 2400);

    return () => {
      clearInterval(soundInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-[85vh] w-full flex flex-col justify-between items-center px-4 py-6 max-w-md mx-auto text-center">
      {/* Header text */}
      <div className="space-y-1.5 pt-2">
        <h2 className="text-2xl font-heading font-extrabold text-white flex items-center justify-center gap-2">
          <span>Scanning...</span>
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
        </h2>
        <p className="text-xs text-emerald-300/80">
          Our AI is identifying the animal
        </p>
      </div>

      {/* Futuristic Circular Scanner with moving scan beam */}
      <div className="relative my-6 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
        {/* Corner Reticle Viewfinder Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lime-400 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lime-400 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lime-400 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime-400 rounded-br-lg" />

        {/* Center Target reticle lines */}
        <div className="absolute inset-x-4 top-1/2 h-[1px] bg-lime-400/20 pointer-events-none" />
        <div className="absolute inset-y-4 left-1/2 w-[1px] bg-lime-400/20 pointer-events-none" />

        {/* Scanner Circular Body */}
        <div className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-full p-2 flex items-center justify-center">
          {/* Animated concentric rings */}
          <div className="absolute inset-0 rounded-full border border-lime-400/40 animate-pulse" />
          <div className="absolute -inset-2 rounded-full border border-dashed border-emerald-500/40 animate-spin [animation-duration:14s]" />
          <div className="absolute -inset-4 rounded-full border border-emerald-500/20 animate-spin [animation-duration:22s] [animation-direction:reverse]" />

          {/* Masked animal photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-lime-400 shadow-[0_0_30px_rgba(74,222,128,0.5)]">
            <img
              src={imagePreviewUrl}
              alt="Subject to scan"
              className="w-full h-full object-cover object-center filter contrast-110"
            />

            {/* Sweep Radar Effect */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,_rgba(74,222,128,0.5)_0deg,_transparent_90deg)] animate-scan-radar pointer-events-none mix-blend-screen" />

            {/* Moving Horizontal Laser Beam */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent shadow-[0_0_15px_#a3e635] animate-scan-line pointer-events-none" />

            {/* Subtle dark green vignette */}
            <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Stepper Analysis Checklist (Screen 3) */}
      <div className="w-full max-w-xs space-y-3 glass-panel p-4 rounded-2xl border border-emerald-700/40 text-left">
        {/* Step 1: Analysing image */}
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              step >= 1
                ? 'bg-lime-400 text-emerald-950 shadow-sm shadow-lime-400/50'
                : 'bg-emerald-950 border border-emerald-700/50 text-emerald-600'
            }`}
          >
            {step > 1 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-950" />
            )}
          </div>
          <span
            className={`text-xs font-medium transition-colors ${
              step >= 1 ? 'text-white' : 'text-emerald-400/60'
            }`}
          >
            Analysing image...
          </span>
        </div>

        {/* Step 2: Identifying species */}
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              step >= 2
                ? 'bg-lime-400 text-emerald-950 shadow-sm shadow-lime-400/50'
                : 'bg-emerald-950 border border-emerald-700/50 text-emerald-600'
            }`}
          >
            {step > 2 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : step === 2 ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-950" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-emerald-700" />
            )}
          </div>
          <span
            className={`text-xs font-medium transition-colors ${
              step >= 2 ? 'text-white' : 'text-emerald-400/60'
            }`}
          >
            Identifying species...
          </span>
        </div>

        {/* Step 3: Discovering habitat */}
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              step >= 3
                ? 'bg-lime-400 text-emerald-950 shadow-sm shadow-lime-400/50'
                : 'bg-emerald-950 border border-emerald-700/50 text-emerald-600'
            }`}
          >
            {step === 3 && isProcessing ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-950" />
            ) : step >= 3 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-emerald-700" />
            )}
          </div>
          <span
            className={`text-xs font-medium transition-colors ${
              step >= 3 ? 'text-white' : 'text-emerald-400/60'
            }`}
          >
            Discovering habitat & status...
          </span>
        </div>
      </div>

      {/* Error or Cancel Button */}
      {errorMessage ? (
        <div className="w-full max-w-xs mt-3 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs text-left flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-red-300">Scan Notice</p>
            <p className="text-[11px] text-red-200/80 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      ) : null}

      <div className="w-full max-w-xs pt-4 pb-2">
        <button
          onClick={() => {
            soundService.playClick();
            onCancel();
          }}
          className="w-full py-3 px-6 rounded-full glass-panel hover:bg-emerald-900/40 border border-emerald-600/40 text-emerald-300 font-medium text-xs tracking-wider uppercase hover:text-white transition-all cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
