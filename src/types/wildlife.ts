export type ConservationCode = 'CR' | 'EN' | 'VU' | 'NT' | 'LC' | 'DD';

export interface DietItem {
  name: string;
  type: string;
  icon: 'deer' | 'boar' | 'buffalo' | 'fish' | 'grass' | 'fruit' | 'insect' | 'meat' | 'default';
}

export interface DailyActivity {
  time: string;
  title: string;
  desc: string;
  icon: 'hunt' | 'rest' | 'roam' | 'mate' | 'forage';
}

export interface VerifiedPark {
  name: string;
  location: string;
  highlight: string;
  lat: number;
  lng: number;
  distanceKm?: number;
}

export interface ScientificReference {
  title: string;
  source: string;
  url: string;
}

export interface SimilarSpecies {
  name: string;
  scientificName?: string;
  distinction: string;
}

export interface ConservationInfo {
  status: string; // e.g. "Endangered", "Vulnerable", "Least Concern"
  code: ConservationCode;
  badgeColor?: string;
  source: string;
  lastVerified: string; // e.g. "2024" or "Information unavailable"
  populationEstimate: string;
  populationTrend: 'Decreasing' | 'Stable' | 'Increasing';
  trendData: number[]; // Points for the population graph
  threats: {
    title: string;
    desc: string;
  }[];
  actions: {
    title: string;
    desc: string;
  }[];
}

export interface PhotoRecord {
  url: string;
  source: string;
  attribution: string;
  isVerified: boolean;
}

export interface TaxonomyInfo {
  kingdom: string; // "Animalia"
  class: string;   // "Mammalia", "Aves", "Reptilia", "Actinopterygii", etc.
  family: string;  // e.g. "Felidae", "Canidae", etc.
  species: string; // e.g. "Panthera tigris", "Canis lupus familiaris"
}

export interface CandidateMatch {
  species: string;
  scientificName: string;
  confidence: number;
  matchedInventoryId?: string;
  visualClues: string[];
}

export interface AnimalProfile {
  id: string;
  commonName: string;
  scientificName: string;
  taxonomy: TaxonomyInfo;
  
  // Separation of uploaded photo vs database reference photo
  imageUrl: string; // Active display image (uploaded photo if scanned, or reference)
  uploadedImageUrl?: string; // Explicit user photo if from scan
  referencePhoto: PhotoRecord; // Verified database reference photo
  
  confidence: number;
  isAnimal: boolean;
  classification: string; // Human-friendly class e.g. "Mammal", "Bird", "Reptile", "Fish"
  visualClues: string[]; // Specific markings, fur, ears, beak, tail, etc.
  uncertaintyExplanation?: string;
  
  overview: string;
  behaviour: string;
  size: string;
  weight: string;
  lifespan: string;
  dietType: 'Carnivore' | 'Herbivore' | 'Omnivore' | 'Piscivore' | 'Insectivore';
  dietItems: DietItem[];
  dailyTimeline: DailyActivity[];
  
  habitatSummary: string;
  geographicDistribution: string[];
  nativeRegions: string[];
  coordinates: {
    lat: number;
    lng: number;
    zoom: number;
  };
  
  quickFacts: string[];
  conservation: ConservationInfo;
  verifiedParks: VerifiedPark[];
  funFacts: string[];
  scientificReferences: ScientificReference[];
  similarSpecies: SimilarSpecies[];
  
  // Alternative candidate species when uncertain
  candidates?: CandidateMatch[];
  
  scannedAt?: string;
  isFavorite?: boolean;
}

export type AppScreen = 
  | 'splash'
  | 'home'
  | 'inventory' // Full database catalog browser
  | 'scanning'
  | 'result'
  | 'habitat'
  | 'conservation'
  | 'compare'
  | 'collection'
  | 'settings'
  | 'uncertain';
