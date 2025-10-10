import { ArrowRight, Award, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar'; // Import Navbar
import MarqueeStrip from '../components/MarqueeStrip';
import ImageShowcase from '../components/ImageShowcase';
import Footer from "../components/Footer";

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
        "description": "Premium denim manufacturer in Pakistan offering OEM, private-label jeans & jackets with low MOQs and competitive pricing. Request samples & lead times today.",
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
      <title>Denim Manufacturer - OEM & Low MOQ Denim Factory | Denim Loom</title>
      <meta
        name="description"
        content="Premium denim manufacturer in Pakistan offering OEM, private-label jeans & jackets with low MOQs and competitive pricing. Request samples & lead times today."
      />
      <link rel="canonical" href="https://www.denimloom.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Navbar for Home (transparent on hero) */}
      <Navbar variant="hero" />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[100vh] flex items-center"
        >
          <div className="absolute inset-0">
            <img
              src="/model1.jpg"
              loading="eager" 
              fetchPriority="high"
              alt="Denim model"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-lobster mb-6 relative">
                <span className="text-white px-2">
                  Premium Denim Exports Worldwide
                </span>
              </h1>

              <p className="text-xl mb-8 max-w-2xl relative">
                <span className="text-white">
                  Crafting premium jeans with precision, style, and unmatched quality. <br />
                  Your trusted partner in denim manufacturing and worldwide distribution!
                </span>
              </p>

              <a
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg font-bold hover:bg-denim-gradient hover:text-white transition-colors duration-200"
              >
                Get Your Samples Now <ArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.section>

{/* Marquee Offers Strip */}
<MarqueeStrip />


        {/* Image Showcase (3 auto-sliding rows) */}
<ImageShowcase />

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-courgette mb-2">Global Reach</h3>
                <p className="text-gray-600">Exporting premium denim products to over 50 countries worldwide.</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-courgette mb-2">Quality Assured</h3>
                <p className="text-gray-600">Rigorous quality control processes for every product.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
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
          className="relative py-20 bg-gray-100 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-lobster mb-8 text-black">
  Ready to Partner With Us?
</h2>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 border-2 border-blue-600 rounded-lg font-bold hover:bg-denim-gradient hover:text-white hover:border-transparent transition-colors duration-200"
            >
              Contact Us Today <ArrowRight className="ml-2" />
            </a>
          </div>
        </motion.section>
      </div>
       <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default Home;
