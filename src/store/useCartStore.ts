import { IProductDetail } from '@/types/Product';
import { create } from 'zustand';

interface Product extends IProductDetail {
  count: number;
}

type Store = {
  products: Product[];
  addProductToCart: (product: IProductDetail, count: number) => void;
};

export const useCartStore = create<Store>((set) => ({
  products: [],
  addProductToCart: (product, count) =>
    set((state) => {
      // 해당 제품이 이미 장바구니에 있는지 확인
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        // 이미 있는 제품이면 수량을 추가
        return {
          products: state.products.map((p) => (p.id === product.id ? { ...p, count: p.count + count } : p)),
        };
      } else {
        // 없는 제품이면 새로 추가
        return {
          products: [...state.products, { ...product, count }],
        };
      }
    }),
}));
