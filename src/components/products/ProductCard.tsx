
import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Added image property
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-xl overflow-hidden m-4 border">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-800">{product.name}</h5>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        {/* <p className="text-xl font-bold text-indigo-600 mt-3">${product.price}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
