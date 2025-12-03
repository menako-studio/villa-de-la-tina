import React, { useState } from 'react';
import Head from 'next/head';
import TrainingForm from '@/cms/components/TrainingForm';
import { useTrainings } from '@/hooks/useTrainings';
import { Training } from '@/types';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function CMSPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingTraining, setEditingTraining] = useState<Training | null>(null);
  const [toast, setToast] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const { trainings, loading, error } = useTrainings('all');

  const handleCreateTraining = async (data: Partial<Training>) => {
    try {
      const response = await fetch('/api/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create training');
      }

      setToast({ type: 'success', message: '✓ Pelatihan berhasil dibuat!' });
      setShowForm(false);
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      console.error('Error creating training:', error);
      setToast({ 
        type: 'error', 
        message: '✕ Gagal membuat pelatihan. Silakan coba lagi.' 
      });
      setTimeout(() => setToast(null), 5000);
    }
  };

  const handleUpdateTraining = async (data: Partial<Training>) => {
    if (!editingTraining) return;

    try {
      const response = await fetch(`/api/trainings/${editingTraining.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update training');
      }

      setToast({ type: 'success', message: '✓ Perubahan berhasil disimpan!' });
      setEditingTraining(null);
      setShowForm(false);
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      console.error('Error updating training:', error);
      setToast({ 
        type: 'error', 
        message: '✕ Gagal menyimpan perubahan. Silakan coba lagi.' 
      });
      setTimeout(() => setToast(null), 5000);
    }
  };

  const handleDeleteTraining = async (id: string, title: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus pelatihan "${title}"?\n\nTindakan ini tidak dapat dibatalkan.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/trainings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete training');
      }

      setToast({ type: 'success', message: '✓ Pelatihan berhasil dihapus!' });
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      console.error('Error deleting training:', error);
      setToast({ 
        type: 'error', 
        message: '✕ Gagal menghapus pelatihan. Silakan coba lagi.' 
      });
      setTimeout(() => setToast(null), 5000);
    }
  };

  const handleEdit = (training: Training) => {
    setEditingTraining(training);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTraining(null);
  };

  return (
    <>
      <Head>
        <title>CMS Admin - Villa Kuningan Training Center</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Toast Notification */}
        {toast && (
          <div className="fixed z-50 top-4 right-4 animate-slide-in">
            <div className={`px-6 py-4 rounded-lg shadow-lg ${
              toast.type === 'success' 
                ? 'bg-green-500 ' 
                : 'bg-red-500 text-white'
            }`}>
              <p className="font-medium">{toast.message}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                CMS Admin - Villa Kuningan Training Center
              </h1>
              <div className="flex space-x-2">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {showForm ? (
            <TrainingForm
              training={editingTraining || undefined}
              onSubmit={editingTraining ? handleUpdateTraining : handleCreateTraining}
              onCancel={handleCancelForm}
            />
          ) : (
            <div>
              {/* Action Bar */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Daftar Pelatihan ({trainings.length})
                </h2>
                <button
                  onClick={() => {
                    setEditingTraining(null);
                    setShowForm(true);
                  }}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Tambah Pelatihan
                </button>
              </div>

              {/* Training List */}
              {error ? (
                <div className="p-6 text-center border border-red-200 rounded-lg bg-red-50">
                  <p className="mb-2 font-medium text-red-600">Terjadi kesalahan saat memuat data</p>
                  <p className="text-sm text-red-500">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 mt-4 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    Muat Ulang Halaman
                  </button>
                </div>
              ) : loading ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 mx-auto border-b-2 rounded-full animate-spin border-primary-600"></div>
                  <p className="mt-4 text-gray-500">Memuat data...</p>
                </div>
              ) : trainings.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-lg text-gray-500">Belum ada pelatihan yang dibuat</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 mt-4 text-sm font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700"
                  >
                    Buat Pelatihan Pertama
                  </button>
                </div>
              ) : (
                <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Pelatihan
                          </th>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Tanggal
                          </th>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Status
                          </th>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Peserta
                          </th>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Harga
                          </th>
                          <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {trainings.map((training) => (
                          <tr key={training.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {training.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {training.category} • {training.instructor}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {training.startDate.toLocaleDateString('id-ID')}
                              </div>
                              <div className="text-sm text-gray-500">
                                {training.startDate.toLocaleTimeString('id-ID', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  training.status === 'upcoming'
                                    ? 'bg-blue-100 text-blue-800'
                                    : training.status === 'ongoing'
                                    ? 'bg-green-100 text-green-800'
                                    : training.status === 'completed'
                                    ? 'bg-gray-100 text-gray-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {training.status === 'upcoming'
                                  ? 'Akan Datang'
                                  : training.status === 'ongoing'
                                  ? 'Berlangsung'
                                  : training.status === 'completed'
                                  ? 'Selesai'
                                  : 'Dibatalkan'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                              {training.maxParticipants
                                ? `${training.currentParticipants}/${training.maxParticipants}`
                                : training.currentParticipants}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                              {training.price === 0
                                ? 'Gratis'
                                : `Rp ${training.price.toLocaleString('id-ID')}`}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() => handleEdit(training)}
                                  className="p-1 text-primary-600 hover:text-primary-900"
                                  title="Edit"
                                >
                                  <PencilIcon className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteTraining(training.id, training.title)}
                                  className="p-1 text-red-600 hover:text-red-900"
                                  title="Hapus"
                                >
                                  <TrashIcon className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}