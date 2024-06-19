import { Product } from '@/types/product';
import ProductComponent from '@/components/Product';
import fetchProducts from '@/libs/fetchProducts';

const Home = async () => {
  const products: Product[] = await fetchProducts();
  return (
    <div className="container mx-auto p-4">
      <main>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductComponent products={products} />
      </main>
    </div>
  );
};

export default Home;