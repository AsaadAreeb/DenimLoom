import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { Product, ProductCategory } from '../../types/product';

interface ProductGridProps {
  currentPage: number;
  selectedCategory: ProductCategory | 'all';
  onPageChange: (page: number) => void;
  onViewDetails: (product: Product) => void;
}

const ITEMS_PER_PAGE = 9;

const ProductGrid = ({ 
  currentPage, 
  selectedCategory, 
  onPageChange,
  onViewDetails 
}: ProductGridProps) => {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
      >
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onViewDetails={onViewDetails}
          />
        ))}
      </motion.div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductGrid;