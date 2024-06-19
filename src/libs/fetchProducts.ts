import { Product } from '@/types/product';

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  // console.log(data)
  const products = data.products;
  return products;
};

export default fetchProducts;