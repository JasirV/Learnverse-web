import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-700 mt-1">{product.description}</p>
        <p className="font-bold text-xl mt-2">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
