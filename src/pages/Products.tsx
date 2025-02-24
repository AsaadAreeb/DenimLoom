import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const mainProducts = [
  { id: 'apparel', title: 'Apparel', description: 'Denim that redefines style, comfort, and confidence!', image: '/apparel.jpg' },
  { id: 'accessories', title: 'Accessories', description: 'Bold denim accents for effortless everyday flair!', image: '/denim-acc-topimg.png' },
  { id: 'footwear', title: 'Footwear', description: 'Step into style with denim-inspired kicks!', image: '/footwear/Denim Boots/Ankle Boots/Ankle Boots 1.png' },
  { id: 'home-and-lifestyle', title: 'Home and Lifestyle Products', description: 'Denim décor—where style meets everyday living!', image: '/denim-home-interior-trend.jpg' },
  { id: 'Denim Premium Raw Cloth', title: 'Premium Raw Denim Fabric', description: 'Unprocessed denim—craft your timeless fashion story!', image: '/Organic Cotton Denim.jpeg' },
];

const Products = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId: string) => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-2xl">Explore our exclusive denim collection—crafted for style, built for comfort.
              Elevate your wardrobe with premium jeans designed to stand out!</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Products Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group flex flex-col h-full"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Image container with 4:3 aspect ratio */}
                <div className="relative pt-[85%] bg-gray-100"> {/* 4:3 aspect ratio */}
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-center"> {/* Increased padding */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-600">{product.description}</p> {/* Larger text */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;