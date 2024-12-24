import { motion } from 'framer-motion';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, index, onViewDetails }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            New
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          {/* <span className="text-2xl font-bold text-indigo-600">{product.price}</span> */}
          <button 
            onClick={() => onViewDetails(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;