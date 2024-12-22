import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-lg max-w-2xl w-full overflow-hidden relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              {product.isNew && (
                <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  New Arrival
                </span>
              )}
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium quality denim</li>
                  <li>• Sustainable manufacturing</li>
                  <li>• Available in multiple sizes</li>
                  <li>• Easy care instructions</li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-indigo-600">
                  ${product.price}
                </span>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProductModal;