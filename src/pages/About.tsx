import { motion } from 'framer-motion';
import { Users, Target, History } from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-2xl">
              Leading the denim industry with innovation, quality, and sustainable practices since our establishment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Values */}
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
              <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide premium quality denim products while maintaining sustainable practices and fostering innovation.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                A dedicated group of professionals committed to excellence in denim manufacturing and export.
              </p>
            </div>
            <div className="text-center">
              <History className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Legacy</h3>
              <p className="text-gray-600">
                Years of experience in crafting premium denim products for global markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80"
                alt="Denim manufacturing"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Starting as a small denim manufacturer, we've grown into a global export leader through dedication to quality and innovation.
                </p>
                <p>
                  Our commitment to sustainable practices and ethical manufacturing has earned us recognition worldwide.
                </p>
                <p>
                  Today, we continue to push boundaries in denim production while maintaining our core values of quality, sustainability, and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;