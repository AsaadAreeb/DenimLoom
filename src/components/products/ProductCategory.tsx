import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ProductModal from './ProductModal';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[]; // Array of images for the product
  isNew?: boolean;
  category?: string;
}

const allProducts: Record<string, Product[]> = {
  'apparel': [
    { 
      id: '1',
      name: 'T-shirt',
      description: 'Comfortable cotton T-shirt',
      price: 20,
      image: '/api/placeholder/300/300?text=T-shirt+Main',
      images: [
        '/api/placeholder/300/300?text=T-shirt+Main',
        '/api/placeholder/300/300?text=T-shirt+Side',
        '/api/placeholder/300/300?text=T-shirt+Back',
        '/api/placeholder/300/300?text=T-shirt+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '2',
      name: 'Jeans',
      description: 'Stylish denim jeans',
      price: 50,
      image: '/api/placeholder/300/300?text=Jeans+Main',
      images: [
        '/api/placeholder/300/300?text=Jeans+Main',
        '/api/placeholder/300/300?text=Jeans+Side',
        '/api/placeholder/300/300?text=Jeans+Back',
        '/api/placeholder/300/300?text=Jeans+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '3',
      name: 'Jeans (Skinny)',
      description: 'Skinny fit denim jeans',
      price: 60,
      image: '/api/placeholder/300/300?text=Skinny+Jeans+Main',
      images: [
        '/api/placeholder/300/300?text=Skinny+Jeans+Main',
        '/api/placeholder/300/300?text=Skinny+Jeans+Side',
        '/api/placeholder/300/300?text=Skinny+Jeans+Back',
        '/api/placeholder/300/300?text=Skinny+Jeans+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '4',
      name: 'Jeans (Straight)',
      description: 'Straight fit denim jeans',
      price: 55,
      image: '/api/placeholder/300/300?text=Straight+Jeans+Main',
      images: [
        '/api/placeholder/300/300?text=Straight+Jeans+Main',
        '/api/placeholder/300/300?text=Straight+Jeans+Side',
        '/api/placeholder/300/300?text=Straight+Jeans+Back',
        '/api/placeholder/300/300?text=Straight+Jeans+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '5',
      name: 'Jeans (Bootcut)',
      description: 'Bootcut denim jeans',
      price: 65,
      image: '/api/placeholder/300/300?text=Bootcut+Jeans+Main',
      images: [
        '/api/placeholder/300/300?text=Bootcut+Jeans+Main',
        '/api/placeholder/300/300?text=Bootcut+Jeans+Side',
        '/api/placeholder/300/300?text=Bootcut+Jeans+Back',
        '/api/placeholder/300/300?text=Bootcut+Jeans+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '6',
      name: 'Jeans (Relaxed)',
      description: 'Relaxed fit denim jeans',
      price: 50,
      image: '/api/placeholder/300/300?text=Relaxed+Jeans+Main',
      images: [
        '/api/placeholder/300/300?text=Relaxed+Jeans+Main',
        '/api/placeholder/300/300?text=Relaxed+Jeans+Side',
        '/api/placeholder/300/300?text=Relaxed+Jeans+Back',
        '/api/placeholder/300/300?text=Relaxed+Jeans+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '7',
      name: 'Denim Jackets',
      description: 'Stylish denim jackets',
      price: 70,
      image: '/api/placeholder/300/300?text=Denim+Jacket+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Jacket+Main',
        '/api/placeholder/300/300?text=Denim+Jacket+Side',
        '/api/placeholder/300/300?text=Denim+Jacket+Back',
        '/api/placeholder/300/300?text=Denim+Jacket+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '8',
      name: 'Denim Shirts',
      description: 'Comfortable denim shirts',
      price: 45,
      image: '/api/placeholder/300/300?text=Denim+Shirt+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Shirt+Main',
        '/api/placeholder/300/300?text=Denim+Shirt+Side',
        '/api/placeholder/300/300?text=Denim+Shirt+Back',
        '/api/placeholder/300/300?text=Denim+Shirt+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '9',
      name: 'Denim Skirts',
      description: 'Elegant denim skirts',
      price: 40,
      image: '/api/placeholder/300/300?text=Denim+Skirt+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Skirt+Main',
        '/api/placeholder/300/300?text=Denim+Skirt+Side',
        '/api/placeholder/300/300?text=Denim+Skirt+Back',
        '/api/placeholder/300/300?text=Denim+Skirt+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '10',
      name: 'Overalls and Dungarees',
      description: 'Trendy overalls and dungarees',
      price: 75,
      image: '/api/placeholder/300/300?text=Overalls+Main',
      images: [
        '/api/placeholder/300/300?text=Overalls+Main',
        '/api/placeholder/300/300?text=Overalls+Side',
        '/api/placeholder/300/300?text=Overalls+Back',
        '/api/placeholder/300/300?text=Overalls+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '11',
      name: 'Denim Dresses',
      description: 'Chic denim dresses',
      price: 80,
      image: '/api/placeholder/300/300?text=Denim+Dress+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Dress+Main',
        '/api/placeholder/300/300?text=Denim+Dress+Side',
        '/api/placeholder/300/300?text=Denim+Dress+Back',
        '/api/placeholder/300/300?text=Denim+Dress+Detail'
      ],
      category: 'apparel'
    },
    {
      id: '12',
      name: 'Denim Shorts',
      description: 'Casual denim shorts',
      price: 35,
      image: '/api/placeholder/300/300?text=Denim+Shorts+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Shorts+Main',
        '/api/placeholder/300/300?text=Denim+Shorts+Side',
        '/api/placeholder/300/300?text=Denim+Shorts+Back',
        '/api/placeholder/300/300?text=Denim+Shorts+Detail'
      ],
      category: 'apparel'
    }
  ],
  'accessories': [
    {
      id: '13',
      name: 'Belt',
      description: 'Leather belt',
      price: 15,
      image: '/api/placeholder/300/300?text=Belt+Main',
      images: [
        '/api/placeholder/300/300?text=Belt+Main',
        '/api/placeholder/300/300?text=Belt+Side',
        '/api/placeholder/300/300?text=Belt+Back',
        '/api/placeholder/300/300?text=Belt+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '14',
      name: 'Hat',
      description: 'Stylish hat',
      price: 25,
      image: '/api/placeholder/300/300?text=Hat+Main',
      images: [
        '/api/placeholder/300/300?text=Hat+Main',
        '/api/placeholder/300/300?text=Hat+Side',
        '/api/placeholder/300/300?text=Hat+Back',
        '/api/placeholder/300/300?text=Hat+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '15',
      name: 'Denim Tote Bags',
      description: 'Durable denim tote bags',
      price: 30,
      image: '/api/placeholder/300/300?text=Tote+Bag+Main',
      images: [
        '/api/placeholder/300/300?text=Tote+Bag+Main',
        '/api/placeholder/300/300?text=Tote+Bag+Side',
        '/api/placeholder/300/300?text=Tote+Bag+Back',
        '/api/placeholder/300/300?text=Tote+Bag+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '16',
      name: 'Denim Backpacks',
      description: 'Trendy denim backpacks',
      price: 50,
      image: '/api/placeholder/300/300?text=Backpack+Main',
      images: [
        '/api/placeholder/300/300?text=Backpack+Main',
        '/api/placeholder/300/300?text=Backpack+Side',
        '/api/placeholder/300/300?text=Backpack+Back',
        '/api/placeholder/300/300?text=Backpack+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '17',
      name: 'Hats and Caps',
      description: 'Fashionable denim hats and caps',
      price: 20,
      image: '/api/placeholder/300/300?text=Denim+Hat+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Hat+Main',
        '/api/placeholder/300/300?text=Denim+Hat+Side',
        '/api/placeholder/300/300?text=Denim+Hat+Back',
        '/api/placeholder/300/300?text=Denim+Hat+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '18',
      name: 'Denim Belts',
      description: 'Stylish denim belts',
      price: 25,
      image: '/api/placeholder/300/300?text=Denim+Belt+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Belt+Main',
        '/api/placeholder/300/300?text=Denim+Belt+Side',
        '/api/placeholder/300/300?text=Denim+Belt+Back',
        '/api/placeholder/300/300?text=Denim+Belt+Detail'
      ],
      category: 'accessories'
    },
    {
      id: '19',
      name: 'Wallets and Pouches',
      description: 'Compact wallets and pouches',
      price: 15,
      image: '/api/placeholder/300/300?text=Wallet+Main',
      images: [
        '/api/placeholder/300/300?text=Wallet+Main',
        '/api/placeholder/300/300?text=Wallet+Side',
        '/api/placeholder/300/300?text=Wallet+Back',
        '/api/placeholder/300/300?text=Wallet+Detail'
      ],
      category: 'accessories'
    }
  ],
  'footwear': [
    {
      id: '20',
      name: 'Denim Sneakers',
      description: 'Comfortable denim sneakers',
      price: 65,
      image: '/api/placeholder/300/300?text=Denim+Sneakers+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Sneakers+Main',
        '/api/placeholder/300/300?text=Denim+Sneakers+Side',
        '/api/placeholder/300/300?text=Denim+Sneakers+Back',
        '/api/placeholder/300/300?text=Denim+Sneakers+Detail'
      ],
      category: 'footwear'
    },
    {
      id: '21',
      name: 'Denim Boots',
      description: 'Stylish denim boots',
      price: 90,
      image: '/api/placeholder/300/300?text=Denim+Boots+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Boots+Main',
        '/api/placeholder/300/300?text=Denim+Boots+Side',
        '/api/placeholder/300/300?text=Denim+Boots+Back',
        '/api/placeholder/300/300?text=Denim+Boots+Detail'
      ],
      category: 'footwear'
    },
    {
      id: '22',
      name: 'Sandals with Denim Accents',
      description: 'Casual sandals with denim accents',
      price: 40,
      image: '/api/placeholder/300/300?text=Denim+Sandals+Main',
      images: [
        '/api/placeholder/300/300?text=Denim+Sandals+Main',
        '/api/placeholder/300/300?text=Denim+Sandals+Side',
        '/api/placeholder/300/300?text=Denim+Sandals+Back',
        '/api/placeholder/300/300?text=Denim+Sandals+Detail'
      ],
      category: 'footwear'
    }
  ],
  'home-and-lifestyle': [
    {
      id: '23',
      name: 'Denim Cushion Covers',
      description: 'Decorative denim cushion covers',
      price: 30,
      image: '/api/placeholder/300/300?text=Cushion+Cover+Main',
      images: [
        '/api/placeholder/300/300?text=Cushion+Cover+Main',
        '/api/placeholder/300/300?text=Cushion+Cover+Side',
        '/api/placeholder/300/300?text=Cushion+Cover+Back',
        '/api/placeholder/300/300?text=Cushion+Cover+Detail'
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '24',
      name: 'Denim Table Runners',
      description: 'Elegant denim table runners',
      price: 25,
      image: '/api/placeholder/300/300?text=Table+Runners+Main',
      images: [
        '/api/placeholder/300/300?text=Table+Runners+Main',
        '/api/placeholder/300/300?text=Table+Runners+Side',
        '/api/placeholder/300/300?text=Table+Runners+Back',
        '/api/placeholder/300/300?text=Table+Runners+Detail'
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '25',
      name: 'Denim Aprons',
      description: 'Durable denim aprons',
      price: 35,
      image: '/api/placeholder/300/300?text=Aprons+Main',
      images: [
        '/api/placeholder/300/300?text=Aprons+Main',
        '/api/placeholder/300/300?text=Aprons+Side',
        '/api/placeholder/300/300?text=Aprons+Back',
        '/api/placeholder/300/300?text=Aprons+Detail'
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '26',
      name: 'Upcycled Denim Rugs',
      description: 'Eco-friendly upcycled denim rugs',
      price: 50,
      image: '/api/placeholder/300/300?text=Rugs+Main',
      images: [
        '/api/placeholder/300/300?text=Rugs+Main',
        '/api/placeholder/300/300?text=Rugs+Side',
        '/api/placeholder/300/300?text=Rugs+Back',
        '/api/placeholder/300/300?text=Rugs+Detail'
      ],
      category: 'home-and-lifestyle'
    }
  ],
  
  'custom-and-sustainable': [
    {
      id: '27',
      name: 'Patchwork Jeans and Jackets',
      description: 'Unique patchwork denim products',
      price: 100,
      image: '/api/placeholder/300/300?text=Patchwork+Main',
      images: [
        '/api/placeholder/300/300?text=Patchwork+Main',
        '/api/placeholder/300/300?text=Patchwork+Side',
        '/api/placeholder/300/300?text=Patchwork+Back',
        '/api/placeholder/300/300?text=Patchwork+Detail'
      ],
      category: 'custom-and-sustainable'
    },
    {
      id: '28',
      name: 'Recycled Denim Products',
      description: 'Environmentally friendly recycled denim items',
      price: 75,
      image: '/api/placeholder/300/300?text=Recycled+Main',
      images: [
        '/api/placeholder/300/300?text=Recycled+Main',
        '/api/placeholder/300/300?text=Recycled+Side',
        '/api/placeholder/300/300?text=Recycled+Back',
        '/api/placeholder/300/300?text=Recycled+Detail'
      ],
      category: 'custom-and-sustainable'
    },
    {
      id: '29',
      name: 'Distressed and Vintage-Style Denim',
      description: 'Trendy distressed and vintage-style denim',
      price: 80,
      image: '/api/placeholder/300/300?text=Vintage+Main',
      images: [
        '/api/placeholder/300/300?text=Vintage+Main',
        '/api/placeholder/300/300?text=Vintage+Side',
        '/api/placeholder/300/300?text=Vintage+Back',
        '/api/placeholder/300/300?text=Vintage+Detail'
      ],
      category: 'custom-and-sustainable'
    },
    {
      id: '30',
      name: 'Hand-Painted or Embroidered Denim',
      description: 'Artistic hand-painted or embroidered denim',
      price: 120,
      image: '/api/placeholder/300/300?text=Painted+Main',
      images: [
        '/api/placeholder/300/300?text=Painted+Main',
        '/api/placeholder/300/300?text=Painted+Side',
        '/api/placeholder/300/300?text=Painted+Back',
        '/api/placeholder/300/300?text=Painted+Detail'
      ],
      category: 'custom-and-sustainable'
    }
  ]
}  

const ProductCategory = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { category } = useParams<{ category?: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('All Products');
  const productsPerPage = 6; // 3 cards per row, 2 rows

  if (!category) {
    return <p>No category selected</p>;
  }

  const categoryProducts = allProducts[category] || [];

  const filters: Record<string, string[]> = {
    'apparel': ['Jeans', 'Jackets', 'Skirts', 'Shirts', 'Dresses', 'Shorts'],
    'accessories': ['Tote Bags', 'Backpacks', 'Hats & Caps', 'Belts', 'Wallets & Pouches'],
    'footwear': ['Sneakers', 'Boots', 'Sandals'],
    'home-and-lifestyle': ['Cushion Covers', 'Table Runners', 'Aprons', 'Rugs'],
    'custom-and-sustainable': ['Patchwork Jeans and Jackets', 'Recycled Denim Products', 'Distressed and Vintage-Style Denim', 'Hand-Painted or Embroidered Denim'],
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  

  const filteredProducts = selectedFilter === 'All Products'
    ? categoryProducts
    : categoryProducts.filter((product) => product.name.toLowerCase().includes(selectedFilter.toLowerCase()));

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsToShow = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
     {/* Introductory Section */}
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
            <p className="text-xl max-w-2xl">
              Discover our premium collection of {category} products.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Products in {category} category
        </motion.h1> */}

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6 flex-wrap gap-2 sm:gap-4">
  <button
    onClick={() => setSelectedFilter('All Products')}
    className={`px-3 py-1.5 text-sm rounded-lg font-semibold transition-colors duration-300 ${
      selectedFilter === 'All Products'
        ? 'bg-indigo-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white'
    }`}
  >
    All Products
  </button>
  {filters[category]?.map((filter: string) => (
    <button
      key={filter}
      onClick={() => setSelectedFilter(filter)}
      className={`px-3 py-1.5 text-sm rounded-lg font-semibold transition-colors duration-300 ${
        selectedFilter === filter
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white'
      }`}
    >
      {filter}
    </button>
  ))}
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsToShow.length > 0 ? (
            productsToShow.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200" // Added cursor-pointer and hover effect
                onClick={() => handleProductClick(product)} // Added onClick handler
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.isNew && <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs">New</span>}
                </div>
              </motion.div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <ProductModal 
  product={selectedProduct}
  isOpen={!!selectedProduct}
  onClose={handleCloseModal}
/>
    </motion.section>
    </>
  );
};

export default ProductCategory;


