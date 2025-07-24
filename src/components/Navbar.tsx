import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    // { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacypolicy', label: 'Privacy Policy'},
  ];

  return (
    // <nav className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white shadow-lg ">
    <nav className="relative bg-denim-gradient text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold">
            {/* <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text shadow-lg ">Denim</span>
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text shadow-lg">Loom</span> */}
             <span className="text-4xl bg-white font-lobster text-transparent bg-clip-text">DenimLoom</span>
            
          </Link>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-[1px] bg-slate-900 shadow-[0_-40px_80px_rgba(255,255,255,0.5)]"></div>

          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative font-medium text-gray-300 transition-all duration-300 hover:text-white ${location.pathname === path ? 'text-white' : ''
                  }`}
              >
                {label}
                {location.pathname === path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-300 rounded-md"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-indigo-800 ${location.pathname === path ? 'bg-indigo-800' : ''
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