import { Facebook, Twitter, Instagram, Mail, LinkedinIcon } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DenimLoom</h3>
            <p className="text-indigo-200">
              Quality denim exports worldwide. Your trusted partner in premium jeans manufacturing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571102117679" className="hover:text-indigo-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/denim-loom/about/" className="hover:text-indigo-200 transition-colors">
              <LinkedinIcon size={24} /> {/* X logo for Twitter */}
              </a>
              <a href="https://www.instagram.com/denim_loom/" className="hover:text-indigo-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a
  href="mailto:sales@denimloom.com"
  className="hover:text-indigo-200 transition-colors"
>
  <Mail size={24} />
</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
          <p>&copy; {new Date().getFullYear()} DenimLoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;