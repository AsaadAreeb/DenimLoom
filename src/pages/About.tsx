import { motion } from 'framer-motion';
import { Users, Target, History } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://www.denimloom.com/about",
    "headline": "About - Denim Manufacturer & Exporter from Pakistan | Denim Loom",
    "description": "Learn about Denim Loom's manufacturing expertise, export experience, and sustainable production practices. Trusted by emerging brands for OEM denim.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Denim Loom",
      "url": "https://www.denimloom.com",
      "description": "Premium denim manufacturer in Pakistan offering OEM, private-label jeans & jackets with low MOQs and competitive pricing. Denim Loom is a Lahore-based manufacturer and exporter of sustainable denim fabrics and apparel.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.denimloom.com/blogs/denimloom_logo.jpg",
        "width": 240,
        "height": 60
      },
      "foundingDate": "2024-12-01",
      "foundingLocation": "Lahore, Punjab, Pakistan",
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
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 4
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Denim Manufacturer & Exporter from Pakistan | Denim Loom</title>
        <meta
          name="description"
          content="Learn about Denim Loom's manufacturing expertise, export experience, and sustainable production practices. Trusted by emerging brands for OEM denim."
        />
        <link rel="canonical" href="https://www.denimloom.com/about" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar variant="hero" />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[70vh] flex items-center text-white pt-32"
        >
          <div className="absolute inset-0">
            <img
              src="/hero/about_hero.jpeg"
              alt="About Denim Loom"
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
              <h1 className="text-4xl font-lobster mb-6">Our Story</h1>
              <p className="text-xl">
                Pioneering the denim industry with innovation, craftsmanship, and sustainability.
                Delivering premium quality denim, crafted with passion and built to last.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-lobster text-center mb-12 text-black">
              Our Core Values
            </h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-courgette mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide premium quality denim products while maintaining sustainable practices and fostering innovation.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-courgette mb-2">Our Team</h3>
                <p className="text-gray-600">
                  A dedicated group of professionals committed to excellence in denim manufacturing and export.
                </p>
              </div>
              <div className="text-center">
                <History className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-courgette mb-2">Our Legacy</h3>
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
                  alt="Denim manufacturing process"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-lobster mb-8 text-black">Our Journey</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Starting as a small denim manufacturer, we've grown into a global export leader through dedication to quality and innovation.</p>
                  <p>Our commitment to sustainable practices and ethical manufacturing has earned us recognition worldwide.</p>
                  <p>Today, we continue to push boundaries in denim production while maintaining our core values of quality, sustainability, and customer satisfaction.</p>
                  <p>Working closely with esteemed clients like <strong>Quiksilver</strong>, <strong>Roxy</strong>, <strong>Fat Face</strong>, and <strong>C&A</strong>, we’ve delivered exceptional results by upholding the highest standards at every stage of production.</p>
                  <p>From meticulous knitting and dyeing to cutting, stitching, and rigorous quality control, every process is handled with care and expertise.</p>
                  <p>We take pride in transforming ideas into reality — ensuring that each product reflects the quality and creativity our clients expect.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-lobster text-center mb-12 text-black">
              What Our Clients Say
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { text: `"Their commitment to quality and innovation has been unparalleled. Always a pleasure to work with."`, author: "Quiksilver" },
                { text: `"Exceptional craftsmanship and timely delivery. They set a benchmark for quality."`, author: "Roxy" },
                { text: `"Their dedication to sustainable practices aligns perfectly with our values. Highly recommended!"`, author: "Fat Face" },
                { text: `"Consistently delivering high-quality denim products that exceed expectations."`, author: "C&A" }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <p className="text-gray-600 italic mb-4">{review.text}</p>
                  <h3 className="text-lg font-courgette text-gray-800">- {review.author}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default About;
