import Card from '@/components/ui/Card';
import { products } from '@/data/products';

export default function Page() {
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
