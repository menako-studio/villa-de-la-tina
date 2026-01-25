/**
 * TypeScript interfaces for Tina Wiryawati Center
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  size: 'large' | 'small' | 'medium';
}

export interface GalleryMoment {
  id: number;
  title: string;
  image: string;
}

export interface ProgramCard {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export interface BadgeProps {
  text: string;
  size?: 'small' | 'medium';
}
