import React from 'react';
import { Home, Scan, BookOpen, Bookmark } from 'lucide-react';
import { AppScreen } from '../types/wildlife';

interface BottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  onTriggerScan: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  onTriggerScan
}) => {
  const isHome = currentScreen === 'home';
  const isCollection = currentScreen === 'collection';
  const isInventory = currentScreen === 'inventory';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#07130f]/95 backdrop-blur-lg border-t border-emerald-900/40 pb-safe">
      <div className="max-w-md mx-auto px-6 py-2 flex items-center justify-between">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
            isHome ? 'text-lime-400 font-semibold' : 'text-emerald-400/70 hover:text-emerald-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[11px] tracking-wide">Home</span>
        </button>

        {/* Scan Center Button */}
        <button
          onClick={onTriggerScan}
          aria-label="Scan Animal"
          className="relative -top-4 w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-lime-500 to-lime-400 text-black flex items-center justify-center shadow-lg shadow-lime-500/30 hover:shadow-lime-400/60 active:scale-95 transition-all cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-25 pointer-events-none" />
          <Scan className="w-7 h-7 text-emerald-950 group-hover:scale-110 transition-transform" />
          <span className="sr-only">Scan animal</span>
        </button>

        {/* Inventory Database */}
        <button
          onClick={() => onNavigate('inventory')}
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
            isInventory ? 'text-lime-400 font-semibold' : 'text-emerald-400/70 hover:text-emerald-200'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[11px] tracking-wide">Database</span>
        </button>

        {/* Collection / Saved */}
        <button
          onClick={() => onNavigate('collection')}
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
            isCollection ? 'text-lime-400 font-semibold' : 'text-emerald-400/70 hover:text-emerald-200'
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-[11px] tracking-wide">Saved</span>
        </button>
      </div>
    </div>
  );
};
