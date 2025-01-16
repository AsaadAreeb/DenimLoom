


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const mainProducts = [
//   { id: 'apparel', title: 'Apparel', description: 'Top-quality denim for every style.', image: '/process_svg/apparel.avif' },
//   { id: 'accessories', title: 'Accessories', description: 'Durable and stylish tote bags.', image: 'public/process_svg/accessories.jpg' },
//   { id: 'footwear', title: 'Footwear', description: 'Belts that complete any outfit.', image: '/process_svg/footwear.avif' },
//   { id: 'home-and-lifestyle', title: 'Home and Lifestyle Products', description: 'Perfect jackets for all seasons.', image: '/process_svg/home_and_lifestyle.avif' },
//   { id: 'custom-and-sustainable', title: 'Custom & Sustainable Products', description: 'Jeans that fit like a dream.', image: '/process_svg/custom_and_sustainable.avif' },
// ];

// const Products = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (categoryId : string) => {
//     navigate(`/products/${categoryId}`);
//   };

//   return (
//     <div>
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 50 }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <h1 className="text-4xl font-bold mb-6">Our Products</h1>
//             <p className="text-xl max-w-2xl">
//               Discover our premium collection of denim products
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Our Main Products Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="py-20 bg-gray-100"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {mainProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleCardClick(product.id)}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//                 <p className="text-gray-600">{product.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Products;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const mainProducts = [
  { id: 'apparel', title: 'Apparel', description: 'Top-quality denim for every style.', image: '/process_svg/apparel.avif' },
  { id: 'accessories', title: 'Accessories', description: 'Durable and stylish tote bags.', image: '/process_svg/accessories.jpg' },
  { id: 'footwear', title: 'Footwear', description: 'Belts that complete any outfit.', image: '/process_svg/footwear.avif' },
  { id: 'home-and-lifestyle', title: 'Home and Lifestyle Products', description: 'Perfect jackets for all seasons.', image: '/process_svg/home_and_lifestyle.avif' },
  { id: 'custom-and-sustainable', title: 'Custom & Sustainable Products', description: 'Jeans that fit like a dream.', image: '/process_svg/custom_and_sustainable.avif' },
];

const Products = () => {
  const navigate = useNavigate();

   const handleCardClick = (categoryId : string) => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <div>
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
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-2xl">Discover our premium collection of denim products</p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Main Products Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;