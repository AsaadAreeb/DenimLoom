import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';


const mainProducts = [
  { id: 'apparel', title: 'Apparel', description: 'Denim that redefines style, comfort, and confidence!', image: '/apparel.jpg' },
  { id: 'accessories', title: 'Accessories', description: 'Bold denim accents for effortless everyday flair!', image: '/denim-acc-topimg.png' },
  { id: 'footwear', title: 'Footwear', description: 'Step into style with denim-inspired kicks!', image: '/footwear/Denim Boots/Ankle Boots/Ankle Boots 1.png' },
  { id: 'lifestyle', title: 'Home and Lifestyle Products', description: 'Denim décor—where style meets everyday living!', image: '/denim-home-interior-trend.jpg' },
  { id: 'rawfabric', title: 'Premium Raw Denim Fabric', description: 'Unprocessed denim—craft your timeless fashion story!', image: '/Organic Cotton Denim.jpeg' },
];

const Products = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId: string) => {
    navigate(`/products/${categoryId}`);
  };

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.denimloom.com/products",
  "name": "Our Products – Denim Loom",
  "description": "Browse Denim Loom’s core denim product categories: Apparel, Accessories, Footwear, Lifestyle & Raw Fabric.",
  "provider": { "@id": "https://www.denimloom.com/#organization" },
  "mainEntity": {
    "@type": "OfferCatalog",
    "name": "Denim Loom Product Categories",
    "itemListElement": mainProducts.map((prod, idx) => ({
      "@type": "Offer",
      "position": idx + 1,
      "url": `https://www.denimloom.com/products/${prod.id}`,
      "itemOffered": {
        "@type": "Product",
        "name": prod.title,
        "description": prod.description,
        "image": `https://www.denimloom.com${prod.image}`,
        "provider": { "@id": "https://www.denimloom.com/#organization" },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": 20.00,  
            "minPrice": 10.00,
            "maxPrice": 30.00,
            "priceCurrency": "USD"
          },
          "availability": "https://schema.org/PreOrder",
          "url": "https://wa.me/923440854334?text=Interested"
        }
      }
    }))
  }
};



  return (
    <>
      <Helmet>
        <title>Our Products – Denim Loom</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar variant="hero" />
    <div>
        {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center text-white pt-32"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero/products_hero.jpeg" // <- add your products hero banner here
            alt="Denim Loom Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative">
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="max-w-xl text-left ml-3 md:ml-[200px]" 
  >
    <h1 className="text-4xl font-lobster mb-6">Our Products</h1>
    <p className="text-xl">
      Explore our exclusive denim collection—crafted for style, built for comfort.  
      Elevate your wardrobe with premium jeans designed to stand out!
    </p>
  </motion.div>
</div>
      </motion.section>

      {/* Main Products Section */}
{/* Main Products Section */}
<motion.section
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="py-20 bg-gray-100"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {mainProducts.map((product) => (
        <motion.div
  key={product.id}
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group flex flex-col h-full max-w-xs mx-auto sm:max-w-none"
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => handleCardClick(product.id)}
>
          {/* Image container with 4:3 aspect ratio */}
          <div className="relative pt-[85%] bg-gray-100">
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
          <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
              {product.title}
            </h3>
            <p className="text-lg text-gray-600">{product.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

    </div>
    <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default Products;