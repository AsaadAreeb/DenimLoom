import { motion } from "framer-motion";

const Contact = () => {
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
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-2xl">
              Get in touch with our team for inquiries about our products and
              services.
            </p>
          </motion.div>
        </div>
      </motion.section>


      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help and answer any questions you might have.
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">sales@denimloom.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+92 344 0854334</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">149 Block E, Nawab Town, Lahore</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM (EST)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Google Forms Embed */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdQlE5-rSHvL6IxXfiH0QyBySSPoKAzyxpAC92abbMFB80HUg/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg border border-gray-300"
              >
                Loading…
              </iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
