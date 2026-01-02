import React, { useState } from 'react';
import Head from 'next/head';
import { TrainingList } from '@/components';
import { useTrainings } from '@/hooks/useTrainings';

/**
 * Trainings Page - List of All Trainings
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 */
export default function TrainingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing'>('all');
  const { trainings, loading, error } = useTrainings(filter);

  const filterOptions = [
    { value: 'all', label: 'Semua Pelatihan' },
    { value: 'upcoming', label: 'Akan Datang' },
    { value: 'ongoing', label: 'Sedang Berlangsung' },
  ];

  return (
    <>
      <Head>
        <title>Daftar Pelatihan - Villa Kuningan Training Center</title>
        <meta 
          name="description" 
          content="Lihat semua program pelatihan yang tersedia di Villa Kuningan Training Center. Pelatihan berkualitas dengan instruktur berpengalaman." 
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Program Pelatihan
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
                Temukan berbagai program pelatihan yang sesuai dengan kebutuhan Anda
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Content */}
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value as any)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      filter === option.value
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="p-4 mb-8 border border-red-200 rounded-md bg-red-50">
              <p className="text-red-800">Error: {error}</p>
            </div>
          )}

          {/* Training List */}
          <TrainingList 
            trainings={trainings} 
            loading={loading}
          />
        </div>
      </main>
    </>
  );
}
  