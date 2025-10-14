import React from "react";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group flex flex-col h-full w-full"
    >
      {/* Image container with ~4:3 aspect ratio */}
      <div className="relative w-full pt-[75%] sm:pt-[85%] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
          {product.name}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto">
          <span className="text-indigo-600 font-semibold text-sm sm:text-base">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
