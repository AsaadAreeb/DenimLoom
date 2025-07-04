import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types/product';
import { getProductById } from '../services/productService';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (productId) {
      const result = getProductById(productId);
      setProduct(result);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const images = product.images.length ? product.images : [product.image];

  const prevImage = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const nextImage = () =>
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Category */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
            <Link
            to={`/products/${encodeURIComponent(product.category!)}`}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
            Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Carousel */}
            <div className="relative bg-gray-100">
              <div className="aspect-square">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${product.name} (${currentImageIndex + 1})`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          idx === currentImageIndex ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4 space-x-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.name}
                </h1>
                {product.isNew && (
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}
              </div>

              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              <div className="prose prose-gray max-w-none mb-8">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.detailedDescription,
                  }}
                />
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 font-semibold text-lg">
                  Contact for Quote
                </button>
                {/* <button className="w-full border-2 border-indigo-600 text-indigo-600 py-4 rounded-lg hover:bg-indigo-50 font-semibold text-lg">
                  Add to Wishlist
                </button> */}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Product Features</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Premium quality materials</li>
                  <li>Professional craftsmanship</li>
                  <li>Competitive wholesale pricing</li>
                  <li>Flexible minimum order quantities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
