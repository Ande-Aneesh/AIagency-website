import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  ctaText: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface PricingTier {
  name: string;
  priceIN: string;
  priceINTL: string;
  features: string[];
  highlight?: boolean;
}

export enum Region {
  INDIA = 'INDIA',
  INTL = 'INTL'
}