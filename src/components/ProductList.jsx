import React from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ products }) => {
  return (
    <div className="mt-5 mb-10 mr-20 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
