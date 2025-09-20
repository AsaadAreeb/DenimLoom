import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  variant: string;
}

const Navbar = ({ variant }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Decide navbar style
let navClasses =
  "absolute top-0 left-0 w-full z-20 transition-colors duration-300 ";
if (variant === "hero") {
  navClasses += "bg-transparent text-white";
} else {
  navClasses += "bg-slate-900 text-white shadow-md";
}

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacypolicy', label: 'Privacy Policy' },
  ];

  return (
    <nav className={navClasses}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with highlight, no underline */}
          <Link
            to="/"
            className="relative font-boldtext-white transition-all duration-300"
          >
            <span className="text-4xl font-lobster">DenimLoom</span>
          </Link>

          {/* Desktop Links - stick right */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
             <Link
              key={path}
              to={path}
              className={`relative font-medium text-white transition-all duration-300 hover:bg-black ${
                location.pathname === path ? "underline" : ""
              }`}
            >
              {label}
            </Link>
            ))}
          </div>

          {/* Mobile Menu Button - also stays right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>



        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 bg-opacity-95 rounded-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 ${
                    location.pathname === path ? 'underline' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
