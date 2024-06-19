import React from 'react';
import { Product } from '@/types/product';

type ProductProps = {
  products: Product[];
};

const ProductComponent: React.FC<ProductProps> = ({ products }) => {
  // log products from api
  // console.log(products)
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg bg-white shadow-md">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
          <h3 className="mt-4 font-semibold text-lg">{product.title}</h3>
          <p className="text-gray-400">{product.description}</p>
          <div className="flex items-center">
            <span className="text-orange-500">{renderRatingStars(product.rating)}</span>
          </div>
          {
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
          }
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;