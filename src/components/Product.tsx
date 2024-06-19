import React from 'react';
import { Product } from '@/types/product';
import { FaHeart } from 'react-icons/fa';

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
        <div key={product.id} className="border p-4 rounded-lg bg-white shadow-md relative flex flex-col">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
          <div className="flex-grow">
            {/* <h3 className="mt-4 font-semibold text-lg">{product.title}</h3> */}
            <p className="mt-4 text-gray-400">{product.description}</p>
            <div className="flex items-center">
              <span className="mt-2 text-orange-500">{renderRatingStars(product.rating)}</span>
            </div>
            {product.discountPercentage > 0 ? (
              <div className="text-red-600">
                <span className="text-lg font-bold">${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</span>
                <span className="line-through ml-2 text-gray-400">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <p className="text-gray-400">${product.price.toFixed(2)}</p>
            )}
          </div>
          <div className="mt-4 mb-4 text-gray-200 hover:text-pink-500 transition-colors">
            <FaHeart size={24} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;