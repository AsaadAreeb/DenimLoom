import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react"; // Import useState for handling state

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null); // State for handling messages
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null); // State for handling success/error type

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target as HTMLFormElement); // Ensure event.target is cast to HTMLFormElement

    try {
      const response = await fetch("https://formsubmit.co/admin@denimloom.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatusType("success");
        setStatusMessage("Your message was sent successfully! We will get back to you shortly.");
        // Reset the form
        (event.target as HTMLFormElement).reset(); // Correctly cast event.target to HTMLFormElement
        setTimeout(() => {
          setStatusType(null);
          setStatusMessage("");
        }, 7000);
      } else {
        setStatusType("error");
        setStatusMessage("There was an error submitting the form. Please try again.");
        setTimeout(() => {
          setStatusType(null);
          setStatusMessage("");
        }, 7000);
      }
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Network error. Please try again.");
    }
  };


  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        // className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
        className="relative py-20 bg-denim-gradient text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl font-lobster mb-6">Contact Us</h1>
            <p className="text-xl max-w-2xl">
              Get in touch with our team for inquiries about our products and
              services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-courgette mb-6 bg-denim-gradient bg-clip-text text-transparent">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help and answer any questions you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-700" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">admin@denimloom.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-700" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 530 451 6004</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-700" />
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
                  <Clock className="w-6 h-6 text-blue-700" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM. (EST)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleFormSubmit} // Attach the custom submit handler
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

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
                    rows={4} // Fixed the rows type error
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-denim-gradient text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>

              {/* Conditional message display */}
              {statusMessage && (
                <div
                  className={`mt-6 p-4 text-center text-white rounded-lg ${statusType === 'success'
                      ? 'bg-green-600'
                      : 'bg-red-600'
                    }`}
                >
                  {statusMessage}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
