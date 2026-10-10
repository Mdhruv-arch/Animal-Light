import { AnimalProfile } from '../types/wildlife';
import { ANIMAL_INVENTORY } from './animalInventory';

// Re-export first 6 verified animals as sample wildlife for backward compatibility
export const SAMPLE_ANIMALS: AnimalProfile[] = ANIMAL_INVENTORY.slice(0, 6);
