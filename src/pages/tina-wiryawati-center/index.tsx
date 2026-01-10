import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  TagIcon,
  UserIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

/**
 * Blog Index Page
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 */

// Mock blog data
const blogPosts = [
  {
    id: 'digital-marketing-untuk-umkm',
    title: 'Strategi Digital Marketing untuk UMKM di Era Modern',
    excerpt: 'Pelajari teknik-teknik digital marketing yang efektif untuk mengembangkan bisnis UMKM Anda dengan budget terbatas.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?digital-marketing,business',
    author: 'Sari Wahyuni',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    category: 'Digital Marketing',
    tags: ['UMKM', 'Digital Marketing', 'Bisnis Online', 'Social Media'],
    featured: true
  },
  {
    id: 'manajemen-keuangan-pribadi',
    title: 'Tips Manajemen Keuangan Pribadi untuk Generasi Milenial',
    excerpt: 'Cara mudah mengatur keuangan pribadi, membuat budget, dan merencanakan investasi untuk masa depan yang lebih cerah.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?finance,money,planning',
    author: 'Ahmad Rizki',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    publishedAt: '2024-01-12',
    readTime: '12 min',
    category: 'Keuangan',
    tags: ['Keuangan Pribadi', 'Investasi', 'Budget', 'Milenial'],
    featured: false
  },
  {
    id: 'skill-komunikasi-efektif',
    title: 'Membangun Skill Komunikasi yang Efektif di Dunia Kerja',
    excerpt: 'Pelajari teknik komunikasi yang akan membantu Anda berinteraksi lebih baik dengan rekan kerja dan atasan.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?communication,meeting,teamwork',
    author: 'Dr. Maya Sari',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    publishedAt: '2024-01-10',
    readTime: '6 min',
    category: 'Soft Skills',
    tags: ['Komunikasi', 'Karier', 'Soft Skills', 'Leadership'],
    featured: false
  },
  {
    id: 'teknologi-ai-masa-depan',
    title: 'Bagaimana Teknologi AI Akan Mengubah Dunia Kerja',
    excerpt: 'Eksplorasi mendalam tentang dampak artificial intelligence terhadap berbagai industri dan cara mempersiapkan diri.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?artificial-intelligence,technology,future',
    author: 'Budi Santoso',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    publishedAt: '2024-01-08',
    readTime: '10 min',
    category: 'Teknologi',
    tags: ['AI', 'Teknologi', 'Future of Work', 'Innovation'],
    featured: true
  },
  {
    id: 'memulai-bisnis-online',
    title: 'Panduan Lengkap Memulai Bisnis Online dari Nol',
    excerpt: 'Langkah demi langkah membangun bisnis online yang profitable, dari ide hingga eksekusi dan marketing.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?online-business,ecommerce,startup',
    author: 'Ibu Fatimah',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    publishedAt: '2024-01-05',
    readTime: '15 min',
    category: 'Bisnis',
    tags: ['Bisnis Online', 'E-commerce', 'Startup', 'Entrepreneur'],
    featured: false
  },
  {
    id: 'public-speaking-confidence',
    title: 'Mengatasi Rasa Takut dan Membangun Kepercayaan Diri dalam Public Speaking',
    excerpt: 'Teknik praktis untuk mengatasi demam panggung dan menjadi pembicara yang percaya diri dan meyakinkan.',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://source.unsplash.com/800x600/?public-speaking,presentation,confidence',
    author: 'Dr. Ahmad Suryadi',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    publishedAt: '2024-01-03',
    readTime: '9 min',
    category: 'Soft Skills',
    tags: ['Public Speaking', 'Confidence', 'Communication', 'Presentation'],
    featured: false
  }
];

const categories = ['Semua', 'Digital Marketing', 'Keuangan', 'Soft Skills', 'Teknologi', 'Bisnis'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <>

    </>
  );
}