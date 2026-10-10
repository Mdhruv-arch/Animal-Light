import React, { useState } from 'react';
import {
  ArrowLeft,
  Moon,
  Sparkles,
  Volume2,
  Bell,
  MapPin,
  Info,
  Share2,
  Star,
  CheckCircle2,
  Cpu,
  Key,
  ShieldCheck
} from 'lucide-react';
import { AppSettings, StorageService } from '../services/storageService';
import { soundService } from '../services/soundService';

interface SettingsModalProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onBack: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  onUpdateSettings,
  onBack
}) => {
  const [showApiGuide, setShowApiGuide] = useState<boolean>(false);
  const [rated, setRated] = useState<boolean>(false);

  const toggle = (key: keyof AppSettings) => {
    soundService.playClick();
    const updated = { ...settings, [key]: !settings[key] };
    onUpdateSettings(updated);
    if (key === 'soundEffects') {
      soundService.enabled = Boolean(updated.soundEffects);
    }
  };

  const handleShare = async () => {
    soundService.playClick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Animal Light AI',
          text: 'Identify animals and discover their world with Animal Light AI!',
          url: window.location.href
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
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
          Settings
        </h2>

        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lime-400">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      {/* App Settings Group (Screen 10) */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/80 px-1">
          App Settings
        </h4>

        <div className="glass-panel rounded-2xl border border-emerald-800/40 p-4 divide-y divide-emerald-900/60 space-y-3">
          {/* Dark Mode */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center">
                <Moon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Dark Mode</span>
            </div>
            <button
              onClick={() => toggle('darkMode')}
              aria-label="Toggle dark mode"
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.darkMode ? 'bg-lime-400' : 'bg-emerald-950 border border-emerald-700'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-[#06110d] transition-transform ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Reduced Motion</span>
            </div>
            <button
              onClick={() => toggle('reducedMotion')}
              aria-label="Toggle reduced motion"
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.reducedMotion ? 'bg-lime-400' : 'bg-emerald-950 border border-emerald-700'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-[#06110d] transition-transform ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Text-to-Speech */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center">
                <Volume2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Text-to-Speech</span>
            </div>
            <button
              onClick={() => toggle('textToSpeech')}
              aria-label="Toggle text to speech"
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.textToSpeech ? 'bg-lime-400' : 'bg-emerald-950 border border-emerald-700'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-[#06110d] transition-transform ${
                  settings.textToSpeech ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Sound Effects */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Sound Effects</span>
            </div>
            <button
              onClick={() => toggle('soundEffects')}
              aria-label="Toggle sound effects"
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.soundEffects ? 'bg-lime-400' : 'bg-emerald-950 border border-emerald-700'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-[#06110d] transition-transform ${
                  settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/80 px-1">
          Location
        </h4>
        <div className="glass-panel rounded-2xl border border-emerald-800/40 p-4 flex items-center justify-between">
          <div className="space-y-0.5 pr-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lime-400" />
              <h5 className="text-xs font-bold text-white">Use My Location</h5>
            </div>
            <p className="text-[10px] text-emerald-300/70">
              Allow location access for nearby parks and regions (optional)
            </p>
          </div>
          <button
            onClick={() => {
              if (!settings.useLocation && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  () => toggle('useLocation'),
                  () => alert('Location permission was denied by browser.')
                );
              } else {
                toggle('useLocation');
              }
            }}
            aria-label="Toggle use location"
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              settings.useLocation ? 'bg-lime-400' : 'bg-emerald-950 border border-emerald-700'
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-[#06110d] transition-transform ${
                settings.useLocation ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/80 px-1">
          About & Verification
        </h4>

        <div className="glass-panel rounded-2xl border border-emerald-800/40 p-4 divide-y divide-emerald-900/60 space-y-2.5">
          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="text-emerald-300/90 font-medium">App Version</span>
            <span className="text-white font-bold">1.0.0</span>
          </div>

          <div
            onClick={() => setShowApiGuide(!showApiGuide)}
            className="flex items-center justify-between pt-2.5 text-xs cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 text-emerald-300 group-hover:text-lime-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Model Engine</span>
            </div>
            <span className="text-lime-400 font-semibold text-[11px] group-hover:underline">
              Gemini 2.5 Flash
            </span>
          </div>

          <div className="flex items-center justify-between pt-2.5 text-xs">
            <span className="text-emerald-300/90 font-medium">Data Sources</span>
            <span className="text-emerald-400 text-[11px] font-semibold">
              IUCN Red List & GBIF
            </span>
          </div>
        </div>

        {/* Expandable setup & environment variable guide */}
        {showApiGuide && (
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-600/40 text-xs text-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-lime-400 font-bold">
              <Key className="w-4 h-4" />
              <span>Environment & API Key Setup</span>
            </div>
            <p className="leading-relaxed text-emerald-300/90">
              Animal Light AI uses server-side multimodal image analysis powered by Google's <code className="text-lime-300">gemini-3.8-flash</code> model.
            </p>
            <div className="bg-[#05110c] p-2.5 rounded-xl border border-emerald-800 font-mono text-[11px] text-emerald-300">
              GEMINI_API_KEY=&quot;MY_GEMINI_API_KEY&quot;
            </div>
            <p className="text-[11px] text-emerald-400/80">
              In AI Studio Build, the key is automatically attached in the server environment from the Secrets panel. If no key is attached, the app gracefully demonstrates sample animal analysis without interruption.
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons: Share App & Rate Us */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={handleShare}
          className="p-3.5 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center gap-2 text-xs font-bold text-white transition-all cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-lime-400" />
          <span>Share App</span>
        </button>

        <button
          onClick={() => {
            soundService.playClick();
            setRated(true);
            setTimeout(() => setRated(false), 3000);
          }}
          className="p-3.5 rounded-2xl glass-panel hover:bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center gap-2 text-xs font-bold text-white transition-all cursor-pointer"
        >
          <Star className={`w-4 h-4 ${rated ? 'text-amber-400 fill-amber-400' : 'text-lime-400'}`} />
          <span>{rated ? 'Thank you!' : 'Rate Us'}</span>
        </button>
      </div>
    </div>
  );
};
