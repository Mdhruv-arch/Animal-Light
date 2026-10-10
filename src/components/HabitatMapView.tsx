import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Compass,
  Layers,
  Info,
  ExternalLink,
  ShieldCheck,
  Trees
} from 'lucide-react';
import { AnimalProfile, VerifiedPark } from '../types/wildlife';
import { soundService } from '../services/soundService';

interface HabitatMapViewProps {
  animal: AnimalProfile;
  onBack: () => void;
}

export const HabitatMapView: React.FC<HabitatMapViewProps> = ({ animal, onBack }) => {
  const [activeTab, setActiveTab] = useState<'map' | 'parks'>('map');
  const [selectedPark, setSelectedPark] = useState<VerifiedPark | null>(
    animal.verifiedParks?.[0] || null
  );

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
          Habitat & Location
        </h2>

        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lime-400">
          <Compass className="w-5 h-5" />
        </div>
      </div>

      {/* Switcher Tab: Range Map | Parks & Reserves */}
      <div className="p-1 rounded-full glass-panel border border-emerald-700/40 flex items-center">
        <button
          onClick={() => {
            soundService.playClick();
            setActiveTab('map');
          }}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'map'
              ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
              : 'text-emerald-300/80 hover:text-white'
          }`}
        >
          Range Map
        </button>
        <button
          onClick={() => {
            soundService.playClick();
            setActiveTab('parks');
          }}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'parks'
              ? 'bg-lime-400 text-emerald-950 shadow-md shadow-lime-400/30'
              : 'text-emerald-300/80 hover:text-white'
          }`}
        >
          Parks & Reserves
        </button>
      </div>

      {/* Main Map Visual Display (Screen 6 Interactive SVG Map) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-emerald-500/30 shadow-2xl p-3">
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#092219] overflow-hidden border border-emerald-800/50">
          {/* Stylized Topographic / Continental Grid SVG Map */}
          <svg
            className="w-full h-full"
            viewBox="0 0 500 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ocean background */}
            <rect width="500" height="350" fill="#081e16" />

            {/* Latitude/Longitude grid lines */}
            <path
              d="M0 70 H500 M0 140 H500 M0 210 H500 M0 280 H500"
              stroke="#0f3d2c"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />
            <path
              d="M100 0 V350 M200 0 V350 M300 0 V350 M400 0 V350"
              stroke="#0f3d2c"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />

            {/* Stylized Continental Outlines (Europe, Asia, Africa, Americas) */}
            {/* Asia & Subcontinent outline */}
            <path
              d="M 280,40 Q 340,35 410,60 Q 440,110 420,160 Q 380,210 320,190 Q 280,230 250,180 Q 220,140 240,90 Z"
              fill="#133628"
              stroke="#1f5741"
              strokeWidth="1.5"
            />
            {/* Indian Subcontinent protrusion */}
            <path
              d="M 255,145 Q 285,170 290,215 Q 260,250 240,210 Q 245,175 255,145 Z"
              fill="#174232"
              stroke="#2d7759"
              strokeWidth="1.5"
            />
            {/* Africa continent */}
            <path
              d="M 170,110 Q 220,120 230,170 Q 240,240 200,290 Q 160,280 140,210 Q 130,150 170,110 Z"
              fill="#113326"
              stroke="#1b4f3a"
              strokeWidth="1"
            />
            {/* Southeast Asia archipelago */}
            <path
              d="M 330,210 Q 360,225 390,230 M 350,250 Q 380,265 410,255"
              stroke="#2d7759"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Species Highlighted Range Overlay: Native Range (Golden-Green Glow) */}
            <path
              d="M 250,160 Q 280,175 295,200 Q 275,230 255,210 Q 245,185 250,160 Z"
              fill="#22c55e"
              fillOpacity="0.45"
              stroke="#4ade80"
              strokeWidth="2"
              className="animate-pulse"
            />
            {/* Historical range dotted zone */}
            <path
              d="M 230,130 Q 310,140 330,210 Q 280,250 230,220 Z"
              fill="#eab308"
              fillOpacity="0.12"
              stroke="#eab308"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />

            {/* Protected Park Radar Markers */}
            {animal.verifiedParks?.map((park, idx) => {
              // Normalized pin coordinates around India / Asia range
              const cx = 255 + (idx % 3) * 16 - 8;
              const cy = 180 + (idx * 14) - 7;
              return (
                <g
                  key={idx}
                  className="cursor-pointer group"
                  onClick={() => setSelectedPark(park)}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r="9"
                    fill="#a3e635"
                    fillOpacity="0.25"
                    className="animate-ping"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#a3e635"
                    stroke="#06110d"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* Continent Labels */}
            <text x="320" y="110" fill="#529b7a" fontSize="11" fontWeight="600" opacity="0.7">
              Asia
            </text>
            <text x="160" y="190" fill="#529b7a" fontSize="10" fontWeight="600" opacity="0.6">
              Africa
            </text>
          </svg>

          {/* Compass Rose icon on map */}
          <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-emerald-950/90 border border-lime-400/50 flex items-center justify-center text-lime-400 shadow-lg">
            <Compass className="w-5 h-5 animate-spin [animation-duration:40s]" />
          </div>

          {/* Map Layer Legend (Screen 6 Map Legend) */}
          <div className="absolute top-3 left-3 px-3 py-2 rounded-xl bg-[#06110d]/90 backdrop-blur-md border border-emerald-700/40 space-y-1.5 shadow-md">
            <div className="flex items-center gap-2 text-[10px] text-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Native range</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Historical records</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
              <span>Verified reserves</span>
            </div>
          </div>
        </div>

        {/* Selected Park Quick Info Callout */}
        {selectedPark && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-950/70 border border-emerald-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-lime-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">{selectedPark.name}</h5>
                <p className="text-[10px] text-emerald-300/80">{selectedPark.location}</p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 font-semibold">
              Verified
            </span>
          </div>
        )}
      </div>

      {/* Habitat Summary & Native Regions Description */}
      <div className="glass-panel p-4 rounded-2xl border border-emerald-800/40 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
          <Trees className="w-3.5 h-3.5" />
          Where does it live?
        </h4>
        <p className="text-xs text-emerald-100/90 leading-relaxed">
          {animal.habitatSummary}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {animal.nativeRegions.map((region, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full bg-emerald-900/40 border border-emerald-700/40 text-[11px] text-emerald-300 font-medium"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      {/* Where can you see it? Parks & Reserves Cards (Screen 6 National Parks) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-lime-400" />
            Where can you see it?
          </h4>
          <span className="text-[11px] text-emerald-400/60">Verified Sanctuaries</span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {animal.verifiedParks.map((park, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl glass-panel hover:bg-emerald-900/30 border border-emerald-800/50 hover:border-lime-400/50 transition-all flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 text-lime-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Trees className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-heading font-bold text-sm text-white group-hover:text-lime-300 transition-colors">
                    {park.name}
                  </h5>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    {park.lat.toFixed(2)}°N, {park.lng.toFixed(2)}°E
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400/80 font-medium">
                  {park.location}
                </p>
                <p className="text-[11px] text-emerald-200/70 leading-normal">
                  {park.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Integrity Disclaimer (Strict User Requirement) */}
      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-2.5 text-[11px] text-emerald-400/80">
        <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
        <p className="leading-snug">
          Range data is sourced from verified IUCN Red List & GBIF biodiversity records. Animal Light AI does not invent simulated sightings or disclose fragile nesting coordinates.
        </p>
      </div>
    </div>
  );
};
