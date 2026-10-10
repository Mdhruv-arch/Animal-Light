import React, { useRef } from 'react';
import {
  Camera,
  Image as ImageIcon,
  History,
  Heart,
  GitCompare,
  Settings,
  Sparkles,
  ChevronRight,
  Search,
  BookOpen,
  Trees,
  Compass
} from 'lucide-react';
import { AnimalProfile, AppScreen } from '../types/wildlife';
import { ANIMAL_INVENTORY } from '../data/animalInventory';
import { soundService } from '../services/soundService';

interface HomeScreenProps {
  onTakePhoto: () => void;
  onSelectImage: (file: File) => void;
  onSelectSample: (animal: AnimalProfile) => void;
  onNavigate: (screen: AppScreen) => void;
  recentCount: number;
  favoritesCount: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onTakePhoto,
  onSelectImage,
  onSelectSample,
  onNavigate,
  recentCount,
  favoritesCount
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    soundService.playClick();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSelectImage(file);
    }
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
      {/* Hidden file input for gallery upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Hero Banner: Discover Wildlife with Deer background */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-elevated p-6 border border-emerald-500/20 shadow-xl shadow-emerald-950/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061c14] via-[#09271c]/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80"
          alt="Majestic stag in misty forest"
          className="absolute right-0 top-0 bottom-0 w-3/5 object-cover object-center opacity-70 mix-blend-luminosity filter contrast-125"
        />

        <div className="relative z-20 max-w-[260px] space-y-3">
          <h2 className="text-2xl font-heading font-extrabold text-white leading-tight">
            Discover the <br />
            <span className="text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.4)]">Amazing Wildlife</span> Around You
          </h2>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Scan</span>
            <span className="text-emerald-600">•</span>
            <span>Learn</span>
            <span className="text-emerald-600">•</span>
            <span>Protect</span>
          </div>
        </div>
      </div>

      {/* Quick Search Shortcut to Inventory */}
      <button
        onClick={() => {
          soundService.playClick();
          onNavigate('inventory');
        }}
        className="w-full p-3 rounded-2xl glass-panel hover:bg-emerald-900/30 border border-emerald-700/50 flex items-center justify-between text-left transition-all cursor-pointer group shadow-sm"
      >
        <div className="flex items-center gap-2.5 text-xs text-emerald-300/80">
          <Search className="w-4 h-4 text-lime-400" />
          <span>Search 30 verified animals in inventory...</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-700/60 text-[10px] font-bold text-lime-400">
          30 Species
        </span>
      </button>

      {/* Primary Scan & Upload Action Cards */}
      <div className="space-y-3">
        {/* Take a Photo Card */}
        <button
          onClick={() => {
            soundService.playClick();
            onTakePhoto();
          }}
          className="w-full group p-4 rounded-2xl glass-panel hover:bg-emerald-900/30 border border-emerald-500/30 hover:border-lime-400/60 transition-all flex items-center justify-between text-left cursor-pointer active:scale-[0.99] shadow-lg shadow-emerald-950/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-700 to-lime-500 flex items-center justify-center text-emerald-950 shadow-md shadow-lime-500/20 group-hover:scale-105 group-hover:shadow-lime-400/40 transition-all">
              <Camera className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white group-hover:text-lime-300 transition-colors">
                Take a Photo
              </h3>
              <p className="text-xs text-emerald-300/70">
                Capture an animal with your camera
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-950/70 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:translate-x-0.5 transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>

        {/* Upload Image Card */}
        <button
          onClick={handleUploadClick}
          className="w-full group p-4 rounded-2xl glass-panel hover:bg-emerald-900/30 border border-emerald-500/30 hover:border-lime-400/60 transition-all flex items-center justify-between text-left cursor-pointer active:scale-[0.99] shadow-lg shadow-emerald-950/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-700 to-emerald-400 flex items-center justify-center text-emerald-950 shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:shadow-emerald-400/40 transition-all">
              <ImageIcon className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white group-hover:text-lime-300 transition-colors">
                Upload Image
              </h3>
              <p className="text-xs text-emerald-300/70">
                Choose an image from your device gallery
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-950/70 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:translate-x-0.5 transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Quick Actions 4x Grid */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 px-1">
          Quick Actions
        </h4>
        <div className="grid grid-cols-4 gap-2.5">
          {/* Inventory Catalog */}
          <button
            onClick={() => {
              soundService.playClick();
              onNavigate('inventory');
            }}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/40 transition-all cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:text-lime-400 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium text-emerald-200">Catalog</span>
          </button>

          {/* Recent */}
          <button
            onClick={() => {
              soundService.playClick();
              onNavigate('collection');
            }}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/40 transition-all cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:text-lime-400 transition-colors">
              <History className="w-5 h-5" />
              {recentCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-lime-400 text-emerald-950 text-[10px] font-extrabold flex items-center justify-center">
                  {recentCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium text-emerald-200">Recent</span>
          </button>

          {/* Favorites */}
          <button
            onClick={() => {
              soundService.playClick();
              onNavigate('collection');
            }}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/40 transition-all cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:text-rose-400 transition-colors">
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-extrabold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium text-emerald-200">Favorites</span>
          </button>

          {/* Compare */}
          <button
            onClick={() => {
              soundService.playClick();
              onNavigate('compare');
            }}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/40 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:text-lime-400 transition-colors">
              <GitCompare className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium text-emerald-200">Compare</span>
          </button>
        </div>
      </div>

      {/* Featured Animals from Inventory */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Verified Animal Database
            </h4>
          </div>
          <button
            onClick={() => {
              soundService.playClick();
              onNavigate('inventory');
            }}
            className="text-[11px] text-lime-400 hover:underline cursor-pointer"
          >
            View All ({ANIMAL_INVENTORY.length}) →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ANIMAL_INVENTORY.slice(0, 6).map((animal) => (
            <button
              key={animal.id}
              onClick={() => {
                soundService.playClick();
                onSelectSample(animal);
              }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-emerald-700/40 hover:border-lime-400/70 p-2.5 text-left transition-all active:scale-[0.98] cursor-pointer"
            >
              <div className="relative h-24 w-full rounded-xl overflow-hidden mb-2">
                <img
                  src={animal.referencePhoto.url || animal.imageUrl}
                  alt={animal.commonName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#06110d]/80 backdrop-blur-md text-[10px] font-bold text-lime-400 border border-lime-500/30">
                  {animal.conservation.code}
                </span>
              </div>
              <h5 className="font-heading font-bold text-sm text-white group-hover:text-lime-300 transition-colors truncate">
                {animal.commonName}
              </h5>
              <p className="text-[11px] text-emerald-400/70 italic truncate">
                {animal.scientificName}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
