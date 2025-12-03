import { useState, useEffect } from 'react';
import { Training } from '@/types';

export function useTrainings(filter?: 'upcoming' | 'ongoing' | 'all') {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/trainings?status=${filter || 'all'}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch trainings');
        }
        
        const data = await response.json();
        
        // Convert date strings back to Date objects
        const trainingsWithDates = data.trainings.map((training: any) => ({
          ...training,
          startDate: new Date(training.startDate),
          endDate: new Date(training.endDate),
          createdAt: new Date(training.createdAt),
          updatedAt: new Date(training.updatedAt),
        }));
        
        setTrainings(trainingsWithDates);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching trainings:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
    
    // Poll every 5 seconds to simulate real-time updates
    const interval = setInterval(fetchTrainings, 5000);
    
    return () => clearInterval(interval);
  }, [filter]);

  return { trainings, loading, error };
}

export function useTraining(id: string) {
  const [training, setTraining] = useState<Training | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTraining = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/trainings/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch training');
        }
        
        const data = await response.json();
        
        // Convert date strings back to Date objects
        const trainingWithDates = {
          ...data.training,
          startDate: new Date(data.training.startDate),
          endDate: new Date(data.training.endDate),
          createdAt: new Date(data.training.createdAt),
          updatedAt: new Date(data.training.updatedAt),
        };
        
        setTraining(trainingWithDates);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching training:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTraining();
  }, [id]);

  return { training, loading, error };
}