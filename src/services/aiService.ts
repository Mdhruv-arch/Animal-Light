import { AnimalProfile, CandidateMatch } from '../types/wildlife';
import { ANIMAL_INVENTORY, findAnimalById, matchAnimalFromInventory } from '../data/animalInventory';

export interface ScanAnalysisResult {
  success: boolean;
  isAnimal: boolean;
  rejectionMessage?: string;
  nonAnimalCategory?: string;
  isBlurryOrLowQuality?: boolean;
  multipleAnimalsDetected?: boolean;
  profile?: AnimalProfile;
  candidates?: CandidateMatch[];
  matchedInventory?: boolean;
  error?: string;
}

export class AIService {
  public static async identifyImage(
    imageDataUrl: string,
    mimeType: string = 'image/jpeg'
  ): Promise<ScanAnalysisResult> {
    if (!imageDataUrl || imageDataUrl.length < 50) {
      return {
        success: false,
        isAnimal: false,
        error: 'No valid image data provided for scanning.'
      };
    }

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: imageDataUrl,
          mimeType
        })
      });

      const json = await response.json();

      if (!response.ok || !json.success) {
        return {
          success: false,
          isAnimal: false,
          error: json.error || 'Server identification failed.'
        };
      }

      const data = json.data;

      // Check if image does NOT contain an animal
      if (!data.isAnimal) {
        return {
          success: true,
          isAnimal: false,
          nonAnimalCategory: data.nonAnimalCategory || 'object',
          rejectionMessage:
            data.rejectionMessage ||
            'No identifiable animal detected. Please upload a clear animal photo.'
        };
      }

      const best = data.bestMatch || {};
      const candidates: CandidateMatch[] = data.candidates || [];
      const inventoryId = best.inventoryId;

      // Attempt matching against the 30-animal knowledge inventory
      let matchedRecord = inventoryId ? findAnimalById(inventoryId) : undefined;
      if (!matchedRecord && best.commonName) {
        matchedRecord = matchAnimalFromInventory(best.commonName);
      }

      let profile: AnimalProfile;

      if (matchedRecord) {
        // Matched verified database record
        profile = {
          ...matchedRecord,
          id: `${matchedRecord.id}-${Date.now()}`,
          uploadedImageUrl: imageDataUrl,
          // By default, show user's uploaded photo as active, but maintain verified reference photo
          imageUrl: imageDataUrl,
          referencePhoto: matchedRecord.referencePhoto,
          confidence: typeof best.confidence === 'number' ? best.confidence : matchedRecord.confidence,
          visualClues: best.visualClues && best.visualClues.length > 0
            ? best.visualClues
            : matchedRecord.visualClues,
          uncertaintyExplanation: best.uncertaintyExplanation || matchedRecord.uncertaintyExplanation,
          candidates: candidates.length > 0 ? candidates : undefined,
          scannedAt: 'Just now',
          isFavorite: false
        };
      } else {
        // Species not in pre-seeded 30 (e.g. koala, red panda, ocelot)
        profile = {
          id: (best.commonName || 'specimen').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
          commonName: best.commonName || 'Unidentified Species',
          scientificName: best.scientificName || 'Taxa incertae sedis',
          taxonomy: {
            kingdom: 'Animalia',
            class: best.classification || 'Mammalia',
            family: 'Information unavailable',
            species: best.scientificName || 'Information unavailable'
          },
          imageUrl: imageDataUrl,
          uploadedImageUrl: imageDataUrl,
          referencePhoto: {
            url: '',
            source: 'Database',
            attribution: 'Photo unavailable in local database',
            isVerified: false
          },
          confidence: typeof best.confidence === 'number' ? best.confidence : 75,
          isAnimal: true,
          classification: best.classification || 'Fauna',
          visualClues: best.visualClues || ['Observable biological morphology'],
          uncertaintyExplanation: best.uncertaintyExplanation || 'Dynamic AI taxonomic identification.',
          overview: best.overview || 'Species profile generated via biological vision analysis.',
          behaviour: best.behaviour || 'Information unavailable.',
          size: best.size || 'Information unavailable',
          weight: best.weight || 'Information unavailable',
          lifespan: best.lifespan || 'Information unavailable',
          dietType: best.dietType || 'Omnivore',
          dietItems: best.dietItems || [{ name: 'Natural Forage', type: 'Diet', icon: 'grass' }],
          dailyTimeline: best.dailyTimeline || [{ time: 'Day', title: 'Activity', desc: 'Natural foraging cycle', icon: 'forage' }],
          habitatSummary: best.habitatSummary || 'Natural terrestrial or aquatic wilderness zones.',
          geographicDistribution: best.geographicDistribution || ['Global range'],
          nativeRegions: best.nativeRegions || ['Worldwide'],
          coordinates: best.coordinates || { lat: 0, lng: 0, zoom: 3 },
          quickFacts: best.quickFacts || ['Morphologically verified by AI vision'],
          conservation: best.conservation || {
            status: 'Data Deficient',
            code: 'DD',
            source: 'IUCN Red List',
            lastVerified: '2024',
            populationEstimate: 'Information unavailable',
            populationTrend: 'Stable',
            trendData: [1000, 1000],
            threats: [{ title: 'Habitat Loss', desc: 'Regional ecosystem disruption' }],
            actions: [{ title: 'Habitat Conservation', desc: 'Protect native biomes' }]
          },
          verifiedParks: best.verifiedParks || [],
          funFacts: best.funFacts || ['Contributes to regional ecological biodiversity balance.'],
          scientificReferences: best.scientificReferences || [],
          similarSpecies: best.similarSpecies || [],
          candidates: candidates.length > 0 ? candidates : undefined,
          scannedAt: 'Just now',
          isFavorite: false
        };
      }

      return {
        success: true,
        isAnimal: true,
        isBlurryOrLowQuality: Boolean(data.isBlurryOrLowQuality),
        multipleAnimalsDetected: Boolean(data.multipleAnimalsDetected),
        profile,
        candidates,
        matchedInventory: Boolean(matchedRecord)
      };
    } catch (err: any) {
      console.error('Scan service error:', err);
      return {
        success: false,
        isAnimal: false,
        error: err?.message || 'Network connection failed during species scanning.'
      };
    }
  }

  // Text-To-Speech implementation
  public static speakAnimalDescription(animal: AnimalProfile, rate: number = 1.0): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const textToRead = `${animal.commonName}. Scientific name: ${animal.scientificName}. Class: ${animal.classification}. Conservation status: ${animal.conservation.status}. ${animal.overview} Diet: ${animal.dietType}. Average lifespan: ${animal.lifespan}.`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.lang.startsWith('en')) && !v.name.includes('Bad')
    );
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  public static stopSpeech(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}
