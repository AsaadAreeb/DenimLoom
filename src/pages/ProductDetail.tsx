import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../types/product";
import { getProductById } from "../services/productService";
import { getCategoryInfo } from "../utils/categories";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const swipeConfidenceThreshold = 10000;

const ProductDetail = () => {
  const { productName, productId } = useParams<{
    category: string;
    productName: string;
    productId: string;
  }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (productId) {
      const result = getProductById(productId);
      if (!result) {
        setProduct(null);
        return;
      }
      if (result.slug !== productName) {
        navigate(
          `/products/${encodeURIComponent(result.category)}/${result.slug}/${result.id}`,
          { replace: true }
        );
        return;
      }
      setProduct(result);
    }
  }, [productId, productName, navigate]);

  if (!product) {
    return (
      <>
        <Navbar variant="hero" />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Product not found
            </h2>
            <button
              onClick={() => navigate(-1)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer backgroundImage="/footer.jpeg" transparent />
      </>
    );
  }

  const { title: categoryTitle } = getCategoryInfo(product.category);
  const images = product.images.length ? product.images : [product.image];

  const prevImage = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const nextImage = () =>
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const structuredData = {
    "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "category": categoryTitle,
  "image": images.map((img) => `https://www.denimloom.com${img}`),

  "brand": {
    "@type": "Brand",
    "name": "Denim Loom",
    "logo": "https://www.denimloom.com/blogs/denimloom_logo.jpg"
  },

  "manufacturer": {
    "@type": "Organization",
    "name": "Denim Loom",
    "url": "https://www.denimloom.com",
    "logo": "https://www.denimloom.com/blogs/denimloom_logo.jpg"
  },

  "offers": {
    "@type": "Offer",
    "url": `https://wa.me/923440854334?text=Interested+in+${encodeURIComponent(product.name)}`,
    "priceCurrency": "USD",
    "price": "10.00", // you can make this dynamic later
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Denim Loom",
      "url": "https://www.denimloom.com"
    },
  }
  
  };

  return (
    <>
      <Helmet>
  <title>{`${product.name} | ${categoryTitle} | Denim Loom`}</title>
  <meta
    name="description"
    content={product.description}
  />
  <meta property="og:type" content="product" />
  <meta property="og:title" content={`${product.name} | Denim Loom`} />
  <meta property="og:description" content={product.description} />
  <meta
    property="og:image"
    content={`https://www.denimloom.com${images[0]}`}
  />
  <meta
    property="og:url"
    content={`https://www.denimloom.com/products/${product.category}/${product.slug}/${product.id}`}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${product.name} | Denim Loom`} />
  <meta
    name="twitter:description"
    content={product.description}
  />
  <meta
    name="twitter:image"
    content={`https://www.denimloom.com${images[0]}`}
  />
  <link
    rel="canonical"
    href={`https://www.denimloom.com/products/${product.category}/${product.slug}/${product.id}`}
  />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>


      {/* Navbar */}
      <Navbar variant="hero" />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative h-[25vh] sm:h-[35vh] md:h-[40vh] flex items-center justify-center text-center">
  <img
    src={images[0]}
    alt={`${product.name} Hero`}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 text-white px-4">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
      {product.name}
    </h1>
    <p className="text-sm sm:text-base md:text-xl">
      Explore details about our premium {categoryTitle}
    </p>
  </div>
</section>


      <div className="min-h-screen bg-gray-50">
        {/* Back to Category */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <Link
              to={`/products/${encodeURIComponent(product.category!)}`}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Back to {categoryTitle}
            </Link>
          </div>
        </div>

        {/* Product Content */}
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
                {/* Desktop View */}
                <div className="hidden md:block">
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
                              idx === currentImageIndex
                                ? "bg-indigo-600"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile View - Swipeable */}
                <div className="md:hidden relative aspect-square overflow-hidden">
                  <AnimatePresence initial={false} custom={currentImageIndex}>
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={`${product.name} (${currentImageIndex + 1})`}
                      className="w-full h-full object-cover"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -swipeConfidenceThreshold) {
                          nextImage();
                        } else if (swipe > swipeConfidenceThreshold) {
                          prevImage();
                        }
                      }}
                    />
                  </AnimatePresence>

                  {/* Dots on Mobile */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-3 h-3 rounded-full ${
                            idx === currentImageIndex
                              ? "bg-indigo-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
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

                <p className="text-lg text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="prose prose-gray max-w-none mb-8">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.detailedDescription,
                    }}
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <a
  href={`https://wa.me/923440854334?text=${encodeURIComponent(
    `Hello, I'm interested in your product: ${product.name}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    block w-full text-center 
    bg-indigo-600 text-white 
    py-2 text-base 
    rounded-lg hover:bg-indigo-700 
    font-semibold

    md:py-4 md:text-lg
  "
>
  Contact for Quote
</a>

                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Product Features
                  </h3>
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

      {/* Footer */}
      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default ProductDetail;
