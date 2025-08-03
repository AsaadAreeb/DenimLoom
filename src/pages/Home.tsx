import { ArrowRight, Award, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.denimloom.com/#website",
        "url": "https://www.denimloom.com/",
        "name": "Denim Loom",
        "alternateName": "DenimLoom",
        "description": "Premium denim exports from Pakistan with global quality manufacturing.",
        "publisher": { "@id": "https://www.denimloom.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.denimloom.com/#organization",
        "name": "Denim Loom",
        "url": "https://www.denimloom.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.denimloom.com/blogs/denimloom_logo.jpg",
          "width": 240,
          "height": 60
        },
        "sameAs": [
          "https://www.facebook.com/denimloom",
          "https://www.linkedin.com/company/denim-loom/",
          "https://www.instagram.com/denim_loom/"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+92-344-0854334",
            "email": "admin@denimloom.com"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80"
            alt="Denim fabric"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-blue-600/60 to-indigo-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-lobster mb-6">
              Premium Denim Exports Worldwide
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
            Crafting premium jeans with precision, style, and unmatched quality.
            Your trusted partner in denim manufacturing and worldwide distribution!
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-denim-gradient hover:text-white transition-colors duration-200"
            >
              Get Started <ArrowRight className="ml-2" />
            </a>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-courgette mb-2 ">Global Reach</h3>
              <p className="text-gray-600">Exporting premium denim products to over 50 countries worldwide.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-courgette mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes for every product.</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-courgette mb-2">Industry Leaders</h3>
              <p className="text-gray-600">Setting trends and standards in denim manufacturing.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        //  className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
         className="relative py-20 bg-white text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-lobster mb-8 bg-denim-gradient bg-clip-text text-transparent">Ready to Partner With Us?</h2>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-denim-gradient text-white hover:text-gray-300 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </motion.section>
    </div>
    </>
  );
};

export default Home;
