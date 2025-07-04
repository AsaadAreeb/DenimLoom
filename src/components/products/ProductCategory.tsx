import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '../../types/product';
import { getProductsByCategory } from '../../services/productService';

// Info about each category (for the hero section)
const getCategoryInfo = (category: string) => {
  const categoryInfo: Record<string, { title: string; description: string }> = {
    apparel: {
      title: 'Denim Apparel',
      description: 'Discover our premium collection of denim clothing, from classic jeans to stylish jackets.',
    },
    accessories: {
      title: 'Denim Accessories',
      description: 'Complete your look with our range of denim accessories and lifestyle products.',
    },
    footwear: {
      title: 'Denim Footwear',
      description: 'Step out in style with our denim-inspired footwear collection.',
    },
    'home-and-lifestyle': {
      title: 'Home & Lifestyle',
      description: 'Bring denim style into your living space with our home and lifestyle products.',
    },
    'Denim Premium Raw Cloth': {
      title: 'Premium Raw Denim Fabric',
      description: 'High-quality raw denim fabric for your manufacturing needs.',
    },
  };

  return categoryInfo[category] || { title: 'Products', description: 'Explore our product collection.' };
};

// Filter options per category
const getFiltersForCategory = (category: string): string[] => {
  const filters: Record<string, string[]> = {
    apparel: ['All', 'Jeans', 'Jackets', 'Shirts', 'Skirts', 'Overalls', 'Dresses', 'Shorts'],
    accessories: ['All', 'Tote', 'Backpacks', 'Hats', 'Belts', 'Pouches', 'Headbands'],
    footwear: ['All', 'Sneakers', 'Boots'],
    'home-and-lifestyle': [],
    'Denim Premium Raw Cloth': [],
  };

  return filters[category] || [];
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categoryInfo = getCategoryInfo(category || '');
  const filterOptions = getFiltersForCategory(category || '');

  useEffect(() => {
    if (category) {
      const fetched = getProductsByCategory(category);
      setProducts(fetched);
      setActiveFilter('All'); // reset filter on category change
    }
  }, [category]);

  const handleProductClick = (productId: string) => {
    navigate(`/category/${encodeURIComponent(category || '')}/product/${productId}`);
  };

  const filteredProducts =
    activeFilter === 'All' || filterOptions.length === 0
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h1 className="text-4xl font-bold mb-4">{categoryInfo.title}</h1>
            <p className="text-xl max-w-2xl">{categoryInfo.description}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters & Product Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Buttons */}
          {filterOptions.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
                    activeFilter === option
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="cursor-pointer h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">No Products Found</h3>
              <p className="text-gray-600">Try selecting a different product type.</p>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default ProductCategory;
