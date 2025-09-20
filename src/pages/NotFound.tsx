import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar variant={"hero"} />

      {/* Main Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] flex items-center justify-center text-center"
      >
        <div className="absolute inset-0">
          {/* Optional background image like hero */}
          <img
  src="/hero/404_page_hero.jpg"
  alt="Page not found background"
  className="w-full h-full object-cover object-center"
/>

          <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        </div>

        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
          <p className="text-2xl text-gray-200 font-semibold mb-6">
            Oops! Page Not Found
          </p>
          <p className="text-gray-300 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg font-bold hover:bg-denim-gradient hover:text-white transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </motion.section>

      {/* Footer (with background like Home) */}
      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default NotFound;
