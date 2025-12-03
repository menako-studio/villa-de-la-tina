import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Training } from '@/types';

interface TrainingFormProps {
  training?: Training;
  onSubmit: (data: Partial<Training>) => Promise<void>;
  onCancel: () => void;
}

export default function TrainingForm({ training, onSubmit, onCancel }: TrainingFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: training ? {
      title: training.title,
      description: training.description,
      shortDescription: training.shortDescription,
      startDate: training.startDate.toISOString().slice(0, 16),
      endDate: training.endDate.toISOString().slice(0, 16),
      location: training.location,
      price: training.price,
      maxParticipants: training.maxParticipants,
      status: training.status,
      category: training.category,
      instructor: training.instructor,
      instructorBio: training.instructorBio,
      image: training.image,
    } : {},
  });

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const onFormSubmit = async (data: any) => {
    setLoading(true);
    setSubmitError(null);
    
    // Validasi tanggal
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    
    if (end <= start) {
      setSubmitError('Tanggal selesai harus setelah tanggal mulai');
      setLoading(false);
      return;
    }

    try {
      await onSubmit({
        ...data,
        price: Number(data.price) || 0,
        maxParticipants: Number(data.maxParticipants) || null,
        currentParticipants: training?.currentParticipants || 0,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {training ? 'Edit Pelatihan' : 'Tambah Pelatihan Baru'}
        </h2>
        {training && (
          <span className="text-sm text-gray-500">
            ID: {training.id}
          </span>
        )}
      </div>

      {submitError && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-600 text-sm font-medium">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Pelatihan *
            </label>
            <input
              type="text"
              {...register('title', { required: 'Judul pelatihan wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Singkat
            </label>
            <input
              type="text"
              {...register('shortDescription')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deskripsi singkat untuk preview"
            />
            <p className="text-xs text-gray-500 mt-1">
              💡 Ringkasan singkat yang muncul di kartu pelatihan (opsional)
            </p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Lengkap *
            </label>
            <textarea
              rows={6}
              {...register('description', { required: 'Deskripsi wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Jelaskan detail pelatihan, materi yang akan dipelajari, dan manfaatnya..."
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              💡 Jelaskan secara detail tentang pelatihan ini
            </p>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal & Waktu Mulai *
            </label>
            <input
              type="datetime-local"
              {...register('startDate', { required: 'Tanggal mulai wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.startDate && (
              <p className="text-red-600 text-sm mt-1">{errors.startDate.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              📅 Kapan pelatihan dimulai
            </p>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal & Waktu Selesai *
            </label>
            <input
              type="datetime-local"
              {...register('endDate', { required: 'Tanggal selesai wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.endDate && (
              <p className="text-red-600 text-sm mt-1">{errors.endDate.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              📅 Kapan pelatihan selesai
            </p>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lokasi *
            </label>
            <input
              type="text"
              {...register('location', { required: 'Lokasi wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Villa Kuningan, Jawa Barat"
            />
            {errors.location && (
              <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori *
            </label>
            <input
              type="text"
              {...register('category', { required: 'Kategori wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Pembinaan UMKM, Kepemimpinan, dll"
            />
            {errors.category && (
              <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Harga (Rp)
            </label>
            <input
              type="number"
              min="0"
              {...register('price')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="0"
            />
            <p className="text-xs text-gray-500 mt-1">
              💰 Ketik 0 atau kosongkan untuk pelatihan gratis
            </p>
          </div>

          {/* Max Participants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maksimal Peserta
            </label>
            <input
              type="number"
              min="1"
              {...register('maxParticipants')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Tidak terbatas"
            />
            <p className="text-xs text-gray-500 mt-1">
              👥 Kosongkan jika tidak ada batasan peserta
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status *
            </label>
            <select
              {...register('status', { required: 'Status wajib dipilih' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Pilih Status</option>
              <option value="upcoming">Akan Datang</option>
              <option value="ongoing">Sedang Berlangsung</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>
            {errors.status && (
              <p className="text-red-600 text-sm mt-1">{errors.status.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              ⚡ Status saat ini dari pelatihan
            </p>
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Instruktur *
            </label>
            <input
              type="text"
              {...register('instructor', { required: 'Nama instruktur wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.instructor && (
              <p className="text-red-600 text-sm mt-1">{errors.instructor.message}</p>
            )}
          </div>

          {/* Instructor Bio */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio Instruktur
            </label>
            <textarea
              rows={3}
              {...register('instructorBio')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Pengalaman dan latar belakang instruktur..."
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Gambar
            </label>
            <input
              type="url"
              {...register('image')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-xs text-gray-500 mt-1">
              🖼️ Link gambar pelatihan (opsional). Harus dimulai dengan https://
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-6 border-t">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Menyimpan...
              </>
            ) : (
              training ? '💾 Simpan Perubahan' : '✓ Buat Pelatihan'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}