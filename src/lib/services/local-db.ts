// Local database using localStorage for persistence
// This replaces Firebase temporarily

import { Training } from '@/types';

const STORAGE_KEY = 'villa_kuningan_trainings';
const COUNTER_KEY = 'villa_kuningan_id_counter';

// Helper to check if we're on the client side
const isClient = typeof window !== 'undefined';

// Load data from localStorage
function loadFromStorage(): Training[] {
  if (!isClient) return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const data = JSON.parse(stored);
    // Convert date strings back to Date objects
    return data.map((training: any) => ({
      ...training,
      startDate: new Date(training.startDate),
      endDate: new Date(training.endDate),
      createdAt: new Date(training.createdAt),
      updatedAt: new Date(training.updatedAt),
    }));
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
}

// Save data to localStorage
function saveToStorage(trainings: Training[]): void {
  if (!isClient) return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trainings));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

// Load counter from localStorage
function loadCounter(): number {
  if (!isClient) return 1;
  
  try {
    const stored = localStorage.getItem(COUNTER_KEY);
    return stored ? parseInt(stored, 10) : 1;
  } catch (error) {
    console.error('Error loading counter:', error);
    return 1;
  }
}

// Save counter to localStorage
function saveCounter(counter: number): void {
  if (!isClient) return;
  
  try {
    localStorage.setItem(COUNTER_KEY, counter.toString());
  } catch (error) {
    console.error('Error saving counter:', error);
  }
}

// In-memory storage with localStorage persistence
let trainings: Training[] = loadFromStorage();
let idCounter = loadCounter();

// Helper to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export const localDb = {
  // Get all trainings
  getAll: async (filter?: { status?: string; limit?: number }): Promise<Training[]> => {
    let result = [...trainings];

    // Filter by status
    if (filter?.status && filter.status !== 'all') {
      result = result.filter(t => t.status === filter.status);
    }

    // Sort by startDate
    result.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // Apply limit
    if (filter?.limit) {
      result = result.slice(0, filter.limit);
    }

    return result;
  },

  // Get training by ID
  getById: async (id: string): Promise<Training | null> => {
    return trainings.find(t => t.id === id) || null;
  },

  // Create new training
  create: async (data: Partial<Training>): Promise<Training> => {
    const now = new Date();
    const id = `training-${idCounter++}`;
    saveCounter(idCounter);
    
    const newTraining: Training = {
      id,
      slug: generateSlug(data.title || ''),
      title: data.title || '',
      description: data.description || '',
      shortDescription: data.shortDescription,
      startDate: data.startDate ? new Date(data.startDate) : now,
      endDate: data.endDate ? new Date(data.endDate) : now,
      location: data.location || '',
      price: data.price || 0,
      maxParticipants: data.maxParticipants,
      currentParticipants: data.currentParticipants || 0,
      status: data.status || 'upcoming',
      category: data.category || '',
      instructor: data.instructor || '',
      instructorBio: data.instructorBio,
      image: data.image,
      requirements: data.requirements,
      benefits: data.benefits,
      schedule: data.schedule,
      createdAt: now,
      updatedAt: now,
    };

    trainings.push(newTraining);
    saveToStorage(trainings);
    return newTraining;
  },

  // Update training
  update: async (id: string, data: Partial<Training>): Promise<Training | null> => {
    const index = trainings.findIndex(t => t.id === id);
    
    if (index === -1) {
      return null;
    }

    const updatedTraining = {
      ...trainings[index],
      ...data,
      startDate: data.startDate ? new Date(data.startDate) : trainings[index].startDate,
      endDate: data.endDate ? new Date(data.endDate) : trainings[index].endDate,
      updatedAt: new Date(),
    };

    trainings[index] = updatedTraining;
    saveToStorage(trainings);
    return updatedTraining;
  },

  // Delete training
  delete: async (id: string): Promise<boolean> => {
    const index = trainings.findIndex(t => t.id === id);
    
    if (index === -1) {
      return false;
    }

    trainings.splice(index, 1);
    saveToStorage(trainings);
    return true;
  },

  // Clear all data (for testing)
  clear: () => {
    trainings = [];
    idCounter = 1;
    saveToStorage(trainings);
    saveCounter(idCounter);
  }
};
