import {
  ArrowRight,
  TrendingUp,
  Shirt,
  Recycle,
  Award,
  Rocket,
  Leaf,
  Globe,
  Bike,
  Snowflake,
  Heart,
  Instagram,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import MarqueeStrip from "../components/MarqueeStrip";
import ImageShowcase from "../components/ImageShowcase";
import Footer from "../components/Footer";
import NewsletterPopup from "../components/NewsletterPopup";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.denimloom.com/#website",
        url: "https://www.denimloom.com/",
        name: "Denim Loom",
        alternateName: "DenimLoom",
        description:
          "Leading denim manufacturing company in Pakistan specializing in denim jeans manufacturing, sustainable denim production, and OEM private-label denim solutions. Request samples and production quotes today from Denim Loom.",
        publisher: { "@id": "https://www.denimloom.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://www.denimloom.com/#organization",
        name: "Denim Loom",
        url: "https://www.denimloom.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.denimloom.com/blogs/denimloom_logo.jpg",
          width: 240,
          height: 60,
        },
        sameAs: [
          "https://www.facebook.com/denimloom",
          "https://www.linkedin.com/company/denim-loom/",
          "https://www.instagram.com/denim_loom/",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            telephone: "+92-344-0854334",
            email: "admin@denimloom.com",
          },
        ],
      },
    ],
  };

  const features = [
    { icon: Globe, title: "Global Reach", text: "Exporting premium denim products to over 50 countries worldwide." },
    { icon: Award, title: "Quality Assured", text: "Rigorous quality control processes for every product." },
    { icon: TrendingUp, title: "Industry Leaders", text: "Setting trends and standards in denim manufacturing." },
    { icon: Shirt, title: "Built to Serve", text: "Timeless craftsmanship meets organic innovation in every thread." },
    { icon: Rocket, title: "Your Agility Advantage", text: "Adaptive designs built for comfort, performance, and individuality." },
    { icon: Leaf, title: "Sustainable Denim Fashion", text: "Eco-friendly production with uncompromising durability and aesthetics." },
    { icon: Recycle, title: "Cleaner Indigo (Aniline-Free)", text: "Redefining indigo dyeing with cleaner, aniline-free technology." },
    { icon: Factory, title: "OG Selvedge Denim", text: "There is only one OG; made with authenticity and precision." },
    { icon: Bike, title: "Ready Steady Go!", text: "Performance jeans designed to move with you; on and off the road." },
    { icon: Snowflake, title: "Winter is Coming", text: "Layer up with premium denim built to perform in cold conditions." },
    { icon: Heart, title: "Supporting Future Entrepreneurs", text: "Join a global movement that values sustainability and creativity." },
    { icon: Instagram, title: "We Are on Instagram", text: "Discover denim stories, behind-the-scenes looks, and product releases." },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconAnim = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Denim Jeans & Sustainable Denim Manufacturer | Denim Loom</title>
        <meta
          name="description"
          content="Denim Loom is a leading denim manufacturing company in Pakistan specializing in denim jeans manufacturing, sustainable denim production, and private-label."
        />
        <link rel="canonical" href="https://www.denimloom.com/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Navbar for Home (transparent on hero) */}
      <Navbar variant="hero" />
      <NewsletterPopup />

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
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              {/* <h1 className="text-4xl md:text-6xl font-lobster mb-6">
                <span className="text-white px-2">Premium Denim Manufacturer & Exporter</span>
              </h1> */}

              <h1 className="text-4xl md:text-6xl font-lobster mb-6 leading-tight">
                <span className="text-white px-2">
                  Sustainable Denim Jeans Manufacturer
                </span>
              </h1>

              {/* <p className="text-xl mb-8 max-w-2xl text-white">
                Crafting premium jeans with precision, style, and unmatched quality. <br />
                Your trusted partner in denim manufacturing and worldwide distribution!
              </p> */}

              <p className="text-xl mb-8 max-w-2xl text-white">
                Denim Loom is a trusted name in denim manufacturing and denim jeans production; offering sustainable denim manufacturing solutions for global brands and startups.
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

        {/* Animated Features Section */}
        {/* <h2 className="text-3xl font-lobster text-center mb-12 text-gray-900">
  Why Choose Denim Loom for Denim Manufacturing & Sustainable Jeans Production
</h2>
        <section className="py-20 bg-gray-100">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
            >
              
              {features.map(({ icon: Icon, title, text }, i) => (
                <motion.div key={i} variants={item} className="text-center">
                  <motion.div variants={iconAnim} className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-blue-500" />
                  </motion.div>
                  <h2 className="text-xl font-courgette mb-2">{title}</h2>
                  <p className="text-gray-600">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Animated Features Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Section Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-lobster text-gray-900 mb-6"
    >
      Why Choose Denim Loom
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16"
    >
      Your trusted partner for <strong>denim manufacturing</strong>,{" "}
      <strong>denim jeans production</strong>, and{" "}
      <strong>sustainable denim solutions</strong> — crafted with innovation,
      precision, and care.
    </motion.p>

    {/* Features Grid */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14"
    >
      {features.map(({ icon: Icon, title, text }, i) => (
        <motion.div
          key={i}
          variants={item}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
        >
          <motion.div
            variants={iconAnim}
            className="flex justify-center mb-6 text-blue-500"
          >
            <Icon className="w-12 h-12" />
          </motion.div>
          <h2 className="text-2xl font-courgette mb-3 text-gray-800">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{text}</p>
        </motion.div>
      ))}
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
            <h1 className="text-4xl font-lobster mb-8 text-black">
              Ready to Start Your Denim Manufacturing Partnership?
            </h1>
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
