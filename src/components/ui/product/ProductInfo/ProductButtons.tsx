'use client';

import { useCartStore } from '@/store/useCartStore';
import { IProductDetail } from '@/types/Product';
import { useRouter } from 'next/navigation';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

interface Props {
  product: IProductDetail;
  count: number;
}

export default function ProductButtons({ product, count }: Props) {
  const { addProductToCart } = useCartStore();

  const router = useRouter();
  const addToCart = () => {
    addProductToCart(product, count);
  };
  return (
    <div className="flex justify-between gap-3">
      <button className="text-white font-semibold text-lg text-center bg-gray-900 py-4 flex-1 rounded-md">
        바로 구매
      </button>
      <button
        className="flex justify-center items-center w-[60px] h-[60px] text-3xl rounded-md border"
        onClick={addToCart}
      >
        <BsCart2 />
      </button>
      <button className="flex justify-center items-center w-[60px] h-[60px] text-3xl rounded-md border">
        <IoMdHeartEmpty />
      </button>
    </div>
  );
}
