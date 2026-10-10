import React from 'react';
import { Menu, Sparkles, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenFavorites: () => void;
  favoritesCount: number;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenFavorites,
  favoritesCount,
  onLogoClick
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07130f]/90 backdrop-blur-md border-b border-emerald-900/30 px-4 py-3">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Menu button */}
        <button
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/50 transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo and App Title */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/20 group-hover:shadow-lime-500/40 transition-all">
            {/* Paw Icon */}
            <svg
              className="w-4 h-4 text-[#06110d] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="8.5" cy="5" rx="1.5" ry="2.2" />
              <ellipse cx="15.5" cy="5" rx="1.5" ry="2.2" />
              <ellipse cx="4.5" cy="10" rx="1.5" ry="2.2" />
              <ellipse cx="19.5" cy="10" rx="1.5" ry="2.2" />
              <path d="M12 9.5c-3.5 0-6 2.5-6 6 0 2.5 2.5 4.5 6 4.5s6-2 6-4.5c0-3.5-2.5-6-6-6z" />
            </svg>
            <div className="absolute -inset-0.5 rounded-full bg-lime-400/20 blur-[3px] -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            Animal Light <span className="text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.5)]">AI</span>
          </span>
        </button>

        {/* Favorites shortcut */}
        <button
          onClick={onOpenFavorites}
          aria-label="View favorites"
          className="relative w-10 h-10 rounded-full flex items-center justify-center bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 hover:text-rose-400 hover:bg-emerald-900/50 transition-colors cursor-pointer"
        >
          <Heart className="w-5 h-5" />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-lime-400 text-emerald-950 text-xs font-bold flex items-center justify-center shadow-sm">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
