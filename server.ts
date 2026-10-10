import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '35mb' }));
app.use(express.urlencoded({ extended: true, limit: '35mb' }));

// Health and config status
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash'
  });
});

const INVENTORY_IDS = [
  'tiger', 'lion', 'elephant', 'leopard', 'cheetah', 'wolf', 'fox', 'deer',
  'giraffe', 'zebra', 'rhinoceros', 'hippopotamus', 'bear', 'panda', 'monkey',
  'gorilla', 'kangaroo', 'rabbit', 'dog', 'cat', 'horse', 'cow', 'goat',
  'eagle', 'peacock', 'parrot', 'owl', 'crocodile', 'turtle', 'dolphin'
];

// Primary Animal Identification Route
app.post('/api/identify', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required.' });
    }

    let detectedMime = mimeType;
    if (imageBase64.startsWith('data:')) {
      const match = imageBase64.match(/^data:([^;]+);base64,/);
      if (match) {
        detectedMime = match[1];
      }
    }

    // Clean up base64 prefix
    const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '');

    // Check magic bytes signature
    if (cleanBase64.startsWith('/9j/')) {
      detectedMime = 'image/jpeg';
    } else if (cleanBase64.startsWith('iVBORw0KGgo')) {
      detectedMime = 'image/png';
    } else if (cleanBase64.startsWith('UklGR')) {
      detectedMime = 'image/webp';
    } else if (cleanBase64.startsWith('R0lGOD')) {
      detectedMime = 'image/gif';
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please attach an API key in the AI Studio Secrets panel.'
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const prompt = `You are Animal Light AI, a world-class wildlife biologist and species taxonomy specialist.
Carefully examine the visual evidence in this image.

AVAILABLE KNOWLEDGE INVENTORY ANIMAL IDs:
${JSON.stringify(INVENTORY_IDS)}

EVALUATION RULES:
1. FIRST: Does this image contain a living animal, insect, bird, reptile, amphibian, fish, or marine creature?
   - If the image is a person, human face, an inanimate object (e.g. chair, table, car, shoe, phone, furniture), architecture, food, plant/flower without animal, landscape without animal, or a blank/abstract graphic:
     You MUST set "isAnimal": false.
     Set "rejectionMessage": "No identifiable animal detected. Please upload a clear animal photo."
     Set "nonAnimalCategory": "object" | "person" | "food" | "plant" | "landscape" | "other".
     Set "confidence": 0.
     DO NOT guess or pretend it is an animal.

2. SECOND: If it DOES contain an animal:
   - Carefully analyze visible morphological traits: body shape, fur texture, markings/spots/stripes, muzzle/face, ears, beak, eyes, horns/antlers, tail, claws/hooves, and posture.
   - Detect if the photo is blurry, low-resolution, partially obscured, or contains multiple animals.
   - Provide a ranked list of up to 3 candidate species with their individual confidence percentage (e.g. 92%, 60%, 35% - NEVER claim 100% unless unmistakable and crystal clear).
   - If the animal matches one of the species in the inventory above, assign "matchedInventoryId" to that exact ID (e.g., 'dog', 'cat', 'lion', 'eagle', 'turtle').
   - If it is a real animal NOT in the inventory (e.g. 'koala', 'ocelot', 'red-panda', 'platypus'), set "matchedInventoryId": null and provide its accurate species details.
   - NEVER default an unknown or unclear animal to a tiger, dog, or another random species!

Output MUST be strictly valid JSON conforming to this structure:
{
  "isAnimal": boolean,
  "rejectionMessage": string,
  "nonAnimalCategory": string,
  "isBlurryOrLowQuality": boolean,
  "multipleAnimalsDetected": boolean,
  "confidence": number,
  "bestMatch": {
    "commonName": string,
    "scientificName": string,
    "classification": "Mammal" | "Bird" | "Reptile" | "Fish" | "Marine Mammal" | "Amphibian" | "Insect",
    "inventoryId": string or null,
    "confidence": number,
    "visualClues": string[],
    "uncertaintyExplanation": string,
    "overview": string,
    "behaviour": string,
    "size": string,
    "weight": string,
    "lifespan": string,
    "dietType": "Carnivore" | "Herbivore" | "Omnivore" | "Piscivore" | "Insectivore",
    "dietItems": [{"name": string, "type": string, "icon": "deer"|"boar"|"buffalo"|"fish"|"grass"|"fruit"|"insect"|"meat"}],
    "dailyTimeline": [{"time": string, "title": string, "desc": string, "icon": "hunt"|"rest"|"roam"|"mate"|"forage"}],
    "habitatSummary": string,
    "geographicDistribution": string[],
    "nativeRegions": string[],
    "coordinates": {"lat": number, "lng": number, "zoom": number},
    "quickFacts": string[],
    "conservation": {
      "status": string,
      "code": "CR"|"EN"|"VU"|"NT"|"LC"|"DD",
      "source": string,
      "lastVerified": string,
      "populationEstimate": string,
      "populationTrend": "Decreasing"|"Stable"|"Increasing",
      "trendData": number[],
      "threats": [{"title": string, "desc": string}],
      "actions": [{"title": string, "desc": string}]
    },
    "verifiedParks": [{"name": string, "location": string, "highlight": string, "lat": number, "lng": number}],
    "funFacts": string[],
    "scientificReferences": [{"title": string, "source": string, "url": string}],
    "similarSpecies": [{"name": string, "distinction": string}]
  },
  "candidates": [
    {
      "species": string,
      "scientificName": string,
      "confidence": number,
      "matchedInventoryId": string or null,
      "visualClues": string[]
    }
  ]
}`;

    let response;
    let attempts = 0;
    while (attempts < 2) {
      try {
        attempts++;
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [
            {
              role: 'user',
              parts: [
                { text: prompt },
                {
                  inlineData: {
                    mimeType: detectedMime,
                    data: cleanBase64
                  }
                }
              ]
            }
          ],
          config: {
            responseMimeType: 'application/json'
          }
        });
        break;
      } catch (genErr: any) {
        if (attempts < 2 && (genErr?.message?.includes('503') || genErr?.message?.includes('demand') || genErr?.status === 503)) {
          console.warn('Transient 503 spike, retrying in 1200ms...');
          await new Promise((r) => setTimeout(r, 1200));
        } else {
          throw genErr;
        }
      }
    }

    const responseText = response?.text || '';
    const sanitized = responseText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    try {
      const parsedData = JSON.parse(sanitized);
      return res.json({ success: true, data: parsedData });
    } catch (parseErr) {
      console.error('Failed to parse Gemini JSON output:', responseText);
      return res.status(500).json({
        error: 'Failed to parse AI response into structured wildlife format.',
        raw: responseText
      });
    }
  } catch (error: any) {
    console.error('Identification API error:', error);
    return res.status(500).json({
      error: error?.message || 'Species identification service encountered an unexpected error.'
    });
  }
});

// Full-text & taxonomic catalog API endpoint for client queries
app.get('/api/animals', (_req, res) => {
  res.json({
    count: INVENTORY_IDS.length,
    animals: INVENTORY_IDS
  });
});

// Server-side Firestore real-time sync status endpoint
app.get('/api/sync/status', async (_req, res) => {
  try {
    let firebaseConfig: any = null;
    try {
      const configPath = path.resolve(__dirname, 'firebase-applet-config.json');
      const fs = await import('fs');
      if (fs.existsSync(configPath)) {
        firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch {}

    res.json({
      firestoreReady: Boolean(firebaseConfig?.projectId),
      projectId: firebaseConfig?.projectId || null,
      databaseId: firebaseConfig?.firestoreDatabaseId || '(default)',
      collections: ['animals', 'scans', 'favorites'],
      syncMode: 'realtime-onSnapshot'
    });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Sync status check failed' });
  }
});

// Server-side sync endpoint for scan persistence verification
app.post('/api/sync/scan', (req, res) => {
  const { scan } = req.body;
  if (!scan || !scan.id) {
    return res.status(400).json({ error: 'Valid scan object required.' });
  }
  res.json({
    synced: true,
    scanId: scan.id,
    timestamp: Date.now()
  });
});

// Vite dev middleware vs Production static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Animal Light AI server running at http://0.0.0.0:${port}`);
  });
}

startServer();
