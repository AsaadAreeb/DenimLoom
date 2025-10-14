// src/components/products/ProductCategory.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '../../types/product';
import { getProductsByCategory } from '../../services/productService';
import { getCategoryInfo, getFiltersForCategory } from '../../utils/categories';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categoryInfo = getCategoryInfo(category || '');
  const filterOptions = getFiltersForCategory(category || '');

  // 🧩 Load category products
  useEffect(() => {
    if (category) {
      setProducts(getProductsByCategory(category));
      setActiveFilter('All');
    }
  }, [category]);

  // 🧭 Handle navigation to product detail page
  const handleProductClick = (product: Product) => {
    navigate(
      `/products/${encodeURIComponent(product.category)}/${product.slug}/${product.id}`
    );
  };

  // 🧠 Dynamic SEO Title and Description Logic
  let seoTitle = '';
  let seoDescription = '';

  switch (categoryInfo.title) {
    case 'Denim Apparel':
      seoTitle = 'Denim Apparel - Jeans, Biker Jeans, Skirts | Denim Loom';
      seoDescription =
        'Explore premium denim apparel: jeans, biker jeans, and skirts crafted with expert tailoring and sustainable denim technology.';
      break;
    case 'Denim Accessories':
      seoTitle = 'Denim Accessories - Tote Bags, Hats, Pouches | Denim Loom';
      seoDescription =
        'Discover our collection of denim accessories: tote bags, hats, and pouches designed for style and durability.';
      break;
    case 'Denim Footwear':
      seoTitle = 'Denim Footwear - Ankle Boots, Knee-high Boots, Sneakers | Denim Loom';
      seoDescription =
        'Step into style with Denim Loom\'s premium denim footwear collection: ankle boots, knee-high boots, and sneakers built for comfort and craft.';
      break;
    case 'Home & Lifestyle':
      seoTitle = 'Denim Home & Lifestyle - Cushion Covers, Table Runners, Aprons | Denim Loom';
      seoDescription =
        'Elevate your home with sustainable denim home décor: cushion covers, table runners, aprons, and lifestyle pieces.';
      break;
    case 'Premium Raw Denim Fabric':
      seoTitle = 'Denim Fabric - Organic Raw Cotton | Denim Loom';
      seoDescription =
        'Shop premium raw denim fabric: organic raw cotton denim for OEM and private-label denim manufacturing.';
      break;
    default:
      seoTitle = `${categoryInfo.title} | Denim Loom`;
      seoDescription = categoryInfo.description || 'Explore our premium denim collection.';
  }

  // 🧾 Structured Data (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `https://www.denimloom.com/products/${category}`,
    name: seoTitle,
    description: seoDescription,
    provider: { "@id": "https://www.denimloom.com/#organization" },
    mainEntity: {
      "@type": "OfferCatalog",
      name: `${categoryInfo.title} Collection`,
      itemListElement: products.map((prod, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        url: `https://www.denimloom.com/products/${prod.category}/${prod.slug}/${prod.id}`,
        itemOffered: {
          "@type": "Product",
          name: prod.name,
          description: prod.description,
          image: `https://www.denimloom.com${prod.image}`,
          brand: {
            "@type": "Brand",
            name: "Denim Loom",
            logo: "https://www.denimloom.com/blogs/denimloom_logo.jpg"
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url:
              "https://wa.me/923440854334?text=Interested+in+" +
              encodeURIComponent(prod.name)
          }
        }
      }))
    }
  };

  // 🧩 Filtered product list
  const filteredProducts =
    activeFilter === 'All' || filterOptions.length === 0
      ? products
      : products.filter(p =>
          p.name.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.denimloom.com/products/${category}`}
        />
        <meta
          property="og:image"
          content={categoryInfo.image || '/hero/products_hero.jpeg'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <link
          rel="canonical"
          href={`https://www.denimloom.com/products/${category}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar variant="hero" />

      <div className="min-h-screen">
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
              src={categoryInfo.image || '/hero/products_hero.jpeg'}
              alt={categoryInfo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Text content */}
          <div className="relative max-w-xl ml-3 md:ml-[200px]">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-lobster mb-6"
            >
              {categoryInfo.title}
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl"
            >
              {categoryInfo.description}
            </motion.p>
          </div>
        </motion.section>

        {/* Filter Buttons & Product Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filterOptions.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-3 justify-center">
                {filterOptions.map(opt => (
                  <button
                    key={opt}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
                      activeFilter === opt
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveFilter(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    className="cursor-pointer h-full"
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleProductClick(product)}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different product type.
                </p>
              </div>
            )}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default ProductCategory;
