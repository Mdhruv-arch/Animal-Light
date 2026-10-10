import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AnimalProfile, AppScreen, CandidateMatch } from './types/wildlife';
import { ANIMAL_INVENTORY, findAnimalById } from './data/animalInventory';
import { StorageService, AppSettings } from './services/storageService';
import { AIService } from './services/aiService';
import { soundService } from './services/soundService';

import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { InventoryBrowser } from './components/InventoryBrowser';
import { ScanningView } from './components/ScanningView';
import { AnimalResultView } from './components/AnimalResultView';
import { HabitatMapView } from './components/HabitatMapView';
import { ConservationView } from './components/ConservationView';
import { CompareView } from './components/CompareView';
import { CollectionModal } from './components/CollectionModal';
import { SettingsModal } from './components/SettingsModal';
import { UncertainResultView } from './components/UncertainResultView';
import { CameraCaptureModal } from './components/CameraCaptureModal';
import { DrawerMenu } from './components/DrawerMenu';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('splash');
  const [scans, setScans] = useState<AnimalProfile[]>([]);
  const [currentAnimal, setCurrentAnimal] = useState<AnimalProfile | null>(null);
  const [selectedImageForScan, setSelectedImageForScan] = useState<string | null>(null);
  const [isScanningActive, setIsScanningActive] = useState<boolean>(false);
  const [scanErrorMessage, setScanErrorMessage] = useState<string | null>(null);

  const [uncertainDetails, setUncertainDetails] = useState<{
    imageUrl: string;
    isNonAnimal?: boolean;
    rejectionMessage?: string;
    explanation?: string;
    confidence?: number;
    candidates?: CandidateMatch[];
  } | null>(null);

  const [isCameraModalOpen, setIsCameraModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<AppSettings>(StorageService.getSettings());

  // Initialize Firestore and subscribe to real-time scans
  useEffect(() => {
    StorageService.initFirestore();

    const unsubScans = StorageService.subscribeToScans((realtimeScans) => {
      setScans(realtimeScans);
      if (realtimeScans.length > 0 && !currentAnimal) {
        setCurrentAnimal(realtimeScans[0]);
      }
    });

    const unsubFavs = StorageService.subscribeToFavorites(() => {
      // Re-trigger re-render for favorites updates
      setScans((prev) => [...prev]);
    });

    soundService.enabled = settings.soundEffects;

    return () => {
      unsubScans();
      unsubFavs();
    };
  }, []);

  const favoritesCount = scans.filter((s) => s.isFavorite).length;

  const handleUpdateSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    StorageService.saveSettings(newSettings);
  };

  // Real Animal Image Scanning Workflow
  const processImageScan = async (imageDataUrl: string, presetAnimal?: AnimalProfile) => {
    setSelectedImageForScan(imageDataUrl);
    setScanErrorMessage(null);
    setIsScanningActive(true);
    setScreen('scanning');

    // Natural radar animation pacing
    const minDelay = new Promise((resolve) => setTimeout(resolve, 2400));

    try {
      if (presetAnimal) {
        // Direct preset selection from verified inventory
        await minDelay;
        const profileWithScan = {
          ...presetAnimal,
          id: `${presetAnimal.id}-${Date.now()}`,
          uploadedImageUrl: imageDataUrl,
          imageUrl: imageDataUrl,
          scannedAt: 'Just now'
        };
        const updatedScans = await StorageService.addScan(profileWithScan);
        setScans(updatedScans);
        setCurrentAnimal(profileWithScan);
        setIsScanningActive(false);
        setScreen('result');

        soundService.playSuccessChime();
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#a3e635', '#34d399', '#22c55e']
          });
        } catch {}
        return;
      }

      // Live AI call to backend
      const [aiResponse] = await Promise.all([
        AIService.identifyImage(imageDataUrl),
        minDelay
      ]);

      if (!aiResponse.success) {
        // Server or network error: report honestly rather than inventing a default animal!
        setIsScanningActive(false);
        setScanErrorMessage(
          aiResponse.error || 'Species identification encountered a service error.'
        );
        return;
      }

      // Check if image was determined NOT to be an animal (chair, person, food, etc.)
      if (!aiResponse.isAnimal) {
        setIsScanningActive(false);
        setUncertainDetails({
          imageUrl: imageDataUrl,
          isNonAnimal: true,
          rejectionMessage:
            aiResponse.rejectionMessage ||
            'No identifiable animal detected. Please upload a clear animal photo.',
          confidence: 0
        });
        setScreen('uncertain');
        return;
      }

      // Photo IS an animal: check confidence & clarity
      if (
        aiResponse.isBlurryOrLowQuality ||
        (aiResponse.profile && aiResponse.profile.confidence < 45)
      ) {
        setIsScanningActive(false);
        setUncertainDetails({
          imageUrl: imageDataUrl,
          isNonAnimal: false,
          explanation:
            aiResponse.profile?.uncertaintyExplanation ||
            'The photo is blurry or the animal is partially obscured.',
          confidence: aiResponse.profile?.confidence || 35,
          candidates: aiResponse.candidates
        });
        setScreen('uncertain');
        return;
      }

      // Identification succeeded!
      if (aiResponse.profile) {
        const profile = aiResponse.profile;
        const updatedScans = await StorageService.addScan(profile);
        setScans(updatedScans);
        setCurrentAnimal(profile);
        setIsScanningActive(false);
        setScreen('result');

        soundService.playSuccessChime();
        try {
          confetti({
            particleCount: 55,
            spread: 65,
            origin: { y: 0.7 },
            colors: ['#a3e635', '#34d399', '#22c55e']
          });
        } catch {}
      }
    } catch (err: any) {
      console.error('Scan workflow exception:', err);
      setIsScanningActive(false);
      setScanErrorMessage('An unexpected error occurred during image processing.');
    }
  };

  // Upload image handler
  const handleSelectImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        processImageScan(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Sample animal selector
  const handleSelectSample = (sample: AnimalProfile) => {
    processImageScan(sample.referencePhoto.url || sample.imageUrl, sample);
  };

  // Favorite toggle handler (syncs across scans and active view)
  const handleToggleFavorite = async (id: string) => {
    const { updated, isFavorite } = await StorageService.toggleFavorite(id, currentAnimal || undefined);
    setScans(updated);
    if (currentAnimal && (currentAnimal.id === id || currentAnimal.commonName === currentAnimal.commonName)) {
      setCurrentAnimal({ ...currentAnimal, isFavorite });
    }
  };

  const handleClearHistory = () => {
    StorageService.clearHistory();
    setScans([]);
  };

  // Candidate selection from uncertain view
  const handleSelectCandidate = async (cand: CandidateMatch) => {
    const matched = cand.matchedInventoryId
      ? findAnimalById(cand.matchedInventoryId)
      : undefined;

    if (matched) {
      const profile: AnimalProfile = {
        ...matched,
        uploadedImageUrl: selectedImageForScan || undefined,
        imageUrl: selectedImageForScan || matched.imageUrl,
        confidence: cand.confidence,
        visualClues: cand.visualClues,
        scannedAt: 'Just now'
      };
      const updatedScans = await StorageService.addScan(profile);
      setScans(updatedScans);
      setCurrentAnimal(profile);
      setScreen('result');
    } else {
      // Open inventory browser
      setScreen('inventory');
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#06110d] text-emerald-50 selection:bg-lime-400 selection:text-black ${
        settings.reducedMotion ? 'motion-reduce' : ''
      }`}
    >
      {/* Top Header shown on main content screens */}
      {screen !== 'splash' && screen !== 'scanning' && (
        <Header
          onOpenMenu={() => setIsDrawerOpen(true)}
          onOpenFavorites={() => setScreen('collection')}
          favoritesCount={favoritesCount}
          onLogoClick={() => setScreen('home')}
        />
      )}

      {/* Main Screen Router */}
      <main className="w-full">
        {screen === 'splash' && (
          <SplashScreen onStart={() => setScreen('home')} />
        )}

        {screen === 'home' && (
          <HomeScreen
            onTakePhoto={() => setIsCameraModalOpen(true)}
            onSelectImage={handleSelectImageFile}
            onSelectSample={handleSelectSample}
            onNavigate={(newScreen) => setScreen(newScreen)}
            recentCount={scans.length}
            favoritesCount={favoritesCount}
          />
        )}

        {screen === 'inventory' && (
          <InventoryBrowser
            onSelectAnimal={(animal) => {
              setCurrentAnimal(animal);
              setScreen('result');
            }}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'scanning' && selectedImageForScan && (
          <ScanningView
            imagePreviewUrl={selectedImageForScan}
            isProcessing={isScanningActive}
            errorMessage={scanErrorMessage}
            onCancel={() => {
              setIsScanningActive(false);
              setScreen('home');
            }}
          />
        )}

        {screen === 'result' && currentAnimal && (
          <AnimalResultView
            animal={currentAnimal}
            onBack={() => setScreen('home')}
            onToggleFavorite={handleToggleFavorite}
            onNavigate={(newScreen) => setScreen(newScreen)}
            onScanAnother={() => setScreen('home')}
          />
        )}

        {screen === 'habitat' && currentAnimal && (
          <HabitatMapView
            animal={currentAnimal}
            onBack={() => setScreen('result')}
          />
        )}

        {screen === 'conservation' && currentAnimal && (
          <ConservationView
            animal={currentAnimal}
            onBack={() => setScreen('result')}
          />
        )}

        {screen === 'compare' && (
          <CompareView
            currentAnimal={currentAnimal}
            allAnimals={scans}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'collection' && (
          <CollectionModal
            scans={scans}
            onSelectAnimal={(animal) => {
              setCurrentAnimal(animal);
              setScreen('result');
            }}
            onToggleFavorite={handleToggleFavorite}
            onClearHistory={handleClearHistory}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'settings' && (
          <SettingsModal
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'uncertain' && uncertainDetails && (
          <UncertainResultView
            imageUrl={uncertainDetails.imageUrl}
            isNonAnimal={uncertainDetails.isNonAnimal}
            rejectionMessage={uncertainDetails.rejectionMessage}
            explanation={uncertainDetails.explanation}
            confidence={uncertainDetails.confidence}
            candidates={uncertainDetails.candidates}
            onSelectCandidate={handleSelectCandidate}
            onTryAgain={() => setScreen('home')}
            onBrowseCatalog={() => setScreen('inventory')}
          />
        )}
      </main>

      {/* Persistent Bottom Nav on regular app screens */}
      {screen !== 'splash' && screen !== 'scanning' && (
        <BottomNav
          currentScreen={screen}
          onNavigate={(target) => setScreen(target)}
          onTriggerScan={() => setIsCameraModalOpen(true)}
        />
      )}

      {/* Live Camera Viewfinder Modal */}
      <CameraCaptureModal
        isOpen={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        onCapture={(dataUrl) => {
          setIsCameraModalOpen(false);
          processImageScan(dataUrl);
        }}
      />

      {/* Slide-out Drawer Navigation */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={(target) => setScreen(target)}
        onTriggerScan={() => setIsCameraModalOpen(true)}
        favoritesCount={favoritesCount}
      />
    </div>
  );
}
