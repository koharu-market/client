'use client';

import { IProductDetail } from '@/types/Product';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
// import PurchaseInfo from './PurchaseInfo';
import { useCallback, useState } from 'react';

import { TABS } from '@/constants/tabs';
import ProductTab from './ProductTab';
import ProductOptions from './ProductOptions';

interface Props {
  product: IProductDetail;
}

export default function ProductInfo({ product }: Props) {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className="md:flex">
        <div className="md:w-6/12">
          <div className="md:mr-14">
            <ProductImage images={product.images} name={product.name} />
          </div>
        </div>
        <div className="md:flex-1 md:mt-0 mt-5">
          <div className="mt-2">
            <ProductDetails product={product} />
          </div>
          <div className="mt-10 hidden md:block">
            <ProductOptions product={product} count={count} setCount={setCount} />
          </div>
        </div>
      </div>
      {/* tab */}
      <div className="sticky md:top-24 top-[60px] mt-14 bg-white md:border-b-0 border-b">
        <nav>
          <ul className="flex md:text-xl text-sm font-medium tracking-wider justify-between text-center">
            {TABS.map((tab, index) => (
              <ProductTab key={index} item={tab} index={index} reviewCount={product.reviewCount} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
