'use client';

import { IProductDetail } from '@/types/Product';
import ProductButtons from './ProductButtons';
import SellingOption from './SellingOption';
import TotalPrice from './TotalPrice';

interface Props {
  product: IProductDetail;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductOptions({ product, count, setCount }: Props) {
  return (
    <div>
      {/* <div>
        <span className="font-semibold">옵션 선택</span>
      </div> */}
      <div>
        <SellingOption name={product.name} sale={product.sale} count={count} setCount={setCount} />
      </div>
      <div className="mt-6">
        <TotalPrice sale={product.sale} count={count} />
      </div>
      <div className="mt-6">
        <ProductButtons />
      </div>
    </div>
  );
}
