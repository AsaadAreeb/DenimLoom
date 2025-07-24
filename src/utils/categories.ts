// src/utils/categories.ts

export interface CategoryInfo {
  title: string;
  description: string;
}

// Map of raw category keys → human‑friendly info
export const CATEGORY_INFO: Record<string, CategoryInfo> = {
  apparel: {
    title: 'Denim Apparel',
    description:
      'Discover our premium collection of denim clothing, from classic jeans to stylish jackets.',
  },
  accessories: {
    title: 'Denim Accessories',
    description:
      'Complete your look with our range of denim accessories and lifestyle products.',
  },
  footwear: {
    title: 'Denim Footwear',
    description:
      'Step out in style with our denim-inspired footwear collection.',
  },
  lifestyle: {
    title: 'Home & Lifestyle',
    description:
      'Bring denim style into your living space with our home and lifestyle products.',
  },
  rawfabric: {
    title: 'Premium Raw Denim Fabric',
    description:
      'High-quality raw denim fabric for your manufacturing needs.',
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
  apparel: ['All', 'Jeans', 'Jackets', 'Shirts', 'Skirts', 'Overalls', 'Dresses', 'Shorts'],
  accessories: ['All', 'Tote', 'Backpacks', 'Hats', 'Belts', 'Pouches', 'Headbands'],
  footwear: ['All', 'Sneakers', 'Boots'],
  lifestyle: [],
  rawfabric: [],  // or rawcloth if that’s your key
};

// Helper to fetch a category’s filters
export function getFiltersForCategory(key: string): string[] {
  return FILTER_OPTIONS[key] || [];
}
