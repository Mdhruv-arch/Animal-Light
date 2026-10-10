import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db, getOrCreateDeviceId, validateFirestoreConnection } from './firebase';
import { AnimalProfile } from '../types/wildlife';
import { ANIMAL_INVENTORY, findAnimalById } from '../data/animalInventory';

const STORAGE_KEYS = {
  SCANS: 'animal_light_recent_scans_v2',
  FAVORITES: 'animal_light_favorites_v2',
  SETTINGS: 'animal_light_settings_v2'
};

export interface AppSettings {
  darkMode: boolean;
  reducedMotion: boolean;
  textToSpeech: boolean;
  soundEffects: boolean;
  useLocation: boolean;
  ttsRate: number;
  firestoreSynced?: boolean;
}

const DEFAULT_SETTINGS: AppSettings = {
  darkMode: true,
  reducedMotion: false,
  textToSpeech: true,
  soundEffects: true,
  useLocation: false,
  ttsRate: 1.0,
  firestoreSynced: true
};

export class StorageService {
  private static isInitialized = false;

  // Initialize and seed Firestore collections if needed
  public static async initFirestore(): Promise<void> {
    if (this.isInitialized) return;
    this.isInitialized = true;

    try {
      await validateFirestoreConnection();
      // Light check to seed 30 animals into Firestore if collection is empty
      const animalsSnap = await getDocs(query(collection(db, 'animals'), limit(1)));
      if (animalsSnap.empty) {
        console.log('Seeding initial 30 animals into Firestore...');
        const batch = writeBatch(db);
        ANIMAL_INVENTORY.forEach((animal) => {
          const ref = doc(db, 'animals', animal.id);
          batch.set(ref, {
            ...animal,
            updatedAt: new Date().toISOString()
          });
        });
        await batch.commit();
        console.log('Seeded 30 animals into Firestore successfully.');
      }
    } catch (err) {
      console.warn('Firestore initialization notice (operating with local cache):', err);
    }
  }

  // Real-time subscription to 'scans' collection
  public static subscribeToScans(
    onUpdate: (scans: AnimalProfile[]) => void
  ): () => void {
    const localScans = this.getLocalScans();
    onUpdate(localScans);

    try {
      const q = query(collection(db, 'scans'), orderBy('timestamp', 'desc'), limit(30));
      return onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: AnimalProfile[] = [];
            snapshot.forEach((docSnap) => {
              const data = docSnap.data();
              // Reconstruct AnimalProfile from scan document
              const profile: AnimalProfile = {
                id: docSnap.id,
                commonName: data.commonName || 'Unknown Animal',
                scientificName: data.scientificName || 'Species incertae',
                classification: data.classification || 'Mammal',
                taxonomy: data.taxonomy || {
                  kingdom: 'Animalia',
                  class: data.classification || 'Mammalia',
                  family: 'Information unavailable',
                  species: data.scientificName || 'Information unavailable'
                },
                imageUrl: data.uploadedImageUrl || data.imageUrl || '',
                uploadedImageUrl: data.uploadedImageUrl || '',
                referencePhoto: data.referencePhoto || {
                  url: data.imageUrl || '',
                  source: 'Firestore Archive',
                  attribution: 'Verified Record',
                  isVerified: true
                },
                confidence: data.confidence || 90,
                isAnimal: data.isAnimal !== false,
                visualClues: data.visualClues || [],
                uncertaintyExplanation: data.uncertaintyExplanation || '',
                overview: data.overview || 'Scanned wildlife record synced via Firestore.',
                behaviour: data.behaviour || 'Information unavailable.',
                size: data.size || 'Information unavailable',
                weight: data.weight || 'Information unavailable',
                lifespan: data.lifespan || 'Information unavailable',
                dietType: data.dietType || 'Omnivore',
                dietItems: data.dietItems || [{ name: 'Forage', type: 'Wild', icon: 'grass' }],
                dailyTimeline: data.dailyTimeline || [],
                habitatSummary: data.habitatSummary || 'Natural wilderness reserves.',
                geographicDistribution: data.geographicDistribution || ['Global'],
                nativeRegions: data.nativeRegions || ['Worldwide'],
                coordinates: data.coordinates || { lat: 0, lng: 0, zoom: 4 },
                quickFacts: data.quickFacts || [],
                conservation: data.conservation || {
                  status: 'Least Concern',
                  code: 'LC',
                  source: 'IUCN Red List',
                  lastVerified: '2024',
                  populationEstimate: 'Stable',
                  populationTrend: 'Stable',
                  trendData: [1000, 1000],
                  threats: [],
                  actions: []
                },
                verifiedParks: data.verifiedParks || [],
                funFacts: data.funFacts || [],
                scientificReferences: data.scientificReferences || [],
                similarSpecies: data.similarSpecies || [],
                scannedAt: data.scannedAt || 'Synced scan',
                isFavorite: Boolean(data.isFavorite)
              };
              list.push(profile);
            });
            // Update local cache and notify listener
            this.saveLocalScans(list);
            onUpdate(list);
          }
        },
        (error) => {
          console.warn('Real-time scans listener fallback:', error.message);
        }
      );
    } catch {
      return () => {};
    }
  }

  // Real-time subscription to 'favorites' collection
  public static subscribeToFavorites(
    onUpdate: (favorites: AnimalProfile[]) => void
  ): () => void {
    const localFavs = this.getLocalFavorites();
    onUpdate(localFavs);

    try {
      const q = query(collection(db, 'favorites'), orderBy('createdAt', 'desc'));
      return onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const favIds = new Set<string>();
            snapshot.forEach((d) => {
              const data = d.data();
              if (data.animalId) favIds.add(data.animalId);
            });

            // Mark local scans with favorite status
            const currentScans = this.getLocalScans().map((s) => ({
              ...s,
              isFavorite: favIds.has(s.id) || favIds.has(s.commonName.toLowerCase())
            }));
            this.saveLocalScans(currentScans);

            const favList = currentScans.filter((s) => s.isFavorite);
            onUpdate(favList);
          }
        },
        (error) => {
          console.warn('Real-time favorites listener fallback:', error.message);
        }
      );
    } catch {
      return () => {};
    }
  }

  // Real-time subscription to 'animals' knowledge collection
  public static subscribeToAnimals(
    onUpdate: (animals: AnimalProfile[]) => void
  ): () => void {
    onUpdate(ANIMAL_INVENTORY);

    try {
      const colRef = collection(db, 'animals');
      return onSnapshot(
        colRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: AnimalProfile[] = [];
            snapshot.forEach((d) => {
              list.push(d.data() as AnimalProfile);
            });
            onUpdate(list);
          }
        },
        (err) => {
          console.warn('Animals collection listener notice:', err.message);
        }
      );
    } catch {
      return () => {};
    }
  }

  // Add scan to both Firestore 'scans' collection and local state
  public static async addScan(animal: AnimalProfile): Promise<AnimalProfile[]> {
    const localUpdated = this.addLocalScan(animal);

    // Save to Firestore 'scans' collection
    try {
      const deviceId = getOrCreateDeviceId();
      const scanDocRef = doc(db, 'scans', animal.id);
      await setDoc(scanDocRef, {
        id: animal.id,
        userId: deviceId,
        commonName: animal.commonName,
        scientificName: animal.scientificName,
        classification: animal.classification,
        confidence: animal.confidence,
        isAnimal: animal.isAnimal,
        visualClues: animal.visualClues || [],
        uncertaintyExplanation: animal.uncertaintyExplanation || '',
        uploadedImageUrl: animal.uploadedImageUrl || animal.imageUrl || '',
        referencePhoto: animal.referencePhoto || null,
        scannedAt: animal.scannedAt || 'Just now',
        timestamp: Date.now(),
        overview: animal.overview || '',
        size: animal.size || '',
        weight: animal.weight || '',
        lifespan: animal.lifespan || '',
        dietType: animal.dietType || '',
        habitatSummary: animal.habitatSummary || '',
        conservation: animal.conservation || null
      });
    } catch (err) {
      console.warn('Firestore scan save failed, stored in localStorage:', err);
    }

    return localUpdated;
  }

  // Toggle favorite in both Firestore 'favorites' collection and local state
  public static async toggleFavorite(
    animalId: string,
    currentAnimal?: AnimalProfile
  ): Promise<{ updated: AnimalProfile[]; isFavorite: boolean }> {
    const { updated, isFavorite } = this.toggleLocalFavorite(animalId, currentAnimal);

    // Sync with Firestore 'favorites' collection
    try {
      const deviceId = getOrCreateDeviceId();
      const favDocId = `${deviceId}_${animalId}`.replace(/[^a-zA-Z0-9_-]/g, '_');
      const favRef = doc(db, 'favorites', favDocId);

      if (isFavorite) {
        const animalData = currentAnimal || findAnimalById(animalId);
        await setDoc(favRef, {
          id: favDocId,
          userId: deviceId,
          animalId: animalId,
          commonName: animalData?.commonName || animalId,
          scientificName: animalData?.scientificName || '',
          classification: animalData?.classification || 'Mammal',
          imageUrl: animalData?.referencePhoto?.url || animalData?.imageUrl || '',
          createdAt: Date.now()
        });
      } else {
        await deleteDoc(favRef);
      }
    } catch (err) {
      console.warn('Firestore favorite toggle sync failed, stored in localStorage:', err);
    }

    return { updated, isFavorite };
  }

  // Local storage helpers
  public static getScans(): AnimalProfile[] {
    return this.getLocalScans();
  }

  public static getFavorites(): AnimalProfile[] {
    return this.getLocalFavorites();
  }

  private static getLocalScans(): AnimalProfile[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SCANS);
      if (!data) {
        const initial = ANIMAL_INVENTORY.slice(0, 5).map((a, idx) => ({
          ...a,
          scannedAt: idx === 0 ? 'Today, 10:24 AM' : idx === 1 ? 'Yesterday, 3:12 PM' : 'Recent record',
          isFavorite: idx === 0 || idx === 1
        }));
        this.saveLocalScans(initial);
        return initial;
      }
      return JSON.parse(data);
    } catch {
      return ANIMAL_INVENTORY.slice(0, 5);
    }
  }

  private static saveLocalScans(scans: AnimalProfile[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SCANS, JSON.stringify(scans));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  private static addLocalScan(animal: AnimalProfile): AnimalProfile[] {
    const existing = this.getLocalScans();
    const filtered = existing.filter(
      (item) => item.id !== animal.id && item.commonName !== animal.commonName
    );
    const updated = [animal, ...filtered].slice(0, 40);
    this.saveLocalScans(updated);
    return updated;
  }

  private static toggleLocalFavorite(
    animalId: string,
    currentAnimal?: AnimalProfile
  ): { updated: AnimalProfile[]; isFavorite: boolean } {
    const scans = this.getLocalScans();
    let newFavState = false;
    let found = false;

    const updated = scans.map((item) => {
      if (item.id === animalId || (currentAnimal && item.commonName === currentAnimal.commonName)) {
        found = true;
        newFavState = !item.isFavorite;
        return { ...item, isFavorite: newFavState };
      }
      return item;
    });

    if (!found && currentAnimal) {
      newFavState = true;
      updated.unshift({ ...currentAnimal, isFavorite: true });
    }

    this.saveLocalScans(updated);
    return { updated, isFavorite: newFavState };
  }

  private static getLocalFavorites(): AnimalProfile[] {
    return this.getLocalScans().filter((item) => item.isFavorite);
  }

  public static async clearHistory(): Promise<void> {
    try {
      localStorage.removeItem(STORAGE_KEYS.SCANS);
    } catch {}
  }

  public static getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  }

  public static saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch {}
  }
}
