import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://www.denimloom.com/privacypolicy",
    name: "Privacy Policy - Denim Loom",
    description:
      "Read Denim Loom's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or contact us.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.denimloom.com/#website",
    },
    about: {
      "@type": "Organization",
      "@id": "https://www.denimloom.com/#organization",
    },
    mainEntity: {
      "@type": "CreativeWork",
      name: "Denim Loom Privacy Policy",
      headline: "Denim Loom Privacy Policy",
      datePublished: "2025-01-01",
      dateModified: "2025-06-14",
      publisher: {
        "@type": "Organization",
        "@id": "https://www.denimloom.com/#organization",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.denimloom.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://www.denimloom.com/privacypolicy",
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - How We Collect, Use, and Protect Your Information</title>
        <meta
          name="description"
          content="Read Denim Loom's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or contact us."
        />
        <meta property="og:title" content="Privacy Policy - Denim Loom" />
        <meta
          property="og:description"
          content="Learn how Denim Loom protects your privacy and handles your personal data responsibly in compliance with data protection standards."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.denimloom.com/privacypolicy"
        />
        <meta
          property="og:image"
          content="https://www.denimloom.com/blogs/denimloom_logo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Denim Loom" />
        <meta
          name="twitter:description"
          content="Understand Denim Loom's data protection practices and your privacy rights."
        />
        <link rel="canonical" href="https://www.denimloom.com/privacypolicy" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar variant="hero" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center text-white pt-32"
      >
        <div className="absolute inset-0">
          <img
            src="/hero/privacy_hero.jpeg"
            alt="Privacy Policy – Denim Loom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-xl ml-3 md:ml-[200px]">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-lobster mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl"
          >
            Learn how we handle your personal information at Denim Loom.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-800">
          {/* Introduction */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-base leading-relaxed">
              At Denim Loom, we are committed to protecting your personal data and privacy. This
              Privacy Policy outlines the types of information we collect, how we use it, and your
              rights regarding your information.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal & Usage Data</h3>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Your name, email address, phone, company name, and other contact details when you fill forms.</li>
              <li>Business or project details (e.g. denim style, quantity) when you request quotes or samples.</li>
              <li>Technical metadata such as IP address, browser type, device model, and usage logs.</li>
              <li>Cookies and similar tracking technologies (if used) to learn how you use our site.</li>
            </ul>
          </motion.div>

          {/* How We Use Your Data */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
            <h3 className="text-lg font-medium mb-2">Purposes & Legal Basis</h3>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>To respond to your inquiries or customer support requests</li>
              <li>To provide product, sample, or service information you request</li>
              <li>To manage orders, shipments, and invoicing</li>
              <li>To analyze and improve our website, services, and client experience</li>
              <li>To communicate promotions, updates, or news (if you opt in)</li>
            </ul>
          </motion.div>

          {/* Data Minimization & Retention */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Data Minimization & Retention</h2>
            <p className="text-base leading-relaxed">
              We collect only the data necessary for the purpose stated. We retain data no longer than needed,
              typically for as long as you remain our customer or in compliance with legal or contractual obligations.
            </p>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
            <p className="text-base leading-relaxed">
              We use industry-standard technical and organizational measures to protect your data from unauthorized
              access, alteration, disclosure or destruction. This includes access controls, encryption (where feasible),
              secure networks, and regular audits.
            </p>
          </motion.div>

          {/* Third-Party Sharing */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Third-Party Sharing</h2>
            <p className="text-base leading-relaxed mb-2">
              We do not sell your personal data. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Service providers who assist with email, analytics, shipping, or support</li>
              <li>Law enforcement or regulators when required by law or valid legal request</li>
              <li>Affiliates or business partners if you consent or as part of a merger or acquisition</li>
            </ul>
          </motion.div>

          {/* Cross-Border Transfers */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">International Data Transfers</h2>
            <p className="text-base leading-relaxed">
              If we transfer data outside Pakistan, we will ensure an adequate level of protection (via contract, consent, or relevant safeguards) in compliance with applicable laws.
            </p>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
            <p className="text-base leading-relaxed">
              You have rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Right to access your data</li>
              <li>Right to correct / update your data</li>
              <li>Right to delete (erasure) your data</li>
              <li>Right to withdraw consent for processing</li>
              <li>Right to restrict or object to processing in certain cases</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="mailto:admin@denimloom.com" className="text-indigo-600 hover:underline">
                admin@denimloom.com
              </a>
              .
            </p>
          </motion.div>

          {/* Children & Sensitive Data */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Children & Sensitive Data</h2>
            <p className="text-base leading-relaxed">
              We do not knowingly collect sensitive personal data (e.g., race, health, ethnicity) or data from minors. If you become aware we have collected such data mistakenly, contact us to request removal.
            </p>
          </motion.div>

          {/* Changes to this Policy */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of major changes via email or prominent notice. The “Last Updated” date below indicates when this was last revised.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <ul className="text-base space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:admin@denimloom.com" className="text-indigo-600 hover:underline">
                  admin@denimloom.com
                </a>
              </li>
              <li><strong>Phone:</strong> +92 344 0854334</li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.denimloom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  www.denimloom.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
          Last Updated: June 14, 2025
        </div>
      </section>

      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default PrivacyPolicy;
