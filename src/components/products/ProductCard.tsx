import React from "react";
import {Product} from '../../types/product';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border group h-full flex flex-col">
    <div className="relative">
      <img 
        src={product.image}
        alt={product.name} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      {product.isNew && (
        <span className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          New
        </span>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {product.name}
      </h5>

      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
        {product.description}
      </p>

      <div className="mt-auto">
        <span className="text-indigo-600 font-medium text-sm">
          View Details →
        </span>
      </div>
    </div>
  </div>

  );
};

export default ProductCard;