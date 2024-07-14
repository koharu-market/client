'use client';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import SideBar from './SideBar';

export default function Cart() {
  const { products: cartProducts } = useCartStore();

  return (
    <div className="flex gap-4 h-[2000px]">
      <div className="flex-1">
        <ul>
          {cartProducts.map((product, index) => (
            <li key={index}>
              <article className="pl-10 py-4 relative">
                <div className="absolute top-3 left-3">
                  <input type="checkbox" />
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image src={product.images[0]} alt={product.name} width={100} height={100} />
                  </div>
                  <div className="flex-1">
                    <h3>{product.name}</h3>
                  </div>
                </div>
                <div>
                  <div>
                    <span>수량</span>
                    <input type="number" value={product.count} />
                  </div>
                  <div>
                    <span>가격</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      {/* sidebar */}
      <div className="pt-10">
        <div className="sticky top-28">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
