import { ArrowRight, Award, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
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
          <div className="absolute inset-0 bg-indigo-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Denim Exports Worldwide
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Your trusted partner in high-quality jeans manufacturing and global distribution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-100 transition-colors duration-200"
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
              <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Exporting premium denim products to over 50 countries worldwide.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes for every product.</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
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
         className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Partner With Us?</h2>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-100 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;