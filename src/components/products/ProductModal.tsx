import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  isNew?: boolean;
  category?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = product?.images || [product?.image || ''];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-4xl mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image carousel */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={productImages[currentImageIndex]}
                // alt={${product.name} - View ${currentImageIndex + 1}}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Carousel controls */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {productImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p>
                <strong>Category:</strong> {product.category}
              </p>
                
              <p>
                <strong>SKU:</strong> {product.id}
              </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
              {product.isNew && (
                <span className="ml-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  New
                </span>
              )}
            </div>
            
            {/* Additional product details */}
            <div className="space-y-4 text-gray-600">
           
              {/* <p className="text-sm">
                Free shipping on orders over $50
              </p> */}
            </div>

            {/* Add to cart button */}
            {/* <button className="mt-auto bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;