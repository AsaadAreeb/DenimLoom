import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="overflow-hidden">
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
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-2xl">
              Learn how we handle your personal information at Denim Loom.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-800">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Last Updated: 2025-06-14</h2>
            <p>
              At Denim Loom, your privacy is important to us. This Privacy Policy outlines how we
              collect, use, and protect your personal information when you visit our website or
              interact with us online.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Your name, email address, and contact details submitted through our forms.</li>
              <li>
                Business-related details (e.g. company name, product interest) when you request a
                quote or consultation.
              </li>
              <li>
                Technical data such as browser type, device info, and IP address for analytics.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your inquiries</li>
              <li>To provide requested product or service information</li>
              <li>To improve our website and services</li>
              <li>To maintain communication with you</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p>
              We take reasonable steps to protect your personal data from unauthorized access,
              disclosure, or loss.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Third Parties</h3>
            <p>
              We do not sell your personal data. Your information may be shared only with trusted
              service providers involved in operating our business (such as email platforms or
              logistics support).
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your personal data by
              contacting us at{" "}
              <a
                href="mailto:info@denimloom.com"
                className="text-indigo-600 hover:underline font-medium"
              >
                admin@denimloom.com
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@denimloom.com"
                  className="text-indigo-600 hover:underline"
                >
                  admin@denimloom.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +1 530 451 6004
              </li>
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
      </section>
    </div>
  );
};

export default PrivacyPolicy;
