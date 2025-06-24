import { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  discountPercentage?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  colors?: string[];
  sizes?: string[];
  stock: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  date: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  backgroundImage: string;
  stats: {
    customers: number;
    products: number;
    countries: number;
  };
}

export interface DealSection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountPercentage: number;
  endTime: Date;
}

export interface NewsletterSection {
  title: string;
  subtitle: string;
  description: string;
  placeholder: string;
  buttonText: string;
  benefits: string[];
}

export interface HomePageData {
  hero: HeroSection;
  categories: Category[];
  featuredProducts: Product[];
  deal: DealSection;
  features: Feature[];
  testimonials: Testimonial[];
  newsletter: NewsletterSection;
  trendingProducts: Product[];
  newArrivals: Product[];
  bestSellers: Product[];
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
  className?: string;
}

export interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount: number;
  description: string;
  className?: string;
}

export interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  className?: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export interface DealSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountPercentage: number;
  endTime: Date;
  className?: string;
}

export interface NewsletterSectionProps {
  title: string;
  subtitle: string;
  description: string;
  placeholder: string;
  buttonText: string;
  benefits: string[];
  className?: string;
}
