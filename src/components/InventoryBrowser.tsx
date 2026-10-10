import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Info
} from 'lucide-react';
import { AnimalProfile } from '../types/wildlife';
import { ANIMAL_INVENTORY } from '../data/animalInventory';
import { soundService } from '../services/soundService';

interface InventoryBrowserProps {
  onSelectAnimal: (animal: AnimalProfile) => void;
  onBack: () => void;
}

export const InventoryBrowser: React.FC<InventoryBrowserProps> = ({
  onSelectAnimal,
  onBack
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('All');

  const classes = useMemo(() => {
    const list = Array.from(new Set(ANIMAL_INVENTORY.map((a) => a.classification)));
    return ['All', ...list];
  }, []);

  const filteredAnimals = useMemo(() => {
    return ANIMAL_INVENTORY.filter((animal) => {
      const matchesSearch =
        searchQuery === '' ||
        animal.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.taxonomy.family.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesClass =
        selectedClass === 'All' || animal.classification === selectedClass;

      return matchesSearch && matchesClass;
    });
  }, [searchQuery, selectedClass]);

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

        <div className="text-center">
          <h2 className="font-heading font-extrabold text-lg text-white">
            Animal Knowledge Inventory
          </h2>
          <span className="text-[11px] text-lime-400 font-semibold">
            {ANIMAL_INVENTORY.length} Verified Species
          </span>
        </div>

        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lime-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, scientific taxonomy..."
          className="w-full py-3 pl-10 pr-4 rounded-2xl glass-panel-elevated border border-emerald-700/50 text-white placeholder-emerald-400/50 text-xs focus:outline-none focus:border-lime-400/80 transition-colors"
        />
        <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Taxonomic Class Category Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {classes.map((cls) => {
          const count =
            cls === 'All'
              ? ANIMAL_INVENTORY.length
              : ANIMAL_INVENTORY.filter((a) => a.classification === cls).length;
          const isActive = selectedClass === cls;
          return (
            <button
              key={cls}
              onClick={() => {
                soundService.playClick();
                setSelectedClass(cls);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
                  : 'glass-panel text-emerald-300 hover:text-white'
              }`}
            >
              <span>{cls}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-emerald-950/30 text-emerald-950 font-bold' : 'bg-emerald-900/60 text-emerald-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animal Cards Grid */}
      {filteredAnimals.length === 0 ? (
        <div className="p-8 text-center glass-panel rounded-3xl border border-emerald-800/40 space-y-2">
          <Info className="w-8 h-8 text-amber-400 mx-auto" />
          <h4 className="text-sm font-bold text-white">No species found</h4>
          <p className="text-xs text-emerald-300/70">
            No matching animal in the verified database for &ldquo;{searchQuery}&rdquo;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              onClick={() => {
                soundService.playClick();
                onSelectAnimal(animal);
              }}
              className="p-3 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-800/40 hover:border-lime-400/60 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-emerald-950 shrink-0 border border-emerald-700/50">
                  <img
                    src={animal.referencePhoto.url || animal.imageUrl}
                    alt={animal.commonName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-black/75 text-[9px] font-bold text-lime-400">
                    {animal.conservation.code}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-lime-300 transition-colors">
                      {animal.commonName}
                    </h4>
                  </div>
                  <p className="text-[11px] text-emerald-400/80 italic">
                    {animal.scientificName}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-emerald-300/60">
                    <span>{animal.classification}</span>
                    <span>•</span>
                    <span className="text-lime-400/80 font-medium">{animal.dietType}</span>
                  </div>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-emerald-500 group-hover:text-lime-300 group-hover:translate-x-0.5 transition-all" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
