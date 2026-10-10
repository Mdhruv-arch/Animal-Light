import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { soundService } from '../services/soundService';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  const handleStart = () => {
    soundService.playClick();
    onStart();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#05110c] text-emerald-50 px-6 py-10 overflow-hidden select-none">
      {/* Background ambient lighting and dark forest canopy overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#071711] to-[#040c08] -z-20" />
      
      {/* Decorative fireflies/floating particle dots */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-lime-400 blur-[1px] animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-emerald-400 blur-[2px] animate-pulse delay-700 opacity-60" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-lime-300 blur-[1px] animate-pulse delay-1000 opacity-80" />
      <div className="absolute top-2/3 right-1/6 w-2.5 h-2.5 rounded-full bg-lime-400/50 blur-[2px] animate-pulse delay-500 opacity-50" />

      {/* Top Header section */}
      <div className="w-full max-w-sm flex flex-col items-center text-center pt-6 z-10">
        {/* Glowing Paw Logo Badge */}
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-500 to-lime-400 flex items-center justify-center shadow-xl shadow-lime-500/30">
            <svg
              className="w-9 h-9 text-[#05110c] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="8.5" cy="5" rx="1.5" ry="2.2" />
              <ellipse cx="15.5" cy="5" rx="1.5" ry="2.2" />
              <ellipse cx="4.5" cy="10" rx="1.5" ry="2.2" />
              <ellipse cx="19.5" cy="10" rx="1.5" ry="2.2" />
              <path d="M12 9.5c-3.5 0-6 2.5-6 6 0 2.5 2.5 4.5 6 4.5s6-2 6-4.5c0-3.5-2.5-6-6-6z" />
            </svg>
          </div>
          <div className="absolute -inset-1 rounded-full bg-lime-400/30 blur-md -z-10 animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Animal Light <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.6)]">AI</span>
        </h1>
        <p className="text-lime-400 font-medium tracking-wide text-sm sm:text-base uppercase mb-2">
          Scan. Discover. Protect.
        </p>
        <p className="text-emerald-300/80 text-xs sm:text-sm max-w-xs leading-relaxed">
          Identify animals, explore their world, and help protect wildlife with real-time biological intelligence.
        </p>
      </div>

      {/* Central Visual: Glowing Animal Portal (Tiger in jungle with circular aura) */}
      <div className="relative my-8 max-w-xs sm:max-w-sm w-full flex items-center justify-center z-10">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 flex items-center justify-center">
          {/* Outer glowing animated rings */}
          <div className="absolute inset-0 rounded-full border-2 border-lime-400/30 animate-spin [animation-duration:18s]" />
          <div className="absolute -inset-2 rounded-full border border-emerald-500/20 animate-spin [animation-duration:28s] [animation-direction:reverse]" />
          <div className="absolute -inset-4 rounded-full bg-lime-500/10 blur-xl -z-10" />

          {/* Masked Animal Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-lime-400/70 shadow-[0_0_35px_rgba(74,222,128,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
              alt="Bengal Tiger"
              className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
            />
            {/* Inner vignette & subtle forest glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06110d]/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full max-w-sm flex flex-col items-center gap-4 pb-4 z-10">
        <button
          onClick={handleStart}
          className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-emerald-950 font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(163,230,53,0.45)] hover:shadow-[0_0_40px_rgba(163,230,53,0.7)] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-2 text-xs text-emerald-400/60">
          <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
          <span>IUCN Red List Data & Gemini Vision AI</span>
        </div>
      </div>
    </div>
  );
};
