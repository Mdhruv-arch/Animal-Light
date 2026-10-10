import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer, Firestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore targeting the configured database ID
export const db: Firestore = getFirestore(
  app,
  firebaseConfig.firestoreDatabaseId || '(default)'
);

// Connection verification helper required by Firebase integration guidelines
export async function validateFirestoreConnection(): Promise<boolean> {
  try {
    // Attempt a light server-side read to confirm database connectivity
    await getDocFromServer(doc(db, 'animals', '__healthcheck__'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firestore is currently operating offline.');
      return false;
    }
    // Document not existing is completely fine; network connection succeeded
    return true;
  }
}

// Anonymous device/user session identifier for partitioning client records
export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return 'server-session';
  const KEY = 'animal_light_device_uid';
  let uid = localStorage.getItem(KEY);
  if (!uid) {
    uid = 'user_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    localStorage.setItem(KEY, uid);
  }
  return uid;
}

export { firebaseConfig };
