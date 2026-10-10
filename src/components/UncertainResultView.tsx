import React from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  RefreshCw,
  Sun,
  Maximize2,
  HelpCircle,
  Sparkles,
  BookOpen,
  Camera
} from 'lucide-react';
import { CandidateMatch } from '../types/wildlife';
import { soundService } from '../services/soundService';

interface UncertainResultViewProps {
  imageUrl: string;
  isNonAnimal?: boolean;
  rejectionMessage?: string;
  explanation?: string;
  confidence?: number;
  candidates?: CandidateMatch[];
  onSelectCandidate?: (cand: CandidateMatch) => void;
  onTryAgain: () => void;
  onBrowseCatalog: () => void;
}

export const UncertainResultView: React.FC<UncertainResultViewProps> = ({
  imageUrl,
  isNonAnimal = false,
  rejectionMessage,
  explanation,
  confidence = 0,
  candidates,
  onSelectCandidate,
  onTryAgain,
  onBrowseCatalog
}) => {
  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-4 text-center">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            soundService.playClick();
            onTryAgain();
          }}
          aria-label="Go back"
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-emerald-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h3 className="font-heading font-extrabold text-sm text-amber-300 uppercase tracking-wider">
          {isNonAnimal ? 'No Animal Detected' : 'Uncertain Identification'}
        </h3>

        <div className="w-10 h-10" />
      </div>

      {/* Uploaded Photo Preview with Status Chip */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-amber-500/40 p-2.5 max-w-xs mx-auto">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-emerald-950">
          <img
            src={imageUrl}
            alt="Scanned photo"
            className="w-full h-full object-cover filter contrast-95"
          />
          <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/85 border border-amber-500/50 text-[10px] font-bold text-amber-400 flex items-center gap-1 shadow-md">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>
              {isNonAnimal
                ? 'Non-Animal Subject'
                : `Low Confidence (${confidence}%)`}
            </span>
          </div>
        </div>
      </div>

      {/* Primary Message Banner */}
      <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 text-left space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          Analysis Result
        </h4>
        <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
          {rejectionMessage ||
            explanation ||
            'No identifiable animal detected. Please upload a clear animal photo.'}
        </p>
      </div>

      {/* Alternative Candidate Matches (If an animal was present but uncertain) */}
      {!isNonAnimal && candidates && candidates.length > 0 && (
        <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 text-left space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Possible Species Matches
          </h4>
          <p className="text-[11px] text-emerald-300/80">
            Did you photograph one of these candidates? Tap to view its profile:
          </p>

          <div className="space-y-2">
            {candidates.map((cand, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundService.playClick();
                  if (onSelectCandidate) onSelectCandidate(cand);
                }}
                className="w-full p-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/60 border border-emerald-700/40 hover:border-lime-400/60 flex items-center justify-between text-left transition-all cursor-pointer group"
              >
                <div>
                  <h5 className="font-heading font-bold text-xs text-white group-hover:text-lime-300 transition-colors">
                    {cand.species}
                  </h5>
                  <p className="text-[10px] text-emerald-400 italic">
                    {cand.scientificName}
                  </p>
                  {cand.visualClues && cand.visualClues.length > 0 && (
                    <p className="text-[9px] text-emerald-300/60 mt-0.5">
                      Visual clues: {cand.visualClues.slice(0, 2).join(', ')}
                    </p>
                  )}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-400">
                  {cand.confidence}%
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Helpful Scanning Tips */}
      <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 text-left space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-lime-400" />
          Tips for Reliable Identification
        </h4>

        <div className="space-y-2 text-xs text-emerald-200/90">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center shrink-0">
              <Sun className="w-3.5 h-3.5" />
            </div>
            <span>Use natural daylight and avoid harsh glare or deep shadow.</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center shrink-0">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
            <span>Frame the animal’s face, ears, beak, or distinct body markings centrally.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <button
          onClick={() => {
            soundService.playClick();
            onTryAgain();
          }}
          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-emerald-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-lime-500/30 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Upload Another Photo</span>
        </button>

        <button
          onClick={() => {
            soundService.playClick();
            onBrowseCatalog();
          }}
          className="w-full py-3 px-6 rounded-full glass-panel hover:bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 font-semibold text-xs cursor-pointer flex items-center justify-center gap-2"
        >
          <BookOpen className="w-3.5 h-3.5 text-lime-400" />
          <span>Browse 30 Verified Animals in Inventory</span>
        </button>
      </div>
    </div>
  );
};
