import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null); // Allow null or string for the status message

  const handleSuccess = () => {
    setStatus("Your message has been sent successfully!");
    setTimeout(() => setStatus(null), 5000); // Clear message after 5 seconds
  };

  const handleError = () => {
    setStatus("There was an error sending your message. Please try again.");
    setTimeout(() => setStatus(null), 5000); // Clear message after 5 seconds
  };

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

      {/* Contact Form Section */}
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
                  We're here to help and answer any questions you might have. We
                  look forward to hearing from you.
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
                    <p className="text-gray-600">
                      149 Block E, First Floor
                      <br />
                      Nawab Town, Lahore.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM. (EST)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                action="https://formsubmit.co/el/miyafe"
                method="POST"
                className="space-y-6"
                onSubmit={handleSuccess}
                onError={handleError}
              >
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
              {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;