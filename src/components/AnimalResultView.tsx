import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck,
  Scale,
  Ruler,
  Clock,
  Utensils,
  Footprints,
  Info,
  MapPin,
  GitCompare,
  ExternalLink,
  Camera,
  CheckCircle2,
  Eye,
  BookOpen,
  HelpCircle,
  Trees
} from 'lucide-react';
import { AnimalProfile, AppScreen } from '../types/wildlife';
import { soundService } from '../services/soundService';
import { AIService } from '../services/aiService';

interface AnimalResultViewProps {
  animal: AnimalProfile;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
  onNavigate: (screen: AppScreen) => void;
  onScanAnother: () => void;
  onCompareWith?: (animal: AnimalProfile) => void;
}

export const AnimalResultView: React.FC<AnimalResultViewProps> = ({
  animal,
  onBack,
  onToggleFavorite,
  onNavigate,
  onScanAnother
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'habitat' | 'diet' | 'conservation'>('overview');
  const [activePhotoView, setActivePhotoView] = useState<'uploaded' | 'reference'>(
    animal.uploadedImageUrl ? 'uploaded' : 'reference'
  );
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleAudioToggle = () => {
    soundService.playClick();
    if (isPlayingAudio) {
      AIService.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      AIService.speakAnimalDescription(animal);
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 16000);
    }
  };

  const handleShare = async () => {
    soundService.playClick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Animal Light AI - ${animal.commonName}`,
          text: `Check out ${animal.commonName} (${animal.scientificName}) on Animal Light AI!\nIUCN Status: ${animal.conservation.status}`,
          url: window.location.href
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(
        `Animal Light AI: ${animal.commonName} (${animal.scientificName})\nTaxonomy: ${animal.taxonomy.family}\nIUCN Status: ${animal.conservation.status}\n${animal.overview}`
      );
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }
  };

  const displayImage =
    activePhotoView === 'uploaded' && animal.uploadedImageUrl
      ? animal.uploadedImageUrl
      : animal.referencePhoto.url || animal.imageUrl;

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-4">
      {/* Top action bar */}
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
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400/80">
            Species Profile
          </span>
          <h3 className="font-heading font-bold text-sm text-white truncate max-w-[160px]">
            {animal.commonName}
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          {/* TTS Speech Button */}
          <button
            onClick={handleAudioToggle}
            aria-label="Read description aloud"
            className={`w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-all cursor-pointer ${
              isPlayingAudio ? 'bg-lime-400 text-black shadow-md shadow-lime-400/40' : 'text-emerald-300 hover:text-lime-300'
            }`}
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            aria-label="Share animal"
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-emerald-300 hover:text-white transition-colors cursor-pointer relative"
          >
            <Share2 className="w-4 h-4" />
            {copySuccess && (
              <span className="absolute -bottom-7 right-0 text-[10px] bg-emerald-900 text-lime-400 px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>

          {/* Favorite Toggle */}
          <button
            onClick={() => {
              soundService.playClick();
              onToggleFavorite(animal.id);
            }}
            aria-label="Toggle favorite"
            className={`w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-colors cursor-pointer ${
              animal.isFavorite ? 'text-rose-500 fill-rose-500' : 'text-emerald-300 hover:text-rose-400'
            }`}
          >
            <Heart className={`w-4 h-4 ${animal.isFavorite ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Large Animal Photograph Container */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-emerald-500/20 shadow-2xl">
        <div className="relative w-full aspect-[4/3] bg-emerald-950">
          {displayImage ? (
            <img
              src={displayImage}
              alt={animal.commonName}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-emerald-500 p-4">
              <Camera className="w-10 h-10 mb-2 opacity-50" />
              <span className="text-xs font-semibold">Photo unavailable</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#06110d] via-transparent to-black/30" />

          {/* Identification Confidence Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#06110d]/85 backdrop-blur-md border border-lime-400/50 flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-xs font-bold text-lime-400 tracking-wide">
              {animal.confidence}% Confidence
            </span>
          </div>

          {/* IUCN status badge overlay */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-red-950/85 backdrop-blur-md border border-red-500/40 text-[11px] font-bold text-red-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>{animal.conservation.code}</span>
          </div>

          {/* Floating Species Name info */}
          <div className="absolute bottom-3 left-4 right-4">
            <h1 className="text-2xl font-heading font-extrabold text-white drop-shadow-md">
              {animal.commonName}
            </h1>
            <p className="text-xs text-emerald-300/90 italic font-medium">
              {animal.scientificName}
            </p>
          </div>
        </div>

        {/* Photo Separation Switcher (Uploaded Photo vs Verified Reference Photo) */}
        {animal.uploadedImageUrl && animal.referencePhoto.url && (
          <div className="p-2.5 bg-emerald-950/80 border-t border-emerald-800/40 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <button
                onClick={() => {
                  soundService.playClick();
                  setActivePhotoView('uploaded');
                }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  activePhotoView === 'uploaded'
                    ? 'bg-lime-400 text-emerald-950 shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                Your Uploaded Photo
              </button>
              <button
                onClick={() => {
                  soundService.playClick();
                  setActivePhotoView('reference');
                }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  activePhotoView === 'reference'
                    ? 'bg-lime-400 text-emerald-950 shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                Verified Reference Photo
              </button>
            </div>
          </div>
        )}

        {/* Photo Attribution Notice */}
        {activePhotoView === 'reference' && animal.referencePhoto.attribution && (
          <div className="px-4 py-1.5 bg-emerald-950/90 text-[10px] text-emerald-400/80 border-t border-emerald-900/60 truncate">
            {animal.referencePhoto.attribution} ({animal.referencePhoto.source})
          </div>
        )}
      </div>

      {/* Visual Clues Detected Badge List */}
      {animal.visualClues && animal.visualClues.length > 0 && (
        <div className="glass-panel p-3.5 rounded-2xl border border-emerald-800/40 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-400">
            <Eye className="w-3.5 h-3.5" />
            <span>Visual Identification Clues</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {animal.visualClues.map((clue, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-[11px] text-emerald-200"
              >
                ✓ {clue}
              </span>
            ))}
          </div>
          {animal.uncertaintyExplanation && (
            <p className="text-[11px] text-emerald-300/80 italic pt-1">
              {animal.uncertaintyExplanation}
            </p>
          )}
        </div>
      )}

      {/* Ranked Candidate Species List (when multiple matches exist) */}
      {animal.candidates && animal.candidates.length > 1 && (
        <div className="glass-panel p-3.5 rounded-2xl border border-emerald-800/40 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-lime-400" />
            <span>Ranked Alternative Species</span>
          </h4>
          <div className="space-y-1.5">
            {animal.candidates.map((cand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/40"
              >
                <div>
                  <span className="font-bold text-white">{cand.species}</span>
                  <span className="text-[11px] text-emerald-400 italic ml-1.5">({cand.scientificName})</span>
                </div>
                <span className="font-bold text-lime-400 px-2 py-0.5 rounded-full bg-lime-400/10 text-[10px]">
                  {cand.confidence}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metric Cards Row: Class, Length, Weight, Lifespan, Diet */}
      <div className="grid grid-cols-3 gap-2">
        {/* Class */}
        <div className="glass-panel p-2.5 rounded-2xl border border-emerald-800/40 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center mb-1">
            <Footprints className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-emerald-400/70 uppercase font-semibold">Class</span>
          <span className="text-xs font-bold text-white truncate max-w-full">
            {animal.classification}
          </span>
        </div>

        {/* Size */}
        <div className="glass-panel p-2.5 rounded-2xl border border-emerald-800/40 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center mb-1">
            <Ruler className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-emerald-400/70 uppercase font-semibold">Size</span>
          <span className="text-xs font-bold text-white truncate max-w-full">
            {animal.size}
          </span>
        </div>

        {/* Weight */}
        <div className="glass-panel p-2.5 rounded-2xl border border-emerald-800/40 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center mb-1">
            <Scale className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-emerald-400/70 uppercase font-semibold">Weight</span>
          <span className="text-xs font-bold text-white truncate max-w-full">
            {animal.weight}
          </span>
        </div>

        {/* Lifespan */}
        <div className="glass-panel p-2.5 rounded-2xl border border-emerald-800/40 flex flex-col items-center text-center">
          <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center mb-1">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-emerald-400/70 uppercase font-semibold">Lifespan</span>
          <span className="text-xs font-bold text-white truncate max-w-full">
            {animal.lifespan}
          </span>
        </div>

        {/* Diet */}
        <div className="col-span-2 glass-panel p-2.5 rounded-2xl border border-emerald-800/40 flex items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center">
              <Utensils className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] text-emerald-400/70 uppercase font-semibold block">Diet Type</span>
              <span className="text-xs font-bold text-white">{animal.dietType}</span>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300 font-medium">
            Trophic Category
          </span>
        </div>
      </div>

      {/* Scientific Taxonomy Card */}
      <div className="glass-panel p-3.5 rounded-2xl border border-emerald-800/40 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Scientific Taxonomy
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="p-2 rounded-xl bg-emerald-950/70">
            <span className="text-[10px] text-emerald-400/70 block uppercase">Kingdom</span>
            <span className="font-bold text-white">{animal.taxonomy.kingdom}</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/70">
            <span className="text-[10px] text-emerald-400/70 block uppercase">Class</span>
            <span className="font-bold text-white">{animal.taxonomy.class}</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/70">
            <span className="text-[10px] text-emerald-400/70 block uppercase">Family</span>
            <span className="font-bold text-white">{animal.taxonomy.family}</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/70">
            <span className="text-[10px] text-emerald-400/70 block uppercase">Species</span>
            <span className="font-bold text-white italic">{animal.taxonomy.species}</span>
          </div>
        </div>
      </div>

      {/* Segmented Tab Navigation: Overview | Habitat | Diet | Conservation */}
      <div className="p-1 rounded-full glass-panel border border-emerald-700/40 flex items-center justify-between">
        {(['overview', 'habitat', 'diet', 'conservation'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              soundService.playClick();
              if (tab === 'habitat') {
                onNavigate('habitat');
              } else if (tab === 'conservation') {
                onNavigate('conservation');
              } else {
                setActiveTab(tab);
              }
            }}
            className={`flex-1 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
              activeTab === tab
                ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
                : 'text-emerald-300/80 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          {/* About narrative block */}
          <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Overview & Ecology
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {animal.overview}
            </p>
          </div>

          {/* Behaviour & Social Routine */}
          <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
              <Footprints className="w-3.5 h-3.5" />
              Behaviour & Social Traits
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {animal.behaviour}
            </p>
          </div>

          {/* Daily Life Timeline */}
          {animal.dailyTimeline && animal.dailyTimeline.length > 0 && (
            <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Daily Activity Pattern
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {animal.dailyTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-lime-400/90 font-semibold">{item.time}</span>
                      <Footprints className="w-3 h-3 text-emerald-400" />
                    </div>
                    <h5 className="text-xs font-bold text-white">{item.title}</h5>
                    <p className="text-[10px] text-emerald-300/70 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Species & Identification Distinctions */}
          {animal.similarSpecies && animal.similarSpecies.length > 0 && (
            <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                <GitCompare className="w-3.5 h-3.5" />
                Similar Species & Differences
              </h4>
              <div className="space-y-2">
                {animal.similarSpecies.map((sim, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-800/40 text-xs">
                    <span className="font-bold text-white">{sim.name}: </span>
                    <span className="text-emerald-300/80">{sim.distinction}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fun Facts card */}
          {animal.funFacts && animal.funFacts.length > 0 && (
            <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Interesting Facts
              </h4>
              <ul className="space-y-1.5">
                {animal.funFacts.map((fact, idx) => (
                  <li key={idx} className="text-xs text-emerald-200/90 flex items-start gap-2">
                    <span className="text-lime-400 font-bold shrink-0">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scientific References */}
          {animal.scientificReferences && animal.scientificReferences.length > 0 && (
            <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Scientific Sources & References
              </h4>
              <div className="space-y-1.5">
                {animal.scientificReferences.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/40 border border-emerald-800/40 text-xs text-emerald-300 hover:text-lime-300 transition-colors"
                  >
                    <span>{ref.title} ({ref.source})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab Content: Diet direct tab */}
      {activeTab === 'diet' && (
        <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Utensils className="w-4 h-4 text-lime-400" />
            Ecological Feeding & Diet Details
          </h4>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            As a {animal.dietType.toLowerCase()}, {animal.commonName} plays a vital trophic role in its habitat.
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {animal.dietItems.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 flex items-center justify-center text-lime-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">{item.name}</h5>
                  <span className="text-[10px] text-emerald-400/60">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Action Buttons: Scan Another & Compare */}
      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={() => {
            soundService.playClick();
            onScanAnother();
          }}
          className="flex-1 py-3.5 px-4 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-emerald-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-lime-500/30 cursor-pointer"
        >
          <span>Scan Another Animal</span>
        </button>

        <button
          onClick={() => {
            soundService.playClick();
            onNavigate('compare');
          }}
          className="py-3.5 px-4 rounded-full glass-panel hover:bg-emerald-900/40 border border-emerald-600/40 text-emerald-300 font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
        >
          <GitCompare className="w-4 h-4" />
          <span>Compare</span>
        </button>
      </div>
    </div>
  );
};
