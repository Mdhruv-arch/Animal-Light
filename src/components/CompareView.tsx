import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowLeftRight,
  GitCompare,
  Ruler,
  Scale,
  Clock,
  Utensils,
  Trees,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { AnimalProfile } from '../types/wildlife';
import { ANIMAL_INVENTORY } from '../data/animalInventory';
import { soundService } from '../services/soundService';

interface CompareViewProps {
  currentAnimal?: AnimalProfile | null;
  onBack: () => void;
  allAnimals?: AnimalProfile[];
}

export const CompareView: React.FC<CompareViewProps> = ({
  currentAnimal,
  onBack,
  allAnimals
}) => {
  // Use complete 30-animal knowledge inventory as primary pool
  const pool = ANIMAL_INVENTORY;

  const [leftAnimal, setLeftAnimal] = useState<AnimalProfile>(
    currentAnimal || pool[0] // Bengal Tiger
  );
  const [rightAnimal, setRightAnimal] = useState<AnimalProfile>(
    pool.find((a) => a.id !== (currentAnimal?.id || pool[0].id)) || pool[1] // African Lion
  );

  const [showFullMetrics, setShowFullMetrics] = useState<boolean>(false);

  const handleSwap = () => {
    soundService.playClick();
    const temp = leftAnimal;
    setLeftAnimal(rightAnimal);
    setRightAnimal(temp);
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
          Compare Species
        </h2>

        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lime-400">
          <GitCompare className="w-5 h-5" />
        </div>
      </div>

      {/* Side-by-Side Photo Cards with Center Swap */}
      <div className="relative grid grid-cols-2 gap-3 items-center">
        {/* Left Animal Card */}
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-700/50 p-2 space-y-2">
          <div className="relative h-32 rounded-xl overflow-hidden bg-emerald-950">
            <img
              src={leftAnimal.referencePhoto.url || leftAnimal.imageUrl}
              alt={leftAnimal.commonName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#06110d]/80 text-[10px] font-bold text-lime-400">
              {leftAnimal.conservation.code}
            </div>
          </div>
          <div className="px-1">
            <h3 className="font-heading font-bold text-sm text-white truncate">
              {leftAnimal.commonName}
            </h3>
            <p className="text-[10px] text-emerald-400/80 italic truncate">
              {leftAnimal.scientificName}
            </p>
          </div>
        </div>

        {/* Central Floating Swap Icon */}
        <button
          onClick={handleSwap}
          aria-label="Swap animals"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center shadow-lg shadow-lime-400/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Right Animal Card */}
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-700/50 p-2 space-y-2">
          <div className="relative h-32 rounded-xl overflow-hidden bg-emerald-950">
            <img
              src={rightAnimal.referencePhoto.url || rightAnimal.imageUrl}
              alt={rightAnimal.commonName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#06110d]/80 text-[10px] font-bold text-lime-400">
              {rightAnimal.conservation.code}
            </div>
          </div>
          <div className="px-1 text-right">
            <h3 className="font-heading font-bold text-sm text-white truncate">
              {rightAnimal.commonName}
            </h3>
            <p className="text-[10px] text-emerald-400/80 italic truncate">
              {rightAnimal.scientificName}
            </p>
          </div>
        </div>
      </div>

      {/* Selectors for changing species across all 30 animals */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <select
          value={leftAnimal.id}
          onChange={(e) => {
            const found = pool.find((a) => a.id === e.target.value);
            if (found) setLeftAnimal(found);
          }}
          className="bg-emerald-950/80 border border-emerald-700/60 rounded-xl px-2.5 py-2 text-emerald-100 font-medium cursor-pointer"
        >
          {pool.map((a) => (
            <option key={a.id} value={a.id}>
              {a.commonName}
            </option>
          ))}
        </select>

        <select
          value={rightAnimal.id}
          onChange={(e) => {
            const found = pool.find((a) => a.id === e.target.value);
            if (found) setRightAnimal(found);
          }}
          className="bg-emerald-950/80 border border-emerald-700/60 rounded-xl px-2.5 py-2 text-emerald-100 font-medium cursor-pointer"
        >
          {pool.map((a) => (
            <option key={a.id} value={a.id}>
              {a.commonName}
            </option>
          ))}
        </select>
      </div>

      {/* Comparative Metrics Table */}
      <div className="glass-panel rounded-2xl border border-emerald-800/40 p-4 divide-y divide-emerald-900/60 space-y-3">
        {/* Row: Scientific Name */}
        <div className="pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Scientific Name
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <span className="italic text-emerald-100">{leftAnimal.scientificName}</span>
            <span className="italic text-emerald-100">{rightAnimal.scientificName}</span>
          </div>
        </div>

        {/* Row: Taxonomic Family */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Taxonomic Family
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <span className="font-semibold text-white">{leftAnimal.taxonomy.family}</span>
            <span className="font-semibold text-white">{rightAnimal.taxonomy.family}</span>
          </div>
        </div>

        {/* Row: Habitat */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Primary Habitat
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <span className="text-emerald-200/90 leading-tight">
              {leftAnimal.nativeRegions.slice(0, 2).join(', ')}
            </span>
            <span className="text-emerald-200/90 leading-tight">
              {rightAnimal.nativeRegions.slice(0, 2).join(', ')}
            </span>
          </div>
        </div>

        {/* Row: Size */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Body Length / Size
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
            <span className="text-white">{leftAnimal.size}</span>
            <span className="text-white">{rightAnimal.size}</span>
          </div>
        </div>

        {/* Row: Weight */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Body Weight
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
            <span className="text-white">{leftAnimal.weight}</span>
            <span className="text-white">{rightAnimal.weight}</span>
          </div>
        </div>

        {/* Row: Diet */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Diet Classification
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
            <span className="text-lime-400">{leftAnimal.dietType}</span>
            <span className="text-lime-400">{rightAnimal.dietType}</span>
          </div>
        </div>

        {/* Row: Lifespan */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            Lifespan
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <span className="text-emerald-200">{leftAnimal.lifespan}</span>
            <span className="text-emerald-200">{rightAnimal.lifespan}</span>
          </div>
        </div>

        {/* Row: Conservation */}
        <div className="pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block text-center mb-1">
            IUCN Red List Status
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
            <span className="text-rose-400">{leftAnimal.conservation.status}</span>
            <span className="text-rose-400">{rightAnimal.conservation.status}</span>
          </div>
        </div>
      </div>

      {/* Button: View Full Comparison Details */}
      <button
        onClick={() => {
          soundService.playClick();
          setShowFullMetrics(!showFullMetrics);
        }}
        className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-emerald-950 font-bold text-xs tracking-wide shadow-lg shadow-lime-500/30 transition-all cursor-pointer"
      >
        {showFullMetrics ? 'Hide Detailed Overview' : 'View Full Comparison'}
      </button>

      {/* Collapsible deep comparison */}
      {showFullMetrics && (
        <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-3 text-xs">
          <h4 className="font-bold text-white text-sm">Key Ecological Differences</h4>
          <p className="text-emerald-200/90 leading-relaxed">
            <strong className="text-lime-400">{leftAnimal.commonName}:</strong> {leftAnimal.overview}
          </p>
          <p className="text-emerald-200/90 leading-relaxed">
            <strong className="text-lime-400">{rightAnimal.commonName}:</strong> {rightAnimal.overview}
          </p>
        </div>
      )}
    </div>
  );
};
