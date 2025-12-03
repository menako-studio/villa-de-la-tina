import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  ShareIcon,
  BookmarkIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Training } from '@/types';

export default function TrainingDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [training, setTraining] = useState<Training | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchTraining = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/trainings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch trainings');
        }
        
        const data = await response.json();
        
        // Convert date strings back to Date objects and find by slug
        const trainingsWithDates = data.trainings.map((t: any) => ({
          ...t,
          startDate: new Date(t.startDate),
          endDate: new Date(t.endDate),
          createdAt: new Date(t.createdAt),
          updatedAt: new Date(t.updatedAt),
        }));
        
        const foundTraining = trainingsWithDates.find((t: Training) => t.slug === slug);
        
        if (!foundTraining) {
          setError('Training not found');
        } else {
          setTraining(foundTraining);
        }
      } catch (err: any) {
        console.error('Error fetching training:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTraining();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto border-b-2 rounded-full animate-spin border-primary-600"></div>
            <p className="mt-4 text-gray-500">Memuat data...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !training) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <p className="text-lg text-red-600">{error || 'Pelatihan tidak ditemukan'}</p>
            <Link href="/trainings" className="inline-block mt-2 text-red-600 hover:underline">
              ← Kembali ke daftar pelatihan
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: string } = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    const labels: { [key: string]: string } = {
      upcoming: 'Akan Datang',
      ongoing: 'Sedang Berlangsung',
      completed: 'Selesai',
      cancelled: 'Dibatalkan',
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badges[status] || badges.upcoming}`}>
        {labels[status] || status}
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>{training.title} - Villa Kuningan Training Center</title>
        <meta name="description" content={training.description} />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section - Meetup Style */}
        <div className="relative bg-white">
          <div className="relative h-[250px] lg:h-[350px] overflow-hidden">
            <Image
              src={training.image || '/placeholder.png'}
              alt={training.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl px-4 mx-auto -mt-16 sm:px-6 lg:px-8">

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Card - Meetup Style */}
              <div className="mb-6 overflow-hidden bg-white rounded-lg shadow-sm">
                {/* Event Header */}
                <div className="p-6 lg:p-8">
                  {/* Event Title */}
                  <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                    {training.title}
                  </h1>

                  {/* Hosted by */}
                  <div className="flex items-center mb-6 space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white rounded-full bg-gradient-to-br from-red-400 to-red-600">
                      {training.instructor.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hosted by <span className="font-semibold text-gray-900">{training.instructor}</span></p>
                      <p className="text-xs text-gray-500">Speaker, {training.category}</p>
                    </div>
                  </div>

                  {/* Event Info Cards */}
                  <div className="grid gap-4 mb-6 md:grid-cols-2">
                    {/* Date & Time Card */}
                    <div className="flex items-start p-4 space-x-3 rounded-lg bg-gray-50">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg">
                        <CalendarDaysIcon className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-gray-900">
                          {format(training.startDate, 'EEEE, dd MMMM yyyy', { locale: id })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {format(training.startDate, 'HH:mm')} to {format(training.endDate, 'HH:mm')} WIB
                        </p>
                        <button className="mt-1 text-sm font-medium text-red-600 hover:underline">
                          + Add to calendar
                        </button>
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-start p-4 space-x-3 rounded-lg bg-gray-50">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg">
                        <MapPinIcon className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-gray-900">Online event</p>
                        <p className="mb-1 text-sm text-gray-600">{training.location}</p>
                        {training.location.toLowerCase().includes('villa kuningan') ? (
                          <button className="text-sm font-medium text-red-600 hover:underline">
                            View map
                          </button>
                        ) : (
                          <button className="text-sm font-medium text-red-600 hover:underline">
                            Link visible for attendees
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating and Attendees */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {/* Star Rating */}
                        <div className="flex items-center mr-2 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">4.9 (9 reviews)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        <span>{training.currentParticipants} attendees</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1">
                      <button className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-600 hover:bg-red-50">
                        <ShareIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-600 hover:bg-red-50">
                        <BookmarkIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-600 hover:bg-red-50">
                        <HeartIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Detail</h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="text-base leading-relaxed whitespace-pre-line">
                    {training.description}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              {training.requirements && training.requirements.length > 0 && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Yang Perlu Dipersiapkan</h2>
                  <ul className="space-y-3">
                    {training.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {training.benefits && training.benefits.length > 0 && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Apa yang Akan Anda Dapatkan</h2>
                  <ul className="space-y-3">
                    {training.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Schedule */}
              {training.schedule && training.schedule.length > 0 && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                  <h2 className="mb-6 text-xl font-bold text-gray-900">Jadwal Pelatihan</h2>
                  <div className="space-y-4">
                    {training.schedule.map((item, index) => (
                      <div key={index} className="flex p-4 rounded-lg bg-gray-50">
                        <div className="flex flex-col items-center justify-center flex-shrink-0 w-16 h-16 mr-4 text-white bg-red-600 rounded-lg">
                          <span className="text-xs font-medium">HARI</span>
                          <span className="text-lg font-bold">{item.day}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{item.topic}</h4>
                            <span className="px-3 py-1 text-sm text-gray-500 bg-white rounded-full">
                              {item.startTime} - {item.endTime}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attendees Section - Meetup Style */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Peserta ({training.currentParticipants})</h2>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700">
                    Lihat semua
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: Math.min(training.currentParticipants || 0, 12) }).map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative">
                        <div className="flex items-center justify-center w-12 h-12 text-sm font-semibold text-white rounded-full bg-gradient-to-br from-red-400 to-red-600">
                          {String.fromCharCode(65 + (index % 26))}
                        </div>
                        {index < 3 && (
                          <div className="absolute w-4 h-4 bg-green-500 border-2 border-white rounded-full -bottom-1 -right-1"></div>
                        )}
                      </div>
                      <span className="text-xs text-gray-600 mt-1 text-center max-w-[50px] truncate">
                        User {index + 1}
                      </span>
                    </div>
                  ))}
                  
                  {(training.currentParticipants || 0) > 12 && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 text-xs font-medium text-gray-600 bg-gray-200 rounded-full">
                        +{(training.currentParticipants || 0) - 12}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Photos Section - Meetup Style */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Foto (3)</h2>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700">
                    Lihat foto grup
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 1"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 2"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=200&fit=crop&crop=center"
                      alt="Event photo 3"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-sm lg:p-8">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Diselenggarakan oleh</h2>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-lg font-bold text-white rounded-full bg-gradient-to-br from-red-400 to-red-600">
                    {training.instructor.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{training.instructor}</h3>
                    <p className="mb-2 text-sm font-medium text-red-600">Organisator</p>
                    {training.instructorBio && (
                      <p className="text-sm leading-relaxed text-gray-600">{training.instructorBio}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Related Events - Members are also interested in */}
              <div className="p-6 bg-white rounded-lg shadow-sm lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Member juga tertarik dengan</h2>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700">
                    Lihat semua
                  </button>
                </div>
                
                <div className="grid gap-4">
                  {/* Related Event 1 */}
                  <div className="flex p-4 space-x-4 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900">Web Development Bootcamp Jakarta</h4>
                      <p className="mb-2 text-xs text-gray-600">Sabtu, 2 Nov • 09:00 WIB</p>
                      <p className="text-xs text-gray-500">25 peserta • Villa Kuningan</p>
                    </div>
                  </div>

                  {/* Related Event 2 */}
                  <div className="flex p-4 space-x-4 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900">Leadership Skills Workshop</h4>
                      <p className="mb-2 text-xs text-gray-600">Minggu, 3 Nov • 14:00 WIB</p>
                      <p className="text-xs text-gray-500">18 peserta • Online</p>
                    </div>
                  </div>

                  {/* Related Event 3 */}
                  <div className="flex p-4 space-x-4 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=150&fit=crop&crop=center"
                        alt="Related event"
                        width={80}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900">Investment Strategy Masterclass</h4>
                      <p className="mb-2 text-xs text-gray-600">Senin, 4 Nov • 19:00 WIB</p>
                      <p className="text-xs text-gray-500">32 peserta • Villa Kuningan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-8 lg:col-span-1 lg:mt-0">
              {/* Registration Card - Meetup Style */}
              <div className="sticky overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm top-8">
                {/* Price Header */}
                <div className="p-4 border-b border-gray-200">
                  {training.price === 0 ? (
                    <div className="text-center">
                      <div className="mb-1 text-2xl font-bold text-green-600">FREE</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="mb-1 text-2xl font-bold text-gray-900">
                        Rp {training.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {/* CTA Button */}
                  <button
                    disabled={training.status === 'completed' || training.status === 'cancelled'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 mb-4 ${
                      training.status === 'completed' || training.status === 'cancelled'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 text-white shadow hover:shadow-md'
                    }`}
                  >
                    {training.status === 'completed' ? 'Event ended' : 
                     training.status === 'cancelled' ? 'Event cancelled' : 
                     'Attend'}
                  </button>

                  {/* Attendee Progress */}
                  {training.maxParticipants && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                        <span>{training.currentParticipants || 0} going</span>
                        <span>{training.maxParticipants} spots</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 transition-all duration-300 bg-red-600 rounded-full"
                          style={{ 
                            width: `${Math.min(((training.currentParticipants || 0) / training.maxParticipants) * 100, 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <p className="mb-4 text-xs text-center text-gray-500">
                    Free and easy to cancel
                  </p>

                  {/* Event Details */}
                  <div className="pt-4 space-y-3 text-sm border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900">
                          {format(training.startDate, 'MMM dd', { locale: id })}
                        </div>
                        <div className="text-xs text-gray-600">
                          {format(training.startDate, 'HH:mm')} - {format(training.endDate, 'HH:mm')} WIB
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">
                          {training.location.toLowerCase().includes('online') ? 'Online event' : training.location}
                        </div>
                        <div className="text-xs text-gray-600 truncate">
                          {training.location.toLowerCase().includes('online') ? 'Link visible for attendees' : 'See location details'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <UserGroupIcon className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900">{training.currentParticipants} attendees</div>
                        <div className="text-xs text-gray-600">See who&apos;s going</div>
                      </div>
                    </div>
                  </div>

                  {/* Share Event */}
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <button className="flex items-center justify-center w-full space-x-2 text-sm text-gray-600 transition-colors hover:text-red-600">
                      <ShareIcon className="w-4 h-4" />
                      <span>Share event</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Report Event Button */}
              <div className="mt-4 text-center">
                <button className="flex items-center justify-center mx-auto text-sm text-red-600 hover:underline">
                  <span className="mr-1">🚩</span>
                  Report event
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}