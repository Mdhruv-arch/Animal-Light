import React from 'react';
import {
  X,
  Home,
  Scan,
  Compass,
  Bookmark,
  Heart,
  GitCompare,
  Settings,
  ShieldCheck,
  BookOpen,
  Info
} from 'lucide-react';
import { AppScreen } from '../types/wildlife';
import { soundService } from '../services/soundService';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: AppScreen) => void;
  onTriggerScan: () => void;
  favoritesCount: number;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onTriggerScan,
  favoritesCount
}) => {
  if (!isOpen) return null;

  const navigateTo = (screen: AppScreen) => {
    soundService.playClick();
    onNavigate(screen);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Menu Panel */}
      <div className="relative w-72 max-w-[80vw] h-full bg-[#06140f] border-r border-emerald-800/50 p-5 flex flex-col justify-between z-10 shadow-2xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-lime-400 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-emerald-950 fill-current"
                  viewBox="0 0 24 24"
                >
                  <ellipse cx="8.5" cy="5" rx="1.5" ry="2.2" />
                  <ellipse cx="15.5" cy="5" rx="1.5" ry="2.2" />
                  <ellipse cx="4.5" cy="10" rx="1.5" ry="2.2" />
                  <ellipse cx="19.5" cy="10" rx="1.5" ry="2.2" />
                  <path d="M12 9.5c-3.5 0-6 2.5-6 6 0 2.5 2.5 4.5 6 4.5s6-2 6-4.5c0-3.5-2.5-6-6-6z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white text-base">
                Animal Light <span className="text-lime-400">AI</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-emerald-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-medium">
            <button
              onClick={() => navigateTo('home')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <Home className="w-4 h-4 text-emerald-400" />
              <span>Home Screen</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onTriggerScan();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <Scan className="w-4 h-4 text-lime-400" />
              <span>Bio-Scanner</span>
            </button>

            <button
              onClick={() => navigateTo('inventory')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <BookOpen className="w-4 h-4 text-lime-400" />
              <span>Animal Inventory (30)</span>
            </button>

            <button
              onClick={() => navigateTo('collection')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4 text-emerald-400" />
                <span>My Collection</span>
              </div>
              {favoritesCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-400 text-xs font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => navigateTo('compare')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <GitCompare className="w-4 h-4 text-emerald-400" />
              <span>Compare Species</span>
            </button>

            <button
              onClick={() => navigateTo('settings')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900/40 hover:text-lime-300 transition-colors cursor-pointer text-left"
            >
              <Settings className="w-4 h-4 text-emerald-400" />
              <span>Settings & Diagnostics</span>
            </button>
          </nav>

          {/* Conservation Commitment Badge */}
          <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 space-y-1.5">
            <div className="flex items-center gap-1.5 text-lime-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Scientific Data Integrity</span>
            </div>
            <p className="text-[11px] text-emerald-300/80 leading-relaxed">
              Animal Light AI complies with biological taxonomy standards, referencing verified IUCN Red List records without fabricating unverified sightings.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-emerald-900/40 text-[11px] text-emerald-500">
          <p>Animal Light AI v2.0</p>
          <p className="text-[10px] text-emerald-400/50">Local Storage & Gemini Vision</p>
        </div>
      </div>
    </div>
  );
};
