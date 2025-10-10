// src/utils/categories.ts

export interface CategoryInfo {
  title: string;
  description: string;
  image?: string;
}

// Map of raw category keys → human‑friendly info
export const CATEGORY_INFO: Record<string, CategoryInfo> = {
  apparel: {
    title: 'Denim Apparel',
    description:
      'Discover our premium collection of denim clothing, from classic jeans to stylish jackets.',
    image: '/hero/apparel_hero.jpeg'
  },
  accessories: {
    title: 'Denim Accessories',
    description:
      'Complete your look with our range of denim accessories and lifestyle products.',
    image: '/hero/accessories_hero.jpeg'
  },
  footwear: {
    title: 'Denim Footwear',
    description:
      'Step out in style with our denim-inspired footwear collection.',
    image: '/hero/footwear_hero.jpeg'
  },
  lifestyle: {
    title: 'Home & Lifestyle',
    description:
      'Bring denim style into your living space with our home and lifestyle products.',
    image: '/hero/lifestyle_hero.jpeg'
  },
  rawfabric: {
    title: 'Premium Raw Denim Fabric',
    description:
      'High-quality raw denim fabric for your manufacturing needs.',
    image: '/hero/raw_hero.jpeg'
    
  },
};

// Helper to fetch a category’s info
export function getCategoryInfo(key: string): CategoryInfo {
  return CATEGORY_INFO[key] || {
    title: 'Products',
    description: 'Explore our product collection.',
  };
}

// Map of raw category keys → filter‑button labels
export const FILTER_OPTIONS: Record<string, string[]> = {
  apparel: ['All', 'Jeans', 'Baggy Jeans', 'Biker Jeans', 'Jackets', 'Shirts', 'Skirts', 'Overalls', 'Dresses', 'Shorts'],
  accessories: ['All', 'Tote', 'Backpacks', 'Hats', 'Belts', 'Pouches', 'Headbands'],
  footwear: ['All', 'Sneakers', 'Boots'],
  lifestyle: [],
  rawfabric: [],  // or rawcloth if that’s your key
};

// Helper to fetch a category’s filters
export function getFiltersForCategory(key: string): string[] {
  return FILTER_OPTIONS[key] || [];
}
