export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  images: string[];
  isNew?: boolean;
  category: string;
  slug: string;
}