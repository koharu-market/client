import ProductDetail from '@/components/ui/product/ProductDetail';
import ProductInfo from '@/components/ui/product/ProductInfo';
import { product } from '@/data/products';

interface Props {
  params: {
    productId: string;
  };
}

export default function Page({ params }: Props) {
  const { productId } = params;
  // const product = await getProduct(productId);

  if (!product) return <div>해당 상품이 없습니다.</div>;
  return (
    <div className="container">
      <ProductInfo product={product} />
      <ProductDetail product={product} />
    </div>
  );
}
