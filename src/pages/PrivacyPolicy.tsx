import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';


const PrivacyPolicy = () => {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.denimloom.com/privacypolicy",
  "name": "Privacy Policy – Denim Loom",
  "description": "Learn how Denim Loom collects, uses, protects, and handles your personal data.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.denimloom.com/#website"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://www.denimloom.com/#organization"
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Denim Loom Privacy Policy",
    "headline": "Denim Loom Privacy Policy",
    "datePublished": "2025-01-01",
    "dateModified": "2025-06-14",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.denimloom.com/#organization"
    }
  }
};


  return(
    <>
      <Helmet>
        <title>Privacy Policy – Denim Loom</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar variant="hero" />
  <div className="flex flex-col">
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
              src="/hero/privacy_hero.jpeg"  // replace with your image path
              alt="Privacy Policy Denim Loom"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Left-aligned text content */}
            <div className="relative">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-xl text-left ml-3 md:ml-[200px]" 
              >
                <h1 className="text-4xl font-lobster mb-6">Privacy Policy</h1>
                <p className="text-xl">
                  Learn how we handle your personal information at Denim Loom.
                </p>
              </motion.div>
            </div>

        </motion.section>

    {/* Content Section */}
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-800">
        {/** Intro */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base leading-relaxed">
            At Denim Loom, your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your personal information when you visit our website or
            interact with us online.
          </p>
        </motion.div>

        {/** Sections with lists */}
        {[
          {
            title: "Information We Collect",
            content: [
              "Your name, email address, and contact details submitted through our forms.",
              "Business-related details (e.g., company name, product interest) when you request a quote or consultation.",
              "Technical data such as browser type, device info, and IP address for analytics.",
            ],
          },
          {
            title: "How We Use Your Information",
            content: [
              "To respond to your inquiries",
              "To provide requested product or service information",
              "To improve our website and services",
              "To maintain communication with you",
            ],
          },
        ].map(({ title, content }, idx) => (
          <motion.div
            key={idx}
            initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm sm:text-base">
              {content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/** Single paragraphs */}
        {[
          "We take reasonable steps to protect your personal data from unauthorized access, disclosure, or loss.",
          "We do not sell your personal data. Your information may be shared only with trusted service providers involved in operating our business (such as email platforms or logistics support).",
        ].map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ x: idx % 2 === 0 ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {idx === 0 ? 'Data Security' : 'Third Parties'}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">{text}</p>
          </motion.div>
        ))}

        {/** Rights & Contact */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Your Rights</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            You may request access to, correction of, or deletion of your personal data by
            contacting us at{' '}
            <a href="mailto:admin@denimloom.com" className="text-indigo-600 hover:underline">
              admin@denimloom.com
            </a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm sm:text-base space-y-1 list-none">
            <li><strong>Email:</strong>{' '}
              <a href="mailto:admin@denimloom.com" className="text-indigo-600 hover:underline">
                admin@denimloom.com
              </a>
            </li>
            <li><strong>Phone:</strong> +92 344 0854334</li>
            <li><strong>Website:</strong>{' '}
              <a href="https://www.denimloom.com" className="text-indigo-600 hover:underline" target="_blank" rel="noopener">
                www.denimloom.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Last updated footer */}
      <div className="text-center text-xs text-gray-500 py-4">
        Last Updated: June 14, 2025
      </div>
    </section>
  </div>
  <Footer backgroundImage="/footer.jpeg" transparent />
  </>
  )
};

export default PrivacyPolicy;