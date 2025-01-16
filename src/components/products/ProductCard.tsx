import React from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;


