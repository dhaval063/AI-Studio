export interface ProductSpec {
  material: string;
  dimensions: string;
  weight: string;
  packingDetails: string;
  qtyPerPack: string;
  qtyPerCarton: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  specs: ProductSpec;
  applications: string[];
  isFeatured?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'export' | 'moq' | 'customization' | 'production' | 'general';
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  authority: string;
  description: string;
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  text: string;
  rating: number;
  image: string;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}
