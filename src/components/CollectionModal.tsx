import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Heart,
  History,
  Trash2,
  ChevronRight,
  Sparkles,
  Download
} from 'lucide-react';
import { AnimalProfile } from '../types/wildlife';
import { soundService } from '../services/soundService';

interface CollectionModalProps {
  scans: AnimalProfile[];
  onSelectAnimal: (animal: AnimalProfile) => void;
  onToggleFavorite: (id: string) => void;
  onClearHistory: () => void;
  onBack: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  scans,
  onSelectAnimal,
  onToggleFavorite,
  onClearHistory,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'recent' | 'favorites'>('recent');

  const displayedList =
    activeTab === 'recent' ? scans : scans.filter((s) => s.isFavorite);

  const handleExport = () => {
    soundService.playClick();
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(scans, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'animal-light-ai-collection.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-4">
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
          My Collection
        </h2>

        <button
          onClick={handleExport}
          title="Export Scans"
          aria-label="Export collection"
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-emerald-300 hover:text-lime-300 transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Segmented Filter: Recent Scans | Favorites (Screen 9) */}
      <div className="p-1 rounded-full glass-panel border border-emerald-700/40 flex items-center">
        <button
          onClick={() => {
            soundService.playClick();
            setActiveTab('recent');
          }}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'recent'
              ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
              : 'text-emerald-300/80 hover:text-white'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Recent Scans</span>
        </button>
        <button
          onClick={() => {
            soundService.playClick();
            setActiveTab('favorites');
          }}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'favorites'
              ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
              : 'text-emerald-300/80 hover:text-white'
          }`}
        >
          <Heart className="w-3.5 h-3.5" />
          <span>Favorites</span>
        </button>
      </div>

      {/* Animal Cards List (Screen 9 Cards) */}
      {displayedList.length === 0 ? (
        <div className="p-8 text-center glass-panel rounded-3xl border border-emerald-800/40 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white">No animals saved yet</h4>
          <p className="text-xs text-emerald-300/70">
            {activeTab === 'recent'
              ? 'Scan or photograph animals to populate your wildlife catalog.'
              : 'Tap the heart icon on any species profile to save to favorites.'}
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {displayedList.map((animal) => (
            <div
              key={animal.id}
              onClick={() => {
                soundService.playClick();
                onSelectAnimal(animal);
              }}
              className="p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/50 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
            >
              <div className="flex items-center gap-3">
                {/* Photo Thumbnail */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-emerald-950 shrink-0 border border-emerald-700/50">
                  <img
                    src={animal.imageUrl}
                    alt={animal.commonName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-black/70 text-[9px] font-bold text-lime-400">
                    {animal.conservation.code}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-0.5">
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-lime-300 transition-colors">
                    {animal.commonName}
                  </h4>
                  <p className="text-xs text-emerald-400/80 italic">
                    {animal.scientificName}
                  </p>
                  <p className="text-[10px] text-emerald-400/60 font-medium">
                    {animal.scannedAt || 'Recent record'}
                  </p>
                </div>
              </div>

              {/* Heart Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundService.playClick();
                    onToggleFavorite(animal.id);
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    animal.isFavorite
                      ? 'text-rose-500 fill-rose-500 bg-rose-950/40 border border-rose-500/30'
                      : 'text-emerald-400/60 hover:text-rose-400 bg-emerald-950/60 border border-emerald-800/40'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${animal.isFavorite ? 'fill-rose-500' : ''}`}
                  />
                </button>
                <ChevronRight className="w-4 h-4 text-emerald-500 group-hover:text-lime-300 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Clear History Button */}
      {scans.length > 0 && activeTab === 'recent' && (
        <div className="pt-2 text-center">
          <button
            onClick={() => {
              if (confirm('Clear all recent scans from your device?')) {
                onClearHistory();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400/60 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        </div>
      )}
    </div>
  );
};
