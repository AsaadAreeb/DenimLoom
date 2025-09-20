// import { Facebook, Instagram, Mail, LinkedinIcon } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-indigo-900 text-white">
//       {/* Line at the top of the footer */}
//     {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[1px] bg-slate-900 shadow-[0_40px_80px_rgba(255,255,255,0.5)]"></div> */}
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-lobster mb-4">DenimLoom</h3>
//             <p className="text-indigo-200">
//               Elevating denim craftsmanship worldwide—your trusted partner in premium jeans manufacturing and exports.
//             </p>

//           </div>
//           <div>
//             <h4 className="text-lg font-courgette mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-indigo-200">
//               {/* <li><a href="/" className="hover:text-white transition-colors">Home</a></li> */}
//               <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
//               <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
//               <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
//               <li><a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>

//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-courgette mb-4">Connect With Us</h4>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/denimloom" className="hover:text-indigo-200 transition-colors">
//                 <Facebook size={24} />
//               </a>
//               <a href="https://www.linkedin.com/company/denim-loom/about/" className="hover:text-indigo-200 transition-colors">
//                 <LinkedinIcon size={24} /> {/* X logo for Twitter */}
//               </a>
//               <a href="https://www.instagram.com/denim_loom/" className="hover:text-indigo-200 transition-colors">
//                 <Instagram size={24} />
//               </a>
//               <a
//                 href="mailto:admin@denimloom.com"
//                 className="hover:text-indigo-200 transition-colors"
//               >
//                 <Mail size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 font-courgette border-t border-indigo-800 text-center text-indigo-200">
//         <p>&copy; {new Date().getFullYear()} DenimLoom. All rights reserved.</p>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Mail, LinkedinIcon } from 'lucide-react';

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

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo / Info */}
          <div>
            <h3 className="text-xl font-lobster mb-4">DenimLoom</h3>
            <p className="text-indigo-200">
              Elevating denim craftsmanship worldwide—your trusted partner in
              premium jeans manufacturing and exports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-courgette mb-4">Quick Links</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
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
