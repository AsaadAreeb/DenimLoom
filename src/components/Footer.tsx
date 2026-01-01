
import { Facebook, Instagram, Mail, LinkedinIcon } from 'lucide-react';
import { Link } from "react-router-dom";

interface FooterProps {
  backgroundImage?: string;
  transparent?: boolean;
}

const Footer: React.FC<FooterProps> = ({ backgroundImage, transparent }) => {
  return (
    <footer
      className={`relative text-white ${
        transparent ? "bg-transparent" : "bg-indigo-900"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Optional overlay when background image is set */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="relative w-full px-6 py-12 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Logo / Info */}
          <div>
            <h3 className="text-xl font-lobster mb-4">DenimLoom</h3>
            <p className="text-indigo-200">
              Elevating denim craftsmanship worldwide. <br /> Your trusted partner in
              premium jeans manufacturing and exports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-courgette mb-4">Quick Links</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-courgette mb-4">Customer Care</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              
              
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-courgette mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/denimloom"
                className="hover:text-indigo-200 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/denim-loom/about/"
                className="hover:text-indigo-200 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="https://www.instagram.com/denim_loom/"
                className="hover:text-indigo-200 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:admin@denimloom.com"
                className="hover:text-indigo-200 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom line */}
        <div className="mt-8 pt-8 font-courgette  text-center text-indigo-200">
          <p>&copy; {new Date().getFullYear()} DenimLoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
