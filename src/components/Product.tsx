import React from 'react';
import { Product } from '@/types/product';

type ProductProps = {
  products: Product[];
};

const ProductComponent: React.FC<ProductProps> = ({ products }) => {
  // log products from api
  // console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg bg-white shadow-md">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
          <h3 className="mt-4 font-semibold text-lg">{product.title}</h3>
          <p className="text-gray-500">${product.price.toFixed(2)}</p>
          <p className="text-gray-400">{product.description}</p>
          <p className="text-gray-600">Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;